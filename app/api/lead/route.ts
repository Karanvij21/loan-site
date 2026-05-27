import { NextResponse } from "next/server";
import { fullApplicationSchema } from "@/lib/schema";
import { getSupabaseAdmin } from "@/lib/supabase";
import { forwardToLendingTree } from "@/lib/lendingtree";
import { sendApplicationConfirmation } from "@/lib/email";
import { sendPush } from "@/lib/onesignal";
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

  // 3. Email confirmation (best-effort)
  await sendApplicationConfirmation(data.email, data.firstName, data.amount);

  // 4. Server-side push confirmation (best-effort; only if user is subscribed)
  let pushResult:
    | Awaited<ReturnType<typeof sendPush>>
    | { ok: false; skipped: true; reason: string } = {
    ok: false,
    skipped: true,
    reason: "no oneSignalId",
  };
  if (oneSignalId) {
    pushResult = await sendPush(
      { subscriptionIds: [oneSignalId] },
      {
        title: "Request received",
        body: "Lenders are reviewing your request. Watch your email for offers.",
        url: `${siteConfig.url}/apply/success`,
        data: { leadId, type: "lead_confirmation" },
      }
    );
  }

  return NextResponse.json({
    ok: true,
    leadId: leadId ?? lt.leadId,
    lendingTree: { ok: lt.ok, leadId: lt.leadId, error: lt.error },
    push: pushResult,
  });
}
