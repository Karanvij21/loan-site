import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  BreadcrumbJsonLd,
  DefinedTermSetJsonLd,
  ItemListJsonLd,
  SpeakableJsonLd,
} from "@/components/seo/JsonLd";
import { HeroPattern } from "@/components/HeroPattern";
import {
  glossaryTerms,
  glossaryCategories,
  termsByCategory,
} from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Personal Loan Glossary: 77 Terms Defined (2026)",
  description:
    "Plain-English definitions for 77 personal-loan terms: APR, amortisation, FICO, TILA, soft inquiry, debt-to-income ratio, origination fee, and more. Updated June 2026.",
  alternates: { canonical: "/glossary" },
  openGraph: {
    title: "Personal Loan Glossary",
    description:
      "77 lending terms explained in plain English by the Get Advance Loan editorial team. Updated June 2026.",
    url: "/glossary",
  },
};

const PAGE_URL = `${siteConfig.url}/glossary`;

export default function GlossaryIndex() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Glossary", url: PAGE_URL },
        ]}
      />
      <DefinedTermSetJsonLd
        name={`${siteConfig.name} Personal Loan Glossary`}
        description={`Plain-English definitions for ${glossaryTerms.length} personal-loan terms.`}
        url={PAGE_URL}
        terms={glossaryTerms.map((t) => ({ name: t.name, slug: t.slug }))}
      />
      <ItemListJsonLd
        name="Personal Loan Glossary"
        url={PAGE_URL}
        items={glossaryTerms.map((t) => ({
          name: t.name,
          url: `${siteConfig.url}/glossary/${t.slug}`,
          description: t.short,
        }))}
      />
      <SpeakableJsonLd
        url={PAGE_URL}
        cssSelectors={[".glossary-intro", ".glossary-card-short"]}
      />

      <article className="relative mx-auto max-w-[1080px] overflow-hidden px-6 py-20 lg:px-10 lg:py-28">
        <HeroPattern
          variant="education"
          className="pointer-events-none absolute right-0 top-0 hidden h-[320px] w-[320px] -translate-y-8 translate-x-8 text-forest-700/12 lg:block"
        />
        <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[12px] text-ink-500">
          <Link href="/" className="hover:text-ink-900">Home</Link>
          <span className="text-ink-300">/</span>
          <span className="text-ink-900">Glossary</span>
        </nav>

        <header className="mt-8 max-w-[760px]">
          <span className="eyebrow">Plain-English reference</span>
          <h1 className="mt-3 text-[40px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
            Personal loan <span className="text-forest-700">glossary</span>.
          </h1>
          <p className="glossary-intro mt-6 text-[18px] leading-[1.55] text-ink-700">
            Fifty terms used in U.S. personal lending, explained in plain English by our editorial team. Each definition is short, factual, and self-contained so you (or your answer-engine of choice) can quote it without needing the rest of the page.
          </p>
          <p className="mt-3 text-[13px] text-ink-500">
            <em>Reviewed by the Compliance Review team. <Link href="/editorial-policy" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">Editorial policy.</Link></em>
          </p>
        </header>

        {/* Quick jump nav */}
        <nav aria-label="Glossary categories" className="mt-12 border-y border-ink-900 py-4">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]">
            {glossaryCategories.map((cat) => (
              <li key={cat}>
                <a
                  href={`#${slug(cat)}`}
                  className="text-ink-700 underline decoration-cream-400 underline-offset-[5px] hover:text-ink-900 hover:decoration-ink-900"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Each category */}
        <div className="mt-14 space-y-20">
          {glossaryCategories.map((cat, ci) => {
            const items = termsByCategory(cat);
            if (items.length === 0) return null;
            return (
              <section key={cat} id={slug(cat)} className="scroll-mt-24">
                <div className="flex items-baseline gap-4">
                  <span className="tabular text-2xl text-ink-300">
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-[28px] leading-[1.1] tracking-tight text-ink-900 lg:text-[36px]">
                    {cat}
                  </h2>
                </div>
                <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                  {items.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/glossary/${t.slug}`}
                      className="group rounded-xl border border-cream-300 bg-cream-50/60 p-5 transition-colors hover:bg-cream-100 hover:border-cream-400"
                    >
                      <dt className="text-[16px] font-semibold text-ink-900 group-hover:text-forest-700">
                        {t.name}
                      </dt>
                      <dd className="glossary-card-short mt-2 text-[14px] leading-[1.55] text-ink-700">
                        {t.short}
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
