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
import { AffordabilityCalc } from "./AffordabilityCalc";

const PUBLISHED = "2026-02-12";
const REVIEWED = "2026-05-22";
const URL = `${siteConfig.url}/calculators/affordability`;

export const metadata: Metadata = {
  title: "Loan Affordability Calculator: How Much Can I Borrow?",
  description:
    "Work backwards from a monthly budget to figure out the personal-loan amount you can comfortably afford at a given APR and term. Includes a DTI sanity check.",
  alternates: { canonical: "/calculators/affordability" },
  openGraph: {
    title: "Loan Affordability Calculator",
    description: "How much loan can I afford at a given monthly payment?",
    url: "/calculators/affordability",
  },
};

export default function AffordabilityPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Calculators", url: `${siteConfig.url}/calculators` },
          { name: "Affordability", url: URL },
        ]}
      />
      <ArticleJsonLd
        headline="Loan Affordability Calculator"
        description="Determine the loan amount you can afford given a monthly budget, APR, and term."
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
        name="How to figure out how much loan you can afford"
        description="Work backwards from a monthly payment you're comfortable with to find the loan amount that fits, then sanity-check it against debt-to-income."
        steps={[
          { name: "Decide what monthly payment you can afford", text: "Look at your monthly budget. A reasonable rule of thumb is that total debt service stays under 40% of gross income." },
          { name: "Pick a likely APR", text: "Use the APR you'd qualify for based on your credit profile, or a representative rate from a recent quote." },
          { name: "Choose a term", text: "Longer terms allow a larger loan at the same payment, but raise total interest paid." },
          { name: "Read the maximum loan amount", text: "The calculator returns the largest principal that fits your monthly payment at the chosen APR and term." },
          { name: "Check the DTI impact", text: "The DTI section flags whether the new loan would push your debt-to-income ratio above the 40% threshold most lenders use." },
        ]}
      />
      <SpeakableJsonLd url={URL} cssSelectors={[".calc-intro"]} />

      <article className="mx-auto max-w-[1080px] px-6 py-20 lg:px-10 lg:py-28">
        <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[12px] text-ink-500">
          <Link href="/" className="hover:text-ink-900">Home</Link>
          <span className="text-ink-300">/</span>
          <Link href="/calculators" className="hover:text-ink-900">Calculators</Link>
          <span className="text-ink-300">/</span>
          <span className="text-ink-900">Affordability</span>
        </nav>

        <header className="mt-8 max-w-[760px]">
          <span className="eyebrow">Calculator</span>
          <h1 className="mt-3 text-[40px] leading-[1.02] tracking-tight text-ink-900 lg:text-[56px]">
            How much can I afford?
          </h1>
          <p className="calc-intro mt-6 text-[17px] leading-[1.6] text-ink-700">
            Most loan calculators start with the loan amount and tell you the payment. This one runs the math in reverse: tell us what monthly payment fits your budget, and we'll show you the largest loan that fits. The DTI section helps you sanity-check the result against the affordability ratio lenders actually use.
          </p>
        </header>

        <section className="mt-12 rounded-[18px] border border-cream-300 p-6 lg:p-8">
          <AffordabilityCalc />
        </section>

        <section className="mt-14 max-w-[760px]">
          <h2 className="text-[24px] leading-[1.15] tracking-tight text-ink-900 lg:text-[32px]">
            About the DTI check
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-ink-700">
            <Link href="/glossary/debt-to-income-ratio" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">Debt-to-income ratio (DTI)</Link> is your total monthly debt payments divided by your gross monthly income. Most personal-loan lenders look for DTI under 40% post-loan, with the most competitive APRs reserved for borrowers below 30%. If your DTI lands above the threshold after the new loan, options include borrowing a smaller amount, extending the term to lower the monthly payment, or paying down existing debt first.
          </p>
        </section>

        <section className="mt-14 rounded-[14px] bg-forest-700 p-6 text-cream-100 lg:p-8">
          <h2 className="text-[22px] leading-[1.2] tracking-tight lg:text-[28px]">
            See what you actually qualify for.
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed opacity-90">
            The calculator shows you the math. The application shows you real offers.
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
