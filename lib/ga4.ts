/**
 * GA4 Reporting API client (server-only).
 *
 * Hits the Google Analytics Data API v1beta directly over REST using a
 * service-account JWT for auth. No SDK, no gRPC, zero external deps beyond
 * Node's built-in crypto module.
 *
 * Why the manual approach: Google's official @google-analytics/data package
 * pulls in @grpc/grpc-js, which has dynamic requires that Turbopack can't
 * statically resolve. The REST endpoint returns the exact same protobuf
 * shape as JSON, so the migration cost is zero.
 *
 * Auth: service account credentials via env vars (Vercel-friendly).
 *   - GOOGLE_CLIENT_EMAIL : service account email
 *   - GOOGLE_PRIVATE_KEY  : the private_key field from the service account
 *                           JSON (preserve the \n characters)
 *   - GA4_PROPERTY_ID     : numeric property ID (NOT the G-XXXX
 *                           measurement ID. Find it under
 *                           GA4 → Admin → Property Settings → Property ID)
 *
 * See docs/ga4-admin-traffic.md for the full setup walkthrough.
 *
 * Each report is wrapped in a try/catch and returns null on failure so the
 * admin dashboard can render a friendly empty state instead of 500-ing.
 */

import "server-only";
import crypto from "node:crypto";
import type { DateRangeKey } from "./ga4-types";

export type { DateRangeKey };
export { DATE_RANGE_LABELS } from "./ga4-types";

const DAYS_FOR_RANGE: Record<DateRangeKey, number> = {
  "7d": 7,
  "28d": 28,
  "90d": 90,
};

function isoDaysAgo(days: number): string {
  const t = Date.now() - days * 24 * 60 * 60 * 1000;
  return new Date(t).toISOString().slice(0, 10);
}

export function gaIsConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_CLIENT_EMAIL &&
    process.env.GOOGLE_PRIVATE_KEY &&
    process.env.GA4_PROPERTY_ID,
  );
}

/* ── Auth ────────────────────────────────────────────────────────────────── */

function b64url(input: Buffer | string): string {
  const buf = typeof input === "string" ? Buffer.from(input) : input;
  return buf.toString("base64url");
}

function signServiceAccountJwt(clientEmail: string, privateKey: string): string {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/analytics.readonly",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };
  const unsigned = `${b64url(JSON.stringify(header))}.${b64url(JSON.stringify(payload))}`;
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(unsigned);
  signer.end();
  const signature = b64url(signer.sign(privateKey));
  return `${unsigned}.${signature}`;
}

let _accessToken: { token: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (_accessToken && _accessToken.expiresAt > Date.now() + 60_000) {
    return _accessToken.token;
  }
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL ?? "";
  // The private_key env value comes through with literal `\n` sequences in
  // Vercel; replace them back to real newlines before handing to crypto.
  const privateKey = (process.env.GOOGLE_PRIVATE_KEY ?? "").replace(/\\n/g, "\n");
  const jwt = signServiceAccountJwt(clientEmail, privateKey);

  const resp = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }).toString(),
    cache: "no-store",
  });
  if (!resp.ok) {
    const text = await resp.text().catch(() => "");
    throw new Error(`GA4 OAuth token request failed: ${resp.status} ${text}`);
  }
  const data = (await resp.json()) as { access_token: string; expires_in: number };
  _accessToken = {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };
  return _accessToken.token;
}

/* ── REST runReport ──────────────────────────────────────────────────────── */

type GaDimensionValue = { value?: string };
type GaMetricValue = { value?: string };
type GaRow = { dimensionValues?: GaDimensionValue[]; metricValues?: GaMetricValue[] };
type GaResponse = { rows?: GaRow[] };

type ReportBody = {
  dateRanges: Array<{ startDate: string; endDate: string }>;
  dimensions?: Array<{ name: string }>;
  metrics: Array<{ name: string }>;
  orderBys?: Array<{ metric: { metricName: string }; desc?: boolean }>;
  limit?: number;
};

async function runReport(body: ReportBody): Promise<GaResponse> {
  const token = await getAccessToken();
  const propertyId = process.env.GA4_PROPERTY_ID;
  const url = `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`;
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });
  if (!resp.ok) {
    const text = await resp.text().catch(() => "");
    throw new Error(`GA4 runReport failed: ${resp.status} ${text}`);
  }
  return (await resp.json()) as GaResponse;
}

function rangeToDates(range: DateRangeKey) {
  const days = DAYS_FOR_RANGE[range];
  return {
    startDate: isoDaysAgo(days),
    endDate: "today",
  };
}

/* ── Reports ─────────────────────────────────────────────────────────────── */

export type Overview = {
  sessions: number;
  totalUsers: number;
  screenPageViews: number;
  engagedSessions: number;
  averageSessionDuration: number;
  eventCount: number;
};

