import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { hreflangFor, t } from "@/lib/i18n";

/**
 * Spanish landing page (placeholder).
 *
 * Live so language-switcher links resolve to something useful, search
 * engines see a valid es-US URL paired via hreflang with the English
 * homepage, and we can start collecting Spanish-language paid-traffic
 * sessions before the full page tree is translated.
 *
 * Replaced with full Spanish homepage in the translation batch.
 */
export const metadata: Metadata = {
  title: "Préstamos personales hasta $50,000",
  description:
    "Compare ofertas de préstamos personales de $100 a $50,000 en minutos. Aceptamos crédito imperfecto. Gratis y sin obligación. Fondos tan rápido como el próximo día hábil.",
  alternates: {
    canonical: "/es",
    languages: hreflangFor("/"),
  },
  openGraph: {
    title: "Préstamos personales hasta $50,000",
    description: "Compare ofertas de préstamos personales en minutos.",
    url: "/es",
    locale: "es_US",
  },
};

const copy = t("es-US");

export default function EsHomePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: `${siteConfig.url}/es` },
        ]}
      />

      <article className="mx-auto max-w-[960px] px-6 py-20 lg:px-10 lg:py-28">
        <span className="eyebrow">Mercado de préstamos personales</span>
        <h1 className="mt-3 text-[44px] leading-[1.02] tracking-tight text-ink-900 lg:text-[68px]">
          Préstamos personales <span className="text-forest-700">hasta $50,000</span>.
        </h1>
        <p className="mt-6 max-w-[60ch] text-[18px] leading-[1.6] text-ink-700">
          {siteConfig.name} es un mercado en línea de préstamos personales que conecta a prestatarios estadounidenses con una red de prestamistas independientes, incluyendo LendingTree. La solicitud toma alrededor de dos minutos, no afecta su puntaje de crédito (solo consulta suave), y es gratis.
        </p>

        {/* Trust strip */}
        <ul className="mt-10 grid gap-3 sm:grid-cols-3 text-[13px]">
          <li className="rounded-lg border border-cream-300 bg-cream-50/60 px-4 py-3 text-ink-900">
            <strong className="font-semibold">{copy.trust.ssl}</strong>
          </li>
          <li className="rounded-lg border border-cream-300 bg-cream-50/60 px-4 py-3 text-ink-900">
            <strong className="font-semibold">{copy.trust.softPull}</strong>
          </li>
          <li className="rounded-lg border border-cream-300 bg-cream-50/60 px-4 py-3 text-ink-900">
            <strong className="font-semibold">{copy.trust.free}</strong>
          </li>
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/apply" className="btn btn-primary">
            {copy.cta.begin}
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="/" className="text-[14px] text-ink-700 underline decoration-cream-400 underline-offset-[6px] hover:text-ink-900 hover:decoration-ink-900">
            English version
          </Link>
        </div>

        {/* Programming-only note for the deploy that follows the translation batch */}
        <section className="mt-20 rounded-[14px] border border-cream-300 bg-cream-50 p-6 lg:p-8">
          <span className="eyebrow">Datos rápidos</span>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2">
            <Row k="Cantidades de préstamo" v="$100 a $50,000" />
            <Row k="Plazos de pago" v="3 a 72 meses" />
            <Row k="Rango de APR" v="5.99% a 35.99%" />
            <Row k="Estados servidos" v="Los 50 estados" />
            <Row k="Tiempo de financiación" v="Tan rápido como el próximo día hábil" />
            <Row k="Costo de aplicar" v="Gratis, sin obligación" />
          </dl>
        </section>

        <section className="mt-12 max-w-[60ch] text-[14px] leading-relaxed text-ink-500">
          <p>
            <em>Esta es nuestra página inicial en español. Estamos traduciendo el resto del sitio. Mientras tanto, el proceso de solicitud está disponible en inglés en {""}<Link href="/apply" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">{siteConfig.url}/apply</Link>.</em>
          </p>
        </section>
      </article>
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-cream-300 pb-3 last:border-0 last:pb-0">
      <dt className="text-[12px] uppercase tracking-[0.15em] text-ink-500">{k}</dt>
      <dd className="tabular text-right text-[15px] font-semibold text-ink-900">{v}</dd>
    </div>
  );
}
