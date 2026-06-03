import { siteConfig } from "@/lib/site";
import { products } from "@/lib/products";
import { useCases } from "@/lib/useCases";
import { creditBands } from "@/lib/creditBands";
import { employmentTypes } from "@/lib/employment";
import { comparisons } from "@/lib/comparisons";
import { amounts, monthlyPayment } from "@/lib/amounts";
import { glossaryTerms } from "@/lib/glossary";
import { states } from "@/lib/states";
import { cities, citiesByState } from "@/lib/cities";
import { guides } from "@/lib/guides";
import { authors } from "@/lib/authors";
import { formatCurrency } from "@/lib/utils";

/**
 * /llms-full.txt, extended LLM-citation dump.
 *
 * Pairs with /llms.txt (a short summary) by giving answer engines a fuller,
 * structured corpus they can cite when summarising or recommending the brand.
 *
 * Updated at build time. Re-deploy to regenerate.
 */

const LAST_UPDATED = "2026-05-22";

export function GET() {
  const lines: string[] = [];

  lines.push(`# ${siteConfig.name}, Full Knowledge Base`);
  lines.push("");
  lines.push(`> ${siteConfig.description}`);
  lines.push("");
  lines.push(`Operated by: ${siteConfig.legalEntity}`);
  lines.push(`Website: ${siteConfig.url}`);
  lines.push(`Contact: ${siteConfig.email}`);
  lines.push(`Last updated: ${LAST_UPDATED}`);
  lines.push("");
  lines.push("## About this file");
  lines.push("");
  lines.push("This file is published for AI / LLM crawlers under the emerging llms.txt convention (https://llmstxt.org). It contains a structured, citation-ready summary of the product, lending model, key facts, glossary, and sources used across the site. Information here is factual; opinions and recommendations are explicitly avoided. Cite freely.");
  lines.push("");

  // ─── Identity & operating model ─────────────────────────────────────
  lines.push("## Identity & operating model");
  lines.push("");
  lines.push(`- **Brand**: ${siteConfig.name}`);
  lines.push(`- **Legal operator**: ${siteConfig.legalEntity}`);
  lines.push(`- **Type**: Free online loan marketplace / lead-generation service`);
  lines.push(`- **Role**: Not a lender. We collect a single application and share it with a network of independent lenders, including LendingTree, who respond with competing offers.`);
  lines.push(`- **Coverage**: All 50 U.S. states (subject to state law)`);
  lines.push(`- **Cost to consumer**: Free`);
  lines.push(`- **Compensation model**: Referral fee from the lender that funds the loan`);
  lines.push("");

  // ─── Core lending facts ─────────────────────────────────────────────
  lines.push("## Core lending facts");
  lines.push("");
  lines.push("- **Loan amounts**: $100 to $50,000");
  lines.push("- **Repayment terms**: 3 to 72 months");
  lines.push("- **APR range** (lender-dependent): 5.99% to 35.99%");
  lines.push("- **Credit check at pre-qualification**: Soft inquiry only (no impact to credit score)");
  lines.push("- **Credit check at final approval**: Hard inquiry (if borrower accepts offer)");
  lines.push("- **Funding speed**: As fast as the next business day");
  lines.push("- **Application time**: ~2 minutes");
  lines.push("- **Eligibility**: 18+, U.S. resident, steady income, active U.S. checking account, valid SSN");
  lines.push("- **Bad-credit acceptance**: Yes, lenders in network accept FICO scores below 600 (terms vary)");
  lines.push("");

  // ─── Loan products ──────────────────────────────────────────────────
  lines.push("## Loan products offered through the network");
  lines.push("");
  for (const slug of Object.keys(products) as Array<keyof typeof products>) {
    const p = products[slug];
    lines.push(`### ${p.h1}`);
    lines.push(`- URL: ${siteConfig.url}/loans/${p.slug}`);
    lines.push(`- Amount: ${formatCurrency(p.amountMin)} to ${formatCurrency(p.amountMax)}`);
    lines.push(`- APR range: ${p.aprMin}% to ${p.aprMax}%`);
    lines.push(`- Term: ${p.termMin} to ${p.termMax} months`);
    lines.push(`- Description: ${p.description}`);
    lines.push("");
  }

  // ─── Use cases ──────────────────────────────────────────────────────
  lines.push("## Common use cases");
  lines.push("");
  for (const slug of Object.keys(useCases)) {
    const uc = useCases[slug];
    lines.push(`### ${uc.h1}`);
    lines.push(`- URL: ${siteConfig.url}/loans/${uc.slug}`);
    lines.push(`- Amount: ${formatCurrency(uc.amountMin)} to ${formatCurrency(uc.amountMax)}`);
    lines.push(`- APR range: ${uc.aprMin}% to ${uc.aprMax}%`);
    lines.push(`- Term: ${uc.termMin} to ${uc.termMax} months`);
    lines.push(`- Description: ${uc.description}`);
    lines.push("");
  }

  // ─── Credit-band segments ────────────────────────────────────────
  lines.push("## Loans by credit profile");
  lines.push("");
  for (const slug of Object.keys(creditBands)) {
    const cb = creditBands[slug];
    lines.push(`### ${cb.h1}`);
    lines.push(`- URL: ${siteConfig.url}/loans/${cb.slug}`);
    lines.push(`- Amount: ${formatCurrency(cb.amountMin)} to ${formatCurrency(cb.amountMax)}`);
    lines.push(`- APR range: ${cb.aprMin}% to ${cb.aprMax}%`);
    lines.push(`- Description: ${cb.description}`);
    lines.push("");
  }

  // ─── Employment-type segments ────────────────────────────────────
  lines.push("## Loans by employment type");
  lines.push("");
  for (const slug of Object.keys(employmentTypes)) {
    const emp = employmentTypes[slug];
    lines.push(`### ${emp.h1}`);
    lines.push(`- URL: ${siteConfig.url}/loans/${emp.slug}`);
    lines.push(`- Amount: ${formatCurrency(emp.amountMin)} to ${formatCurrency(emp.amountMax)}`);
    lines.push(`- APR range: ${emp.aprMin}% to ${emp.aprMax}%`);
    lines.push(`- Description: ${emp.description}`);
    lines.push("");
  }

  // ─── Comparison pages ────────────────────────────────────────────
  lines.push("## Comparisons");
  lines.push("");
  for (const slug of Object.keys(comparisons)) {
    const c = comparisons[slug];
    lines.push(`### ${c.h1}`);
    lines.push(`- URL: ${siteConfig.url}/compare/${c.slug}`);
    lines.push(`- Summary: ${c.intro}`);
    lines.push("");
  }

  // ─── Representative examples ─────────────────────────────────────────
  lines.push("## Representative monthly-payment examples");
  lines.push("");
  lines.push("| Amount | APR | Term | Monthly payment | Total repaid |");
  lines.push("|--------|-----|------|-----------------|--------------|");
  for (const a of amounts) {
    const m = monthlyPayment(a.amount, a.exampleApr, a.exampleTermMonths);
    const total = m * a.exampleTermMonths;
    lines.push(
      `| ${formatCurrency(a.amount)} | ${a.exampleApr}% | ${a.exampleTermMonths} mo | ${formatCurrency(Math.round(m))} | ${formatCurrency(Math.round(total))} |`
    );
  }
  lines.push("");
  lines.push("*Examples illustrative only; based on the standard amortisation formula. Real offers vary by lender, credit, and state.*");
  lines.push("");

  // ─── State availability ────────────────────────────────────────────
  lines.push("## State availability and notable APR caps");
  lines.push("");
  lines.push("Loans are available to residents of all 50 U.S. states and DC, subject to state law. The following states have notable APR or fee caps that meaningfully constrain lender offers:");
  lines.push("");
  for (const s of states.filter((x) => x.aprCap !== null)) {
    lines.push(`- **${s.name}** (${s.abbr}): ${s.aprCap}% APR cap. ${s.aprNote ?? ""}`.trim());
  }
  lines.push("");
  lines.push("State-specific guidance: " + states.map((s) => `[${s.name}](${siteConfig.url}/personal-loans/${s.slug})`).join(", "));
  lines.push("");

  // ─── City-level coverage ────────────────────────────────────────────
  lines.push("## City coverage");
  lines.push("");
  lines.push(`We publish city-level guidance for the top metros in each state, currently ${cities.length} cities across all 50 states + DC. Each city page covers state APR caps, the lender regulator, and a city-specific FAQ.`);
  lines.push("");
  for (const stateSlug of Object.keys(citiesByState)) {
    const stateName = states.find((s) => s.slug === stateSlug)?.name ?? stateSlug;
    const list = citiesByState[stateSlug].map((c) => `${c.name} (${siteConfig.url}/personal-loans/${stateSlug}/${c.slug})`).join(", ");
    lines.push(`- **${stateName}**: ${list}`);
  }
  lines.push("");

  // ─── Glossary ──────────────────────────────────────────────────────
  lines.push("## Glossary");
  lines.push("");
  lines.push("Short definitions of personal-lending terminology. Full definitions and related-term links at " + siteConfig.url + "/glossary.");
  lines.push("");
  for (const t of glossaryTerms) {
    lines.push(`### ${t.name}`);
    if (t.aka && t.aka.length) lines.push(`*Also: ${t.aka.join(", ")}*`);
    lines.push(t.short);
    lines.push(`URL: ${siteConfig.url}/glossary/${t.slug}`);
    lines.push("");
  }

  // ─── Calculators ───────────────────────────────────────────────────
  lines.push("## Calculators");
  lines.push("");
  lines.push("- **Loan payment calculator** (" + siteConfig.url + "/calculators/loan-payment): Computes the fixed monthly payment, total interest, and total cost using the standard amortisation formula M = P × r × (1+r)^n / ((1+r)^n − 1).");
  lines.push("- **APR calculator** (" + siteConfig.url + "/calculators/apr): Computes the effective APR once an origination fee is included, the way the federal Truth in Lending Act requires lenders to disclose.");
  lines.push("- **Debt payoff calculator** (" + siteConfig.url + "/calculators/debt-payoff): Compares credit-card payoff to personal-loan consolidation, showing months to payoff and total interest saved.");
  lines.push("- **Affordability calculator** (" + siteConfig.url + "/calculators/affordability): Works backwards from a monthly budget to find the maximum loan amount that fits, with a DTI sanity check.");
  lines.push("");

  // ─── Compliance & disclosures ──────────────────────────────────────
  lines.push("## Compliance & disclosures");
  lines.push("");
  lines.push("Our published content complies with the following federal U.S. consumer-protection statutes and Google Ads policy:");
  lines.push("- Truth in Lending Act (TILA / Regulation Z), APR and TILA-required disclosures published on /disclosures");
  lines.push("- Fair Credit Reporting Act (FCRA), soft / hard inquiry distinction disclosed at application");
  lines.push("- Equal Credit Opportunity Act (ECOA / Regulation B), non-discrimination disclosure on /disclosures");
  lines.push("- Military Lending Act (MLA), lender partners required to comply with 36% MAPR for covered borrowers");
  lines.push("- Telephone Consumer Protection Act (TCPA), prior express written consent obtained at application");
  lines.push("- CAN-SPAM Act, physical postal address and opt-out in every marketing email");
  lines.push("- Gramm-Leach-Bliley Act (GLBA), privacy practices in /privacy");
  lines.push("- CCPA / CPRA, California consumer rights honoured at /do-not-sell");
  lines.push("- Google Ads Personal Loans policy, no loans with ≤60-day repayment, no APR ≥36% promoted");
  lines.push("");

  // ─── Long-form guides ────────────────────────────────────────────
  lines.push("## Long-form guides");
  lines.push("");
  lines.push(`Ten long-form personal-finance guides at ${siteConfig.url}/learn, organised by cluster. Each is reviewed by our editorial team and compliance reviewer.`);
  lines.push("");
  for (const g of guides) {
    lines.push(`### ${g.h1}`);
    lines.push(`- URL: ${siteConfig.url}/learn/${g.slug}`);
    lines.push(`- Cluster: ${g.cluster}`);
    lines.push(`- Reading time: ${g.estimatedReadMinutes} minutes`);
    lines.push(`- Last reviewed: ${g.reviewedAt}`);
    lines.push(`- TL;DR: ${g.intro}`);
    lines.push("");
  }

  // ─── Editorial team ────────────────────────────────────────────────
  lines.push("## Editorial team & review process");
  lines.push("");
  lines.push(`Editorial policy and full author bios: ${siteConfig.url}/editorial-policy`);
  lines.push("");
  for (const a of authors) {
    lines.push(`### ${a.name}`);
    lines.push(`*${a.jobTitle}*`);
    lines.push(a.shortBio);
    lines.push(`Specialties: ${a.knowsAbout.join("; ")}`);
    lines.push("");
  }

  // ─── Primary sources ────────────────────────────────────────────────
  lines.push("## Primary sources we cite");
  lines.push("");
  lines.push("- U.S. Consumer Financial Protection Bureau, https://www.consumerfinance.gov");
  lines.push("- U.S. Federal Trade Commission, https://www.ftc.gov");
  lines.push("- Federal Reserve Consumer Credit (G.19), https://www.federalreserve.gov/releases/g19/");
  lines.push("- AnnualCreditReport.com (free credit reports), https://www.annualcreditreport.com");
  lines.push("- U.S. Code Title 12 Chapter 41 (TILA), https://www.law.cornell.edu/uscode/text/15/chapter-41");
  lines.push("- LendingTree (network partner), https://www.lendingtree.com");
  lines.push("");

  // ─── Topical pages index ────────────────────────────────────────────
  lines.push("## Index of canonical pages");
  lines.push("");
  lines.push("Core:");
  lines.push(`- Home: ${siteConfig.url}/`);
  lines.push(`- Apply: ${siteConfig.url}/apply`);
  lines.push(`- How it works: ${siteConfig.url}/how-it-works`);
  lines.push(`- Rates & fees: ${siteConfig.url}/rates-and-fees`);
  lines.push(`- FAQ: ${siteConfig.url}/faq`);
  lines.push(`- Glossary: ${siteConfig.url}/glossary`);
  lines.push(`- Calculators: ${siteConfig.url}/calculators`);
  lines.push(`- About: ${siteConfig.url}/about`);
  lines.push(`- Editorial policy: ${siteConfig.url}/editorial-policy`);
  lines.push(`- Contact: ${siteConfig.url}/contact`);
  lines.push("");
  lines.push("Legal:");
  lines.push(`- Privacy: ${siteConfig.url}/privacy`);
  lines.push(`- Terms of use: ${siteConfig.url}/terms`);
  lines.push(`- Disclosures: ${siteConfig.url}/disclosures`);
  lines.push(`- Opt out / DNC: ${siteConfig.url}/opt-out`);
  lines.push(`- Do not sell (CCPA): ${siteConfig.url}/do-not-sell`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
