import Link from "next/link";
import {
  gaIsConfigured,
  getOverview,
  getTopPages,
  getTopEvents,
  getTrafficSources,
  getLandingPages,
  getCountries,
  type DateRangeKey,
} from "@/lib/ga4";
import { RangeSelector } from "./RangeSelector";

// Always SSR so each load pulls live GA4 data. We could add unstable_cache
// per-range later if quota becomes a concern; current usage is far below
// GA4 Data API limits.
export const dynamic = "force-dynamic";

const ALLOWED: DateRangeKey[] = ["7d", "28d", "90d"];

type Search = Promise<{ range?: string }>;

export default async function AdminTrafficPage({ searchParams }: { searchParams: Search }) {
  const sp = await searchParams;
  const range: DateRangeKey = (ALLOWED as string[]).includes(sp.range ?? "")
    ? (sp.range as DateRangeKey)
    : "7d";

  if (!gaIsConfigured()) {
    return <SetupNeeded />;
  }

  // Pull all reports in parallel.
  const [overview, pages, events, sources, landings, countries] = await Promise.all([
    getOverview(range),
    getTopPages(range, 15),
    getTopEvents(range, 12),
    getTrafficSources(range, 10),
    getLandingPages(range, 10),
    getCountries(range, 8),
  ]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-[24px] font-semibold tracking-tight text-ink-900">Traffic</h1>
          <p className="mt-1 text-[13px] text-ink-500">Live GA4 data via the Reporting API.</p>
        </div>
        <RangeSelector current={range} />
      </div>

      {overview ? (
        <section>
          <h2 className="text-[14px] font-semibold uppercase tracking-[0.12em] text-ink-500">Overview</h2>
          <dl className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            <Stat k="Sessions" v={fmtInt(overview.sessions)} />
            <Stat k="Users" v={fmtInt(overview.totalUsers)} />
            <Stat k="Page views" v={fmtInt(overview.screenPageViews)} />
            <Stat k="Engaged sessions" v={fmtInt(overview.engagedSessions)} />
            <Stat k="Avg session" v={fmtSeconds(overview.averageSessionDuration)} />
            <Stat k="Events" v={fmtInt(overview.eventCount)} />
          </dl>
        </section>
      ) : (
        <SectionError label="overview" />
      )}

      <div className="grid gap-8 lg:grid-cols-2">
        {pages ? (
          <Card title="Top pages by views" empty={pages.length === 0}>
            <Table
              headers={["Path", "Views", "Users", "Avg time"]}
              rows={pages.map((p) => [
                <span className="truncate text-ink-900" title={p.path}>{p.path}</span>,
                fmtInt(p.views),
                fmtInt(p.users),
                fmtSeconds(p.avgEngagementSeconds),
              ])}
            />
          </Card>
        ) : (
          <SectionError label="top pages" />
        )}

        {events ? (
          <Card title="Top events" empty={events.length === 0}>
            <Table
              headers={["Event", "Count", "Users"]}
              rows={events.map((e) => [
                <span className="font-mono text-[12px] text-ink-900">{e.name}</span>,
                fmtInt(e.count),
                fmtInt(e.users),
              ])}
            />
            <p className="mt-3 text-[11px] text-ink-500">
              Funnel-relevant events to watch: <code>lead_form_view</code>, <code>apply_started</code>, <code>step_completed</code>, <code>lead_submitted</code>, <code>generate_lead</code>.
            </p>
          </Card>
        ) : (
          <SectionError label="events" />
        )}

        {sources ? (
          <Card title="Traffic sources" empty={sources.length === 0}>
            <Table
              headers={["Source", "Medium", "Sessions", "Users"]}
              rows={sources.map((s) => [s.source, s.medium, fmtInt(s.sessions), fmtInt(s.users)])}
            />
          </Card>
        ) : (
          <SectionError label="traffic sources" />
        )}

        {landings ? (
          <Card title="Landing pages" empty={landings.length === 0}>
            <Table
              headers={["Landing page", "Sessions", "Engaged", "Bounce"]}
              rows={landings.map((l) => [
                <span className="truncate text-ink-900" title={l.landingPage}>{l.landingPage}</span>,
                fmtInt(l.sessions),
                fmtInt(l.engagedSessions),
                fmtPct(l.bounceRate),
              ])}
            />
          </Card>
        ) : (
          <SectionError label="landing pages" />
        )}
      </div>

      {countries && countries.length > 0 && (
        <section>
          <h2 className="text-[14px] font-semibold uppercase tracking-[0.12em] text-ink-500">Top countries</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {countries.map((c) => (
              <li
                key={c.country}
                className="rounded-md border border-paper-300 bg-white px-3 py-1.5 text-[13px]"
              >
                <span className="text-ink-900">{c.country}</span>{" "}
                <span className="text-ink-500">· {fmtInt(c.sessions)}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className="text-[11px] text-ink-500">
        Data via Google Analytics Data API v1. See{" "}
        <Link className="underline" href="https://github.com/Karanvij21/loan-site/blob/main/docs/ga4-admin-traffic.md">
          docs/ga4-admin-traffic.md
        </Link>{" "}
        for the service-account setup.
      </p>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-md border border-paper-300 bg-white p-3">
      <dt className="text-[11px] uppercase tracking-[0.12em] text-ink-500">{k}</dt>
      <dd className="mt-1 text-[20px] font-semibold tabular text-ink-900">{v}</dd>
    </div>
  );
}

function Card({ title, children, empty = false }: { title: string; children: React.ReactNode; empty?: boolean }) {
  return (
    <section className="rounded-md border border-paper-300 bg-white p-4">
      <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-500">{title}</h2>
      <div className="mt-3">{empty ? <p className="text-[13px] text-ink-500">No data in this range yet.</p> : children}</div>
    </section>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-[13px]">
        <thead>
          <tr className="border-b border-paper-300 text-left text-[11px] uppercase tracking-[0.08em] text-ink-500">
            {headers.map((h) => (
              <th key={h} className="py-2 pr-3 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-paper-200 last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="max-w-[260px] py-2 pr-3 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SectionError({ label }: { label: string }) {
  return (
    <section className="rounded-md border border-amber-300/40 bg-amber-300/10 p-3 text-[13px] text-amber-700">
      Failed to load {label} from GA4. Check server logs.
    </section>
  );
}

function SetupNeeded() {
  return (
    <div className="space-y-4">
      <h1 className="text-[24px] font-semibold tracking-tight text-ink-900">Traffic</h1>
      <div className="rounded-md border border-amber-300/40 bg-amber-300/10 p-4 text-[14px] text-amber-700">
        <p className="font-semibold">GA4 not configured yet.</p>
        <p className="mt-2">
          Set <code>GOOGLE_CLIENT_EMAIL</code>, <code>GOOGLE_PRIVATE_KEY</code>, and{" "}
          <code>GA4_PROPERTY_ID</code> in Vercel env vars (Production + Preview).
        </p>
        <p className="mt-2">
          Step-by-step service-account setup is in{" "}
          <Link
            className="underline"
            href="https://github.com/Karanvij21/loan-site/blob/main/docs/ga4-admin-traffic.md"
          >
            docs/ga4-admin-traffic.md
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */

function fmtInt(n: number): string {
  return new Intl.NumberFormat("en-US").format(Math.round(n));
}

function fmtSeconds(n: number): string {
  const s = Math.round(n);
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return `${m}m ${rem}s`;
}

function fmtPct(n: number): string {
  return `${(n * 100).toFixed(1)}%`;
}
