import { siteConfig } from "@/lib/site";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "FinancialService",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        image: `${siteConfig.url}/og-default.png`,
        description: siteConfig.description,
        ...(siteConfig.hasPhone ? { telephone: siteConfig.phone } : {}),
        email: siteConfig.email,
        priceRange: "$$",
        areaServed: { "@type": "Country", name: "United States" },
        sameAs: [
          siteConfig.social.facebook,
          siteConfig.social.instagram,
          siteConfig.social.linkedin,
          siteConfig.social.youtube,
          siteConfig.social.tiktok,
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          ...(siteConfig.hasPhone ? { telephone: siteConfig.phone } : {}),
          email: siteConfig.email,
          availableLanguage: ["English"],
          areaServed: "US",
        },
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteConfig.url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

export function LoanProductJsonLd({
  name,
  description,
  amountMin,
  amountMax,
  termMonthsMin,
  termMonthsMax,
  aprMin,
  aprMax,
}: {
  name: string;
  description: string;
  amountMin: number;
  amountMax: number;
  termMonthsMin: number;
  termMonthsMax: number;
  aprMin: number;
  aprMax: number;
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "LoanOrCredit",
        name,
        description,
        provider: { "@id": `${siteConfig.url}/#organization` },
        currency: "USD",
        amount: {
          "@type": "MonetaryAmount",
          minValue: amountMin,
          maxValue: amountMax,
          currency: "USD",
        },
        annualPercentageRate: { minValue: aprMin, maxValue: aprMax },
        loanTerm: {
          "@type": "QuantitativeValue",
          minValue: termMonthsMin,
          maxValue: termMonthsMax,
          unitCode: "MON",
        },
        areaServed: { "@type": "Country", name: "United States" },
      }}
    />
  );
}

export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((it) => ({
          "@type": "Question",
          name: it.q,
          acceptedAnswer: { "@type": "Answer", text: it.a },
        })),
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: it.url,
        })),
      }}
    />
  );
}
