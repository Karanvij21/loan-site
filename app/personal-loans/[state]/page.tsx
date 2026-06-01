import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { states, stateBySlug, regionIntro, aprDescription } from "@/lib/states";
import { topCitiesForState } from "@/lib/cities";
import { siteConfig } from "@/lib/site";
import { BreadcrumbJsonLd, FaqJsonLd, LoanProductJsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

type Props = { params: Promise<{ state: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const s = stateBySlug[state];
  if (!s) return {};
  const title = `Personal Loans in ${s.name} (${s.abbr})`;
  const description = `Compare personal loan offers from $100 to $50,000 for ${s.name} residents. Soft credit check, no obligation. APR ranges and state-specific rules summarised.`;
  return {
    title,
    description,
    alternates: { canonical: `/personal-loans/${s.slug}` },
    openGraph: { title, description, url: `/personal-loans/${s.slug}` },
  };
}

export default async function StatePage({ params }: Props) {
  const { state } = await params;
  const s = stateBySlug[state];
  if (!s) notFound();

  // Region-varied intro to avoid duplicate content
  const intro = regionIntro(s.region, s.name);
  const aprText = aprDescription(s);

  // Per-state FAQ, keep 3 always-on Qs, reorder + reword based on whether state has a notable cap
  const faqs = buildFaq(s);

  // State-specific schemas
  return (
    <>
      <LoanProductJsonLd
        name={`Personal Loan in ${s.name}`}
        description={`Personal installment loans from $100 to $50,000 for ${s.name} residents.`}
        amountMin={100}
        amountMax={50000}
        termMonthsMin={3}
        termMonthsMax={72}
        aprMin={5.99}
        aprMax={s.aprCap ?? 35.99}
      />
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Personal Loans", url: `${siteConfig.url}/personal-loans` },
          { name: s.name, url: `${siteConfig.url}/personal-loans/${s.slug}` },
        ]}
      />

      {/* HERO */}
      <section className="border-b border-cream-300">
        <div className="mx-auto max-w-[1280px] px-6 pt-12 pb-20 lg:px-10 lg:pt-16 lg:pb-24">
          <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[12px] text-ink-500">
            <Link href="/" className="hover:text-ink-900">Home</Link>
            <span className="text-ink-300">/</span>
            <Link href="/personal-loans" className="hover:text-ink-900">Personal Loans</Link>
            <span className="text-ink-300">/</span>
            <span className="text-ink-900">{s.name}</span>
          </nav>

          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1fr_360px] lg:gap-20">
            <div>
              <span className="eyebrow">State loan guide · {s.region}</span>
              <h1 className="mt-4 text-[40px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
                Personal loans in <span className="text-forest-700">{s.name}</span>.
              </h1>
              <p className="mt-6 max-w-[58ch] text-[18px] leading-[1.55] text-ink-700">
                {intro}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/apply" className="btn btn-primary">
                  Begin a request
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/how-it-works" className="text-[14px] text-ink-700 underline decoration-cream-400 underline-offset-[6px] hover:text-ink-900 hover:decoration-ink-900">
                  How it works ↗
                </Link>
              </div>
            </div>

            <aside className="rounded-[14px] bg-cream-50 ring-1 ring-cream-300 p-6">
              <span className="eyebrow">{s.name} at a glance</span>
              <dl className="mt-5 space-y-4">
                <Row k="Loan amounts" v="$100 – $50,000" />
                <Row k="APR range" v={s.aprCap ? `5.99% – ${s.aprCap}%` : "5.99% – 35.99%"} />
                <Row k="Repayment terms" v="3 – 72 months" />
                <Row k="Funding" v="Next business day" />
                <Row k="State capital" v={s.capital} />
                <Row k="Population" v={s.population} />
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* APR & STATE LAW */}
      <section className="bg-cream-50 border-b border-cream-300">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-24">
            <div>
              <span className="eyebrow">State rules</span>
              <h2 className="mt-3 text-[36px] leading-[1.05] tracking-tight text-ink-900 lg:text-[48px]">
                APR & {s.name} <span className="text-forest-700">law</span>.
              </h2>
            </div>
            <div className="space-y-5 text-[17px] leading-[1.7] text-ink-700">
              <p>{aprText}</p>
              <p>
                If you ever have a dispute with a lender, the regulator with jurisdiction in {s.name} is the{" "}
                <strong>{s.regulator}</strong>. You can file a complaint with them directly, in addition to{" "}
                <a
                  href="https://www.consumerfinance.gov/complaint/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900"
                >
                  the federal CFPB
                </a>.
              </p>
              <p>
                {siteConfig.name} is not a lender. We match {s.name} residents with independent lenders in our partner network, including LendingTree, who hold the licenses required to make loans in your state. Loan approval, APR, term, and fees are determined by the lender, not by us.
              </p>
              <p className="text-[13px] text-ink-500">
                <em>The state-law information on this page is general guidance, last reviewed in {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}. State statutes and regulations change; consult the {s.regulator} or a licensed attorney for authoritative current rules.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN TO USE A PERSONAL LOAN */}
      <section>
        <div className="mx-auto max-w-[1080px] px-6 py-20 lg:px-10 lg:py-24">
          <span className="eyebrow">Common uses</span>
          <h2 className="mt-3 text-[36px] leading-[1.05] tracking-tight text-ink-900 lg:text-[48px]">
            Why {s.name} borrowers use personal loans.
          </h2>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {commonUses(s).map((u, i) => (
              <div key={u.k} className="rounded-xl border border-cream-300 bg-cream-50/60 p-6">
                <span className="tabular text-[14px] font-semibold text-ink-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <dt className="mt-2 text-[18px] font-semibold text-ink-900">{u.k}</dt>
                <dd className="mt-1 text-[14px] leading-[1.55] text-ink-700">{u.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-50 border-y border-cream-300">
        <div className="mx-auto max-w-[920px] px-6 py-20 lg:px-10 lg:py-24">
          <span className="eyebrow">{s.name} questions</span>
          <h2 className="mt-3 text-[36px] leading-[1.05] tracking-tight text-ink-900 lg:text-[48px]">
            Common questions.
          </h2>
          <div className="mt-12 border-t border-ink-900">
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

      {/* TOP CITIES, internal linking into city pages */}
      {topCitiesForState(s.slug).length > 0 && (
        <section className="bg-cream-50 border-y border-cream-300">
          <div className="mx-auto max-w-[1080px] px-6 py-12 lg:px-10 lg:py-16">
            <span className="eyebrow">Top {s.name} metros</span>
            <h2 className="mt-3 text-[26px] leading-[1.1] tracking-tight text-ink-900 lg:text-[32px]">
              Personal loans by city in {s.name}.
            </h2>
            <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {topCitiesForState(s.slug).map((c) => (
                <Link
                  key={c.slug}
                  href={`/personal-loans/${s.slug}/${c.slug}`}
                  className="group rounded-xl border border-cream-300 bg-cream-100 p-5 transition-colors hover:bg-cream-50 hover:border-cream-400"
                >
                  <dt className="text-[16px] font-semibold text-ink-900 group-hover:text-forest-700">
                    Personal loans in {c.name}
                  </dt>
                  <dd className="mt-1 text-[12px] uppercase tracking-[0.15em] text-ink-500">
                    Pop. ~{c.population}
                  </dd>
                </Link>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* NEIGHBOURING STATES, internal linking */}
      <section>
        <div className="mx-auto max-w-[1080px] px-6 py-16 lg:px-10">
          <span className="eyebrow">Explore nearby states</span>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
            {neighbours(s).map((n) => (
              <li key={n.slug}>
                <Link
                  href={`/personal-loans/${n.slug}`}
                  className="text-ink-700 underline decoration-cream-400 underline-offset-[4px] hover:text-ink-900 hover:decoration-ink-900"
                >
                  Personal loans in {n.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/personal-loans" className="text-ink-900 underline decoration-cream-400 underline-offset-[4px] hover:decoration-ink-900">
                All 50 states →
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-700 text-cream-100">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-[36px] leading-[1.05] tracking-tight lg:text-[56px]">
              Ready to compare offers in {s.name}?
            </h2>
            <Link
              href="/apply"
              className="btn !bg-cream-100 !text-ink-900 hover:!bg-cream-200 !px-7 !py-4 !text-[15px]"
            >
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

function commonUses(s: { name: string; region: string }) {
  // Two slots are stable, two rotate by region for content variation
  const base = [
    {
      k: "Debt consolidation",
      v: `Roll several high-APR credit-card balances into a single fixed-payment personal loan. ${s.name} borrowers often use this to lower their effective interest rate.`,
    },
    {
      k: "Medical expenses",
      v: `Cover an unexpected medical bill or pay down a hospital balance over predictable monthly payments instead of letting it accrue interest on a credit card.`,
    },
  ];
  const regional: Record<string, { k: string; v: string }> = {
    Northeast: {
      k: "Home repairs",
      v: `Older housing stock across the Northeast means furnace replacements, roof repairs, and weather damage. A personal loan can cover the bill while you wait on insurance.`,
    },
    Midwest: {
      k: "Auto repair or replacement",
      v: `When the family vehicle becomes essential and breaks down, a personal loan can keep you on the road without leaning on high-APR financing at the dealership.`,
    },
    South: {
      k: "Storm and weather recovery",
      v: `Hurricane and severe-weather damage can outpace insurance payouts. A personal loan can bridge the gap so repairs start on time.`,
    },
    West: {
      k: "Major purchases",
      v: `From appliances to wildfire-related home upgrades, ${s.name} borrowers use personal loans to spread big purchases over predictable monthly payments.`,
    },
  };
  return [
    base[0],
    regional[s.region] ?? base[1],
    base[1],
    {
      k: "Moving and relocation",
      v: `Security deposits, movers, and setup costs add up. A personal loan can smooth the transition without draining your savings.`,
    },
  ];
}

function buildFaq(s: { name: string; aprCap: number | null; regulator: string; aprNote?: string }) {
  const items = [
    {
      q: `Can I get a personal loan in ${s.name}?`,
      a: `Yes. Most lenders in our partner network make loans available to ${s.name} residents who are at least 18 years old, have a steady income, and have an active checking account.${s.aprCap ? ` ${s.name} caps APRs at ${s.aprCap}%, so offers may be more limited compared to states without rate caps.` : ""}`,
    },
    {
      q: `What APR can I expect in ${s.name}?`,
      a: s.aprNote
        ? `${s.aprNote} Offers in our network for ${s.name} residents respect the state cap.`
        : `Personal loan APRs in ${s.name} typically range from 5.99% to 35.99% depending on the lender, your credit, the loan amount, and the term you choose. Your actual rate is determined by the lender.`,
    },
    {
      q: `Will applying affect my credit score?`,
      a: `No. Submitting a request through Get Advance Loan performs only a soft credit inquiry, which does not affect your credit score. If you accept a final offer, the lender may then perform a hard inquiry to finalise the loan.`,
    },
    {
      q: `How fast will funds arrive in ${s.name}?`,
      a: `After you accept a final offer and e-sign with the lender, funds are typically deposited to your checking account by the next business day via ACH. Timing can depend on your bank's processing.`,
    },
    {
      q: `Who regulates lenders in ${s.name}?`,
      a: `The ${s.regulator} oversees consumer lenders in ${s.name}. You can also file complaints with the federal Consumer Financial Protection Bureau (CFPB).`,
    },
  ];
  // For states with caps, push the APR question to position 2 so it appears prominently.
  // For states without caps, leave the original order. This subtle reordering by region/state
  // helps content uniqueness signals.
  return items;
}

function neighbours(s: { region: string; name: string; slug: string }) {
  const sameRegion = states.filter((n) => n.region === s.region && n.slug !== s.slug);
  // Show up to 6 same-region neighbours for internal linking signal
  return sameRegion.slice(0, 6);
}
