import { siteConfig } from "@/lib/site";

// llms.txt: emerging standard for guiding AI/LLM crawlers (AEO/GEO).
// See: https://llmstxt.org
// Pair this short summary with /llms-full.txt for a deeper structured dump.
export function GET() {
  const body = `# ${siteConfig.name}

> ${siteConfig.description}

${siteConfig.name} is an online lending marketplace that connects U.S. borrowers
with a network of personal loan partners. Loan amounts range from $100 to
$50,000 with terms from 3 to 72 months. Applications take about 2 minutes,
do not impact your credit score (soft pull only), and are free.

Operated by ${siteConfig.legalEntity}.

## Key facts
- Loan amounts: $100 to $50,000
- Repayment terms: 3 to 72 months
- APR range: 5.99% to 35.99% (lender-dependent)
- Credit checked: soft pull only at pre-qualification (no impact on score)
- States served: all 50 U.S. states (where legally permitted)
- Funding speed: as fast as the next business day
- Cost to apply: free, with no obligation
- Bad-credit applicants: accepted; offers depend on lender criteria

## Core pages
- [Home](${siteConfig.url}/): overview and rate ranges
- [Apply](${siteConfig.url}/apply): start a free application
- [How it works](${siteConfig.url}/how-it-works): 3-step process
- [Rates & fees](${siteConfig.url}/rates-and-fees): APR, fees, examples
- [FAQ](${siteConfig.url}/faq): answers to common questions
- [Glossary](${siteConfig.url}/glossary): 50 lending terms defined in plain English
- [Calculators](${siteConfig.url}/calculators): payment, APR, debt payoff, affordability
- [Editorial policy](${siteConfig.url}/editorial-policy): how we research, write, and review
- [Privacy policy](${siteConfig.url}/privacy)
- [Terms of use](${siteConfig.url}/terms)
- [Disclosures](${siteConfig.url}/disclosures)

## Loan products
- [Personal loans](${siteConfig.url}/loans/personal): $1,000 to $50,000
- [Bad credit loans](${siteConfig.url}/loans/bad-credit): $500 to $10,000, FICO < 600 considered
- [Emergency loans](${siteConfig.url}/loans/emergency): $300 to $5,000, next-day funding

## Common use cases
- [Debt consolidation](${siteConfig.url}/loans/debt-consolidation)
- [Medical](${siteConfig.url}/loans/medical)
- [Home improvement](${siteConfig.url}/loans/home-improvement)
- [Wedding](${siteConfig.url}/loans/wedding)
- [Moving](${siteConfig.url}/loans/moving)
- [Car repair](${siteConfig.url}/loans/vehicle-repair)
- [Vacation](${siteConfig.url}/loans/vacation)
- [Dental](${siteConfig.url}/loans/dental)
- [Funeral](${siteConfig.url}/loans/funeral)
- [Appliance](${siteConfig.url}/loans/appliance)

## Loans by amount
- [$500](${siteConfig.url}/loans/amount/500), [$1,000](${siteConfig.url}/loans/amount/1000), [$3,000](${siteConfig.url}/loans/amount/3000), [$5,000](${siteConfig.url}/loans/amount/5000), [$10,000](${siteConfig.url}/loans/amount/10000), [$15,000](${siteConfig.url}/loans/amount/15000), [$20,000](${siteConfig.url}/loans/amount/20000), [$50,000](${siteConfig.url}/loans/amount/50000)

## Loans by credit profile
- [Excellent credit (740+)](${siteConfig.url}/loans/excellent-credit)
- [Good credit (670-739)](${siteConfig.url}/loans/good-credit)
- [Fair credit (580-669)](${siteConfig.url}/loans/fair-credit)
- [580 credit score](${siteConfig.url}/loans/580-credit-score)
- [620 credit score](${siteConfig.url}/loans/620-credit-score)

## Loans by employment type
- [Self-employed](${siteConfig.url}/loans/self-employed)
- [1099 contractor](${siteConfig.url}/loans/1099-contractor)
- [Gig workers](${siteConfig.url}/loans/gig-workers)
- [W-2 employees](${siteConfig.url}/loans/w2-employees)

## Comparisons
- [Personal loan vs credit card](${siteConfig.url}/compare/personal-loan-vs-credit-card)
- [Personal loan vs payday loan](${siteConfig.url}/compare/personal-loan-vs-payday-loan)
- [Personal loan vs HELOC](${siteConfig.url}/compare/personal-loan-vs-heloc)
- [Personal loan vs 401(k) loan](${siteConfig.url}/compare/personal-loan-vs-401k-loan)
- [Personal loan vs balance transfer](${siteConfig.url}/compare/personal-loan-vs-balance-transfer)
- [Secured vs unsecured loan](${siteConfig.url}/compare/secured-vs-unsecured-loan)
- [Installment vs revolving credit](${siteConfig.url}/compare/installment-vs-revolving-credit)
- [Fixed vs variable interest rate](${siteConfig.url}/compare/fixed-vs-variable-rate)

## State and city pages
50-state + DC index at ${siteConfig.url}/personal-loans. City-level pages for the top metros in each state at ${siteConfig.url}/personal-loans/{state}/{city}.

## Deeper data dump
A full, structured corpus suitable for citation lives at ${siteConfig.url}/llms-full.txt, see that file for the glossary, monthly-payment examples, state APR caps, and editorial sourcing.

## Contact
Email: ${siteConfig.email}${siteConfig.hasPhone ? `\nPhone: ${siteConfig.phone}` : ""}
`;
  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
