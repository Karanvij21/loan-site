import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
} from "@/components/seo/JsonLd";
import {
  guides,
  guideClusters,
  guidesInCluster,
} from "@/lib/guides";
import { HeroPattern } from "@/components/HeroPattern";

export const metadata: Metadata = {
  title: "Personal Loan Guides 2026: Credit, Debt & Finance Strategy",
  description:
    "Long-form guides on personal loans, debt strategy, credit improvement, and life-event financing. Written by our editorial team and reviewed for compliance.",
  alternates: { canonical: "/learn" },
  openGraph: {
    title: "Learn",
    description: "Long-form personal-finance guides.",
    url: "/learn",
  },
};

const PAGE_URL = `${siteConfig.url}/learn`;

export default function LearnIndex() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Learn", url: PAGE_URL },
        ]}
      />
      <ItemListJsonLd
        name="Personal finance learning hub"
        url={PAGE_URL}
        items={guides.map((g) => ({
          name: g.h1,
          url: `${siteConfig.url}/learn/${g.slug}`,
          description: g.description,
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
          <span className="text-ink-900">Learn</span>
        </nav>

        <header className="mt-8 max-w-[760px]">
          <span className="eyebrow">Long-form guides</span>
          <h1 className="mt-3 text-[40px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
            Learn before <span className="text-forest-700">you borrow</span>.
          </h1>
          <p className="mt-6 text-[18px] leading-[1.55] text-ink-700">
            Guides on personal loans, debt strategy, credit improvement, and life-event financing. Each one is written by our editorial team, reviewed for compliance with federal lending law, and updated when the underlying rules or rates shift.
          </p>
          <p className="mt-3 text-[13px] text-ink-500">
            <em>See our <Link href="/editorial-policy" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">editorial policy</Link> for how content is researched and reviewed.</em>
          </p>
        </header>

        <nav aria-label="Topic clusters" className="mt-12 border-y border-ink-900 py-4">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]">
            {guideClusters.map((c) => (
              <li key={c}>
                <a
                  href={`#${slug(c)}`}
                  className="text-ink-700 underline decoration-cream-400 underline-offset-[5px] hover:text-ink-900 hover:decoration-ink-900"
                >
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-16 space-y-20">
          {guideClusters.map((cluster, i) => {
            const items = guidesInCluster(cluster);
            if (items.length === 0) return null;
            return (
              <section key={cluster} id={slug(cluster)} className="scroll-mt-24">
                <div className="flex items-baseline gap-4">
                  <span className="tabular text-2xl text-ink-300">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="text-[28px] leading-[1.1] tracking-tight text-ink-900 lg:text-[36px]">
                    {cluster}
                  </h2>
                </div>
                <dl className="mt-8 grid gap-5 sm:grid-cols-2">
                  {items.map((g) => (
                    <Link
                      key={g.slug}
                      href={`/learn/${g.slug}`}
                      className="group block rounded-2xl border border-cream-300 bg-cream-50/60 p-6 transition-colors hover:bg-cream-100 hover:border-cream-400"
                    >
                      <dt className="text-[20px] font-semibold tracking-tight text-ink-900 group-hover:text-forest-700">
                        {g.h1}
                      </dt>
                      <dd className="mt-3 text-[14px] leading-[1.6] text-ink-700">{g.description}</dd>
                      <dd className="mt-4 text-[12px] uppercase tracking-[0.15em] text-ink-500">
                        {g.estimatedReadMinutes} min read
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
