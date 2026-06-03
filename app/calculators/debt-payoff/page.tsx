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
import { PayoffCalc } from "./PayoffCalc";

const PUBLISHED = "2026-02-12";
const REVIEWED = "2026-05-22";
const URL = `${siteConfig.url}/calculators/debt-payoff`;

export const metadata: Metadata = {
  title: "Debt Payoff Calculator: Card Payoff vs Personal Loan Consolidation",
  description:
    "See how long it will take to pay off a credit-card balance at a given monthly payment, and how much interest you would save by consolidating into a personal loan.",
  alternates: { canonical: "/calculators/debt-payoff" },
  openGraph: {
    title: "Debt Payoff Calculator",
    description: "Card payoff vs personal-loan consolidation.",
    url: "/calculators/debt-payoff",
  },
};

export default function PayoffCalcPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Calculators", url: `${siteConfig.url}/calculators` },
          { name: "Debt payoff", url: URL },
        ]}
      />
      <ArticleJsonLd
        headline="Debt Payoff Calculator"
        description="Compare credit-card payoff to personal-loan consolidation and see potential interest savings."
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
        name="How to compare credit-card payoff to personal-loan consolidation"
        description="Use the calculator to model both scenarios side by side and see which option pays off the debt faster and cheaper."
        steps={[
          { name: "Enter your current credit-card balance", text: "Use the total balance you'd consolidate." },
          { name: "Enter the credit-card APR", text: "Use the APR on your statement, typically 18% to 28% in the current market." },
          { name: "Enter what you can pay each month", text: "The fixed dollar amount you'd put toward the card." },
          { name: "Enter the personal-loan APR and term", text: "Use the APR you'd qualify for and a term that gives you an affordable monthly payment." },
          { name: "Compare results", text: "The calculator shows months to payoff and total interest for both scenarios, plus the potential interest savings from consolidating." },
        ]}
      />
      <SpeakableJsonLd url={URL} cssSelectors={[".calc-intro"]} />
      <SoftwareApplicationJsonLd
        name="Debt payoff calculator"
        description="Free in-browser debt payoff calculator. Compares credit-card payoff to personal-loan consolidation, side by side."
        url={URL}
      />

      <article className="mx-auto max-w-[1080px] px-6 py-20 lg:px-10 lg:py-28">
        <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[12px] text-ink-500">
          <Link href="/" className="hover:text-ink-900">Home</Link>
          <span className="text-ink-300">/</span>
          <Link href="/calculators" className="hover:text-ink-900">Calculators</Link>
          <span className="text-ink-300">/</span>
          <span className="text-ink-900">Debt payoff</span>
        </nav>

        <header className="mt-8 max-w-[760px]">
          <span className="eyebrow">Calculator</span>
          <h1 className="mt-3 text-[40px] leading-[1.02] tracking-tight text-ink-900 lg:text-[56px]">
            Debt payoff calculator.
          </h1>
          <p className="calc-intro mt-6 text-[17px] leading-[1.6] text-ink-700">
            Compare two paths side by side: keep paying down your credit-card balance, or consolidate it into a fixed-rate personal loan. The calculator shows months to payoff, total interest, and the potential interest savings from consolidating.
          </p>
        </header>

        <section className="mt-12">
          <PayoffCalc />
        </section>

        <section className="mt-14 max-w-[760px]">
          <h2 className="text-[24px] leading-[1.15] tracking-tight text-ink-900 lg:text-[32px]">
            When consolidation makes sense
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-ink-700">
            Consolidating credit-card debt into a personal loan saves money when the loan's effective APR is meaningfully lower than your weighted card APR, and when you can commit to not running the card balance back up. With average U.S. credit-card APRs above 22% and personal-loan APRs starting in the single digits for strong credit, the spread can produce thousands of dollars in interest savings.
          </p>
          <p className="mt-4 text-[16px] leading-[1.7] text-ink-700">
            The trap to avoid: consolidating, then re-loading the credit cards. That doubles your debt with no benefit. Many people freeze the cards (literally, in a block of ice in the freezer) or close all but one before consolidating.
          </p>
        </section>

        <section className="mt-14 rounded-[14px] bg-forest-700 p-6 text-cream-100 lg:p-8">
          <h2 className="text-[22px] leading-[1.2] tracking-tight lg:text-[28px]">
            Ready to consolidate?
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed opacity-90">
            See real <Link href="/loans/debt-consolidation" className="underline decoration-cream-200 underline-offset-2">debt-consolidation loan</Link> offers from our network in about two minutes.
          </p>
          <Link
            href="/apply"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream-100 px-5 py-3 text-[14px] font-semibold text-ink-900 transition-colors hover:bg-cream-200"
          >
            Compare consolidation offers
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </section>
      </article>
    </>
  );
}
