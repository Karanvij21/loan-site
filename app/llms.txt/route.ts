import { siteConfig } from "@/lib/site";

// llms.txt — emerging standard for guiding AI/LLM crawlers (AEO/GEO).
// See: https://llmstxt.org
export function GET() {
  const body = `# ${siteConfig.name}

> ${siteConfig.description}

${siteConfig.name} is an online lending marketplace that connects U.S. borrowers
with a network of personal loan partners. Loan amounts range from $100 to
$50,000 with terms from 3 to 72 months. Applications take about 2 minutes,
do not impact your credit score (soft pull only), and are free.

## Key facts
- Loan amounts: $100 to $50,000
- Repayment terms: 3 to 72 months
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
- [Privacy policy](${siteConfig.url}/privacy)
- [Terms of use](${siteConfig.url}/terms)
- [Disclosures](${siteConfig.url}/disclosures)

## Contact
Email: ${siteConfig.email}
Phone: ${siteConfig.phone}
`;
  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
