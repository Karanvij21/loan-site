import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, BreadcrumbJsonLd, SpeakableJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import { hreflangFor } from "@/lib/i18n";

const URL = `${siteConfig.url}/es/faq`;

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Respuestas a preguntas comunes sobre préstamos personales, consultas de crédito, elegibilidad, velocidad de financiación, tarifas y más.",
  alternates: {
    canonical: "/es/faq",
    languages: hreflangFor("/faq"),
  },
  openGraph: {
    title: "Preguntas frecuentes",
    description: "Respuestas a preguntas comunes sobre préstamos personales.",
    url: "/es/faq",
    locale: "es_US",
  },
};

const faqs = [
  { q: "¿Cuánto puedo pedir prestado?", a: "Puede solicitar desde $100 hasta $50,000. La cantidad real para la que califique depende de la evaluación del prestamista sobre sus ingresos y perfil de crédito." },
  { q: "¿Solicitar afectará mi puntaje de crédito?", a: "No. Realizamos solo una consulta de crédito suave. Una consulta dura solo ocurre si acepta una oferta final y el prestamista la requiere." },
  { q: "¿Qué tan rápido recibiré los fondos?", a: "Una vez que acepte y firme electrónicamente una oferta, los fondos típicamente se depositan al próximo día hábil vía ACH." },
  { q: "¿Puedo obtener un préstamo con mal crédito?", a: "Sí. Nuestra red incluye prestamistas que consideran puntajes FICO inferiores a 600. La aprobación no está garantizada." },
  { q: "¿Qué necesito para solicitar?", a: "Tener 18 años o más, residencia en EE.UU., ingresos constantes, una cuenta corriente activa y correo electrónico y teléfono válidos." },
  { q: "¿Hay una tarifa por solicitar?", a: "No. El servicio es gratuito y no hay obligación de aceptar ninguna oferta." },
  { q: "¿Mi información está segura?", a: "Usamos cifrado SSL de 256 bits y prácticas de seguridad estándar de la industria para proteger sus datos." },
  { q: "¿Cómo me doy de baja del marketing?", a: "Responda STOP a cualquier SMS, haga clic en 'darse de baja' en cualquier correo electrónico, o escríbanos a " + siteConfig.email + "." },
  { q: "¿Operan en todos los estados?", a: "Trabajamos con prestamistas que cubren los 50 estados, pero ciertos productos pueden no estar disponibles en todos los estados debido a regulaciones locales." },
  { q: "¿Quién es LendingTree?", a: "LendingTree es uno de los mercados de préstamos en línea más grandes de Estados Unidos. Es uno de nuestros socios de red y puede proporcionarle ofertas basadas en su solicitud." },
];

export default function EsFAQPage() {
  return (
    <>
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: `${siteConfig.url}/es` },
          { name: "Preguntas frecuentes", url: URL },
        ]}
      />
      <SpeakableJsonLd url={URL} cssSelectors={["h1", "summary", "details p"]} />

      <article className="mx-auto max-w-[920px] px-6 py-20 lg:px-10 lg:py-28">
        <span className="eyebrow">Respuestas honestas</span>
        <h1 className="mt-3 text-[40px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
          Preguntas frecuentes.
        </h1>

        <div className="mt-14 border-t border-ink-900">
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

        <div className="mt-12">
          <Link href="/faq" className="text-[14px] text-ink-700 underline decoration-cream-400 underline-offset-[6px] hover:text-ink-900 hover:decoration-ink-900">
            English version
          </Link>
        </div>
      </article>
    </>
  );
}