export async function getOverview(range: DateRangeKey): Promise<Overview | null> {
  if (!gaIsConfigured()) return null;
  try {
    const resp = await runReport({
      dateRanges: [rangeToDates(range)],
      metrics: [
        { name: "sessions" },
        { name: "totalUsers" },
        { name: "screenPageViews" },
        { name: "engagedSessions" },
        { name: "averageSessionDuration" },
        { name: "eventCount" },
      ],
    });
    const row = resp.rows?.[0];
    const v = (i: number) => Number(row?.metricValues?.[i]?.value ?? 0);
    return {
      sessions: v(0),
      totalUsers: v(1),
      screenPageViews: v(2),
      engagedSessions: v(3),
      averageSessionDuration: v(4),
      eventCount: v(5),
    };
  } catch (e) {
    console.error("ga4.getOverview failed", e);
    return null;
  }
}

export type PageRow = {
  path: string;
  views: number;
  users: number;
  avgEngagementSeconds: number;
};

export async function getTopPages(
  range: DateRangeKey,
  limit = 20,
): Promise<PageRow[] | null> {
  if (!gaIsConfigured()) return null;
  try {
    const resp = await runReport({
      dateRanges: [rangeToDates(range)],
      dimensions: [{ name: "pagePath" }],
      metrics: [
        { name: "screenPageViews" },
        { name: "totalUsers" },
        { name: "averageSessionDuration" },
      ],
      orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
      limit,
    });
    return (resp.rows ?? []).map((r) => ({
      path: r.dimensionValues?.[0]?.value ?? "(unknown)",
      views: Number(r.metricValues?.[0]?.value ?? 0),
      users: Number(r.metricValues?.[1]?.value ?? 0),
      avgEngagementSeconds: Number(r.metricValues?.[2]?.value ?? 0),
    }));
  } catch (e) {
    console.error("ga4.getTopPages failed", e);
    return null;
  }
}

export type EventRow = {
  name: string;
  count: number;
  users: number;
};

export async function getTopEvents(
  range: DateRangeKey,
  limit = 15,
): Promise<EventRow[] | null> {
  if (!gaIsConfigured()) return null;
  try {
    const resp = await runReport({
      dateRanges: [rangeToDates(range)],
      dimensions: [{ name: "eventName" }],
      metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
      orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
      limit,
    });
    return (resp.rows ?? []).map((r) => ({
      name: r.dimensionValues?.[0]?.value ?? "(unknown)",
      count: Number(r.metricValues?.[0]?.value ?? 0),
      users: Number(r.metricValues?.[1]?.value ?? 0),
    }));
  } catch (e) {
    console.error("ga4.getTopEvents failed", e);
    return null;
  }
}

export type SourceRow = {
  source: string;
  medium: string;
  sessions: number;
  users: number;
};

export async function getTrafficSources(
  range: DateRangeKey,
  limit = 15,
): Promise<SourceRow[] | null> {
  if (!gaIsConfigured()) return null;
  try {
    const resp = await runReport({
      dateRanges: [rangeToDates(range)],
      dimensions: [{ name: "sessionSource" }, { name: "sessionMedium" }],
      metrics: [{ name: "sessions" }, { name: "totalUsers" }],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit,
    });
    return (resp.rows ?? []).map((r) => ({
      source: r.dimensionValues?.[0]?.value ?? "(direct)",
      medium: r.dimensionValues?.[1]?.value ?? "(none)",
      sessions: Number(r.metricValues?.[0]?.value ?? 0),
      users: Number(r.metricValues?.[1]?.value ?? 0),
    }));
  } catch (e) {
    console.error("ga4.getTrafficSources failed", e);
    return null;
  }
}

export type LandingRow = {
  landingPage: string;
  sessions: number;
  engagedSessions: number;
  bounceRate: number;
};

export async function getLandingPages(
  range: DateRangeKey,
  limit = 15,
): Promise<LandingRow[] | null> {
  if (!gaIsConfigured()) return null;
  try {
    const resp = await runReport({
      dateRanges: [rangeToDates(range)],
      dimensions: [{ name: "landingPage" }],
      metrics: [
        { name: "sessions" },
        { name: "engagedSessions" },
        { name: "bounceRate" },
      ],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit,
    });
    return (resp.rows ?? []).map((r) => ({
      landingPage: r.dimensionValues?.[0]?.value ?? "(unknown)",
      sessions: Number(r.metricValues?.[0]?.value ?? 0),
      engagedSessions: Number(r.metricValues?.[1]?.value ?? 0),
      bounceRate: Number(r.metricValues?.[2]?.value ?? 0),
    }));
  } catch (e) {
    console.error("ga4.getLandingPages failed", e);
    return null;
  }
}

export type CountryRow = {
  country: string;
  sessions: number;
};

export async function getCountries(
  range: DateRangeKey,
  limit = 10,
): Promise<CountryRow[] | null> {
  if (!gaIsConfigured()) return null;
  try {
    const resp = await runReport({
      dateRanges: [rangeToDates(range)],
      dimensions: [{ name: "country" }],
      metrics: [{ name: "sessions" }],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit,
    });
    return (resp.rows ?? []).map((r) => ({
      country: r.dimensionValues?.[0]?.value ?? "(unknown)",
      sessions: Number(r.metricValues?.[0]?.value ?? 0),
    }));
  } catch (e) {
    console.error("ga4.getCountries failed", e);
    return null;
  }
}
