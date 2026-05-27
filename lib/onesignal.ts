/**
 * OneSignal REST API client (server-side).
 *
 * Used to fire targeted pushes from API routes immediately after events
 * (e.g., a confirmation push right after a lead is saved to Supabase).
 *
 * Auth: OneSignal v16 uses `Authorization: Key <REST_API_KEY>`. Set
 * ONESIGNAL_REST_API_KEY in env (sensitive, server-only — NEVER expose).
 *
 * Notification shape: https://documentation.onesignal.com/reference/create-notification
 */

const ONESIGNAL_API = "https://api.onesignal.com/notifications";

const APP_ID = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID;
const REST_KEY = process.env.ONESIGNAL_REST_API_KEY;

/** Cancel a scheduled OneSignal notification by ID. */
export async function cancelNotification(notificationId: string): Promise<{ ok: boolean; error?: string }> {
  if (!APP_ID || !REST_KEY || !notificationId) return { ok: false, error: "missing config or id" };
  try {
    const res = await fetch(`${ONESIGNAL_API}/${notificationId}?app_id=${APP_ID}`, {
      method: "DELETE",
      headers: { Authorization: `Key ${REST_KEY}` },
    });
    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      return { ok: false, error: `${res.status} ${txt}`.trim() };
    }
    return { ok: true };
  } catch (e: unknown) {
    return { ok: false, error: e instanceof Error ? e.message : "Network error" };
  }
}

export type PushOptions = {
  title: string;
  body: string;
  /** Launch URL when the user clicks the push. */
  url?: string;
  /** Arbitrary key/value sent in the push payload — readable in OneSignal handlers. */
  data?: Record<string, unknown>;
  /** Schedule delivery for a future time. Accepts a Date or ISO 8601 string.
   *  If omitted, the push fires immediately. */
  sendAt?: Date | string;
};

export type PushTarget =
  | { subscriptionIds: string[] }
  | { externalIds: string[] }
  | { tagFilters: Array<{ key: string; value: string }> };

export type PushResult =
  | { ok: true; id: string; recipients: number }
  | { ok: false; skipped: true; reason: string }
  | { ok: false; error: string; status?: number };

