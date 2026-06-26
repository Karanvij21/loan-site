import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
} from "@/components/seo/JsonLd";
import {
  questions,
  questionTopics,
  questionsByTopic,
} from "@/lib/questions";
import { HeroPattern } from "@/components/HeroPattern";

export const metadata: Metadata = {
  title: "Personal Loan FAQ: 273 Quick Answers (2026)",
  description:
    "273 short answers to common personal-loan questions: credit scores, approval odds, APRs, the process, special situations, and borrower types. Updated June 2026.",
  alternates: { canonical: "/questions" },
  openGraph: {
    title: "Personal Loan Questions",
    description: "Short answers to common personal-loan questions.",
    url: "/questions",
  },
};

const PAGE_URL = `${siteConfig.url}/questions`;

export default function QuestionsIndex() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Questions", url: PAGE_URL },
        ]}
      />
      <ItemListJsonLd
        name="Personal loan questions"
        url={PAGE_URL}
        items={questions.map((q) => ({
          name: q.question,
          url: `${siteConfig.url}/questions/${q.slug}`,
          description: q.shortAnswer,
        }))}
      />

      <article className="relative mx-auto max-w-[1080px] overflow-hidden px-6 py-20 lg:px-10 lg:py-28">
        <HeroPattern
          variant="education"
          className="pointer-events-none absolute right-0 top-0 hidden h-[320px] w-[320px] -translate-y-8 translate-x-8 text-forest-700/12 lg:block"
        />
        <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[12px] text-ink-500">
          <Link href="/" className="hover:text-ink-900">Home</Link>
          <span className="text-ink-300">/</span>
          <span className="text-ink-900">Questions</span>
        </nav>

        <header className="mt-8 max-w-[760px]">
          <span className="eyebrow">Quick answers</span>
          <h1 className="mt-3 text-[40px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
            Common <span className="text-forest-700">questions</span>.
          </h1>
          <p className="mt-6 text-[18px] leading-[1.55] text-ink-700">
            Short, direct answers to the personal-loan questions we hear most often. Each answer is sourced from current lender practices and federal lending law, with links to deeper reading when you want it.
          </p>
        </header>

        <nav aria-label="Question topics" className="mt-12 border-y border-ink-900 py-4">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]">
            {questionTopics.map((t) => (
              <li key={t}>
                <a href={`#${slug(t)}`} className="text-ink-700 underline decoration-cream-400 underline-offset-[5px] hover:text-ink-900 hover:decoration-ink-900">{t}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-16 space-y-20">
          {questionTopics.map((topic, i) => {
            const items = questionsByTopic(topic);
            if (items.length === 0) return null;
            return (
              <section key={topic} id={slug(topic)} className="scroll-mt-24">
                <div className="flex items-baseline gap-4">
                  <span className="tabular text-2xl text-ink-300">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="text-[28px] leading-[1.1] tracking-tight text-ink-900 lg:text-[36px]">{topic}</h2>
                </div>
                <dl className="mt-8 grid gap-3 sm:grid-cols-2">
                  {items.map((q) => (
                    <Link
                      key={q.slug}
                      href={`/questions/${q.slug}`}
                      className="group block rounded-xl border border-cream-300 bg-cream-50/60 p-5 transition-colors hover:bg-cream-100 hover:border-cream-400"
                    >
                      <dt className="text-[16px] font-semibold text-ink-900 group-hover:text-forest-700">
                        {q.question}
                      </dt>
                      <dd className="mt-2 text-[13px] leading-[1.55] text-ink-700 line-clamp-3">
                        {q.shortAnswer}
                      </dd>
                    </Link>
                  ))}
                </dl>
              </section>
            );
          })}
        </div>
      </article>
    </>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
