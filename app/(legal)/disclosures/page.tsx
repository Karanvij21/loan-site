import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclosures",
  description: `Lending, advertising, affiliate, and consumer disclosures for ${siteConfig.name}. APR ranges, representative example, late and non-payment consequences, state availability, and credit impact.`,
  alternates: { canonical: "/disclosures" },
};

export default function DisclosuresPage() {
  return (
    <>
      <h1>Disclosures</h1>
      <p><em>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</em></p>

      <h2>1. Lead generator, not a lender</h2>
      <p>
        {siteConfig.name} is a brand operated by {siteConfig.legalEntity}, a lead generator and free online loan marketplace. We are <strong>not a lender</strong>, broker, agent, or representative of any lender. We do not make loan or credit decisions, set rates or terms, originate or fund loans, or collect payments. We use the information you submit to match you with a network of independent third-party lenders, including <strong>LendingTree</strong>, who may make you an offer. Approval, terms, APR, and fees are determined solely by the lender, in their sole discretion, based on the information you provide and their underwriting criteria.
      </p>

      <h2>2. APR &amp; Truth in Lending (TILA) disclosure</h2>
      <p>
        Annual Percentage Rates (APRs) in our lender network typically range from <strong>5.99% to 35.99%</strong>. The APR you are offered depends on the lender, your credit profile, loan amount, term, and state of residence. Always review the lender&rsquo;s loan agreement carefully before signing.
      </p>

      <h2>3. Representative example</h2>
      <p>
        <strong>$5,000 loan</strong> at an APR of <strong>24.99%</strong> over <strong>36 months</strong> would result in a monthly payment of approximately <strong>$198.66</strong> and a total cost (principal plus interest) of <strong>$7,151.76</strong>.
      </p>
      <p>
        <strong>$10,000 loan</strong> at an APR of <strong>19.99%</strong> over <strong>48 months</strong> would result in a monthly payment of approximately <strong>$304.42</strong> and a total cost of <strong>$14,612.16</strong>.
      </p>

      <h2>4. Loan amount &amp; term</h2>
      <p>
        Loan amounts range from <strong>$100 to $50,000</strong>. Repayment terms range from <strong>3 to 72 months</strong>. Specific amounts and terms available to you depend on the lender, the loan product, and your qualifications.
      </p>

      <h2>5. Implications of late and non-payment</h2>
      <p>
        <strong>Late payments</strong> may result in late fees (typically $15 to $40, lender-dependent), additional interest accrual, and reporting to one or more national credit bureaus, which may negatively affect your credit score and ability to obtain future credit.
      </p>
      <p>
        <strong>Non-payment</strong> may result in additional collection activity (which may include calls, letters, emails, and, in some cases, legal action by the lender), the loan being charged off, and substantial damage to your credit score. Some lenders use third-party collection agencies. In certain states, lenders may sue to collect the debt and obtain a judgment, which can lead to wage garnishment or liens.
      </p>

      <h2>6. Credit check disclosure (FCRA)</h2>
      <p>
        Submitting a request through {siteConfig.name} results in a <strong>soft credit inquiry</strong>, which does not affect your credit score. This inquiry helps lenders prequalify you for offers. If you choose to accept a final offer, the lender may then perform a <strong>hard credit inquiry</strong>, which may affect your credit score and remain on your credit report for up to 24 months. You have rights under the Fair Credit Reporting Act (FCRA), including the right to obtain a copy of your credit report and dispute inaccurate information. Visit{" "}
        <a href="https://www.annualcreditreport.com" target="_blank" rel="noopener noreferrer">annualcreditreport.com</a>{" "}
        for free annual reports.
      </p>

      <h2>7. State availability</h2>
      <p>
        Loan products available through our lender network vary by state. {siteConfig.name} does not operate in or solicit business from states where this would not be permitted under applicable state law. Specific lenders within our network may not be licensed or available to lend in all states. Your state of residence may affect the maximum loan amount, APR, fees, and other terms available to you.
      </p>

      <h2>8. Affiliate &amp; compensation disclosure</h2>
      <p>
        {siteConfig.name} earns a referral fee or commission from lenders in our network when you submit a request, when a lender extends an offer to you, or when you accept an offer. This compensation may influence which lenders we display, the order in which they are presented, or the products we promote. We do not, however, accept compensation from consumers, and the service is free for you to use.
      </p>

      <h2>9. Lender identity disclosure</h2>
      <p>
        After you submit a request, your information will be transmitted to one or more independent lenders within our partner network, including but not limited to LendingTree. The final lender providing your loan offer will identify themselves and provide their full name, business address, license information (where applicable), and complete loan terms before you are asked to sign any loan agreement. Review and comparison of lender disclosures is your responsibility.
      </p>

      <h2>10. Equal Credit Opportunity Act (ECOA)</h2>
      <p>
        The federal Equal Credit Opportunity Act prohibits creditors from discriminating against credit applicants on the basis of race, color, religion, national origin, sex, marital status, age (provided the applicant has the capacity to enter into a binding contract), because all or part of the applicant&rsquo;s income derives from any public assistance program, or because the applicant has in good faith exercised any right under the Consumer Credit Protection Act. The federal agency that administers compliance with this law is the Consumer Financial Protection Bureau, 1700 G Street NW, Washington, DC 20552.
      </p>

      <h2>11. Military Lending Act (MLA)</h2>
      <p>
        Federal law provides important protections to active-duty members of the Armed Forces and their dependents relating to extensions of consumer credit. In general, the cost of consumer credit to a covered borrower may not exceed an annual percentage rate of 36%, known as the Military Annual Percentage Rate (MAPR). This rate includes interest, fees, and certain charges, with limited exceptions. {siteConfig.name} requires its lender partners to comply with the Military Lending Act for any covered borrower. If you are an active-duty service member or covered dependent and believe an offer exceeds the MAPR cap, contact us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call your installation&rsquo;s legal assistance office.
      </p>

      <h2>12. No guarantee of approval, amount, or terms</h2>
      <p>
        Submitting a request through {siteConfig.name} is <strong>not a guarantee that you will receive an offer</strong>, that any offer will match the amount you request, or that the APR, term, or fees will be at any specific level. Final loan decisions, approval, amount, APR, and terms are made by the lender at the lender&rsquo;s sole discretion.
      </p>

      <h2>13. Educational content</h2>
      <p>
        Articles, calculators, and educational content on this site are provided for general informational purposes only. They are not financial, legal, or tax advice. Consult a qualified professional for advice specific to your situation.
      </p>

      <h2>14. Contact</h2>
      <p>
        For questions about these disclosures, contact us at{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        {siteConfig.hasPhone && (
          <>
            {" or "}
            <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}>{siteConfig.phone}</a>
          </>
        )}.
      </p>

      <p><em>This page is a good-faith summary of mandatory disclosures applicable to U.S. consumer-loan lead generators. It is not legal advice. Consult counsel before launching in production.</em></p>
    </>
  );
}
