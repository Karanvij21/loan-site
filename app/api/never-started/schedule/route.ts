/**
 * Schedule the "never started the form" drip.
 *
 * Called by the homepage push-prompt component when a visitor grants push
 * permission BEFORE clicking through to /apply. They've shown enough intent
 * to subscribe but haven't entered the funnel yet.
 *
 * Cancelled by /api/abandoned/schedule (they later started) and /api/lead
 * (they later submitted).
 */

import { NextResponse } from "next/server";
import { schedulePushSequence, neverStartedDrip } from "@/lib/onesignal";
import { recordScheduledPushes } from "@/lib/supabase";
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

  const oneSignalId =
    body && typeof body === "object" && "oneSignalId" in body
      ? String((body as { oneSignalId?: unknown }).oneSignalId || "")
      : "";

  if (!oneSignalId) {
    return NextResponse.json({ ok: false, skipped: true, reason: "no oneSignalId" });
  }

  const drip = neverStartedDrip(siteConfig.url);
  const results = await schedulePushSequence({ subscriptionIds: [oneSignalId] }, drip);

  const now = Date.now();
  await recordScheduledPushes(
    oneSignalId,
    drip.map((step, i) => ({
      result: results[i],
      stage: String(step.data?.stage ?? `never_started_step_${i}`),
      sendAfter: new Date(now + step.afterMinutes * 60 * 1000),
    }))
  );

  return NextResponse.json({ ok: true, scheduled: results });
}
