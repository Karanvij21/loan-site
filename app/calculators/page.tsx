import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
} from "@/components/seo/JsonLd";
import { HeroPattern } from "@/components/HeroPattern";

export const metadata: Metadata = {
  title: "Free Loan Calculators 2026: Monthly Payment, APR, Debt Payoff & Affordability",
  description:
    "Four free personal loan calculators: estimate monthly payment, compare effective APR with fees included, model a debt payoff, and find the loan amount your budget can support.",
  alternates: { canonical: "/calculators" },
  openGraph: {
    title: "Free Loan Calculators",
    description: "Loan payment, APR, debt payoff, and affordability calculators.",
    url: "/calculators",
  },
};

const PAGE_URL = `${siteConfig.url}/calculators`;

const calcs = [
  {
    slug: "loan-payment",
    title: "Loan payment calculator",
    blurb: "Enter loan amount, APR, and term to estimate your fixed monthly payment, total interest, and total cost.",
  },
  {
    slug: "apr",
    title: "APR calculator",
    blurb: "See the true effective APR of a loan offer once origination fees and other charges are included. The number to use when comparing lenders.",
  },
  {
    slug: "debt-payoff",
    title: "Debt payoff calculator",
    blurb: "Model how long it will take to pay off a credit-card balance and how much interest you'll pay, with and without consolidating into a personal loan.",
  },
  {
    slug: "affordability",
    title: "Loan affordability calculator",
    blurb: "Work backwards from a monthly budget to figure out the loan amount you can comfortably afford at a given APR and term.",
  },
];

export default function CalculatorsIndex() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Calculators", url: PAGE_URL },
        ]}
      />
      <ItemListJsonLd
        name="Loan calculators"
        url={PAGE_URL}
        items={calcs.map((c) => ({
          name: c.title,
          url: `${siteConfig.url}/calculators/${c.slug}`,
          description: c.blurb,
        }))}
      />

      <article className="relative mx-auto max-w-[1080px] overflow-hidden px-6 py-20 lg:px-10 lg:py-28">
        <HeroPattern
          variant="data"
          className="pointer-events-none absolute right-0 top-0 hidden h-[320px] w-[320px] -translate-y-8 translate-x-8 text-forest-700/12 lg:block"
        />
        <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[12px] text-ink-500">
          <Link href="/" className="hover:text-ink-900">Home</Link>
          <span className="text-ink-300">/</span>
          <span className="text-ink-900">Calculators</span>
        </nav>

        <header className="mt-8 max-w-[760px]">
          <span className="eyebrow">Free tools</span>
          <h1 className="mt-3 text-[40px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
            Loan <span className="text-forest-700">calculators</span>.
          </h1>
          <p className="mt-6 text-[18px] leading-[1.55] text-ink-700">
            Four no-signup calculators for the most common personal-loan math. Every calculation happens in your browser; nothing is sent to a server, and we don't pull credit or save your inputs.
          </p>
        </header>

        <dl className="mt-14 grid gap-5 sm:grid-cols-2">
          {calcs.map((c, i) => (
            <Link
              key={c.slug}
              href={`/calculators/${c.slug}`}
              className="group rounded-2xl border border-cream-300 bg-cream-50/60 p-6 transition-colors hover:bg-cream-100 hover:border-cream-400"
            >
              <span className="tabular text-[14px] font-semibold text-ink-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <dt className="mt-2 text-[20px] font-semibold text-ink-900 group-hover:text-forest-700">
                {c.title}
              </dt>
              <dd className="mt-2 text-[14px] leading-[1.55] text-ink-700">{c.blurb}</dd>
              <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-forest-700">
                Open calculator
                <svg width="12" height="12" viewBox="0 0 14 14" aria-hidden fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </dl>

        <section className="mt-16 rounded-[14px] border border-cream-300 p-6 text-[14px] text-ink-700 lg:p-8">
          <p>
            <strong className="text-ink-900">A note on accuracy.</strong> Our calculators use the standard amortisation formula and round-trip to two decimal places at the end. Real lender offers may include fees, rate adjustments based on your specific credit profile, or APR adjustments based on automatic-payment enrolment. Always compare the final APR disclosed in your lender's loan agreement before signing.
          </p>
        </section>
      </article>
    </>
  );
}
