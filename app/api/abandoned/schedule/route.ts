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

  const results = await schedulePushSequence(
    { subscriptionIds: [oneSignalId] },
    abandonedDrip(siteConfig.url)
  );

  return NextResponse.json({ ok: true, scheduled: results });
}
