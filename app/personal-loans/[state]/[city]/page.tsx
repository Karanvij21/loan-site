import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  FaqJsonLd,
  LoanProductJsonLd,
  SpeakableJsonLd,
} from "@/components/seo/JsonLd";
import { stateBySlug, aprDescription } from "@/lib/states";
import {
  findCity,
  allCitySlugs,
  otherCitiesInState,
  cityIntro,
  type City,
} from "@/lib/cities";
import { defaultAuthor, defaultReviewer, authorUrl } from "@/lib/authors";

const PUBLISHED = "2026-03-10";
const REVIEWED = "2026-05-22";

export function generateStaticParams() {
  return allCitySlugs();
}

type Props = { params: Promise<{ state: string; city: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, city } = await params;
  const s = stateBySlug[state];
  const c = findCity(state, city);
  if (!s || !c) return {};
  // Same CTR-tuned pattern as the state page: dollar range, APR band, year,
  // soft-pull, time-to-funds, free-no-obligation. City name + state abbr
  // keeps the title click-friendly in mobile SERP truncation.
  const aprCeiling = s.aprCap ?? 35.99;
  const title = `Personal Loans in ${c.name}, ${s.abbr} 2026: $100-$50,000, up to ${aprCeiling}% APR`;
  const description = `Compare ${c.name} personal loan offers in 2 minutes. $100 to $50,000, soft credit check (no impact), funds next business day. Bad credit considered. Free, no obligation.`.slice(0, 160);
  return {
    title,
    description,
    alternates: { canonical: `/personal-loans/${s.slug}/${c.slug}` },
    openGraph: { title, description, url: `/personal-loans/${s.slug}/${c.slug}` },
  };
}

