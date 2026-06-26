import type { Metadata } from "next";
import Link from "next/link";
import { states, type Region } from "@/lib/states";
import { siteConfig } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Personal Loans by State 2026: $100-$50,000, APR Caps & Lender Rules",
  description: "Compare personal loan offers in every U.S. state. State-specific APR caps, lender requirements, and borrower protections. Soft credit check, funds next day.",
  alternates: { canonical: "/personal-loans" },
};

const regions: Region[] = ["Northeast", "Midwest", "South", "West"];

export default function PersonalLoansHub() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Personal Loans", url: `${siteConfig.url}/personal-loans` },
        ]}
      />

      {/* HERO */}
      <section className="border-b border-cream-300">
        <div className="mx-auto max-w-[1280px] px-6 pt-12 pb-16 lg:px-10 lg:pt-16 lg:pb-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[12px] text-ink-500">
            <Link href="/" className="hover:text-ink-900">Home</Link>
            <span className="text-ink-300">/</span>
            <span className="text-ink-900">Personal Loans</span>
          </nav>
          <span className="eyebrow mt-8 block">State coverage</span>
          <h1 className="mt-3 text-[44px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
            Personal loans, <span className="text-forest-700">every state</span>.
          </h1>
          <p className="mt-6 max-w-[58ch] text-[18px] leading-[1.55] text-ink-700">
            Each state guide summarises the loan amounts, APR ranges, repayment terms, and state-specific rules that apply where you live. Click any state to learn more and start a request.
          </p>
        </div>
      </section>

      {/* STATE LIST GROUPED BY REGION */}
      <section>
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="space-y-14">
            {regions.map((region) => {
              const inRegion = states.filter((s) => s.region === region);
              return (
                <div key={region}>
                  <div className="flex items-baseline justify-between border-b border-ink-900 pb-3">
                    <h2 className="text-[24px] font-semibold tracking-tight text-ink-900 lg:text-[28px]">
                      {region}
                    </h2>
                    <span className="text-[12px] tabular text-ink-500">
                      {inRegion.length} {inRegion.length === 1 ? "state" : "states"}
                    </span>
                  </div>
                  <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
                    {inRegion.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/personal-loans/${s.slug}`}
                          className="group flex items-baseline justify-between gap-3 border-b border-cream-300 py-2 text-[15px] text-ink-700 hover:text-ink-900"
                        >
                          <span className="truncate">{s.name}</span>
                          <span className="shrink-0 text-[11px] text-ink-300 group-hover:text-ink-700">
                            {s.abbr} →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-700 text-cream-100">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-[36px] leading-[1.05] tracking-tight lg:text-[56px]">
              Compare offers in your state.
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
