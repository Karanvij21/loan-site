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
  title: "Préstamos de emergencia en línea: $300 a $5,000 rápido",
  description:
    "Préstamos de emergencia de $300 a $5,000 con financiación tan rápida como el próximo día hábil. Solicite en 2 minutos con consulta de crédito suave.",
  alternates: {
    canonical: "/es/loans/emergency",
    languages: hreflangFor("/loans/emergency"),
  },
  openGraph: {
    title: "Préstamos de emergencia",
    description: "Préstamos rápidos de $300 a $5,000.",
    url: "/es/loans/emergency",
    locale: "es_US",
  },
};

const bullets = [
  "Cantidades de préstamo desde $300 hasta $5,000",
  "Financiación tan rápida como el próximo día hábil",
  "Decisión típicamente en minutos",
  "Todos los perfiles de crédito considerados",
  "Consulta de crédito suave para empezar",
];

const faqs = [
  {
    q: "¿Qué tan rápido recibiré el dinero?",
    a: "Después de aceptar una oferta y firmar electrónicamente, los fondos se depositan típicamente vía ACH el próximo día hábil. Algunos prestamistas ofrecen financiación el mismo día por una tarifa adicional.",
  },
  {
    q: "¿Verificarán mi crédito para un préstamo de emergencia?",
    a: "Sí. Todos los prestamistas de nuestra red realizan algún tipo de revisión de crédito. La consulta inicial es una consulta suave que no afecta su puntaje; una consulta dura solo ocurre si acepta una oferta final.",
  },
];

export default function EsEmergencyLoans() {
  const url = `${siteConfig.url}/es/loans/emergency`;
  return (
    <>
      <LoanProductJsonLd
        name="Préstamos de emergencia"
        description="Préstamos personales a corto plazo de $300 a $5,000 con fondos disponibles tan pronto como el próximo día hábil."
        amountMin={300}
        amountMax={5000}
        termMonthsMin={3}
        termMonthsMax={36}
        aprMin={14.99}
        aprMax={35.99}
      />
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: `${siteConfig.url}/es` },
          { name: "Préstamos de emergencia", url },
        ]}
      />

      <section className="border-b border-cream-300">
        <div className="mx-auto max-w-[1280px] px-6 pt-12 pb-20 lg:px-10 lg:pt-16 lg:pb-24">
          <nav aria-label="Migas de pan" className="flex items-center gap-3 text-[12px] text-ink-500">
            <Link href="/es" className="hover:text-ink-900">Inicio</Link>
            <span className="text-ink-300">/</span>
            <span className="text-ink-900">Préstamos de emergencia</span>
          </nav>

          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1fr_360px] lg:gap-20">
            <div>
              <span className="eyebrow">Por necesidad</span>
              <h1 className="mt-4 text-[44px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
                Préstamos de <span className="text-forest-700">emergencia</span>.
              </h1>
              <p className="mt-6 max-w-[58ch] text-[18px] leading-[1.55] text-ink-700">
                Un préstamo de emergencia es un préstamo personal a corto plazo diseñado para gastos inesperados como una factura médica, reparación de automóvil o reparación urgente del hogar. Los prestamistas de nuestra red priorizan decisiones rápidas y financiación el mismo día o al día siguiente.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/apply" className="btn btn-primary">Comenzar solicitud</Link>
                <Link href="/loans/emergency" className="text-[14px] text-ink-700 underline decoration-cream-400 underline-offset-[6px] hover:text-ink-900 hover:decoration-ink-900">
                  English version
                </Link>
              </div>
            </div>

            <aside className="rounded-[14px] bg-cream-50 ring-1 ring-cream-300 p-6">
              <span className="eyebrow">Resumen</span>
              <dl className="mt-5 space-y-4">
                <Row k="Cantidad" v="$300 a $5,000" />
                <Row k="Rango de APR" v="14.99% a 35.99%" />
                <Row k="Plazo" v="3 a 36 meses" />
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
