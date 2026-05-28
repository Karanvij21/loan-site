import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { states } from "@/lib/states";

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
    { url: `${base}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/rates-and-fees`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
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

  return [...core, ...stateRoutes];
}
