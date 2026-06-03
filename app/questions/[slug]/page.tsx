import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  SpeakableJsonLd,
} from "@/components/seo/JsonLd";
import {
  questions,
  questionsBySlug,
  questionParagraphsOf,
  QUESTIONS_PUBLISHED,
  QUESTIONS_REVIEWED,
} from "@/lib/questions";
import { defaultAuthor, defaultReviewer, authorUrl } from "@/lib/authors";

export function generateStaticParams() {
  return questions.map((q) => ({ slug: q.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const q = questionsBySlug[slug];
  if (!q) return {};
  return {
    title: q.question,
    description: q.shortAnswer.slice(0, 160),
    alternates: { canonical: `/questions/${q.slug}` },
    openGraph: { title: q.question, description: q.shortAnswer.slice(0, 160), url: `/questions/${q.slug}` },
  };
}

export default async function QuestionPage({ params }: Props) {
  const { slug } = await params;
  const q = questionsBySlug[slug];
  if (!q) notFound();

  const url = `${siteConfig.url}/questions/${q.slug}`;
  const related = (q.relatedSlugs ?? []).map((s) => questionsBySlug[s]).filter(Boolean);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Questions", url: `${siteConfig.url}/questions` },
          { name: q.question, url },
        ]}
      />
      <ArticleJsonLd
        headline={q.question}
        description={q.shortAnswer.slice(0, 160)}
        url={url}
        datePublished={QUESTIONS_PUBLISHED}
        dateModified={QUESTIONS_REVIEWED}
        authorName={defaultAuthor.name}
        authorUrl={authorUrl(defaultAuthor)}
        reviewerName={defaultReviewer.name}
        reviewerUrl={authorUrl(defaultReviewer)}
        articleSection="Questions"
      />
      {/* QAPage schema, specifically targets People-Also-Ask + AI Overviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "QAPage",
            mainEntity: {
              "@type": "Question",
              name: q.question,
              answerCount: 1,
              acceptedAnswer: {
                "@type": "Answer",
                text: q.shortAnswer,
                author: { "@type": "Person", name: defaultAuthor.name, url: authorUrl(defaultAuthor) },
                dateCreated: QUESTIONS_REVIEWED,
              },
            },
          }),
        }}
      />
      <SpeakableJsonLd url={url} cssSelectors={[".q-direct-answer"]} />

      <article className="mx-auto max-w-[820px] px-6 pt-12 pb-20 lg:px-10 lg:pt-16 lg:pb-28">
        <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[12px] text-ink-500">
          <Link href="/" className="hover:text-ink-900">Home</Link>
          <span className="text-ink-300">/</span>
          <Link href="/questions" className="hover:text-ink-900">Questions</Link>
          <span className="text-ink-300">/</span>
          <span className="text-ink-900 truncate">{q.topic}</span>
        </nav>

        <header className="mt-8">
          <span className="eyebrow">{q.topic}</span>
          <h1 className="mt-3 text-[32px] leading-[1.1] tracking-tight text-ink-900 lg:text-[44px]">
            {q.question}
          </h1>
        </header>

        <section className="mt-8 rounded-[14px] bg-cream-50 ring-1 ring-cream-300 p-6 lg:p-8">
          <span className="eyebrow">Short answer</span>
          <p className="q-direct-answer mt-3 text-[18px] leading-[1.55] text-ink-900">
            {q.shortAnswer}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-[22px] leading-[1.15] tracking-tight text-ink-900 lg:text-[28px]">
            Context
          </h2>
          <div className="mt-5 space-y-5 text-[16px] leading-[1.7] text-ink-700">
            {questionParagraphsOf(q.context).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-[14px] border border-cream-300 p-5 text-[13px] text-ink-500">
          <span className="eyebrow">Editorial</span>
          <dl className="mt-3 grid gap-2 sm:grid-cols-2">
            <div>
              <dt className="text-ink-700">Reviewed by</dt>
              <dd className="text-ink-900">
                <Link href={`/editorial-policy#${defaultReviewer.slug}`} className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">
                  {defaultReviewer.name}
                </Link>
              </dd>
            </div>
            <div>
              <dt className="text-ink-700">Last reviewed</dt>
              <dd className="text-ink-900 tabular">
                {new Date(QUESTIONS_REVIEWED).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </dd>
            </div>
          </dl>
        </section>

        {q.toolLinks && q.toolLinks.length > 0 && (
          <section className="mt-12">
            <span className="eyebrow">Related</span>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {q.toolLinks.map((t) => (
                <li key={t.href}>
                  <Link href={t.href} className="block rounded-lg border border-cream-300 bg-cream-50/40 p-4 text-[14px] font-semibold text-ink-900 transition-colors hover:bg-cream-50">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-12 border-t border-cream-300 pt-10">
            <span className="eyebrow">More questions</span>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/questions/${r.slug}`} className="block rounded-lg border border-cream-300 p-4 transition-colors hover:bg-cream-50">
                    <span className="text-[14px] font-semibold text-ink-900">{r.question}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-14 rounded-[14px] bg-forest-700 p-6 text-cream-100 lg:p-8">
          <h2 className="text-[20px] leading-[1.2] tracking-tight lg:text-[26px]">
            Ready to compare real personal-loan offers?
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed opacity-90">Two minutes. Soft credit check only.</p>
          <Link href="/apply" className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream-100 px-5 py-3 text-[14px] font-semibold text-ink-900 transition-colors hover:bg-cream-200">
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
