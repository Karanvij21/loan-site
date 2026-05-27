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

export type PushOptions = {
  title: string;
  body: string;
  /** Launch URL when the user clicks the push. */
  url?: string;
  /** Arbitrary key/value sent in the push payload — readable in OneSignal handlers. */
  data?: Record<string, unknown>;
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
