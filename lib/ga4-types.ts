/**
 * Client-safe types and constants for the GA4 admin dashboard.
 *
 * Split from lib/ga4.ts because that file is `server-only` (it touches the
 * service account private key). Client components (e.g. RangeSelector) need
 * the date-range keys/labels but must not pull in the server module.
 */

export type DateRangeKey = "7d" | "28d" | "90d";

export const DATE_RANGE_LABELS: Record<DateRangeKey, string> = {
  "7d": "Last 7 days",
  "28d": "Last 28 days",
  "90d": "Last 90 days",
};
