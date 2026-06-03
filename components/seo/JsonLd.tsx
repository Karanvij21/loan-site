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
        legalName: siteConfig.legalEntity,
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
        // Knowledge-graph anchoring. These are Wikidata Q-IDs for the
        // primary regulatory and partner entities we reference across
        // the site. Google uses sameAs as a hint that our content
        // sits in the same entity neighbourhood.
        knowsAbout: [
          { "@type": "Thing", name: "Personal loan", sameAs: "https://www.wikidata.org/wiki/Q1413038" },
          { "@type": "Thing", name: "Annual percentage rate", sameAs: "https://www.wikidata.org/wiki/Q1059815" },
          { "@type": "Thing", name: "Truth in Lending Act", sameAs: "https://www.wikidata.org/wiki/Q7848859" },
          { "@type": "Thing", name: "Consumer Financial Protection Bureau", sameAs: "https://www.wikidata.org/wiki/Q1129206" },
          { "@type": "Thing", name: "FICO score", sameAs: "https://www.wikidata.org/wiki/Q5424498" },
          { "@type": "Thing", name: "Fair Credit Reporting Act", sameAs: "https://www.wikidata.org/wiki/Q5430226" },
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

/* ────────────────────────────────────────────────────────────────────────────
 * AEO / GEO schemas, added for Tier 1 expansion.
 * Strong rich-result + LLM-citation signals for finance YMYL content.
 * ──────────────────────────────────────────────────────────────────────────── */

/**
 * HowTo schema, strong rich-result candidate for "how to" intent queries.
 * Use on /how-it-works and process-style guides.
 */
export function HowToJsonLd({
  name,
  description,
  totalTime,
  steps,
}: {
  name: string;
  description: string;
  /** ISO 8601 duration, e.g. "PT2M" for 2 minutes */
  totalTime?: string;
  steps: { name: string; text: string; url?: string }[];
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "HowTo",
        name,
        description,
        ...(totalTime ? { totalTime } : {}),
        step: steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
          ...(s.url ? { url: s.url } : {}),
        })),
      }}
    />
  );
}

/**
 * Article schema, for editorial / guide pages and glossary entries.
 * Includes dateModified for the freshness signal Google and LLM citations use.
 */
export function ArticleJsonLd({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
  reviewerName,
  reviewerUrl,
  image,
  articleSection,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  authorUrl?: string;
  reviewerName?: string;
  reviewerUrl?: string;
  image?: string;
  articleSection?: string;
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        description,
        url,
        mainEntityOfPage: url,
        datePublished,
        dateModified,
        author: {
          "@type": "Person",
          name: authorName,
          ...(authorUrl ? { url: authorUrl } : {}),
        },
        ...(reviewerName
          ? {
              reviewedBy: {
                "@type": "Person",
                name: reviewerName,
                ...(reviewerUrl ? { url: reviewerUrl } : {}),
              },
            }
          : {}),
        publisher: { "@id": `${siteConfig.url}/#organization` },
        image: image ?? `${siteConfig.url}/og-default.png`,
        ...(articleSection ? { articleSection } : {}),
        inLanguage: "en-US",
      }}
    />
  );
}

/**
 * Person schema, author / reviewer bios. Critical E-E-A-T signal for YMYL
 * finance pages; Google quality raters explicitly weight named experts.
 */
export function PersonJsonLd({
  name,
  url,
  jobTitle,
  description,
  knowsAbout,
  image,
  sameAs,
}: {
  name: string;
  url: string;
  jobTitle: string;
  description: string;
  knowsAbout?: string[];
  image?: string;
  sameAs?: string[];
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        name,
        url,
        jobTitle,
        description,
        worksFor: { "@id": `${siteConfig.url}/#organization` },
        ...(image ? { image } : {}),
        ...(knowsAbout ? { knowsAbout } : {}),
        ...(sameAs ? { sameAs } : {}),
      }}
    />
  );
}

/**
 * Speakable schema, marks page sections voice assistants (Google Assistant,
 * Alexa, Siri) can read aloud as answers. Pair with FAQ / intro content.
 */
