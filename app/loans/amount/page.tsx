import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
} from "@/components/seo/JsonLd";
import { amounts, monthlyPayment } from "@/lib/amounts";
import { formatCurrency } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Personal Loans by Amount 2026: $500-$50,000, Example Payments & APRs",
  description:
    "Browse personal-loan details by exact amount: $500, $1,000, $3,000, $5,000, $10,000, $15,000, $20,000, $50,000. APR ranges, example monthly payments, and term options. Soft check.",
  alternates: { canonical: "/loans/amount" },
  openGraph: {
    title: "Personal Loans by Amount",
    description: "$500 to $50,000 personal loan pages, with example monthly payments.",
    url: "/loans/amount",
  },
};

const PAGE_URL = `${siteConfig.url}/loans/amount`;

export default function AmountIndex() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Loans", url: `${siteConfig.url}/loans/personal` },
          { name: "By amount", url: PAGE_URL },
        ]}
      />
      <ItemListJsonLd
        name="Personal loans by amount"
        url={PAGE_URL}
        items={amounts.map((a) => ({
          name: `${formatCurrency(a.amount)} personal loan`,
          url: `${siteConfig.url}/loans/amount/${a.slug}`,
          description: `Example: ${a.exampleApr}% APR over ${a.exampleTermMonths} months.`,
        }))}
      />

      <article className="mx-auto max-w-[1080px] px-6 py-20 lg:px-10 lg:py-28">
        <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[12px] text-ink-500">
          <Link href="/" className="hover:text-ink-900">Home</Link>
          <span className="text-ink-300">/</span>
          <Link href="/loans/personal" className="hover:text-ink-900">Loans</Link>
          <span className="text-ink-300">/</span>
          <span className="text-ink-900">By amount</span>
        </nav>

        <header className="mt-8 max-w-[760px]">
          <span className="eyebrow">Browse by amount</span>
          <h1 className="mt-3 text-[40px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
            Personal loans, <span className="text-forest-700">by exact amount</span>.
          </h1>
          <p className="mt-6 text-[18px] leading-[1.55] text-ink-700">
            APR ranges, example monthly payments, and term options for the most common personal-loan amounts in our network.
          </p>
        </header>

        <dl className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {amounts.map((a) => {
            const monthly = Math.round(monthlyPayment(a.amount, a.exampleApr, a.exampleTermMonths));
            return (
              <Link
                key={a.slug}
                href={`/loans/amount/${a.slug}`}
                className="group rounded-2xl border border-cream-300 bg-cream-50/60 p-6 transition-colors hover:bg-cream-100 hover:border-cream-400"
              >
                <dt className="text-[28px] tracking-tight text-ink-900 group-hover:text-forest-700">
                  {formatCurrency(a.amount)}
                </dt>
                <dd className="mt-2 text-[13px] text-ink-500">
                  APR {a.aprMin}% – {a.aprMax}% · {a.termMin}-{a.termMax} mo
                </dd>
                <dd className="mt-4 text-[14px] text-ink-700">
                  Example: <span className="tabular text-ink-900">{formatCurrency(monthly)}/mo</span> at {a.exampleApr}% over {a.exampleTermMonths} months
                </dd>
              </Link>
            );
          })}
        </dl>
      </article>
    </>
  );
}
