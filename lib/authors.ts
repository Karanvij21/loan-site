/**
 * Editorial team, used for E-E-A-T signals in Article / Person JSON-LD,
 * author bylines on guides and glossary entries, and the /editorial-policy page.
 *
 * All bios are accurate to the team that reviews this content. Update here
 * and the change propagates to every page that cites them.
 */

import { siteConfig } from "@/lib/site";

export type Author = {
  slug: string;
  name: string;
  jobTitle: string;
  shortBio: string;
  fullBio: string;
  /** Subject-matter areas, surfaced in Person.knowsAbout for richer entity context. */
  knowsAbout: string[];
  initials: string;
  /** Optional LinkedIn or other public profile URL, fed into Person.sameAs. */
  sameAs?: string[];
};

export const authors: Author[] = [
  {
    slug: "editorial-team",
    name: `${siteConfig.name} Editorial Team`,
    jobTitle: "Consumer Lending Research",
    shortBio:
      "Our in-house editorial team researches U.S. personal lending markets, summarises state and federal rules, and tracks lender APR ranges across the network.",
    fullBio: `The ${siteConfig.name} editorial team is responsible for the lending guidance, glossary, calculators, and state-by-state explainers published on this site. We monitor state regulator bulletins, CFPB consent orders, the Federal Reserve's G.19 consumer credit report, and APR ranges published by lenders in our partner network. Our content is reviewed for compliance with the federal Truth in Lending Act, the Equal Credit Opportunity Act, and Google Ads' Personal Loans policy before publication.`,
    knowsAbout: [
      "Personal loans",
      "Installment loans",
      "Annual Percentage Rate (APR)",
      "Truth in Lending Act",
      "Fair Credit Reporting Act",
      "U.S. consumer credit",
      "Debt consolidation",
      "Credit scores",
    ],
    initials: "ET",
  },
  {
    slug: "compliance-review",
    name: "Compliance Review",
    jobTitle: "Regulatory & Disclosures Review",
    shortBio:
      "Our compliance reviewer checks every published page against federal TILA, FCRA, ECOA, MLA, and CAN-SPAM requirements, plus state-specific APR caps.",
    fullBio: `Every public-facing page on ${siteConfig.name} is reviewed against the federal Truth in Lending Act (Regulation Z), Fair Credit Reporting Act, Equal Credit Opportunity Act (Regulation B), Military Lending Act 36% MAPR cap, and CAN-SPAM Act before publication. State-specific guidance is cross-checked against the cited state regulator's most recent published rule. Compliance review is independent from the editorial team and has final approval on rate disclosures, representative examples, and lender-identity language.`,
    knowsAbout: [
      "Regulation Z",
      "Truth in Lending Act",
      "Fair Credit Reporting Act",
      "Military Lending Act",
      "CAN-SPAM Act",
      "State lending law",
      "Consumer financial disclosures",
    ],
    initials: "CR",
  },
];

export const authorBySlug = Object.fromEntries(authors.map((a) => [a.slug, a])) as Record<string, Author>;

/** Default byline pair for articles. */
export const defaultAuthor = authors[0];
export const defaultReviewer = authors[1];

/** Convenience: absolute URL for an author's editorial-policy anchor. */
export function authorUrl(a: Author) {
  return `${siteConfig.url}/editorial-policy#${a.slug}`;
}
