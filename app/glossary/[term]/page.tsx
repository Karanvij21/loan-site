import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  DefinedTermJsonLd,
  SpeakableJsonLd,
} from "@/components/seo/JsonLd";
import {
  glossaryTerms,
  glossaryBySlug,
  termsByCategory,
} from "@/lib/glossary";
import { defaultAuthor, defaultReviewer, authorUrl } from "@/lib/authors";

const GLOSSARY_PUBLISHED = "2026-01-15";
const GLOSSARY_REVIEWED = "2026-06-15";

export function generateStaticParams() {
  return glossaryTerms.map((t) => ({ term: t.slug }));
}

type Props = { params: Promise<{ term: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { term } = await params;
  const t = glossaryBySlug[term];
  if (!t) return {};
  const title = `${t.name}: Definition & Examples (2026)`;
  return {
    title,
    description: t.short,
    alternates: { canonical: `/glossary/${t.slug}` },
    openGraph: { title, description: t.short, url: `/glossary/${t.slug}` },
  };
}

export default async function GlossaryTermPage({ params }: Props) {
  const { term } = await params;
  const t = glossaryBySlug[term];
  if (!t) notFound();

  const url = `${siteConfig.url}/glossary/${t.slug}`;
  const related = (t.related ?? [])
    .map((s) => glossaryBySlug[s])
    .filter(Boolean);
  const inCategory = termsByCategory(t.category).filter((x) => x.slug !== t.slug).slice(0, 6);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Glossary", url: `${siteConfig.url}/glossary` },
          { name: t.name, url },
        ]}
      />
      <DefinedTermJsonLd
        name={t.name}
        description={t.short}
        url={url}
        inDefinedTermSet={`${siteConfig.url}/glossary`}
      />
      <ArticleJsonLd
        headline={`${t.name}: Definition`}
        description={t.short}
        url={url}
        datePublished={GLOSSARY_PUBLISHED}
        dateModified={GLOSSARY_REVIEWED}
        authorName={defaultAuthor.name}
        authorUrl={authorUrl(defaultAuthor)}
        reviewerName={defaultReviewer.name}
        reviewerUrl={authorUrl(defaultReviewer)}
        articleSection="Glossary"
      />
      <SpeakableJsonLd url={url} cssSelectors={[".term-short", ".term-long"]} />

      <article className="mx-auto max-w-[920px] px-6 py-20 lg:px-10 lg:py-28">
        <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[12px] text-ink-500">
          <Link href="/" className="hover:text-ink-900">Home</Link>
          <span className="text-ink-300">/</span>
          <Link href="/glossary" className="hover:text-ink-900">Glossary</Link>
          <span className="text-ink-300">/</span>
          <span className="text-ink-900">{t.name}</span>
        </nav>

        <header className="mt-8">
          <span className="eyebrow">{t.category}</span>
          <h1 className="mt-3 text-[36px] leading-[1.05] tracking-tight text-ink-900 lg:text-[56px]">
            {t.name}
          </h1>
          {t.aka && t.aka.length > 0 && (
            <p className="mt-3 text-[14px] text-ink-500">
              Also known as: {t.aka.join(", ")}
            </p>
          )}
        </header>

        {/* TL;DR snippet, explicitly targeted at AEO / AI snippets */}
        <section className="mt-10 rounded-[14px] bg-cream-50 ring-1 ring-cream-300 p-6 lg:p-8">
          <span className="eyebrow">In one sentence</span>
          <p className="term-short mt-3 text-[18px] leading-[1.55] text-ink-900">
            {t.short}
          </p>
        </section>

        {/* Long form */}
        <section className="mt-12">
          <h2 className="text-[24px] leading-[1.15] tracking-tight text-ink-900 lg:text-[32px]">
            Full definition
          </h2>
          <p className="term-long mt-5 text-[17px] leading-[1.7] text-ink-700">
            {t.long}
          </p>
        </section>

        {/* E-E-A-T byline */}
        <section className="mt-12 rounded-[14px] border border-cream-300 p-5 text-[13px] text-ink-500">
          <span className="eyebrow">Editorial</span>
          <dl className="mt-3 grid gap-2 sm:grid-cols-2">
            <div>
              <dt className="text-ink-700">Written by</dt>
              <dd className="text-ink-900">
                <Link href={`/editorial-policy#${defaultAuthor.slug}`} className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">
                  {defaultAuthor.name}
                </Link>
              </dd>
            </div>
            <div>
              <dt className="text-ink-700">Reviewed by</dt>
              <dd className="text-ink-900">
                <Link href={`/editorial-policy#${defaultReviewer.slug}`} className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">
                  {defaultReviewer.name}
                </Link>
              </dd>
            </div>
            <div>
              <dt className="text-ink-700">Published</dt>
              <dd className="text-ink-900 tabular">
                {new Date(GLOSSARY_PUBLISHED).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </dd>
            </div>
            <div>
              <dt className="text-ink-700">Last reviewed</dt>
              <dd className="text-ink-900 tabular">
                {new Date(GLOSSARY_REVIEWED).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </dd>
            </div>
          </dl>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-12">
            <span className="eyebrow">Related terms</span>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/glossary/${r.slug}`}
                    className="text-ink-700 underline decoration-cream-400 underline-offset-[4px] hover:text-ink-900 hover:decoration-ink-900"
                  >
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* More in this category */}
        {inCategory.length > 0 && (
          <section className="mt-12 border-t border-cream-300 pt-10">
            <span className="eyebrow">More in {t.category}</span>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {inCategory.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/glossary/${r.slug}`}
                    className="block rounded-lg border border-cream-300 p-4 transition-colors hover:bg-cream-50"
                  >
                    <span className="text-[15px] font-semibold text-ink-900">{r.name}</span>
                    <span className="mt-1 block text-[13px] text-ink-700 line-clamp-2">{r.short}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* CTA */}
        <section className="mt-14 rounded-[14px] bg-forest-700 p-6 text-cream-100 lg:p-8">
          <h2 className="text-[22px] leading-[1.2] tracking-tight lg:text-[28px]">
            Ready to apply this knowledge?
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed opacity-90">
            Compare personal loan offers in two minutes. Soft credit check only, no impact to your score.
          </p>
          <Link
            href="/apply"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream-100 px-5 py-3 text-[14px] font-semibold text-ink-900 transition-colors hover:bg-cream-200"
          >
            Begin your request
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </section>
      </article>
    </>
  );
}
