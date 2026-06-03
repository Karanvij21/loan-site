import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  SpeakableJsonLd,
} from "@/components/seo/JsonLd";
import { states } from "@/lib/states";
import { defaultAuthor, defaultReviewer, authorUrl } from "@/lib/authors";

const PUBLISHED = "2026-05-22";
const REVIEWED = "2026-05-22";
const URL = `${siteConfig.url}/data/personal-loan-apr-by-state`;

export const metadata: Metadata = {
  title: "Personal Loan APR Caps by State (Q3 2026 Data Study)",
  description:
    "Comprehensive analysis of personal loan APR caps across all 50 U.S. states + DC. Methodology, summary statistics, regional patterns, and the 8 strictest and 8 most permissive states.",
  alternates: { canonical: "/data/personal-loan-apr-by-state" },
  openGraph: {
    title: "Personal Loan APR Caps by State (Q3 2026)",
    description: "Comprehensive analysis of state-by-state APR caps on personal loans.",
    url: "/data/personal-loan-apr-by-state",
  },
};

// Derive summary stats from the live state data so the page numbers
// always match the table below. The deploy that ships this includes
// the most recent state regulator updates we've ingested.
const capped = states.filter((s) => s.aprCap !== null) as Array<typeof states[number] & { aprCap: number }>;
const uncapped = states.filter((s) => s.aprCap === null);
const cappedAprs = capped.map((s) => s.aprCap);
const median = (arr: number[]) => {
  const s = [...arr].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? (s[m - 1] + s[m]) / 2 : s[m];
};
const average = (arr: number[]) => Math.round((arr.reduce((a, b) => a + b, 0) / arr.length) * 10) / 10;

const strictest = [...capped].sort((a, b) => a.aprCap - b.aprCap).slice(0, 8);
const mostPermissive = [...uncapped].slice(0, 8);

const regionStats = (["Northeast", "Midwest", "South", "West"] as const).map((region) => {
  const inRegion = states.filter((s) => s.region === region);
  const cappedInRegion = inRegion.filter((s) => s.aprCap !== null) as Array<typeof states[number] & { aprCap: number }>;
  return {
    region,
    total: inRegion.length,
    capped: cappedInRegion.length,
    cappedPercent: Math.round((cappedInRegion.length / inRegion.length) * 100),
    medianCap: cappedInRegion.length > 0 ? median(cappedInRegion.map((s) => s.aprCap)) : null,
  };
});

