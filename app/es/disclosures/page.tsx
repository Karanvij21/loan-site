import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Divulgaciones al consumidor",
  description: `Divulgaciones de préstamo, publicidad, afiliados y consumidor para ${siteConfig.name}.`,
  alternates: {
    canonical: "/es/disclosures",
    languages: hreflangFor("/disclosures"),
  },
};

export default function EsDisclosures() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: `${siteConfig.url}/es` },
          { name: "Divulgaciones", url: `${siteConfig.url}/es/disclosures` },
        ]}
      />
      <article className="mx-auto max-w-[760px] px-6 py-20 lg:px-10 lg:py-28">
      <div className="legal-prose">
        <h1>Divulgaciones</h1>
        <p>
          <em>Última actualización: {new Date().toLocaleDateString("es-US", { year: "numeric", month: "long", day: "numeric" })}</em>
        </p>

        <div className="rounded-lg border border-amber-300/30 bg-amber-300/10 p-4 text-[14px] leading-relaxed text-amber-700">
          <p>
            <strong>Aviso importante:</strong> Esta página es una traducción de cortesía de nuestras <Link href="/disclosures" className="underline decoration-amber-300/50 underline-offset-2 hover:decoration-amber-700">divulgaciones en inglés</Link>. La versión en inglés es la versión legalmente vinculante. En caso de cualquier conflicto entre las dos versiones, la versión en inglés prevalece.
          </p>
        </div>

        <h2>1. Generador de leads, no prestamista</h2>
        <p>
          {siteConfig.name} es una marca operada por {siteConfig.legalEntity}, un generador de leads y mercado en línea gratuito de préstamos. <strong>No somos un prestamista</strong>, corredor, agente o representante de ningún prestamista. No tomamos decisiones de préstamo o crédito, no establecemos tasas o términos, no originamos ni financiamos préstamos, ni cobramos pagos. Usamos la información que usted envía para conectarlo con una red de prestamistas independientes externos, incluyendo <strong>LendingTree</strong>, quienes pueden hacerle una oferta. La aprobación, los términos, el APR y las tarifas son determinados únicamente por el prestamista a su sola discreción.
        </p>

        <h2>2. APR y divulgación de la Ley de Veracidad en los Préstamos (TILA)</h2>
        <p>
          Las Tasas de Porcentaje Anual (APR) en nuestra red de prestamistas típicamente varían del <strong>5.99% al 35.99%</strong>. El APR que se le ofrece depende del prestamista, su perfil de crédito, monto del préstamo, plazo y estado de residencia. Siempre revise cuidadosamente el acuerdo de préstamo del prestamista antes de firmar.
        </p>

        <h2>3. Ejemplo representativo</h2>
        <p>
          <strong>Préstamo de $5,000</strong> a un APR del <strong>24.99%</strong> durante <strong>36 meses</strong> resultaría en un pago mensual de aproximadamente <strong>$198.66</strong> y un costo total (principal más intereses) de <strong>$7,151.76</strong>.
        </p>

        <h2>4. Cantidades de préstamo y plazos</h2>
        <p>
          Las cantidades de préstamo varían de <strong>$100 a $50,000</strong>. Los plazos de pago varían de <strong>3 a 72 meses</strong>. Las cantidades y plazos específicos disponibles para usted dependen del prestamista, el producto del préstamo y sus calificaciones.
        </p>

        <h2>5. Implicaciones de pagos atrasados y falta de pago</h2>
        <p>
          Los <strong>pagos atrasados</strong> pueden resultar en cargos por mora (típicamente $15 a $40, dependiendo del prestamista), acumulación adicional de intereses y reporte a una o más agencias nacionales de crédito, lo que puede afectar negativamente su puntaje de crédito.
        </p>
        <p>
          La <strong>falta de pago</strong> puede resultar en actividad adicional de cobro (que puede incluir llamadas, cartas, correos electrónicos y, en algunos casos, acción legal por parte del prestamista), el préstamo siendo cancelado y daño sustancial a su puntaje de crédito.
        </p>

        <h2>6. Divulgación de verificación de crédito (FCRA)</h2>
        <p>
          El envío de una solicitud a través de {siteConfig.name} resulta en una <strong>consulta suave de crédito</strong>, que no afecta su puntaje de crédito. Si elige aceptar una oferta final, el prestamista puede realizar una <strong>consulta dura de crédito</strong>, que puede afectar su puntaje de crédito y permanecer en su informe de crédito hasta por 24 meses. Tiene derechos bajo la Ley de Reporte Justo de Crédito (FCRA), incluyendo el derecho a obtener una copia de su informe de crédito y disputar información inexacta. Visite{" "}
          <a href="https://www.annualcreditreport.com" target="_blank" rel="noopener noreferrer">annualcreditreport.com</a>{" "}
          para informes anuales gratuitos.
        </p>

        <h2>7. Disponibilidad estatal</h2>
        <p>
          Los productos de préstamo disponibles a través de nuestra red de prestamistas varían según el estado. {siteConfig.name} no opera ni solicita negocios en estados donde esto no estaría permitido bajo la ley estatal aplicable.
        </p>

        <h2>8. Divulgación de afiliados y compensación</h2>
        <p>
          {siteConfig.name} gana una tarifa de referencia o comisión de los prestamistas en nuestra red cuando usted envía una solicitud, cuando un prestamista le hace una oferta o cuando acepta una oferta. Esta compensación puede influir en qué prestamistas mostramos. Sin embargo, no aceptamos compensación de los consumidores, y el servicio es gratuito para usted.
        </p>

        <h2>9. Ley de Igualdad de Oportunidades de Crédito (ECOA)</h2>
        <p>
          La Ley Federal de Igualdad de Oportunidades de Crédito prohíbe a los acreedores discriminar a los solicitantes de crédito en base a raza, color, religión, origen nacional, sexo, estado civil, edad, o porque toda o parte de los ingresos del solicitante provienen de cualquier programa de asistencia pública. La agencia federal que administra el cumplimiento de esta ley es la Oficina de Protección Financiera del Consumidor, 1700 G Street NW, Washington, DC 20552.
        </p>

        <h2>10. Ley de Préstamos Militares (MLA)</h2>
        <p>
          La ley federal proporciona protecciones importantes a los miembros en servicio activo de las Fuerzas Armadas y sus dependientes. En general, el costo del crédito al consumidor para un prestatario cubierto no puede exceder una tasa de porcentaje anual del 36%, conocida como la Tasa de Porcentaje Anual Militar (MAPR). Si usted es un miembro del servicio activo o dependiente cubierto y cree que una oferta excede el límite MAPR, contáctenos en <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>

        <h2>11. Sin garantía de aprobación, cantidad o términos</h2>
        <p>
          Enviar una solicitud a través de {siteConfig.name} <strong>no es una garantía de que recibirá una oferta</strong>, que cualquier oferta coincidirá con la cantidad que solicita, o que el APR, plazo o tarifas estarán en un nivel específico. Las decisiones finales del préstamo, aprobación, cantidad, APR y términos los toma el prestamista a su sola discreción.
        </p>

        <h2>12. Contacto</h2>
        <p>
          Para preguntas sobre estas divulgaciones, contáctenos en{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>

        <p>
          <em>Esta página es un resumen de buena fe de las divulgaciones obligatorias aplicables a los generadores de leads de préstamos al consumidor en EE.UU. No es asesoramiento legal. Consulte con un abogado antes de tomar decisiones legales.</em>
        </p>

        <div className="mt-10">
          <Link href="/disclosures" className="text-[14px] text-ink-700 underline decoration-cream-400 underline-offset-[6px] hover:text-ink-900 hover:decoration-ink-900">
            English version
          </Link>
        </div>
      </div>
      <style>{`
        .legal-prose h1 { font-family: var(--font-display); font-weight: 380; font-size: clamp(2.5rem, 6vw, 4.5rem); line-height: 1.02; letter-spacing: -0.022em; color: var(--color-ink-900); margin-bottom: 1.5rem; }
        .legal-prose h2 { font-family: var(--font-display); font-weight: 500; font-size: 1.5rem; color: var(--color-ink-900); margin-top: 2.5rem; margin-bottom: 0.75rem; padding-top: 1.5rem; border-top: 1px solid var(--color-cream-300); }
        .legal-prose p { color: var(--color-ink-700); font-size: 16px; line-height: 1.7; margin: 0.75rem 0; }
        .legal-prose em { color: var(--color-ink-500); font-style: normal; }
        .legal-prose strong { color: var(--color-ink-900); font-weight: 500; }
        .legal-prose a { color: var(--color-forest-700); text-decoration: underline; text-decoration-color: var(--color-cream-400); text-underline-offset: 4px; }
        .legal-prose a:hover { text-decoration-color: var(--color-forest-700); }
      `}</style>
      </article>
    </>
  );
}
