import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  FaqJsonLd,
  SpeakableJsonLd,
} from "@/components/seo/JsonLd";
import { guides, guidesBySlug, paragraphsOf } from "@/lib/guides";
import { defaultAuthor, defaultReviewer, authorUrl } from "@/lib/authors";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = guidesBySlug[slug];
  if (!g) return {};
  return {
    title: g.title,
    description: g.description,
    alternates: { canonical: `/learn/${g.slug}` },
    openGraph: { title: g.title, description: g.description, url: `/learn/${g.slug}` },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const g = guidesBySlug[slug];
  if (!g) notFound();

  const url = `${siteConfig.url}/learn/${g.slug}`;
  const related = (g.relatedSlugs ?? []).map((s) => guidesBySlug[s]).filter(Boolean);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Learn", url: `${siteConfig.url}/learn` },
          { name: g.h1, url },
        ]}
      />
      <ArticleJsonLd
        headline={g.h1}
        description={g.description}
        url={url}
        datePublished={g.publishedAt}
        dateModified={g.reviewedAt}
        authorName={defaultAuthor.name}
        authorUrl={authorUrl(defaultAuthor)}
        reviewerName={defaultReviewer.name}
        reviewerUrl={authorUrl(defaultReviewer)}
        articleSection={g.cluster}
      />
      <FaqJsonLd items={g.faqs} />
      <SpeakableJsonLd url={url} cssSelectors={[".guide-intro", ".guide-section p"]} />

      <article className="mx-auto max-w-[820px] px-6 pt-12 pb-20 lg:px-10 lg:pt-16 lg:pb-28">
        <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[12px] text-ink-500">
          <Link href="/" className="hover:text-ink-900">Home</Link>
          <span className="text-ink-300">/</span>
          <Link href="/learn" className="hover:text-ink-900">Learn</Link>
          <span className="text-ink-300">/</span>
          <span className="text-ink-900 truncate">{g.h1}</span>
        </nav>

        <header className="mt-8">
          <span className="eyebrow">{g.cluster}</span>
          <h1 className="mt-3 text-[36px] leading-[1.05] tracking-tight text-ink-900 lg:text-[52px]">
            {g.h1}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-ink-500">
            <span>By <Link href={`/editorial-policy#${defaultAuthor.slug}`} className="text-ink-700 underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">{defaultAuthor.name}</Link></span>
            <span aria-hidden>·</span>
            <span>Reviewed by <Link href={`/editorial-policy#${defaultReviewer.slug}`} className="text-ink-700 underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">{defaultReviewer.name}</Link></span>
            <span aria-hidden>·</span>
            <span>{g.estimatedReadMinutes} min read</span>
            <span aria-hidden>·</span>
            <time dateTime={g.reviewedAt}>Updated {new Date(g.reviewedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
          </div>
        </header>

        <section className="guide-intro mt-10 rounded-[14px] bg-cream-50 ring-1 ring-cream-300 p-6 lg:p-8">
          <span className="eyebrow">In short</span>
          <p className="mt-3 text-[18px] leading-[1.55] text-ink-900">{g.intro}</p>
        </section>

        <div className="mt-12 space-y-14">
          {g.sections.map((s) => (
            <section key={s.h2} className="guide-section">
              <h2 className="text-[26px] leading-[1.15] tracking-tight text-ink-900 lg:text-[32px]">
                {s.h2}
              </h2>
              <div className="mt-5 space-y-5 text-[17px] leading-[1.75] text-ink-700">
                {paragraphsOf(s.body).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {s.bullets && s.bullets.length > 0 && (
                <ul className="mt-5 space-y-2 border-l-2 border-forest-700/30 pl-5 text-[16px] leading-[1.65] text-ink-700">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {g.faqs.length > 0 && (
          <section className="mt-16 border-t border-cream-300 pt-10">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-3 text-[26px] leading-[1.15] tracking-tight text-ink-900 lg:text-[32px]">
              Quick answers.
            </h2>
            <div className="mt-8 border-t border-ink-900">
              {g.faqs.map((f) => (
                <details key={f.q} className="group border-b border-cream-300 py-5">
                  <summary className="flex cursor-pointer items-baseline justify-between gap-6 marker:hidden">
                    <span className="text-lg text-ink-900 lg:text-xl">{f.q}</span>
                    <span className="shrink-0 text-xl text-ink-300 transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-ink-700">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {g.toolLinks && g.toolLinks.length > 0 && (
          <section className="mt-16">
            <span className="eyebrow">Related tools</span>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {g.toolLinks.map((t) => (
                <li key={t.href}>
                  <Link
                    href={t.href}
                    className="block rounded-lg border border-cream-300 bg-cream-50/40 p-4 transition-colors hover:bg-cream-50"
                  >
                    <span className="text-[15px] font-semibold text-ink-900">{t.label}</span>
                    {t.blurb && <span className="mt-1 block text-[13px] text-ink-700">{t.blurb}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-16 border-t border-cream-300 pt-10">
            <span className="eyebrow">Keep reading</span>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/learn/${r.slug}`}
                    className="block rounded-lg border border-cream-300 p-4 transition-colors hover:bg-cream-50"
                  >
                    <span className="text-[15px] font-semibold text-ink-900">{r.h1}</span>
                    <span className="mt-1 block text-[13px] text-ink-700 line-clamp-2">{r.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-16 rounded-[14px] bg-forest-700 p-6 text-cream-100 lg:p-8">
          <h2 className="text-[22px] leading-[1.2] tracking-tight lg:text-[28px]">
            Ready to apply what you've read?
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed opacity-90">
            Compare real personal-loan offers in two minutes. Soft credit check only.
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
