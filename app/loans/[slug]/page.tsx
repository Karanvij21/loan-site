import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, type ProductSlug } from "@/lib/products";
import { useCases, useCaseSlugs } from "@/lib/useCases";
import { creditBands, creditBandSlugs } from "@/lib/creditBands";
import { employmentTypes, employmentSlugs } from "@/lib/employment";
import { siteConfig } from "@/lib/site";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  FaqJsonLd,
  LoanProductJsonLd,
  SpeakableJsonLd,
} from "@/components/seo/JsonLd";
import { defaultAuthor, defaultReviewer, authorUrl } from "@/lib/authors";
import { formatCurrency } from "@/lib/utils";

const PUBLISHED = "2026-02-01";
const REVIEWED = "2026-05-22";

/** Shared shape so the same JSX renders core products or use-case pages. */
type LoanPage = {
  slug: string;
  kind: "product" | "use-case" | "credit-band" | "employment";
  h1: string;
  title: string;
  description: string;
  eyebrow: string;
  amountMin: number;
  amountMax: number;
  termMin: number;
  termMax: number;
  aprMin: number;
  aprMax: number;
  intro: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
};

function resolve(slug: string): LoanPage | null {
  const product = products[slug as ProductSlug];
  if (product) {
    return {
      slug: product.slug,
      kind: "product",
      h1: product.h1,
      title: product.title,
      description: product.description,
      eyebrow: "Loan type",
      amountMin: product.amountMin,
      amountMax: product.amountMax,
      termMin: product.termMin,
      termMax: product.termMax,
      aprMin: product.aprMin,
      aprMax: product.aprMax,
      intro: product.intro,
      bullets: product.bullets,
      faqs: product.faqs,
    };
  }
  const uc = useCases[slug];
  if (uc) {
    return { ...mapUseCase(uc), kind: "use-case" };
  }
  const cb = creditBands[slug];
  if (cb) {
    return { ...mapUseCase(cb), kind: "credit-band" };
  }
  const emp = employmentTypes[slug];
  if (emp) {
    return { ...mapUseCase(emp), kind: "employment" };
  }
  return null;
}

function mapUseCase(uc: import("@/lib/useCases").UseCase): Omit<LoanPage, "kind"> {
  return {
    slug: uc.slug,
    h1: uc.h1,
    title: uc.title,
    description: uc.description,
    eyebrow: uc.eyebrow,
    amountMin: uc.amountMin,
    amountMax: uc.amountMax,
    termMin: uc.termMin,
    termMax: uc.termMax,
    aprMin: uc.aprMin,
    aprMax: uc.aprMax,
    intro: uc.intro,
    bullets: uc.bullets,
    faqs: uc.faqs,
  };
}

export function generateStaticParams() {
  return [
    ...Object.keys(products).map((slug) => ({ slug })),
    ...useCaseSlugs.map((slug) => ({ slug })),
    ...creditBandSlugs.map((slug) => ({ slug })),
    ...employmentSlugs.map((slug) => ({ slug })),
  ];
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = resolve(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: {
      canonical: `/loans/${p.slug}`,
      // Only the 3 core product slugs have Spanish translations so far;
      // pointing hreflang at non-existent /es pages would get downgraded.
      ...(p.slug === "personal" || p.slug === "bad-credit" || p.slug === "emergency"
        ? { languages: { "en-US": `/loans/${p.slug}`, "es-US": `/es/loans/${p.slug}` } }
        : {}),
    },
    openGraph: { title: p.title, description: p.description, url: `/loans/${p.slug}` },
  };
}

