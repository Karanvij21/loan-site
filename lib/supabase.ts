import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { cancelNotification, type PushResult } from "./onesignal";

let cached: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  if (cached) return cached;
  cached = createClient(url, key, { auth: { persistSession: false } });
  return cached;
}

/** Persist a batch of scheduled OneSignal notification IDs so we can cancel
 *  them later. Best-effort: returns silently if Supabase is not configured. */
export async function recordScheduledPushes(
  oneSignalId: string,
  pushes: Array<{ result: PushResult; stage: string; sendAfter?: Date }>
): Promise<void> {
  const sb = getSupabaseAdmin();
  if (!sb || !oneSignalId) return;
  const rows = pushes
    .filter((p) => p.result.ok && "id" in p.result && p.result.id)
    .map((p) => ({
      one_signal_id: oneSignalId,
      notification_id: (p.result as { ok: true; id: string }).id,
      stage: p.stage,
      send_after: p.sendAfter?.toISOString() ?? null,
    }));
  if (rows.length === 0) return;
  await sb.from("scheduled_pushes").insert(rows);
}

/** Cancel all pending pushes for this subscriber whose stage starts with any
 *  of the given prefixes. e.g., cancelPendingPushes(id, ["abandoned", "never_started"])
 *  before firing the submitted drip. Returns count cancelled. */
export async function cancelPendingPushes(
  oneSignalId: string,
  stagePrefixes: string[]
): Promise<{ cancelled: number; errors: number }> {
  const sb = getSupabaseAdmin();
  if (!sb || !oneSignalId || stagePrefixes.length === 0) return { cancelled: 0, errors: 0 };

  // Fetch un-cancelled scheduled pushes for this subscriber whose stage
  // matches any of the given prefixes.
  const orFilter = stagePrefixes.map((p) => `stage.ilike.${p}%`).join(",");
  const { data: rows } = await sb
    .from("scheduled_pushes")
    .select("id,notification_id,stage")
    .eq("one_signal_id", oneSignalId)
    .is("cancelled_at", null)
    .or(orFilter);

  if (!rows || rows.length === 0) return { cancelled: 0, errors: 0 };

  let cancelled = 0;
  let errors = 0;
  for (const row of rows) {
    const result = await cancelNotification(row.notification_id);
    if (result.ok) {
      cancelled += 1;
      await sb
        .from("scheduled_pushes")
        .update({ cancelled_at: new Date().toISOString() })
        .eq("id", row.id);
    } else {
      errors += 1;
    }
  }
  return { cancelled, errors };
}
