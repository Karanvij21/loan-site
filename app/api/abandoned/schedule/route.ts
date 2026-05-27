/**
 * Schedule the abandoned-application push drip.
 *
 * Called by the client when the visitor completes Step 1 of the apply form
 * (they've shown intent + given push permission). We schedule all three
 * follow-up pushes immediately via OneSignal's send_after — OneSignal owns
 * the timing, no cron or queue infrastructure needed on our side.
 *
 * If the visitor later submits the lead, /api/lead fires the submitted
 * drip which supersedes these messages by content. (OneSignal doesn't let
 * us cancel without notification IDs, which we'd have to persist —
 * acceptable trade-off for now since the abandoned messages still nudge
 * back to the resume URL.)
 */

import { NextResponse } from "next/server";
import { schedulePushSequence, abandonedDrip } from "@/lib/onesignal";
import { recordScheduledPushes, cancelPendingPushes } from "@/lib/supabase";
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

  // User has now started the form, so cancel any never-started drip pushes.
  const cancelResult = await cancelPendingPushes(oneSignalId, ["never_started"]);

  const drip = abandonedDrip(siteConfig.url);
  const results = await schedulePushSequence({ subscriptionIds: [oneSignalId] }, drip);

  // Persist notification IDs so /api/lead can cancel them on submission.
  const now = Date.now();
  await recordScheduledPushes(
    oneSignalId,
    drip.map((step, i) => ({
      result: results[i],
      stage: String(step.data?.stage ?? `abandoned_step_${i}`),
      sendAfter: new Date(now + step.afterMinutes * 60 * 1000),
    }))
  );

  return NextResponse.json({
    ok: true,
    scheduled: results,
    cancelled_never_started: cancelResult,
  });
}
