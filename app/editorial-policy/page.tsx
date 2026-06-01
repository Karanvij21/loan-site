import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  BreadcrumbJsonLd,
  PersonJsonLd,
  ArticleJsonLd,
} from "@/components/seo/JsonLd";
import { authors, authorUrl, defaultAuthor, defaultReviewer } from "@/lib/authors";

const PUBLISHED = "2026-02-01";
const REVIEWED = "2026-05-22";
const URL = `${siteConfig.url}/editorial-policy`;

export const metadata: Metadata = {
  title: "Editorial Policy & Author Bios",
  description: `How ${siteConfig.name} researches, writes, reviews, and updates its lending content. Our editorial team and compliance reviewer's bios, credentials, and areas of expertise.`,
  alternates: { canonical: "/editorial-policy" },
  openGraph: {
    title: "Editorial Policy & Author Bios",
    description: "How we research, write, and review lending content.",
    url: "/editorial-policy",
  },
};

export default function EditorialPolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Editorial policy", url: URL },
        ]}
      />
      <ArticleJsonLd
        headline="Editorial policy"
        description={`How ${siteConfig.name} researches, writes, reviews, and updates lending content.`}
        url={URL}
        datePublished={PUBLISHED}
        dateModified={REVIEWED}
        authorName={defaultAuthor.name}
        authorUrl={authorUrl(defaultAuthor)}
        reviewerName={defaultReviewer.name}
        reviewerUrl={authorUrl(defaultReviewer)}
        articleSection="About"
      />
      {authors.map((a) => (
        <PersonJsonLd
          key={a.slug}
          name={a.name}
          url={authorUrl(a)}
          jobTitle={a.jobTitle}
          description={a.shortBio}
          knowsAbout={a.knowsAbout}
          sameAs={a.sameAs}
        />
      ))}

      <article className="mx-auto max-w-[920px] px-6 py-20 lg:px-10 lg:py-28">
        <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[12px] text-ink-500">
          <Link href="/" className="hover:text-ink-900">Home</Link>
          <span className="text-ink-300">/</span>
          <span className="text-ink-900">Editorial policy</span>
        </nav>

        <header className="mt-8">
          <span className="eyebrow">How we work</span>
          <h1 className="mt-3 text-[40px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
            Editorial policy.
          </h1>
          <p className="mt-3 text-[13px] text-ink-500">
            <em>Last reviewed: {new Date(REVIEWED).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</em>
          </p>
        </header>

        <section className="mt-12 space-y-5 text-[17px] leading-[1.7] text-ink-700">
          <p>
            {siteConfig.name} publishes lending guidance, calculators, a glossary, and 50 state-by-state explainers covering U.S. personal lending. This page describes how that content is researched, written, reviewed for accuracy and compliance, and kept current. We follow it consistently because financial content is a YMYL (Your Money or Your Life) category where wrong information can cause real harm.
          </p>
        </section>

        {/* PRINCIPLES */}
        <section className="mt-14">
          <h2 className="text-[28px] leading-[1.1] tracking-tight text-ink-900 lg:text-[36px]">
            Editorial principles
          </h2>
          <dl className="mt-8 border-t border-ink-900">
            {principles.map((p, i) => (
              <div key={p.k} className="grid grid-cols-[40px_180px_1fr] gap-4 border-b border-cream-300 py-6 lg:grid-cols-[60px_220px_1fr] lg:gap-6">
                <span className="tabular text-2xl text-ink-300">{String(i + 1).padStart(2, "0")}</span>
                <dt className="text-[18px] text-ink-900">{p.k}</dt>
                <dd className="text-[15px] leading-[1.6] text-ink-700">{p.v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* PROCESS */}
        <section className="mt-14">
          <h2 className="text-[28px] leading-[1.1] tracking-tight text-ink-900 lg:text-[36px]">
            How a page gets published
          </h2>
          <ol className="mt-8 space-y-6">
            {process.map((step, i) => (
              <li key={step.k} className="grid grid-cols-[40px_1fr] gap-5">
                <span className="tabular text-xl text-ink-300">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-[18px] font-semibold text-ink-900">{step.k}</h3>
                  <p className="mt-2 text-[15px] leading-[1.65] text-ink-700">{step.v}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* SOURCES */}
        <section className="mt-14">
          <h2 className="text-[28px] leading-[1.1] tracking-tight text-ink-900 lg:text-[36px]">
            Sources we cite
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-ink-700">
            Where a page makes a factual claim about U.S. lending law or market data, the claim is traceable to one or more of the following primary sources:
          </p>
          <ul className="mt-6 space-y-2 text-[15px] text-ink-700">
            <li>U.S. Consumer Financial Protection Bureau (consumerfinance.gov)</li>
            <li>U.S. Federal Trade Commission (ftc.gov)</li>
            <li>Federal Reserve G.19 Consumer Credit Report</li>
            <li>U.S. Code (Title 12, Chapter 41, Truth in Lending Act)</li>
            <li>State banking-department and attorney-general bulletins (state-specific pages)</li>
            <li>AnnualCreditReport.com (the federally authorised source for free credit reports)</li>
            <li>Lender-published APR ranges from partners in our network</li>
          </ul>
        </section>

        {/* AUTHORS */}
        <section className="mt-14">
          <h2 className="text-[28px] leading-[1.1] tracking-tight text-ink-900 lg:text-[36px]">
            Who writes and reviews this content
          </h2>
          <div className="mt-8 space-y-10">
            {authors.map((a) => (
              <div
                key={a.slug}
                id={a.slug}
                className="scroll-mt-24 grid grid-cols-[64px_1fr] gap-5 rounded-[14px] border border-cream-300 p-6 lg:grid-cols-[80px_1fr] lg:p-8"
              >
                <span
                  aria-hidden
                  className="grid h-16 w-16 lg:h-20 lg:w-20 place-items-center rounded-full bg-forest-700 text-cream-100 text-[20px] font-semibold"
                >
                  {a.initials}
                </span>
                <div>
                  <h3 className="text-[22px] tracking-tight text-ink-900">{a.name}</h3>
                  <p className="mt-1 text-[13px] uppercase tracking-[0.15em] text-ink-500">{a.jobTitle}</p>
                  <p className="mt-4 text-[15px] leading-[1.7] text-ink-700">{a.fullBio}</p>
                  <p className="mt-4 text-[13px] text-ink-500">
                    <span className="text-ink-700">Knows about:</span> {a.knowsAbout.join(" · ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CORRECTIONS */}
        <section className="mt-14">
          <h2 className="text-[28px] leading-[1.1] tracking-tight text-ink-900 lg:text-[36px]">
            Corrections
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-ink-700">
            If you find a factual error, please email <a href={`mailto:${siteConfig.email}`} className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">{siteConfig.email}</a> with the page URL and the issue. We update the page, log the correction, and refresh the "Last reviewed" date. Material errors (anything affecting a borrower's understanding of cost or risk) are corrected within 48 hours.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-[14px] bg-forest-700 p-6 text-cream-100 lg:p-8">
          <h2 className="text-[22px] leading-[1.2] tracking-tight lg:text-[28px]">
            Read something we got right?
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed opacity-90">
            Compare actual lender offers in under two minutes. Soft credit check only.
          </p>
          <Link
            href="/apply"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream-100 px-5 py-3 text-[14px] font-semibold text-ink-900 transition-colors hover:bg-cream-200"
          >
            Begin a request
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </section>
      </article>
    </>
  );
}

const principles = [
  { k: "Accuracy first", v: "Every factual claim is traceable to a primary regulatory or market-data source listed on this page. We don't paraphrase third-party blog posts." },
  { k: "Plain English", v: "Lending jargon is defined inline or linked to our glossary. If a sentence reads like a TILA disclosure, it gets rewritten." },
  { k: "No false urgency", v: "We don't use scarcity language, fake countdown timers, or 'limited approvals'. The Google Ads Personal Loans policy and FTC UDAP guidance prohibit this kind of pressure marketing, and so do we." },
  { k: "Conservative rate ranges", v: "Where we quote APR ranges, we use the range a typical applicant would see, not the lender's best-case promotional rate. Your offer may be higher or lower; we don't pretend the headline rate is universal." },
  { k: "Transparent affiliate model", v: "We're compensated by lenders in our network when a request is forwarded or accepted. This is disclosed on every page that markets a product. We don't accept compensation from consumers." },
];

const process = [
  { k: "Research", v: "An editor identifies the topic, pulls primary-source citations, and drafts an outline that's reviewed against the editorial principles above." },
  { k: "Draft", v: "The editor writes the page in plain English, with internal links to related glossary terms and a representative example where applicable." },
  { k: "Compliance review", v: "The compliance reviewer checks every rate disclosure, representative example, lender-identity statement, and required federal disclosure against TILA, FCRA, ECOA, MLA, and CAN-SPAM. State-specific pages also get a state-regulator cross-check." },
  { k: "Publish", v: "Once compliance signs off, the page goes live with the byline, the reviewer's name, and the publication date. Schema.org Article + Person markup is generated automatically." },
  { k: "Quarterly review", v: "Every page is re-reviewed at least every six months. If a regulator publishes new guidance, the relevant pages are updated within five business days. The 'Last reviewed' date on the page reflects the most recent review." },
];
