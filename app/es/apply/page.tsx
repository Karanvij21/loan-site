import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import { hreflangFor } from "@/lib/i18n";
import { RoundSkyForm } from "@/components/apply/RoundSkyForm";

/**
 * Spanish-language wrapper around the same Round Sky iframe.
 * Note: the form itself currently renders in English (Round Sky's
 * style options don't expose a Spanish-language variant at this time).
 * We surface this clearly so Spanish-speaking applicants aren't
 * surprised, and link to the English /apply for the same flow.
 */
export const metadata: Metadata = {
  title: "Comenzar su solicitud",
  description:
    "Solicite un préstamo personal de $100 a $50,000. Dos minutos. Solo consulta de crédito suave. Sin impacto a su puntaje de crédito.",
  alternates: {
    canonical: "/es/apply",
    languages: hreflangFor("/apply"),
  },
  robots: { index: true, follow: true },
};

export default function EsApplyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: `${siteConfig.url}/es` },
          { name: "Solicitar", url: `${siteConfig.url}/es/apply` },
        ]}
      />
      <article className="mx-auto max-w-[1080px] px-6 pt-12 pb-20 lg:px-10 lg:pt-16 lg:pb-24">
        <div className="flex items-center gap-3 text-[12px] text-ink-500">
          <Link href="/es" className="hover:text-ink-900">Inicio</Link>
          <span className="text-ink-300">/</span>
          <span className="text-ink-900">Comenzar</span>
        </div>

        <header className="mt-6 grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          <h1 className="text-[44px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
            Su <span className="text-forest-700">solicitud</span>.
          </h1>
          <p className="max-w-[28ch] text-[14px] text-ink-500">
            Aproximadamente dos minutos. Solo consulta de crédito suave. No hay impacto en su puntaje por solicitar.
          </p>
        </header>

        <ul className="mt-10 grid gap-3 sm:grid-cols-3 text-[13px]">
          <li className="rounded-lg border border-cream-300 bg-cream-50/60 px-4 py-3 text-ink-900">
            <strong className="font-semibold">Cifrado SSL de 256 bits.</strong>{" "}
            <span className="text-ink-700">Datos cifrados.</span>
          </li>
          <li className="rounded-lg border border-cream-300 bg-cream-50/60 px-4 py-3 text-ink-900">
            <strong className="font-semibold">Consulta suave.</strong>{" "}
            <span className="text-ink-700">No afecta su puntaje.</span>
          </li>
          <li className="rounded-lg border border-cream-300 bg-cream-50/60 px-4 py-3 text-ink-900">
            <strong className="font-semibold">Servicio gratuito.</strong>{" "}
            <span className="text-ink-700">Sin tarifas ni obligación.</span>
          </li>
        </ul>

        <p className="mt-6 rounded-lg border border-amber-300/30 bg-amber-300/10 p-4 text-[13px] leading-relaxed text-amber-700">
          <strong className="font-semibold">Nota:</strong> El formulario de solicitud a continuación se muestra actualmente en inglés. Estamos trabajando con nuestro socio para añadir una versión en español. Si prefiere una experiencia completamente en español por ahora, contáctenos en <a href={`mailto:${siteConfig.email}`} className="underline decoration-amber-300/50 underline-offset-2 hover:decoration-amber-700">{siteConfig.email}</a>.
        </p>

        <section className="mt-6 rounded-[18px] border border-cream-300 bg-cream-50 p-3 sm:p-5 lg:p-8">
          <Suspense fallback={<div className="h-[480px] animate-pulse rounded-[14px] bg-cream-100 ring-1 ring-cream-300" />}>
            <RoundSkyForm />
          </Suspense>
        </section>

        <section className="mt-8 space-y-3 text-[12px] leading-relaxed text-ink-500">
          <p>
            Al enviar su información, usted acepta nuestros <Link href="/terms" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">Términos de Uso</Link>, <Link href="/privacy" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">Política de Privacidad</Link> y <Link href="/disclosures" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">divulgaciones al consumidor</Link>, y consiente ser contactado por {siteConfig.name} y los prestamistas socios (incluyendo Round Sky, LendingTree y los prestamistas en sus redes) por teléfono, llamadas automáticas y pregrabadas, mensajes SMS y correo electrónico con respecto a productos y servicios de préstamo, incluso si su número está en una lista de No Llamar. El consentimiento no es una condición para recibir un préstamo. Pueden aplicarse tarifas estándar de mensajes y datos. Responda STOP para darse de baja de los SMS en cualquier momento.
          </p>
          <p>
            <strong className="text-ink-700">{siteConfig.name}</strong> es una marca operada por {siteConfig.legalEntity}. No somos un prestamista. Los APRs disponibles a través de nuestra red de prestamistas típicamente varían del 5.99% al 35.99% dependiendo del prestamista, crédito, monto y estado. Cantidades de préstamo de $100 a $50,000. Plazos de 3 a 72 meses. Vea las <Link href="/disclosures" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">divulgaciones completas</Link> para ejemplos representativos.
          </p>
        </section>

        <div className="mt-10">
          <Link href="/apply" className="text-[14px] text-ink-700 underline decoration-cream-400 underline-offset-[6px] hover:text-ink-900 hover:decoration-ink-900">
            English version
          </Link>
        </div>
      </article>
    </>
  );
}
