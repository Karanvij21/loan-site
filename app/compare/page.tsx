import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
} from "@/components/seo/JsonLd";
import { comparisons } from "@/lib/comparisons";
import { HeroPattern } from "@/components/HeroPattern";

export const metadata: Metadata = {
  title: "Loan Comparisons: Personal Loan vs Card, HELOC, 401(k), Payday Loan",
  description:
    "Side-by-side comparisons of personal loans against credit cards, HELOCs, payday loans, 401(k) loans, balance transfers, and more. Costs, risks, and when each option wins.",
  alternates: { canonical: "/compare" },
  openGraph: {
    title: "Loan Comparisons",
    description: "Side-by-side personal-loan comparisons.",
    url: "/compare",
  },
};

const PAGE_URL = `${siteConfig.url}/compare`;

export default function CompareIndex() {
  const entries = Object.values(comparisons);
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Compare", url: PAGE_URL },
        ]}
      />
      <ItemListJsonLd
        name="Loan comparison pages"
        url={PAGE_URL}
        items={entries.map((c) => ({
          name: c.h1,
          url: `${siteConfig.url}/compare/${c.slug}`,
          description: c.intro,
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
          <span className="text-ink-900">Compare</span>
        </nav>

        <header className="mt-8 max-w-[760px]">
          <span className="eyebrow">Side-by-side</span>
          <h1 className="mt-3 text-[40px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
            Loan <span className="text-forest-700">comparisons</span>.
          </h1>
          <p className="mt-6 text-[18px] leading-[1.55] text-ink-700">
            Eight head-to-head comparisons covering the most common alternatives to a personal loan. Each page lists APR ranges, repayment structure, credit-score impact, and a scenario-by-scenario verdict on which option costs less.
          </p>
        </header>

        <dl className="mt-14 grid gap-5 sm:grid-cols-2">
          {entries.map((c, i) => (
            <Link
              key={c.slug}
              href={`/compare/${c.slug}`}
              className="group rounded-2xl border border-cream-300 bg-cream-50/60 p-6 transition-colors hover:bg-cream-100 hover:border-cream-400"
            >
              <span className="tabular text-[14px] font-semibold text-ink-300">{String(i + 1).padStart(2, "0")}</span>
              <dt className="mt-2 text-[20px] font-semibold text-ink-900 group-hover:text-forest-700">
                {c.h1}
              </dt>
              <dd className="mt-2 text-[14px] leading-[1.55] text-ink-700">{c.intro}</dd>
              <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-forest-700">
                Read comparison
                <svg width="12" height="12" viewBox="0 0 14 14" aria-hidden fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </dl>
      </article>
    </>
  );
}
