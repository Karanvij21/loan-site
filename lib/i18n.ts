/**
 * Internationalisation foundation.
 *
 * Currently English-only is shipped; Spanish is the target second locale
 * (large addressable Hispanic-US borrower segment, often underserved by
 * existing online personal-loan players in their primary language).
 *
 * Routing convention: English at /<path>, Spanish at /es/<path>. The /es
 * prefix lets us deploy Spanish pages incrementally without touching
 * English routes. Pages that don't yet have a Spanish version fall back
 * to the English version at the canonical URL.
 *
 * Translations themselves ship in a follow-on batch. This file is the
 * type + helper foundation that lets translated pages plug in cleanly.
 */

export type Locale = "en-US" | "es-US";

export const LOCALES: Locale[] = ["en-US", "es-US"];
export const DEFAULT_LOCALE: Locale = "en-US";

/**
 * Maps a canonical English path to its Spanish equivalent.
 * Spanish pages live under /es/<path>. Slug forms are preserved
 * (we don't translate slugs themselves; this would fragment SEO
 * and break inbound links if URLs were ever re-translated).
 */
export function esPath(enPath: string): string {
  if (enPath === "/") return "/es";
  if (enPath.startsWith("/es")) return enPath;
  return `/es${enPath.startsWith("/") ? "" : "/"}${enPath}`;
}

/**
 * Hreflang pairs for a given path. Pass to `alternates.languages`
 * in Next.js page metadata so search engines pair English and
 * Spanish versions correctly.
 *
 * Pages where the Spanish version doesn't yet exist should NOT
 * call this; otherwise Google sees an hreflang pointing at a 404,
 * which it (rightly) downgrades. Use `hreflangFor` on a per-page
 * basis only when the Spanish version is actually live.
 */
export function hreflangFor(canonicalEnPath: string): Record<Locale, string> {
  return {
    "en-US": canonicalEnPath,
    "es-US": esPath(canonicalEnPath),
  };
}

/**
 * Locale-aware display labels for the language switcher.
 * Native-script names so each language is readable in its own form.
 */
export const localeLabels: Record<Locale, string> = {
  "en-US": "English",
  "es-US": "Español",
};

/**
 * Common UI dictionary keys we know we'll need across the Spanish
 * page tree. Values are placeholder English while translations are
 * pending; the second batch swaps the en object for proper Spanish.
 *
 * Reasoning for this shape rather than a richer i18n library:
 * (1) we control the page tree so static dictionaries are sufficient;
 * (2) avoids a 30+ KB runtime translation library when the actual
 * translation volume is small; (3) makes ungrep-able strings trivial
 * to spot during translation review.
 */
export const dictionary = {
  "en-US": {
    nav: {
      apply: "Begin a request",
      howItWorks: "How it works",
      faq: "FAQ",
      learn: "Learn",
      calculators: "Calculators",
    },
    cta: {
      begin: "Begin your request",
      compareOffers: "Compare offers",
    },
    trust: {
      ssl: "256-bit SSL. Data encrypted end-to-end.",
      softPull: "Soft credit check. No impact to your score.",
      free: "Free service. No fees. No obligation.",
    },
  },
  "es-US": {
    // Stub English values during the foundation phase. Translation batch
    // overwrites these in place; no other code change required.
    nav: {
      apply: "Comenzar solicitud",
      howItWorks: "Cómo funciona",
      faq: "Preguntas frecuentes",
      learn: "Aprender",
      calculators: "Calculadoras",
    },
    cta: {
      begin: "Comience su solicitud",
      compareOffers: "Comparar ofertas",
    },
    trust: {
      ssl: "Cifrado SSL de 256 bits. Datos cifrados de extremo a extremo.",
      softPull: "Consulta de crédito suave. No afecta su puntaje.",
      free: "Servicio gratuito. Sin tarifas. Sin obligación.",
    },
  },
} as const;

export function t(locale: Locale) {
  return dictionary[locale];
}
