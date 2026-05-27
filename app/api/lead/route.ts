import { NextResponse } from "next/server";
import { fullApplicationSchema } from "@/lib/schema";
import { getSupabaseAdmin, recordScheduledPushes, cancelPendingPushes } from "@/lib/supabase";
import { forwardToLendingTree } from "@/lib/lendingtree";
import { sendApplicationConfirmation } from "@/lib/email";
import { schedulePushSequence, submittedDrip } from "@/lib/onesignal";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = fullApplicationSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }
  const data = parsed.data;

  // Optional fields not in the Zod schema — read defensively
  const oneSignalId =
    body && typeof body === "object" && "oneSignalId" in body
      ? String((body as { oneSignalId?: unknown }).oneSignalId || "")
      : "";

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  const userAgent = req.headers.get("user-agent");
  const referrer = req.headers.get("referer");
  const meta = { ip, userAgent, referrer };

  // 1. Persist lead (best-effort; if Supabase not configured, skip silently)
  const supabase = getSupabaseAdmin();
  let leadId: string | undefined;
  if (supabase) {
    const { data: row, error } = await supabase
      .from("leads")
      .insert({
        amount: data.amount,
        purpose: data.purpose,
        credit_rating: data.creditRating,
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        dob: data.dob,
        ssn_last_4: data.ssnLast4,
        street: data.street,
        city: data.city,
        state: data.state,
        zip: data.zip,
        employment_status: data.employmentStatus,
        employer_name: data.employerName,
        monthly_income: data.monthlyIncome,
        pay_frequency: data.payFrequency,
        next_pay_date: data.nextPayDate,
        has_bank_account: data.hasBankAccount,
        direct_deposit: data.directDeposit,
        tcpa_consent: data.tcpaConsent,
        ec_consent: data.ecConsent,
        consent_timestamp: new Date().toISOString(),
        ip,
        user_agent: userAgent,
        referrer,
      })
      .select("id")
      .single();
    if (!error) leadId = row?.id;
  }

  // 2. Forward to LendingTree (mocked until creds configured)
  const lt = await forwardToLendingTree(data, meta);

  // Persist the forwarding outcome on the lead row so the admin dashboard
  // can show forward status without re-fetching from LendingTree.
  if (supabase && leadId) {
    await supabase
      .from("leads")
      .update({
        lendingtree_lead_id: lt.leadId ?? null,
        forwarded_at: lt.ok ? new Date().toISOString() : null,
      })
      .eq("id", leadId);
  }

  // 3. Email confirmation (best-effort)
  const emailResult = await sendApplicationConfirmation(data.email, data.firstName, data.amount);
  if (supabase && leadId) {
    await supabase
      .from("leads")
      .update({ email_sent_at: emailResult.ok ? new Date().toISOString() : null })
      .eq("id", leadId);
  }

  // 4. Server-side push drip (best-effort; only if user is subscribed).
  //    Cancel any pending abandoned/never-started pushes first — the user
  //    converted, those messages would be wrong/embarrassing now.
  //    Then fire the submitted drip: +0 confirmation + 3 scheduled
  //    follow-ups via OneSignal's send_after.
  type PushResults = Awaited<ReturnType<typeof schedulePushSequence>>;
  let pushResults: PushResults | { ok: false; skipped: true; reason: string } = {
    ok: false,
    skipped: true,
    reason: "no oneSignalId",
  };
  let cancelResult: Awaited<ReturnType<typeof cancelPendingPushes>> | null = null;
  if (oneSignalId) {
    cancelResult = await cancelPendingPushes(oneSignalId, ["abandoned", "never_started"]);
    const drip = submittedDrip(siteConfig.url, { leadId });
    const results: PushResults = await schedulePushSequence({ subscriptionIds: [oneSignalId] }, drip);
    pushResults = results;
    const now = Date.now();
    await recordScheduledPushes(
      oneSignalId,
      drip.map((step, i) => ({
        result: results[i],
        stage: String(step.data?.stage ?? `submitted_step_${i}`),
        sendAfter: step.afterMinutes > 0 ? new Date(now + step.afterMinutes * 60 * 1000) : undefined,
      }))
    );
  }

  return NextResponse.json({
    ok: true,
    leadId: leadId ?? lt.leadId,
    lendingTree: { ok: lt.ok, leadId: lt.leadId, error: lt.error },
    push: pushResults,
    cancelled: cancelResult,
  });
}
