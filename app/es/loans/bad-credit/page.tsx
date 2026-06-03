import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  LoanProductJsonLd,
} from "@/components/seo/JsonLd";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Préstamos personales para mal crédito: $500 a $10,000",
  description:
    "Préstamos personales para mal crédito de $500 a $10,000. Prestamistas de nuestra red consideran puntajes FICO inferiores a 600. Solicite con consulta de crédito suave.",
  alternates: {
    canonical: "/es/loans/bad-credit",
    languages: hreflangFor("/loans/bad-credit"),
  },
  openGraph: {
    title: "Préstamos personales para mal crédito",
    description: "Préstamos para puntajes FICO por debajo de 600.",
    url: "/es/loans/bad-credit",
    locale: "es_US",
  },
};

const bullets = [
  "Cantidades de préstamo desde $500 hasta $10,000",
  "Se consideran puntajes FICO inferiores a 600",
  "APRs típicamente del 19.99% al 35.99%",
  "Decisión en minutos, fondos en tan poco como 24 horas",
  "Solo consulta suave, sin impacto al solicitar",
];

const faqs = [
  {
    q: "¿Qué puntaje de crédito necesito?",
    a: "Algunos prestamistas de nuestra red consideran puntajes tan bajos como 500, aunque la aprobación no está garantizada. Cuanto mayor sea su puntaje e ingresos, mejores serán sus probabilidades y términos.",
  },
  {
    q: "¿Los préstamos para mal crédito son más caros?",
    a: "Sí. Debido a que el prestamista asume más riesgo, los APRs son típicamente más altos. Compare ofertas cuidadosamente y solo pida prestado lo que pueda pagar.",
  },
  {
    q: "¿El pago mejorará mi crédito?",
    a: "La mayoría de los prestamistas reportan a una o más agencias de crédito. Hacer pagos a tiempo puede ayudar a reconstruir su crédito con el tiempo.",
  },
];

export default function EsBadCreditLoans() {
  const url = `${siteConfig.url}/es/loans/bad-credit`;
  return (
    <>
      <LoanProductJsonLd
        name="Préstamos para mal crédito"
        description="Préstamos personales no garantizados de $500 a $10,000 para prestatarios con puntajes FICO por debajo de 600."
        amountMin={500}
        amountMax={10000}
        termMonthsMin={6}
        termMonthsMax={60}
        aprMin={19.99}
        aprMax={35.99}
      />
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: `${siteConfig.url}/es` },
          { name: "Préstamos para mal crédito", url },
        ]}
      />

      <section className="border-b border-cream-300">
        <div className="mx-auto max-w-[1280px] px-6 pt-12 pb-20 lg:px-10 lg:pt-16 lg:pb-24">
          <nav aria-label="Migas de pan" className="flex items-center gap-3 text-[12px] text-ink-500">
            <Link href="/es" className="hover:text-ink-900">Inicio</Link>
            <span className="text-ink-300">/</span>
            <span className="text-ink-900">Préstamos para mal crédito</span>
          </nav>

          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1fr_360px] lg:gap-20">
            <div>
              <span className="eyebrow">Por perfil de crédito</span>
              <h1 className="mt-4 text-[44px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
                Préstamos para <span className="text-forest-700">mal crédito</span>.
              </h1>
              <p className="mt-6 max-w-[58ch] text-[18px] leading-[1.55] text-ink-700">
                Un préstamo para mal crédito es un préstamo personal ofrecido a prestatarios con puntajes FICO por debajo de 600. Los prestamistas que se especializan en este mercado consideran factores más allá del puntaje de crédito, incluyendo ingresos, empleo e historial de cuenta bancaria, al evaluar su solicitud.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/apply" className="btn btn-primary">Comenzar solicitud</Link>
                <Link href="/loans/bad-credit" className="text-[14px] text-ink-700 underline decoration-cream-400 underline-offset-[6px] hover:text-ink-900 hover:decoration-ink-900">
                  English version
                </Link>
              </div>
            </div>

            <aside className="rounded-[14px] bg-cream-50 ring-1 ring-cream-300 p-6">
              <span className="eyebrow">Resumen</span>
              <dl className="mt-5 space-y-4">
                <Row k="Cantidad" v="$500 a $10,000" />
                <Row k="Rango de APR" v="19.99% a 35.99%" />
                <Row k="Plazo" v="6 a 60 meses" />
                <Row k="Financiación" v="Próximo día hábil" />
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 border-b border-cream-300">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-24">
            <div>
              <span className="eyebrow">Características</span>
              <h2 className="mt-3 text-[36px] leading-[1.05] tracking-tight text-ink-900 lg:text-[48px]">
                Por qué <span className="text-forest-700">solicitar aquí</span>.
              </h2>
            </div>
            <ul className="space-y-0 border-t border-ink-900">
              {bullets.map((b, i) => (
                <li key={b} className="grid grid-cols-[40px_1fr] gap-4 border-b border-cream-300 py-5">
                  <span className="tabular text-[15px] text-ink-300">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[16px] text-ink-900">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[920px] px-6 py-20 lg:px-10 lg:py-28">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="mt-3 text-[36px] leading-[1.05] tracking-tight text-ink-900 lg:text-[48px]">
            Sobre este préstamo.
          </h2>
          <div className="mt-12 border-t border-ink-900">
            {faqs.map((f) => (
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

      <section className="bg-forest-700 text-cream-100">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-[36px] leading-[1.05] tracking-tight lg:text-[56px]">Listo cuando usted lo esté.</h2>
            <Link href="/apply" className="btn !bg-cream-100 !text-ink-900 hover:!bg-cream-200 !px-7 !py-4 !text-[15px]">Comenzar solicitud</Link>
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