export default async function CityPage({ params }: Props) {
  const { state, city } = await params;
  const s = stateBySlug[state];
  const c = findCity(state, city);
  if (!s || !c) notFound();

  const url = `${siteConfig.url}/personal-loans/${s.slug}/${c.slug}`;
  const intro = cityIntro(c, s.name);
  const aprText = aprDescription(s);
  const faqs = buildCityFaq(c, s);
  const others = otherCitiesInState(s.slug, c.slug);

  return (
    <>
      <LoanProductJsonLd
        name={`Personal loan in ${c.name}, ${s.abbr}`}
        description={`Personal installment loans from $100 to $50,000 for ${c.name}, ${s.name} residents.`}
        amountMin={100}
        amountMax={50000}
        termMonthsMin={3}
        termMonthsMax={72}
        aprMin={5.99}
        aprMax={s.aprCap ?? 35.99}
      />
      <FaqJsonLd items={faqs} />
      <ArticleJsonLd
        headline={`Personal loans in ${c.name}, ${s.name}`}
        description={`Personal-loan options for ${c.name} residents within the ${s.name} lender network.`}
        url={url}
        datePublished={PUBLISHED}
        dateModified={REVIEWED}
        authorName={defaultAuthor.name}
        authorUrl={authorUrl(defaultAuthor)}
        reviewerName={defaultReviewer.name}
        reviewerUrl={authorUrl(defaultReviewer)}
        articleSection="State & city guide"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Personal Loans", url: `${siteConfig.url}/personal-loans` },
          { name: s.name, url: `${siteConfig.url}/personal-loans/${s.slug}` },
          { name: c.name, url },
        ]}
      />
      <SpeakableJsonLd url={url} cssSelectors={[".city-intro", ".city-apr"]} />

      {/* HERO */}
      <section className="border-b border-cream-300">
        <div className="mx-auto max-w-[1280px] px-6 pt-12 pb-20 lg:px-10 lg:pt-16 lg:pb-24">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 text-[12px] text-ink-500">
            <Link href="/" className="hover:text-ink-900">Home</Link>
            <span className="text-ink-300">/</span>
            <Link href="/personal-loans" className="hover:text-ink-900">Personal Loans</Link>
            <span className="text-ink-300">/</span>
            <Link href={`/personal-loans/${s.slug}`} className="hover:text-ink-900">{s.name}</Link>
            <span className="text-ink-300">/</span>
            <span className="text-ink-900">{c.name}</span>
          </nav>

          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1fr_360px] lg:gap-20">
            <div>
              <span className="eyebrow">City loan guide · {s.name}</span>
              <h1 className="mt-4 text-[40px] leading-[1.02] tracking-tight text-ink-900 lg:text-[60px]">
                Personal loans in <span className="text-forest-700">{c.name}</span>.
              </h1>
              <p className="city-intro mt-6 max-w-[58ch] text-[18px] leading-[1.55] text-ink-700">
                {intro}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/apply" className="btn btn-primary">
                  Begin a request
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href={`/personal-loans/${s.slug}`} className="text-[14px] text-ink-700 underline decoration-cream-400 underline-offset-[6px] hover:text-ink-900 hover:decoration-ink-900">
                  All of {s.name} ↗
                </Link>
              </div>
            </div>

            <aside className="rounded-[14px] bg-cream-50 ring-1 ring-cream-300 p-6">
              <span className="eyebrow">{c.name} at a glance</span>
              <dl className="mt-5 space-y-4">
                <Row k="Loan amounts" v="$100 – $50,000" />
                <Row k="APR range" v={s.aprCap ? `5.99% – ${s.aprCap}%` : "5.99% – 35.99%"} />
                <Row k="Repayment terms" v="3 – 72 months" />
                <Row k="Funding" v="Next business day" />
                <Row k="City population" v={`~${c.population}`} />
                <Row k="State" v={`${s.name} (${s.abbr})`} />
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* APR & STATE LAW (inherited from state) */}
      <section className="bg-cream-50 border-b border-cream-300">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-24">
            <div>
              <span className="eyebrow">State rules</span>
              <h2 className="mt-3 text-[36px] leading-[1.05] tracking-tight text-ink-900 lg:text-[44px]">
                APR & <span className="text-forest-700">{s.name} law</span>.
              </h2>
            </div>
            <div className="city-apr space-y-5 text-[17px] leading-[1.7] text-ink-700">
              <p>{aprText}</p>
              <p>
                Lender regulation for {c.name} borrowers falls under the <strong>{s.regulator}</strong>. You can file a complaint with them directly, in addition to{" "}
                <a href="https://www.consumerfinance.gov/complaint/" target="_blank" rel="noopener noreferrer" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">the federal CFPB</a>.
              </p>
              <p>
                {siteConfig.name} is not a lender. We match {c.name} residents with independent lenders in our partner network, including LendingTree, who hold the licenses required to make loans in {s.name}. Approval, APR, term, and fees are determined by the lender.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN BORROWERS USE A LOAN, tier-varied content */}
      <section>
        <div className="mx-auto max-w-[1080px] px-6 py-16 lg:px-10 lg:py-20">
          <span className="eyebrow">Common uses in {c.name}</span>
          <h2 className="mt-3 text-[32px] leading-[1.1] tracking-tight text-ink-900 lg:text-[40px]">
            What {c.name} borrowers use personal loans for.
          </h2>
          <dl className="mt-10 grid gap-5 sm:grid-cols-2">
            {commonUses(c, s.name).map((u, i) => (
              <div key={u.k} className="rounded-xl border border-cream-300 bg-cream-50/60 p-6">
                <span className="tabular text-[14px] font-semibold text-ink-300">{String(i + 1).padStart(2, "0")}</span>
                <dt className="mt-2 text-[18px] font-semibold text-ink-900">{u.k}</dt>
                <dd className="mt-1 text-[14px] leading-[1.55] text-ink-700">{u.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-50 border-y border-cream-300">
        <div className="mx-auto max-w-[920px] px-6 py-16 lg:px-10 lg:py-20">
          <span className="eyebrow">{c.name} questions</span>
          <h2 className="mt-3 text-[32px] leading-[1.1] tracking-tight text-ink-900 lg:text-[40px]">
            Common questions.
          </h2>
          <div className="mt-10 border-t border-ink-900">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-cream-300 py-5">
                <summary className="flex cursor-pointer items-baseline justify-between gap-6 marker:hidden">
                  <span className="text-lg text-ink-900 lg:text-xl">{f.q}</span>
                  <span className="shrink-0 text-xl text-ink-300 transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-ink-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER CITIES IN STATE, internal linking */}
      {others.length > 0 && (
        <section>
          <div className="mx-auto max-w-[1080px] px-6 py-12 lg:px-10">
            <span className="eyebrow">Other {s.name} cities</span>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/personal-loans/${s.slug}/${o.slug}`} className="text-ink-700 underline decoration-cream-400 underline-offset-[4px] hover:text-ink-900 hover:decoration-ink-900">
                    Personal loans in {o.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`/personal-loans/${s.slug}`} className="text-ink-900 underline decoration-cream-400 underline-offset-[4px] hover:decoration-ink-900">
                  All of {s.name} →
                </Link>
              </li>
            </ul>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-forest-700 text-cream-100">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-[32px] leading-[1.05] tracking-tight lg:text-[48px]">
              Ready to compare offers in {c.name}?
            </h2>
            <Link href="/apply" className="btn !bg-cream-100 !text-ink-900 hover:!bg-cream-200 !px-7 !py-4 !text-[15px]">
              Begin your request
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-cream-300 pb-3 last:border-0 last:pb-0">
      <dt className="text-[12px] uppercase tracking-[0.15em] text-ink-500">{k}</dt>
      <dd className="tabular text-right text-[15px] font-semibold text-ink-900">{v}</dd>
    </div>
  );
}

function commonUses(c: City, stateName: string) {
  const base = [
    {
      k: "Debt consolidation",
      v: `Roll multiple high-APR credit-card balances into a single fixed-payment personal loan. ${c.name} borrowers use this to lower their effective interest rate and finish payoff on a defined date.`,
    },
    {
      k: "Medical expenses",
      v: `Cover an unexpected medical bill or pay down a hospital balance over predictable monthly payments, rather than letting it accrue interest on a credit card.`,
    },
  ];
  const tierExtra = c.tier === "large" ? {
    k: "Home repairs and improvements",
    v: `Older housing stock in larger ${stateName} metros means furnace replacements, roof repairs, kitchen upgrades, and weather-related damage. A personal loan can cover the bill without requiring home equity.`,
  } : c.tier === "mid" ? {
    k: "Auto repair or replacement",
    v: `When the family vehicle becomes essential and breaks down, a personal loan can keep ${c.name} residents on the road without leaning on high-APR financing at the dealership.`,
  } : {
    k: "Bridging short-term cash needs",
    v: `Smaller-metro borrowers use personal loans to smooth seasonal income variability, cover relocation deposits, or fund a one-time expense that doesn't fit neatly on a credit card.`,
  };
  const closing = {
    k: "Moving and relocation",
    v: `Security deposits, movers, and utility setup add up. A personal loan can smooth the transition without draining your savings.`,
  };
  return [base[0], tierExtra, base[1], closing];
}

function buildCityFaq(c: City, s: { name: string; abbr: string; aprCap: number | null; regulator: string }) {
  return [
    {
      q: `Can I get a personal loan in ${c.name}, ${s.abbr}?`,
      a: `Yes. Lenders in our partner network make loans available to ${c.name} residents who are at least 18 years old, have a steady income, and have an active checking account.${s.aprCap ? ` ${s.name} caps APRs at ${s.aprCap}%, so offers in ${c.name} respect that ceiling.` : ""}`,
    },
    {
      q: `What APR can I expect in ${c.name}?`,
      a: s.aprCap
        ? `${s.name} caps unsecured consumer loans at ${s.aprCap}% APR, so personal-loan offers in ${c.name} fall at or below that ceiling. Your specific rate depends on your credit, the loan amount, and the term.`
        : `Personal-loan APRs in ${c.name} typically range from 5.99% to 35.99% depending on the lender, your credit, the loan amount, and the term you choose. Your actual rate is determined by the lender, not by us.`,
    },
    {
      q: `Will applying affect my credit score?`,
      a: `No. Submitting a request through Get Advance Loan performs only a soft credit inquiry, which does not affect your credit score. If you accept a final offer, the lender may perform a hard inquiry to finalise the loan.`,
    },
    {
      q: `How fast will funds arrive in ${c.name}?`,
      a: `After you accept and e-sign with the lender, funds are typically deposited to your checking account by the next business day via ACH. Timing can depend on your bank's processing schedule.`,
    },
    {
      q: `Who regulates lenders that serve ${c.name}?`,
      a: `The ${s.regulator} oversees consumer lenders making loans to ${s.name} residents, including those in ${c.name}. You can also file complaints with the federal Consumer Financial Protection Bureau (CFPB).`,
    },
  ];
}
