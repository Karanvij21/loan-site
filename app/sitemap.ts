import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { states } from "@/lib/states";
import { amounts } from "@/lib/amounts";
import { useCases } from "@/lib/useCases";
import { creditBands } from "@/lib/creditBands";
import { employmentTypes } from "@/lib/employment";
import { comparisons } from "@/lib/comparisons";
import { cities } from "@/lib/cities";
import { glossaryTerms } from "@/lib/glossary";
import { guides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/apply`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/personal-loans`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/loans/personal`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/loans/bad-credit`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/loans/emergency`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/loans/amount`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/calculators`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/calculators/loan-payment`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/calculators/apr`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/calculators/debt-payoff`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/calculators/affordability`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/glossary`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/compare`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/learn`, lastModified: now, changeFrequency: "weekly", priority: 0.78 },
    { url: `${base}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/rates-and-fees`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/editorial-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.55 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/disclosures`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/do-not-sell`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/opt-out`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const stateRoutes: MetadataRoute.Sitemap = states.map((s) => ({
    url: `${base}/personal-loans/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const amountRoutes: MetadataRoute.Sitemap = amounts.map((a) => ({
    url: `${base}/loans/amount/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const useCaseRoutes: MetadataRoute.Sitemap = Object.keys(useCases).map((slug) => ({
    url: `${base}/loans/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.78,
  }));

  const creditBandRoutes: MetadataRoute.Sitemap = Object.keys(creditBands).map((slug) => ({
    url: `${base}/loans/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const employmentRoutes: MetadataRoute.Sitemap = Object.keys(employmentTypes).map((slug) => ({
    url: `${base}/loans/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const compareRoutes: MetadataRoute.Sitemap = Object.keys(comparisons).map((slug) => ({
    url: `${base}/compare/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  const cityRoutes: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${base}/personal-loans/${c.stateSlug}/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  const glossaryRoutes: MetadataRoute.Sitemap = glossaryTerms.map((t) => ({
    url: `${base}/glossary/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.55,
  }));

  const guideRoutes: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${base}/learn/${g.slug}`,
    lastModified: new Date(g.reviewedAt),
    changeFrequency: "monthly" as const,
    priority: 0.78,
  }));

  return [
    ...core,
    ...stateRoutes,
    ...amountRoutes,
    ...useCaseRoutes,
    ...creditBandRoutes,
    ...employmentRoutes,
    ...compareRoutes,
    ...cityRoutes,
    ...guideRoutes,
    ...glossaryRoutes,
  ];
}
