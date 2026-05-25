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

      <section className="bg-gradient-to-br from-brand-50 via-white to-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <Link href="/" className="hover:underline">Home</Link> / <span>Loans</span> /{" "}
            <span className="text-slate-700">{p.h1}</span>
          </nav>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{p.h1}</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">{p.intro}</p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white hover:bg-brand-700"
            >
              See my offers
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:border-brand-600"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">At a glance</h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Stat label="Loan amount" value={`${formatCurrency(p.amountMin)}–${formatCurrency(p.amountMax)}`} />
            <Stat label="APR range" value={`${p.aprMin}% – ${p.aprMax}%`} />
            <Stat label="Term" value={`${p.termMin}–${p.termMax} mo`} />
            <Stat label="Funding" value="Next business day" />
          </dl>

          <h2 className="mt-12 text-2xl font-bold text-slate-900">Why apply with us</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            {p.bullets.map((b) => (
              <li key={b} className="flex gap-2"><span className="text-brand-600">✓</span> {b}</li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-bold text-slate-900">FAQ</h2>
          <dl className="mt-6 space-y-3">
            {p.faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer text-base font-semibold text-slate-900">{f.q}</summary>
                <dd className="mt-2 text-slate-700">{f.a}</dd>
              </details>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <dt className="text-xs uppercase tracking-wide text-slate-500">{label}</dt>
      <dd className="mt-1 text-lg font-semibold text-slate-900">{value}</dd>
    </div>
  );
}
