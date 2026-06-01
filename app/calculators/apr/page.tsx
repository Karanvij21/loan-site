import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  HowToJsonLd,
  SpeakableJsonLd,
} from "@/components/seo/JsonLd";
import { defaultAuthor, defaultReviewer, authorUrl } from "@/lib/authors";
import { AprCalc } from "./AprCalc";

const PUBLISHED = "2026-02-08";
const REVIEWED = "2026-05-22";
const URL = `${siteConfig.url}/calculators/apr`;

export const metadata: Metadata = {
  title: "APR Calculator: Find the True Effective APR With Fees",
  description:
    "Calculate the true effective APR of a personal loan once origination fees are included. The number lenders are required to disclose under TILA.",
  alternates: { canonical: "/calculators/apr" },
  openGraph: {
    title: "APR Calculator",
    description: "True effective APR including origination fees.",
    url: "/calculators/apr",
  },
};

export default function AprCalcPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Calculators", url: `${siteConfig.url}/calculators` },
          { name: "APR calculator", url: URL },
        ]}
      />
      <ArticleJsonLd
        headline="APR Calculator"
        description="Calculate the true effective APR of a loan once origination fees are included."
        url={URL}
        datePublished={PUBLISHED}
        dateModified={REVIEWED}
        authorName={defaultAuthor.name}
        authorUrl={authorUrl(defaultAuthor)}
        reviewerName={defaultReviewer.name}
        reviewerUrl={authorUrl(defaultReviewer)}
        articleSection="Calculators"
      />
      <HowToJsonLd
        name="How to calculate the effective APR of a personal loan"
        description="Use the stated rate, origination fee, and term to compute the true effective APR a borrower pays."
        steps={[
          { name: "Enter the loan amount", text: "The principal amount the lender will originate." },
          { name: "Enter the stated interest rate", text: "The note rate the lender has quoted, before fees." },
          { name: "Enter the origination fee", text: "Most lenders charge 1% to 8% of the loan amount, deducted from disbursed funds." },
          { name: "Enter the term", text: "The number of months the loan will be repaid over." },
          { name: "Read the effective APR", text: "The effective APR is the true cost of the loan once the fee is rolled in. It will exceed the stated rate." },
        ]}
      />
      <SpeakableJsonLd url={URL} cssSelectors={[".calc-intro"]} />

      <article className="mx-auto max-w-[1080px] px-6 py-20 lg:px-10 lg:py-28">
        <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[12px] text-ink-500">
          <Link href="/" className="hover:text-ink-900">Home</Link>
          <span className="text-ink-300">/</span>
          <Link href="/calculators" className="hover:text-ink-900">Calculators</Link>
          <span className="text-ink-300">/</span>
          <span className="text-ink-900">APR calculator</span>
        </nav>

        <header className="mt-8 max-w-[760px]">
          <span className="eyebrow">Calculator</span>
          <h1 className="mt-3 text-[40px] leading-[1.02] tracking-tight text-ink-900 lg:text-[56px]">
            APR calculator.
          </h1>
          <p className="calc-intro mt-6 text-[17px] leading-[1.6] text-ink-700">
            A loan's stated interest rate isn't its true cost. Once the lender deducts an origination fee, you receive less cash but still owe the full principal, so the effective APR runs higher. Use this calculator to compare loan offers on a like-for-like basis, the way the Truth in Lending Act intends.
          </p>
        </header>

        <section className="mt-12 rounded-[18px] border border-cream-300 p-6 lg:p-8">
          <AprCalc />
        </section>

        <section className="mt-14 max-w-[760px]">
          <h2 className="text-[24px] leading-[1.15] tracking-tight text-ink-900 lg:text-[32px]">
            Why effective APR matters
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-ink-700">
            The federal <Link href="/glossary/tila" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">Truth in Lending Act</Link> requires U.S. lenders to disclose APR, not just the stated note rate, so that consumers can compare offers apples-to-apples. The APR includes interest plus most mandatory fees, most importantly the origination fee, which can add several percentage points to the headline number.
          </p>
          <p className="mt-4 text-[16px] leading-[1.7] text-ink-700">
            <strong className="text-ink-900">Example:</strong> A $10,000 loan at 12% over 36 months with a 5% origination fee. The borrower receives $9,500 in cash but repays $10,000 at the 12% rate. The effective APR works out to about 15.4%, meaningfully higher than the headline 12%. A lender quoting 13% with no fee may actually be the cheaper loan.
          </p>
        </section>

        <section className="mt-14 rounded-[14px] bg-forest-700 p-6 text-cream-100 lg:p-8">
          <h2 className="text-[22px] leading-[1.2] tracking-tight lg:text-[28px]">
            Compare real APRs.
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed opacity-90">
            Get fee-adjusted APR quotes from our lender network. Soft credit check, no obligation.
          </p>
          <Link
            href="/apply"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream-100 px-5 py-3 text-[14px] font-semibold text-ink-900 transition-colors hover:bg-cream-200"
          >
            Compare offers
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </section>
      </article>
    </>
  );
}
