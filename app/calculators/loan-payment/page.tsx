import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  HowToJsonLd,
  SoftwareApplicationJsonLd,
  SpeakableJsonLd,
} from "@/components/seo/JsonLd";
import { defaultAuthor, defaultReviewer, authorUrl } from "@/lib/authors";
import { PaymentCalc } from "./PaymentCalc";

const PUBLISHED = "2026-02-08";
const REVIEWED = "2026-05-22";
const URL = `${siteConfig.url}/calculators/loan-payment`;

export const metadata: Metadata = {
  title: "Personal Loan Payment Calculator, Monthly Payment, Interest, Total Cost",
  description:
    "Calculate the monthly payment, total interest, and total cost on a personal loan. Adjust amount, APR, and term to see how each lever affects the math.",
  alternates: { canonical: "/calculators/loan-payment" },
  openGraph: {
    title: "Personal Loan Payment Calculator",
    description: "Monthly payment, total interest, total cost.",
    url: "/calculators/loan-payment",
  },
};

export default function PaymentCalcPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Calculators", url: `${siteConfig.url}/calculators` },
          { name: "Loan payment", url: URL },
        ]}
      />
      <ArticleJsonLd
        headline="Personal Loan Payment Calculator"
        description="Estimate your fixed monthly payment, total interest, and total cost on a personal loan."
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
        name="How to calculate a personal loan monthly payment"
        description="Use the standard amortisation formula to estimate the monthly payment, total interest, and total cost of a personal loan."
        totalTime="PT1M"
        steps={[
          { name: "Enter the loan amount", text: "Set the principal you want to borrow. Personal-loan amounts in our network run from $500 to $50,000." },
          { name: "Enter the APR", text: "Use the APR a lender has quoted or a representative number for your credit profile (typically 6% to 35.99%)." },
          { name: "Enter the term in months", text: "Pick a repayment term. Longer terms lower the monthly payment but raise total interest paid." },
          { name: "Read the results", text: "The calculator returns the fixed monthly payment, the total interest you'll pay over the loan, and the total amount you'll repay." },
        ]}
      />
      <SpeakableJsonLd url={URL} cssSelectors={[".calc-intro"]} />
      <SoftwareApplicationJsonLd
        name="Loan payment calculator"
        description="Free in-browser personal-loan payment calculator. Computes monthly payment, total interest, and total cost from loan amount, APR, and term."
        url={URL}
      />

      <article className="mx-auto max-w-[1080px] px-6 py-20 lg:px-10 lg:py-28">
        <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[12px] text-ink-500">
          <Link href="/" className="hover:text-ink-900">Home</Link>
          <span className="text-ink-300">/</span>
          <Link href="/calculators" className="hover:text-ink-900">Calculators</Link>
          <span className="text-ink-300">/</span>
          <span className="text-ink-900">Loan payment</span>
        </nav>

        <header className="mt-8 max-w-[760px]">
          <span className="eyebrow">Calculator</span>
          <h1 className="mt-3 text-[40px] leading-[1.02] tracking-tight text-ink-900 lg:text-[56px]">
            Loan payment calculator.
          </h1>
          <p className="calc-intro mt-6 text-[17px] leading-[1.6] text-ink-700">
            Enter a loan amount, APR, and term. The calculator returns your fixed monthly payment, the total interest you'll pay over the loan, and the total amount you'll repay. All math runs locally in your browser; nothing is sent anywhere.
          </p>
        </header>

        <section className="mt-12 rounded-[18px] border border-cream-300 p-6 lg:p-8">
          <PaymentCalc />
        </section>

        <section className="mt-14 max-w-[760px]">
          <h2 className="text-[24px] leading-[1.15] tracking-tight text-ink-900 lg:text-[32px]">
            How the math works
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-ink-700">
            Fixed-rate installment loans (personal loans, auto loans, most mortgages) use a standard amortisation formula to determine the fixed monthly payment:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-ink-900 p-5 text-[14px] text-cream-100">
{`M = P × r × (1 + r)^n
        ─────────────
        (1 + r)^n − 1`}
          </pre>
          <ul className="mt-5 space-y-2 text-[15px] text-ink-700">
            <li><strong className="text-ink-900">M</strong> = monthly payment</li>
            <li><strong className="text-ink-900">P</strong> = principal (loan amount)</li>
            <li><strong className="text-ink-900">r</strong> = monthly interest rate (APR ÷ 12 ÷ 100)</li>
            <li><strong className="text-ink-900">n</strong> = number of monthly payments (loan term in months)</li>
          </ul>
          <p className="mt-5 text-[15px] leading-[1.7] text-ink-700">
            Total interest is simply (M × n) − P. This calculator doesn't include origination fees; a lender's true effective APR will be higher than the stated rate once fees are rolled in. Use the <Link href="/calculators/apr" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">APR calculator</Link> to model fees.
          </p>
        </section>

        <section className="mt-14 rounded-[14px] bg-forest-700 p-6 text-cream-100 lg:p-8">
          <h2 className="text-[22px] leading-[1.2] tracking-tight lg:text-[28px]">
            Like the numbers?
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed opacity-90">
            See real offers from lenders in our network in about two minutes. Soft credit check only.
          </p>
          <Link
            href="/apply"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream-100 px-5 py-3 text-[14px] font-semibold text-ink-900 transition-colors hover:bg-cream-200"
          >
            Compare real offers
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </section>
      </article>
    </>
  );
}
