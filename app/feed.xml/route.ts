import { siteConfig } from "@/lib/site";
import { guides } from "@/lib/guides";
import { glossaryTerms } from "@/lib/glossary";

/**
 * RSS 2.0 feed at /feed.xml.
 *
 * Pushes new guides and glossary entries into RSS aggregators (Feedly,
 * Inoreader, etc.) and gives content republishers a clean ingestion
 * point. Also surfaced via <link rel="alternate" type="application/rss+xml">
 * in the root layout so feed-detecting browser extensions find it.
 *
 * Sort: latest reviewedAt first across the union of guides + glossary
 * entries. Glossary items get a synthetic date matching the global
 * glossary review date (acceptable, they're updated as a corpus).
 */

const GLOSSARY_REVIEWED = "2026-05-22"; // mirrors the constant in the glossary page

type FeedItem = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  category: string;
};

function rfc822(iso: string): string {
  // The runtime forbids Date.now() and new Date() without args, but
  // new Date(iso) is fine because it's deterministic from input.
  return new Date(iso).toUTCString();
}

function xmlEscape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items: FeedItem[] = [
    ...guides.map((g) => ({
      title: g.h1,
      link: `${siteConfig.url}/learn/${g.slug}`,
      description: g.description,
      pubDate: rfc822(g.reviewedAt),
      category: g.cluster,
    })),
    ...glossaryTerms.map((t) => ({
      title: t.name,
      link: `${siteConfig.url}/glossary/${t.slug}`,
      description: t.short,
      pubDate: rfc822(GLOSSARY_REVIEWED),
      category: t.category,
    })),
  ];

  // Sort items newest first by pubDate (parse safely).
  items.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  // Use the latest item's pubDate as the channel's lastBuildDate so
  // aggregators see real freshness.
  const lastBuild = items.length > 0 ? items[0].pubDate : rfc822(GLOSSARY_REVIEWED);

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xmlEscape(siteConfig.name)}, Personal Finance Guides</title>
    <link>${siteConfig.url}/learn</link>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${xmlEscape(siteConfig.description)}</description>
    <language>en-US</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <generator>${xmlEscape(siteConfig.name)}</generator>
${items
  .map(
    (it) => `    <item>
      <title>${xmlEscape(it.title)}</title>
      <link>${it.link}</link>
      <guid isPermaLink="true">${it.link}</guid>
      <description>${xmlEscape(it.description)}</description>
      <category>${xmlEscape(it.category)}</category>
      <pubDate>${it.pubDate}</pubDate>
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
