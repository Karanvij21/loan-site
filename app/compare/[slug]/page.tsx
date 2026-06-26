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
import { comparisons, comparisonSlugs } from "@/lib/comparisons";
import { defaultAuthor, defaultReviewer, authorUrl } from "@/lib/authors";

const PUBLISHED = "2026-03-01";
const REVIEWED = "2026-06-15";

export function generateStaticParams() {
  return comparisonSlugs.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = comparisons[slug];
  if (!c) return {};
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: `/compare/${c.slug}` },
    openGraph: { title: c.title, description: c.description, url: `/compare/${c.slug}` },
  };
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const c = comparisons[slug];
  if (!c) notFound();

  const url = `${siteConfig.url}/compare/${c.slug}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Compare", url: `${siteConfig.url}/compare` },
          { name: c.h1, url },
        ]}
      />
      <FaqJsonLd items={c.faqs} />
      <ArticleJsonLd
        headline={c.h1}
        description={c.description}
        url={url}
        datePublished={PUBLISHED}
        dateModified={REVIEWED}
        authorName={defaultAuthor.name}
        authorUrl={authorUrl(defaultAuthor)}
        reviewerName={defaultReviewer.name}
        reviewerUrl={authorUrl(defaultReviewer)}
        articleSection="Compare"
      />
      <SpeakableJsonLd url={url} cssSelectors={[".compare-intro", ".compare-verdict"]} />

      {/* HERO */}
      <section className="border-b border-cream-300">
        <div className="mx-auto max-w-[1280px] px-6 pt-12 pb-16 lg:px-10 lg:pt-16 lg:pb-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[12px] text-ink-500">
            <Link href="/" className="hover:text-ink-900">Home</Link>
            <span className="text-ink-300">/</span>
            <Link href="/compare" className="hover:text-ink-900">Compare</Link>
            <span className="text-ink-300">/</span>
            <span className="text-ink-900">{c.h1}</span>
          </nav>

          <div className="mt-8 max-w-[860px]">
            <span className="eyebrow">Head to head</span>
            <h1 className="mt-3 text-[40px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
              {c.h1}.
            </h1>
            <p className="compare-intro mt-6 text-[18px] leading-[1.55] text-ink-700">
              {c.intro}
            </p>
          </div>
        </div>
      </section>

      {/* SIDE BY SIDE TABLE */}
      <section className="bg-cream-50 border-b border-cream-300">
        <div className="mx-auto max-w-[1080px] px-6 py-16 lg:px-10 lg:py-20">
          <span className="eyebrow">Side by side</span>
          <h2 className="mt-3 text-[28px] leading-[1.1] tracking-tight text-ink-900 lg:text-[36px]">
            {c.aName} vs {c.bName}
          </h2>

          <div className="mt-10 overflow-x-auto rounded-[14px] border border-cream-300 bg-cream-100">
            <table className="w-full text-left text-[14px]">
              <thead>
                <tr className="border-b border-cream-300 bg-cream-50">
                  <th className="px-5 py-4 text-[12px] uppercase tracking-[0.15em] text-ink-500">Attribute</th>
                  <th className="px-5 py-4 text-ink-900">{c.aName}</th>
                  <th className="px-5 py-4 text-ink-900">{c.bName}</th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map((r) => (
                  <tr key={r.k} className="border-b border-cream-300 last:border-0 align-top">
                    <td className="px-5 py-4 text-ink-700 font-semibold whitespace-nowrap">{r.k}</td>
                    <td className="px-5 py-4 text-ink-900 leading-relaxed">{r.a}</td>
                    <td className="px-5 py-4 text-ink-900 leading-relaxed">{r.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* VERDICTS */}
      <section>
        <div className="mx-auto max-w-[1080px] px-6 py-16 lg:px-10 lg:py-20">
          <span className="eyebrow">Verdicts by scenario</span>
          <h2 className="mt-3 text-[28px] leading-[1.1] tracking-tight text-ink-900 lg:text-[36px]">
            Which wins, when.
          </h2>
          <ol className="mt-10 space-y-6">
            {c.verdicts.map((v, i) => {
              const winner = v.pick === "a" ? c.aName : c.bName;
              return (
                <li key={v.scenario} className="compare-verdict grid grid-cols-[40px_1fr] gap-5 rounded-[14px] border border-cream-300 p-6 lg:p-7">
                  <span className="tabular text-2xl text-ink-300">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-[18px] font-semibold text-ink-900">{v.scenario}</h3>
                    <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-forest-50 px-3 py-1 text-[12px] font-semibold text-forest-900 ring-1 ring-forest-100">
                      Winner: {winner}
                    </p>
                    <p className="mt-3 text-[15px] leading-[1.65] text-ink-700">{v.reason}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-50 border-y border-cream-300">
        <div className="mx-auto max-w-[920px] px-6 py-16 lg:px-10 lg:py-20">
          <span className="eyebrow">Common questions</span>
          <h2 className="mt-3 text-[28px] leading-[1.1] tracking-tight text-ink-900 lg:text-[36px]">
            Frequently asked.
          </h2>
          <div className="mt-10 border-t border-ink-900">
            {c.faqs.map((f) => (
              <details key={f.q} className="group border-b border-cream-300 py-5">
                <summary className="flex cursor-pointer items-baseline justify-between gap-6 marker:hidden">
                  <span className="text-lg text-ink-900 lg:text-xl">{f.q}</span>
                  <span className="shrink-0 text-xl text-ink-300 transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-ink-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related comparisons */}
      <section>
        <div className="mx-auto max-w-[1080px] px-6 py-12 lg:px-10">
          <span className="eyebrow">Other comparisons</span>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
            {Object.values(comparisons).filter((x) => x.slug !== c.slug).map((x) => (
              <li key={x.slug}>
                <Link href={`/compare/${x.slug}`} className="text-ink-700 underline decoration-cream-400 underline-offset-[4px] hover:text-ink-900 hover:decoration-ink-900">
                  {x.h1}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/compare" className="text-ink-900 underline decoration-cream-400 underline-offset-[4px] hover:decoration-ink-900">
                All comparisons →
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-700 text-cream-100">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-[28px] leading-[1.05] tracking-tight lg:text-[44px]">
              Compare real personal-loan offers.
            </h2>
            <Link href="/apply" className="btn !bg-cream-100 !text-ink-900 hover:!bg-cream-200 !px-7 !py-4 !text-[15px]">
              Begin a request
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