export function SpeakableJsonLd({
  url,
  cssSelectors,
}: {
  url: string;
  /** CSS selectors that target speakable content (intros, FAQ answers, etc.) */
  cssSelectors: string[];
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        url,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: cssSelectors,
        },
      }}
    />
  );
}

/**
 * DefinedTerm schema, for glossary entries.
 * LLMs use these heavily when answering "what is X" queries.
 */
export function DefinedTermJsonLd({
  name,
  description,
  url,
  inDefinedTermSet,
}: {
  name: string;
  description: string;
  url: string;
  inDefinedTermSet: string;
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        name,
        description,
        url,
        inDefinedTermSet,
      }}
    />
  );
}

/**
 * DefinedTermSet schema, the glossary index itself.
 */
export function DefinedTermSetJsonLd({
  name,
  description,
  url,
  terms,
}: {
  name: string;
  description: string;
  url: string;
  terms: { name: string; slug: string }[];
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        name,
        description,
        url,
        hasDefinedTerm: terms.map((t) => ({
          "@type": "DefinedTerm",
          name: t.name,
          url: `${siteConfig.url}/glossary/${t.slug}`,
        })),
      }}
    />
  );
}

/**
 * ItemList schema, for index pages (glossary, calculators, amount list).
 * Gives Google an explicit hierarchy of children for "list" rich results.
 */
export function ItemListJsonLd({
  name,
  url,
  items,
}: {
  name: string;
  url: string;
  items: { name: string; url: string; description?: string }[];
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name,
        url,
        numberOfItems: items.length,
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          url: it.url,
          ...(it.description ? { description: it.description } : {}),
        })),
      }}
    />
  );
}

/**
 * LocalBusiness schema for state pages. Each state page surfaces
 * the brand as a state-scoped FinancialService so "personal loans
 * near me" / state-localised queries find us. Not a real local
 * presence (we're online-only), but valid: schema.org explicitly
 * supports virtual / online-only LocalBusiness entries when
 * areaServed is set appropriately.
 */
export function LocalBusinessJsonLd({
  stateName,
  stateAbbr,
  url,
  aprCap,
  regulator,
}: {
  stateName: string;
  stateAbbr: string;
  url: string;
  aprCap: number | null;
  regulator: string;
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "FinancialService",
        "@id": `${url}#localbusiness`,
        name: `${siteConfig.name}, ${stateName}`,
        legalName: siteConfig.legalEntity,
        url,
        image: `${siteConfig.url}/og-default.png`,
        description: `Personal loan marketplace serving ${stateName} (${stateAbbr}) residents through a network of independent lenders.`,
        priceRange: "$$",
        areaServed: {
          "@type": "State",
          name: stateName,
          identifier: stateAbbr,
        },
        parentOrganization: { "@id": `${siteConfig.url}/#organization` },
        // State-specific regulatory metadata. Schema.org doesn't have a
        // first-class "regulator" property, so we surface it via
        // additionalProperty.
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Regulator",
            value: regulator,
          },
          ...(aprCap !== null
            ? [{
                "@type": "PropertyValue",
                name: "State APR cap",
                value: `${aprCap}%`,
              }]
            : []),
        ],
        availableService: {
          "@type": "FinancialProduct",
          name: "Personal loan",
          description: `Personal installment loans from $100 to $50,000 for ${stateName} residents.`,
        },
      }}
    />
  );
}

/**
 * SoftwareApplication schema for our calculator pages. Marks each
 * calculator as a free in-browser tool, which both unlocks
 * calculator-specific Google rich results (rating, price, category)
 * and gives LLMs an explicit signal that the page provides a tool
 * (versus a static explanation of the math).
 */
export function SoftwareApplicationJsonLd({
  name,
  description,
  url,
  applicationCategory = "FinanceApplication",
}: {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name,
        description,
        url,
        applicationCategory,
        operatingSystem: "Any",
        // Calculators are 100% client-side and free; the offer makes
        // that explicit in markup so Google can render the "Free" badge
        // in rich results where supported.
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        isAccessibleForFree: true,
      }}
    />
  );
}
