import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, type ProductSlug } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { BreadcrumbJsonLd, FaqJsonLd, LoanProductJsonLd } from "@/components/seo/JsonLd";
import { formatCurrency } from "@/lib/utils";

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = products[slug as ProductSlug];
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/loans/${p.slug}` },
    openGraph: { title: p.title, description: p.description, url: `/loans/${p.slug}` },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = products[slug as ProductSlug];
  if (!p) notFound();

  const productIndex = Object.keys(products).indexOf(p.slug) + 1;

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
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Loans", url: `${siteConfig.url}/loans/personal` },
          { name: p.h1, url: `${siteConfig.url}/loans/${p.slug}` },
        ]}
      />

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
              <div className="flex items-center gap-4">
                <span className="tabular text-2xl text-ink-300" style={{ fontFamily: "var(--font-display)" }}>
                  {String(productIndex).padStart(2, "0")}
                </span>
                <span className="eyebrow">Loan type</span>
              </div>
              <h1 className="mt-4 text-[44px] leading-[1.02] tracking-tight text-ink-900 lg:text-[80px]" style={{ fontFamily: "var(--font-display)", fontWeight: 380 }}>
                {p.h1}
              </h1>
              <p className="mt-6 max-w-[58ch] text-[18px] leading-[1.55] text-ink-700">{p.intro}</p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/apply" className="btn btn-primary">
                  Begin a request
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/how-it-works" className="text-[14px] text-ink-700 underline decoration-cream-400 underline-offset-[6px] hover:text-ink-900 hover:decoration-ink-900">
                  How it works ↗
                </Link>
              </div>
            </div>

            {/* Stat sidecard */}
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
              <h2 className="mt-3 text-[36px] leading-[1.05] tracking-tight text-ink-900 lg:text-[48px]" style={{ fontFamily: "var(--font-display)" }}>
                Why apply <em className="italic text-forest-700">here</em>.
              </h2>
            </div>
            <ul className="space-y-0 border-t border-ink-900">
              {p.bullets.map((b, i) => (
                <li key={b} className="grid grid-cols-[40px_1fr] gap-4 border-b border-cream-300 py-5">
                  <span
                    className="tabular text-[15px] text-ink-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
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
          <h2 className="mt-3 text-[36px] leading-[1.05] tracking-tight text-ink-900 lg:text-[48px]" style={{ fontFamily: "var(--font-display)" }}>
            About this loan.
          </h2>
          <dl className="mt-12 border-t border-ink-900">
            {p.faqs.map((f) => (
              <details key={f.q} className="group border-b border-cream-300 py-5">
                <summary className="flex cursor-pointer items-baseline justify-between gap-6 marker:hidden">
                  <span className="text-lg text-ink-900 lg:text-xl" style={{ fontFamily: "var(--font-display)" }}>
                    {f.q}
                  </span>
                  <span className="shrink-0 text-xl text-ink-300 transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <dd className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-ink-700">{f.a}</dd>
              </details>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-700 text-cream-100">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-[36px] leading-[1.05] tracking-tight lg:text-[56px]" style={{ fontFamily: "var(--font-display)", fontWeight: 380 }}>
              Ready when <em className="italic">you are</em>.
            </h2>
            <Link
              href="/apply"
              className="btn !bg-cream-100 !text-ink-900 hover:!bg-cream-200 !px-7 !py-4 !text-[15px]"
            >
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
      <dd className="tabular text-right text-[15px] text-ink-900" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>{v}</dd>
    </div>
  );
}