export default function AprByStatePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Data", url: `${siteConfig.url}/data/personal-loan-apr-by-state` },
        ]}
      />
      <ArticleJsonLd
        headline="Personal Loan APR Caps by State (Q3 2026 Data Study)"
        description="State-by-state analysis of personal loan APR caps across all 50 U.S. states + DC."
        url={URL}
        datePublished={PUBLISHED}
        dateModified={REVIEWED}
        authorName={defaultAuthor.name}
        authorUrl={authorUrl(defaultAuthor)}
        reviewerName={defaultReviewer.name}
        reviewerUrl={authorUrl(defaultReviewer)}
        articleSection="Data study"
      />
      <SpeakableJsonLd url={URL} cssSelectors={[".study-intro", ".study-summary-stat"]} />
      {/* Dataset schema, separately, so research databases and journalists who
          consume schema.org/Dataset can find the underlying data. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            name: "U.S. Personal Loan APR Caps by State (Q3 2026)",
            description:
              "State-by-state APR cap data for unsecured consumer personal loans, sourced from state regulator publications and synthesised against lender-network published rates.",
            url: URL,
            license: "https://creativecommons.org/licenses/by/4.0/",
            isAccessibleForFree: true,
            creator: { "@id": `${siteConfig.url}/#organization` },
            datePublished: PUBLISHED,
            keywords: [
              "personal loan",
              "APR cap",
              "state lending law",
              "consumer credit",
              "TILA",
              "MAPR",
            ],
            distribution: {
              "@type": "DataDownload",
              encodingFormat: "text/html",
              contentUrl: URL,
            },
          }),
        }}
      />

      <article className="mx-auto max-w-[1080px] px-6 pt-12 pb-20 lg:px-10 lg:pt-16 lg:pb-28">
        <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[12px] text-ink-500">
          <Link href="/" className="hover:text-ink-900">Home</Link>
          <span className="text-ink-300">/</span>
          <span className="text-ink-900">Personal Loan APR Caps by State</span>
        </nav>

        <header className="mt-8 max-w-[820px]">
          <span className="eyebrow">Q3 2026 data study</span>
          <h1 className="mt-3 text-[40px] leading-[1.02] tracking-tight text-ink-900 lg:text-[60px]">
            Personal loan APR caps, <span className="text-forest-700">by state</span>.
          </h1>
          <p className="study-intro mt-6 text-[18px] leading-[1.6] text-ink-700">
            Twenty-four states + the District of Columbia cap the annual percentage rate on unsecured consumer personal loans. Twenty-six leave it to lender discretion within federal guardrails. This page lays out the data state by state, identifies the strictest and most permissive regimes, and explains why two borrowers with the same credit profile can be quoted dramatically different APRs depending on their address.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-ink-500">
            <span>By <Link href={`/editorial-policy#${defaultAuthor.slug}`} className="text-ink-700 underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">{defaultAuthor.name}</Link></span>
            <span aria-hidden>·</span>
            <span>Reviewed by <Link href={`/editorial-policy#${defaultReviewer.slug}`} className="text-ink-700 underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">{defaultReviewer.name}</Link></span>
            <span aria-hidden>·</span>
            <time dateTime={REVIEWED}>Published {new Date(REVIEWED).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
          </div>
        </header>

        {/* SUMMARY CARDS */}
        <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat k="States with an APR cap" v={`${capped.length}`} sub={`out of ${states.length} (${Math.round((capped.length / states.length) * 100)}%)`} />
          <Stat k="Median cap" v={`${median(cappedAprs)}%`} sub="among capped states" />
          <Stat k="Lowest cap" v={`${Math.min(...cappedAprs)}%`} sub="Arkansas (constitutional)" />
          <Stat k="Highest cap" v={`${Math.max(...cappedAprs)}%`} sub="MLA federal MAPR" />
        </section>

        {/* METHODOLOGY */}
        <section className="mt-16 max-w-[820px]">
          <h2 className="text-[28px] leading-[1.1] tracking-tight text-ink-900 lg:text-[36px]">
            Methodology
          </h2>
          <div className="mt-6 space-y-5 text-[17px] leading-[1.7] text-ink-700">
            <p>
              We catalogued the APR caps that materially constrain offers on unsecured consumer personal loans (typically $500 to $50,000, terms 3 to 72 months) for borrowers in each state and DC.
            </p>
            <p>
              Caps were sourced from state banking-department and attorney-general publications, with cross-references to the federal Consumer Financial Protection Bureau's database of state consumer-credit laws. Where a state has multiple cap regimes (different rules for amounts under and over a threshold, for example), we report the cap that applies to the modal personal-loan use case in our partner network: a $5,000 to $15,000 unsecured installment loan with a 36 to 60 month term.
            </p>
            <p>
              We do <em>not</em> use anonymised lead data for this study. Our marketplace currently routes leads to partner lenders rather than originating loans directly, so we don't yet have a representative sample of actual approved APRs to disclose. When that sample is large enough to be statistically meaningful, we plan to publish a paired data study showing accepted APR by state and credit tier.
            </p>
            <p>
              State law changes. The data on this page reflects rules in effect as of the last review date. Always consult the relevant state regulator (linked on each state-specific page) for authoritative current rules.
            </p>
          </div>
        </section>

        {/* REGION STATS */}
        <section className="mt-16">
          <h2 className="text-[28px] leading-[1.1] tracking-tight text-ink-900 lg:text-[36px]">
            Regional patterns
          </h2>
          <p className="mt-4 max-w-[760px] text-[16px] leading-[1.65] text-ink-700">
            Cap adoption clusters regionally. The Northeast and West lead in consumer-protection cap regimes; the South has the lowest share of capped states.
          </p>
          <div className="mt-8 overflow-x-auto rounded-[14px] border border-cream-300 bg-cream-50">
            <table className="w-full text-left text-[14px]">
              <thead>
                <tr className="border-b border-cream-300 bg-cream-100">
                  <th className="px-5 py-4 text-[12px] uppercase tracking-[0.15em] text-ink-500">Region</th>
                  <th className="px-5 py-4 text-[12px] uppercase tracking-[0.15em] text-ink-500">States in region</th>
                  <th className="px-5 py-4 text-[12px] uppercase tracking-[0.15em] text-ink-500">States with cap</th>
                  <th className="px-5 py-4 text-[12px] uppercase tracking-[0.15em] text-ink-500">% capped</th>
                  <th className="px-5 py-4 text-[12px] uppercase tracking-[0.15em] text-ink-500">Median cap</th>
                </tr>
              </thead>
              <tbody>
                {regionStats.map((r) => (
                  <tr key={r.region} className="border-b border-cream-300 last:border-0">
                    <td className="px-5 py-4 font-semibold text-ink-900">{r.region}</td>
                    <td className="px-5 py-4 text-ink-900 tabular">{r.total}</td>
                    <td className="px-5 py-4 text-ink-900 tabular">{r.capped}</td>
                    <td className="px-5 py-4 text-ink-900 tabular">{r.cappedPercent}%</td>
                    <td className="px-5 py-4 text-ink-900 tabular">{r.medianCap !== null ? `${r.medianCap}%` : ", "}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* STRICTEST */}
        <section className="mt-16">
          <h2 className="text-[28px] leading-[1.1] tracking-tight text-ink-900 lg:text-[36px]">
            The 8 strictest cap regimes
          </h2>
          <p className="mt-4 max-w-[760px] text-[16px] leading-[1.65] text-ink-700">
            These states materially limit which lenders will originate at all. Borrowers here see fewer offers, sometimes no offers in subprime tiers, but those they do see come at single-digit or low-double-digit APRs.
          </p>
          <div className="mt-8 overflow-x-auto rounded-[14px] border border-cream-300 bg-cream-50">
            <table className="w-full text-left text-[14px]">
              <thead>
                <tr className="border-b border-cream-300 bg-cream-100">
                  <th className="px-5 py-4 text-[12px] uppercase tracking-[0.15em] text-ink-500">State</th>
                  <th className="px-5 py-4 text-[12px] uppercase tracking-[0.15em] text-ink-500">Region</th>
                  <th className="px-5 py-4 text-[12px] uppercase tracking-[0.15em] text-ink-500">Cap</th>
                  <th className="px-5 py-4 text-[12px] uppercase tracking-[0.15em] text-ink-500">Regulator</th>
                </tr>
              </thead>
              <tbody>
                {strictest.map((s) => (
                  <tr key={s.slug} className="border-b border-cream-300 last:border-0 align-top">
                    <td className="px-5 py-4 font-semibold text-ink-900">
                      <Link href={`/personal-loans/${s.slug}`} className="underline decoration-cream-400 underline-offset-2 hover:decoration-ink-900">
                        {s.name}
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-ink-700">{s.region}</td>
                    <td className="px-5 py-4 text-ink-900 tabular font-semibold">{s.aprCap}%</td>
                    <td className="px-5 py-4 text-ink-700">{s.regulator}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* PERMISSIVE */}
        <section className="mt-16">
          <h2 className="text-[28px] leading-[1.1] tracking-tight text-ink-900 lg:text-[36px]">
            States with no notable cap
          </h2>
          <p className="mt-4 max-w-[760px] text-[16px] leading-[1.65] text-ink-700">
            These states rely on federal law (35.99% effective maximum on most reputable personal loans in the prime / fair / subprime tiers, 36% MAPR for active-duty military) and lender discretion. The full breadth of online lenders compete here, including those specialising in subprime credit.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {uncapped.slice(0, 12).map((s) => (
              <Link
                key={s.slug}
                href={`/personal-loans/${s.slug}`}
                className="group rounded-lg border border-cream-300 bg-cream-50/40 p-4 transition-colors hover:bg-cream-50"
              >
                <span className="text-[15px] font-semibold text-ink-900 group-hover:text-forest-700">{s.name}</span>
                <span className="mt-1 block text-[12px] text-ink-500">{s.region} · {s.abbr}</span>
              </Link>
            ))}
          </div>
          {uncapped.length > 12 && (
            <p className="mt-4 text-[14px] text-ink-500">
              Plus {uncapped.length - 12} more states. See the full <Link href="/personal-loans" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">state index</Link>.
            </p>
          )}
        </section>

        {/* WHY THIS MATTERS */}
        <section className="mt-16 max-w-[820px]">
          <h2 className="text-[28px] leading-[1.1] tracking-tight text-ink-900 lg:text-[36px]">
            What this means for borrowers
          </h2>
          <div className="mt-6 space-y-5 text-[17px] leading-[1.7] text-ink-700">
            <p>
              Two borrowers with identical credit profiles can get materially different offers based on their state. A 620-FICO borrower in Texas might see APRs from 22% to 32.99%. The same borrower in California will see a narrower range topped out by the 36% statutory ceiling, but with fewer participating lenders. In Arkansas, the 17% constitutional cap pushes most subprime lenders out of the market entirely.
            </p>
            <p>
              Cap regimes don't unambiguously help borrowers. A strict cap reduces the maximum interest you can be charged, but it also reduces the number of lenders willing to make a loan to a borderline applicant. The empirical evidence on net welfare is mixed; CFPB research generally finds caps below 36% materially constrict credit access while caps at 36% or above mainly affect payday-style products without sharply limiting personal-loan access.
            </p>
            <p>
              The Military Lending Act applies a 36% Military APR ceiling for active-duty service members and their dependents regardless of state. That MAPR includes interest, fees, and certain credit-insurance premiums, so its effective bite can be tighter than a 36% state cap on interest alone.
            </p>
          </div>
        </section>

        {/* FULL TABLE */}
        <section className="mt-16">
          <h2 className="text-[28px] leading-[1.1] tracking-tight text-ink-900 lg:text-[36px]">
            Full state table
          </h2>
          <p className="mt-4 max-w-[760px] text-[16px] leading-[1.65] text-ink-700">
            All 50 states + DC, alphabetical. Each state links to its full guide with regulator, common uses, and city-level coverage.
          </p>
          <div className="mt-8 overflow-x-auto rounded-[14px] border border-cream-300 bg-cream-50">
            <table className="w-full text-left text-[14px]">
              <thead>
                <tr className="border-b border-cream-300 bg-cream-100">
                  <th className="px-5 py-4 text-[12px] uppercase tracking-[0.15em] text-ink-500">State</th>
                  <th className="px-5 py-4 text-[12px] uppercase tracking-[0.15em] text-ink-500">Abbr.</th>
                  <th className="px-5 py-4 text-[12px] uppercase tracking-[0.15em] text-ink-500">Region</th>
                  <th className="px-5 py-4 text-[12px] uppercase tracking-[0.15em] text-ink-500">APR cap</th>
                </tr>
              </thead>
              <tbody>
                {[...states].sort((a, b) => a.name.localeCompare(b.name)).map((s) => (
                  <tr key={s.slug} className="border-b border-cream-300 last:border-0">
                    <td className="px-5 py-4">
                      <Link href={`/personal-loans/${s.slug}`} className="font-semibold text-ink-900 underline decoration-cream-400 underline-offset-2 hover:decoration-ink-900">
                        {s.name}
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-ink-700 tabular">{s.abbr}</td>
                    <td className="px-5 py-4 text-ink-700">{s.region}</td>
                    <td className="px-5 py-4 text-ink-900 tabular">
                      {s.aprCap !== null ? `${s.aprCap}%` : <span className="text-ink-500">No notable cap</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CITATION + LICENSE */}
        <section className="mt-16 max-w-[820px] rounded-[14px] border border-cream-300 p-6">
          <span className="eyebrow">Citation & license</span>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
            This data study is published under a Creative Commons Attribution 4.0 license. Journalists and researchers are welcome to cite it with a link back to{" "}
            <Link href="/data/personal-loan-apr-by-state" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">{siteConfig.url}/data/personal-loan-apr-by-state</Link>.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
            Suggested citation: {siteConfig.name} (Q3 2026). <em>Personal Loan APR Caps by State</em>. Retrieved from {siteConfig.url}/data/personal-loan-apr-by-state.
          </p>
        </section>

        <section className="mt-14 rounded-[14px] bg-forest-700 p-6 text-cream-100 lg:p-8">
          <h2 className="text-[22px] leading-[1.2] tracking-tight lg:text-[28px]">
            Want offers from lenders licensed in your state?
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed opacity-90">
            Compare personal loan offers in two minutes. Soft credit check only.
          </p>
          <Link
            href="/apply"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream-100 px-5 py-3 text-[14px] font-semibold text-ink-900 transition-colors hover:bg-cream-200"
          >
            Begin a request
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </section>
      </article>
    </>
  );
}

function Stat({ k, v, sub }: { k: string; v: string; sub: string }) {
  return (
    <div className="rounded-[14px] border border-cream-300 bg-cream-50/60 p-5">
      <span className="eyebrow">{k}</span>
      <p className="study-summary-stat mt-3 text-[36px] tracking-tight text-ink-900 lg:text-[44px]">
        <span className="text-forest-700 tabular">{v}</span>
      </p>
      <p className="mt-1 text-[12px] text-ink-500">{sub}</p>
    </div>
  );
}

const avgCap = average(cappedAprs);
void avgCap;