export default async function LoanPageRoute({ params }: Props) {
  const { slug } = await params;
  const p = resolve(slug);
  if (!p) notFound();

  const url = `${siteConfig.url}/loans/${p.slug}`;

  return (
    <>
      <LoanProductJsonLd
        name={p.h1}
        description={p.description}
        amountMin={p.amountMin}
        amountMax={p.amountMax}
        termMonthsMin={p.termMin}
        termMonthsMax={p.termMax}
        aprMin={p.aprMin}
        aprMax={p.aprMax}
      />
      <FaqJsonLd items={p.faqs} />
      <ArticleJsonLd
        headline={p.h1}
        description={p.description}
        url={url}
        datePublished={PUBLISHED}
        dateModified={REVIEWED}
        authorName={defaultAuthor.name}
        authorUrl={authorUrl(defaultAuthor)}
        reviewerName={defaultReviewer.name}
        reviewerUrl={authorUrl(defaultReviewer)}
        articleSection={
          p.kind === "product" ? "Loan type"
          : p.kind === "use-case" ? "Use case"
          : p.kind === "credit-band" ? "Credit profile"
          : "Employment type"
        }
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Loans", url: `${siteConfig.url}/loans/personal` },
          { name: p.h1, url },
        ]}
      />
      <SpeakableJsonLd url={url} cssSelectors={[".loan-intro"]} />

      {/* HERO */}
      <section className="border-b border-cream-300">
        <div className="mx-auto max-w-[1280px] px-6 pt-12 pb-20 lg:px-10 lg:pt-16 lg:pb-24">
          <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[12px] text-ink-500">
            <Link href="/" className="hover:text-ink-900">Home</Link>
            <span className="text-ink-300">/</span>
            <Link href="/loans/personal" className="hover:text-ink-900">Loans</Link>
            <span className="text-ink-300">/</span>
            <span className="text-ink-900">{p.h1}</span>
          </nav>

          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1fr_360px] lg:gap-20">
            <div>
              <span className="eyebrow">{p.eyebrow}</span>
              <h1 className="mt-4 text-[44px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
                {p.h1}
              </h1>
              <p className="loan-intro mt-6 max-w-[58ch] text-[18px] leading-[1.55] text-ink-700">{p.intro}</p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/apply" className="btn btn-primary">
                  Begin a request
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/calculators/loan-payment" className="text-[14px] text-ink-700 underline decoration-cream-400 underline-offset-[6px] hover:text-ink-900 hover:decoration-ink-900">
                  Calculate a payment ↗
                </Link>
              </div>
            </div>

            <aside className="rounded-[14px] bg-cream-50 ring-1 ring-cream-300 p-6">
              <span className="eyebrow">At a glance</span>
              <dl className="mt-5 space-y-4">
                <Row k="Amount" v={`${formatCurrency(p.amountMin)} – ${formatCurrency(p.amountMax)}`} />
                <Row k="APR range" v={`${p.aprMin}% – ${p.aprMax}%`} />
                <Row k="Term" v={`${p.termMin} – ${p.termMax} months`} />
                <Row k="Funding" v="Next business day" />
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-cream-50 border-b border-cream-300">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-24">
            <div>
              <span className="eyebrow">Highlights</span>
              <h2 className="mt-3 text-[36px] leading-[1.05] tracking-tight text-ink-900 lg:text-[48px]">
                Why apply <span className="text-forest-700">here</span>.
              </h2>
            </div>
            <ul className="space-y-0 border-t border-ink-900">
              {p.bullets.map((b, i) => (
                <li key={b} className="grid grid-cols-[40px_1fr] gap-4 border-b border-cream-300 py-5">
                  <span className="tabular text-[15px] text-ink-300">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[16px] text-ink-900">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-[920px] px-6 py-20 lg:px-10 lg:py-28">
          <span className="eyebrow">Common questions</span>
          <h2 className="mt-3 text-[36px] leading-[1.05] tracking-tight text-ink-900 lg:text-[48px]">
            About this loan.
          </h2>
          <div className="mt-12 border-t border-ink-900">
            {p.faqs.map((f) => (
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

      {/* CTA */}
      <section className="bg-forest-700 text-cream-100">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-[36px] leading-[1.05] tracking-tight lg:text-[56px]">
              Ready when <span>you are</span>.
            </h2>
            <Link href="/apply" className="btn !bg-cream-100 !text-ink-900 hover:!bg-cream-200 !px-7 !py-4 !text-[15px]">
              Begin your request
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

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-cream-300 pb-3 last:border-0 last:pb-0">
      <dt className="text-[12px] uppercase tracking-[0.15em] text-ink-500">{k}</dt>
      <dd className="tabular text-right text-[15px] text-ink-900">{v}</dd>
    </div>
  );
}
