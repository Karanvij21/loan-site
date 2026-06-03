import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  BreadcrumbJsonLd,
  HowToJsonLd,
  SpeakableJsonLd,
} from "@/components/seo/JsonLd";
import { hreflangFor } from "@/lib/i18n";

const URL = `${siteConfig.url}/es/how-it-works`;

export const metadata: Metadata = {
  title: "Cómo funciona",
  description:
    "Tres pasos: envíe su solicitud gratuita, revise sus ofertas, reciba los fondos. Consulta de crédito suave, sin obligación.",
  alternates: {
    canonical: "/es/how-it-works",
    languages: hreflangFor("/how-it-works"),
  },
  openGraph: {
    title: "Cómo funciona",
    description: "Tres pasos para comparar y aceptar ofertas de préstamos personales.",
    url: "/es/how-it-works",
    locale: "es_US",
  },
};

const steps = [
  {
    n: "01",
    t: "Envíe su solicitud gratuita",
    b: "Un formulario corto de dos minutos. Le preguntamos sobre el monto del préstamo, información personal básica, sus ingresos y el estado de su cuenta bancaria. Realizamos solo una consulta de crédito suave. Su puntaje de crédito no se ve afectado.",
  },
  {
    n: "02",
    t: "Revise sus ofertas",
    b: "Compartimos al instante su solicitud con prestamistas de nuestra red, incluyendo LendingTree. Los prestamistas responden en tiempo real con tasas, plazos y pagos mensuales. Compare las ofertas y elija la que mejor se adapte.",
  },
  {
    n: "03",
    t: "Reciba los fondos",
    b: "Firme electrónicamente su acuerdo de préstamo con el prestamista que elija. Los fondos generalmente se depositan vía ACH en su cuenta corriente tan rápido como el próximo día hábil.",
  },
];

export default function EsHowItWorks() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: `${siteConfig.url}/es` },
          { name: "Cómo funciona", url: URL },
        ]}
      />
      <HowToJsonLd
        name="Cómo obtener un préstamo personal en línea"
        description="Tres pasos para comparar y aceptar una oferta de préstamo personal de la red de prestamistas de Get Advance Loan."
        totalTime="PT12M"
        steps={steps.map((s) => ({ name: s.t, text: s.b }))}
      />
      <SpeakableJsonLd url={URL} cssSelectors={["h1", ".how-step h2", ".how-step p"]} />

      <article className="mx-auto max-w-[920px] px-6 py-20 lg:px-10 lg:py-28">
        <span className="eyebrow">El proceso</span>
        <h1 className="mt-3 text-[40px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
          Tres pasos. <span className="text-forest-700">Aproximadamente doce minutos.</span>
        </h1>

        <ol className="mt-16 border-t border-ink-900">
          {steps.map((s) => (
            <li key={s.n} className="how-step grid grid-cols-[60px_1fr] gap-6 border-b border-cream-300 py-10 lg:grid-cols-[120px_1fr]">
              <span className="tabular text-3xl text-ink-300 lg:text-4xl">{s.n}</span>
              <div>
                <h2 className="text-2xl text-ink-900 lg:text-3xl">{s.t}</h2>
                <p className="mt-3 max-w-[60ch] text-[16px] leading-relaxed text-ink-700">{s.b}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-wrap gap-4 items-center">
          <Link href="/apply" className="btn btn-primary">
            Comenzar solicitud
          </Link>
          <Link href="/how-it-works" className="text-[14px] text-ink-700 underline decoration-cream-400 underline-offset-[6px] hover:text-ink-900 hover:decoration-ink-900">
            English version
          </Link>
        </div>
      </article>
    </>
  );
}