export async function sendPush(target: PushTarget, opts: PushOptions): Promise<PushResult> {
  if (!APP_ID) return { ok: false, skipped: true, reason: "NEXT_PUBLIC_ONESIGNAL_APP_ID not set" };
  if (!REST_KEY) return { ok: false, skipped: true, reason: "ONESIGNAL_REST_API_KEY not set" };

  const body: Record<string, unknown> = {
    app_id: APP_ID,
    headings: { en: opts.title },
    contents: { en: opts.body },
  };
  if (opts.url) body.url = opts.url;
  if (opts.data) body.data = opts.data;
  if (opts.sendAt) {
    // OneSignal accepts ISO 8601 with timezone for send_after.
    const iso = typeof opts.sendAt === "string" ? opts.sendAt : opts.sendAt.toISOString();
    body.send_after = iso;
  }

  if ("subscriptionIds" in target) {
    if (!target.subscriptionIds.length) return { ok: false, skipped: true, reason: "no subscriptionIds" };
    body.include_subscription_ids = target.subscriptionIds;
  } else if ("externalIds" in target) {
    if (!target.externalIds.length) return { ok: false, skipped: true, reason: "no externalIds" };
    body.include_aliases = { external_id: target.externalIds };
    body.target_channel = "push";
  } else if ("tagFilters" in target) {
    body.filters = target.tagFilters.flatMap((t, i) => {
      const filter = { field: "tag", key: t.key, relation: "=", value: t.value };
      return i === 0 ? [filter] : [{ operator: "AND" }, filter];
    });
  }

  try {
    const res = await fetch(ONESIGNAL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Key ${REST_KEY}`,
      },
      body: JSON.stringify(body),
    });

    const json = await res.json().catch(() => ({} as { id?: string; recipients?: number; errors?: unknown }));
    if (!res.ok) {
      return {
        ok: false,
        status: res.status,
        error: typeof json.errors === "string" ? json.errors : JSON.stringify(json.errors ?? json),
      };
    }
    return {
      ok: true,
      id: json.id ?? "",
      recipients: typeof json.recipients === "number" ? json.recipients : 0,
    };
  } catch (e: unknown) {
    return { ok: false, error: e instanceof Error ? e.message : "Network error" };
  }
}

/** Fire a sequence of pushes at relative offsets from `now`.
 *
 *  Each push is scheduled server-side via OneSignal's send_after, so the
 *  delivery is owned by OneSignal — no cron or queue infrastructure needed
 *  on our side.
 *
 *  Returns an array of results. Failures don't short-circuit the sequence.
 */
export async function schedulePushSequence(
  target: PushTarget,
  sequence: Array<{
    afterMinutes: number;
    title: string;
    body: string;
    url?: string;
    data?: Record<string, unknown>;
  }>
): Promise<PushResult[]> {
  const now = Date.now();
  const results: PushResult[] = [];
  for (const step of sequence) {
    const sendAt = step.afterMinutes === 0
      ? undefined
      : new Date(now + step.afterMinutes * 60 * 1000);
    const result = await sendPush(target, {
      title: step.title,
      body: step.body,
      url: step.url,
      data: step.data,
      sendAt,
    });
    results.push(result);
  }
  return results;
}

/* ─────────────────────────────────────────────────────────────
   Drip templates
   ───────────────────────────────────────────────────────────── */

/** Post-submission drip. T+0 fires immediately; rest are scheduled. */
export function submittedDrip(siteUrl: string, opts: { leadId?: string } = {}) {
  return [
    {
      afterMinutes: 0,
      title: "Request received",
      body: "Lenders are reviewing your request. Watch your email for offers.",
      url: `${siteUrl}/apply/success`,
      data: { ...opts, stage: "submitted_t0" },
    },
    {
      afterMinutes: 60, // +1 hour
      title: "Your offers should be in your inbox",
      body: "Lender matches typically respond within an hour. Compare APRs before accepting.",
      url: `${siteUrl}/how-it-works`,
      data: { ...opts, stage: "submitted_t1h" },
    },
    {
      afterMinutes: 60 * 24, // +24 hours
      title: "Check your email for offers",
      body: "Don't miss your lender responses. Open your email to compare offers side by side.",
      url: `${siteUrl}/how-it-works`,
      data: { ...opts, stage: "submitted_t24h" },
    },
    {
      afterMinutes: 60 * 24 * 3, // +3 days
      title: "Need help comparing offers?",
      body: "Our rates and fees guide can help you choose the right lender for your situation.",
      url: `${siteUrl}/rates-and-fees`,
      data: { ...opts, stage: "submitted_t3d" },
    },
  ];
}

/** "Never started the form" drip — for visitors who subscribe from the
 *  homepage but never click through to /apply. All scheduled into the
 *  future. Gets cancelled when /api/abandoned/schedule runs (= they did
 *  start the form) or when /api/lead runs (= they submitted). */
export function neverStartedDrip(siteUrl: string) {
  return [
    {
      afterMinutes: 60 * 24, // +1 day
      title: "Ready to see your loan offers?",
      body: "Two-minute application, soft credit check, no obligation.",
      url: `${siteUrl}/apply`,
      data: { stage: "never_started_t1d" },
    },
    {
      afterMinutes: 60 * 24 * 3, // +3 days
      title: "Personal loans up to $50,000",
      body: "APRs from 5.99%. See your real offers in minutes — no impact to your credit to check.",
      url: `${siteUrl}/apply`,
      data: { stage: "never_started_t3d" },
    },
    {
      afterMinutes: 60 * 24 * 7, // +7 days
      title: "Still thinking about a loan?",
      body: "Compare offers from a network of trusted lenders. Free, no obligation.",
      url: `${siteUrl}/how-it-works`,
      data: { stage: "never_started_t7d" },
    },
  ];
}

/** Abandoned-application drip. All scheduled into the future (no T+0).
 *  Use when a visitor passes Step 1 but doesn't finish — schedule these
 *  immediately and OneSignal owns the timing. */
export function abandonedDrip(siteUrl: string) {
  return [
    {
      afterMinutes: 30,
      title: "Finish your loan request",
      body: "You're 60 seconds away from comparing offers. Pick up where you left off.",
      url: `${siteUrl}/apply?resume=1`,
      data: { stage: "abandoned_t30m" },
    },
    {
      afterMinutes: 60 * 24, // +24 hours
      title: "Your offers are waiting",
      body: "Soft credit check, no obligation. Resume your application in under 2 minutes.",
      url: `${siteUrl}/apply?resume=1`,
      data: { stage: "abandoned_t24h" },
    },
    {
      afterMinutes: 60 * 24 * 3, // +3 days
      title: "Personal loans up to $50,000",
      body: "APRs from 5.99%. Two-minute application with no impact to your credit to check.",
      url: `${siteUrl}/apply`,
      data: { stage: "abandoned_t3d" },
    },
  ];
}
