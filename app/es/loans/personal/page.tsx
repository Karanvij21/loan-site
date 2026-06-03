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
  title: "Préstamos personales: $1,000 a $50,000",
  description:
    "Compare ofertas de préstamos personales de $1,000 a $50,000. APR fijo, plazos de hasta 72 meses, consulta de crédito suave. Reciba ofertas en 2 minutos.",
  alternates: {
    canonical: "/es/loans/personal",
    languages: hreflangFor("/loans/personal"),
  },
  openGraph: {
    title: "Préstamos personales en línea: $1,000 a $50,000",
    description: "Compare ofertas de préstamos personales en minutos.",
    url: "/es/loans/personal",
    locale: "es_US",
  },
};

const bullets = [
  "Cantidades de préstamo desde $1,000 hasta $50,000",
  "APR fijo, típicamente del 5.99% al 35.99%",
  "Plazos de pago de 12 a 72 meses",
  "Consulta de crédito suave, sin impacto al solicitar",
  "Fondos tan rápido como el próximo día hábil",
];

const faqs = [
  {
    q: "¿Para qué puedo usar un préstamo personal?",
    a: "Consolidación de deudas, mejoras en el hogar, gastos médicos, bodas, mudanzas y la mayoría de los demás gastos personales. Algunos prestamistas restringen el uso para educación postsecundaria, juegos de azar o actividades ilegales.",
  },
  {
    q: "¿Qué APR obtendré?",
    a: "Su APR depende de su puntaje de crédito, ingresos, relación deuda-ingreso, monto del préstamo, plazo y el prestamista. Los solicitantes más fuertes ven APRs de un solo dígito.",
  },
  {
    q: "¿Hay penalización por pago anticipado?",
    a: "La mayoría de los prestamistas de nuestra red no cobra penalización por pago anticipado, pero confirme siempre en su acuerdo de préstamo.",
  },
];

export default function EsPersonalLoans() {
  const url = `${siteConfig.url}/es/loans/personal`;
  return (
    <>
      <LoanProductJsonLd
        name="Préstamos personales"
        description="Préstamos personales no garantizados de $1,000 a $50,000 con APR fijo y plazos de 12 a 72 meses."
        amountMin={1000}
        amountMax={50000}
        termMonthsMin={12}
        termMonthsMax={72}
        aprMin={5.99}
        aprMax={35.99}
      />
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: `${siteConfig.url}/es` },
          { name: "Préstamos", url: `${siteConfig.url}/es/loans/personal` },
          { name: "Préstamos personales", url },
        ]}
      />

      <section className="border-b border-cream-300">
        <div className="mx-auto max-w-[1280px] px-6 pt-12 pb-20 lg:px-10 lg:pt-16 lg:pb-24">
          <nav aria-label="Migas de pan" className="flex items-center gap-3 text-[12px] text-ink-500">
            <Link href="/es" className="hover:text-ink-900">Inicio</Link>
            <span className="text-ink-300">/</span>
            <span className="text-ink-900">Préstamos personales</span>
          </nav>

          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1fr_360px] lg:gap-20">
            <div>
              <span className="eyebrow">Tipo de préstamo</span>
              <h1 className="mt-4 text-[44px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
                Préstamos personales hasta <span className="text-forest-700">$50,000</span>.
              </h1>
              <p className="mt-6 max-w-[58ch] text-[18px] leading-[1.55] text-ink-700">
                Un préstamo personal es un préstamo a plazos que se reembolsa en pagos mensuales fijos. Use los fondos para casi cualquier propósito: consolidar deudas, financiar una compra mayor, cubrir facturas médicas o pagar una boda. Nuestra red incluye prestamistas que trabajan con una amplia variedad de perfiles de crédito.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/apply" className="btn btn-primary">
                  Comenzar solicitud
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/loans/personal" className="text-[14px] text-ink-700 underline decoration-cream-400 underline-offset-[6px] hover:text-ink-900 hover:decoration-ink-900">
                  English version
                </Link>
              </div>
            </div>

            <aside className="rounded-[14px] bg-cream-50 ring-1 ring-cream-300 p-6">
              <span className="eyebrow">Resumen</span>
              <dl className="mt-5 space-y-4">
                <Row k="Cantidad" v="$1,000 a $50,000" />
                <Row k="Rango de APR" v="5.99% a 35.99%" />
                <Row k="Plazo" v="12 a 72 meses" />
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
            <h2 className="text-[36px] leading-[1.05] tracking-tight lg:text-[56px]">
              Listo cuando <span>usted lo esté</span>.
            </h2>
            <Link href="/apply" className="btn !bg-cream-100 !text-ink-900 hover:!bg-cream-200 !px-7 !py-4 !text-[15px]">
              Comenzar solicitud
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
