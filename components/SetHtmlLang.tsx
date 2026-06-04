"use client";

import { useEffect } from "react";

/**
 * Sets `<html lang>` on mount.
 *
 * Next.js App Router only allows the root layout to render the `<html>`
 * element, so nested layouts can't set per-route language attributes
 * declaratively. This client component bridges the gap: drop it into a
 * route-group layout (e.g. /es/layout.tsx) and every page under that
 * group will set the correct lang once hydrated.
 *
 * Trade-off: the initial HTML server response still shows lang="en"
 * for one render. Search engines that respect dynamic updates (Google
 * does for Spanish content) and assistive tech see the corrected value.
 * For zero-flicker, full Next.js i18n routing via middleware would be
 * the next step, but adds significant infrastructure for the marginal
 * remaining benefit.
 */
export function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    return () => {
      // On unmount (route change), reset to en for the rest of the site.
      document.documentElement.lang = "en";
    };
  }, [lang]);
  return null;
}
