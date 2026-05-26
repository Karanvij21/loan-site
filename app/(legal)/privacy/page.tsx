import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}. How we collect, use, share, and protect your personal information under GLBA, CCPA/CPRA, GDPR, and other applicable laws.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p><em>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</em></p>
      <p>
        This Privacy Policy explains how {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, shares, and protects information when you use our website and services. It also describes your rights under U.S. federal and state laws, including the Gramm-Leach-Bliley Act (GLBA), Fair Credit Reporting Act (FCRA), California Consumer Privacy Act / California Privacy Rights Act (CCPA/CPRA), and other applicable consumer privacy laws.
      </p>

      <h2>1. Who we are</h2>
      <p>
        {siteConfig.name} is an online loan marketplace and lead-generation service that connects U.S. consumers with a network of independent third-party lenders. We are not a lender. Contact:{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        {siteConfig.hasPhone && (
          <>
            {", "}
            <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}>{siteConfig.phone}</a>
          </>
        )}.
      </p>

      <h2>2. Information we collect</h2>
      <p>We collect the following categories of personal information:</p>
      <ul>
        <li>Identifiers: name, postal address, email address, phone number, IP address, device identifiers.</li>
        <li>Financial information (GLBA): income, employment status, employer name, pay frequency, bank-account status.</li>
        <li>Government identifiers: date of birth, last four digits of Social Security Number.</li>
        <li>Loan request details: loan amount, purpose, self-reported credit rating.</li>
        <li>Consent records: TCPA and E-SIGN consent, including timestamp, IP address, and user-agent string at the time of consent.</li>
        <li>Internet activity: pages visited, time spent, referrer, device and browser type, cookies and similar tracking technologies.</li>
        <li>Inferences: information derived from the above used to match you with appropriate lenders.</li>
      </ul>

      <h2>3. How we use your information</h2>
      <ul>
        <li>To match you with lender offers from our partner network (including LendingTree).</li>
        <li>To communicate with you about your request and our services (subject to your consent).</li>
        <li>To verify your identity and prevent fraud.</li>
        <li>To improve our website, marketing, and service.</li>
        <li>To comply with legal obligations, respond to subpoenas, and enforce our Terms.</li>
      </ul>

      <h2>4. How we share your information</h2>
      <p>We share your information with:</p>
      <ul>
        <li><strong>Lending partners:</strong> independent third-party lenders and lead-aggregator networks (including LendingTree, and via LendingTree, their downstream lender network) who will use the information to prequalify and contact you with offers.</li>
        <li><strong>Service providers:</strong> companies that help us operate our website, send transactional emails, host data, and provide analytics, all of whom are contractually obligated to protect your data.</li>
        <li><strong>Affiliates &amp; advertising partners:</strong> with your consent (as set by your cookie preferences), advertising networks that help us measure marketing effectiveness and personalize content.</li>
        <li><strong>Legal:</strong> if required by law, subpoena, or to protect our rights, property, or safety.</li>
        <li><strong>Business transfers:</strong> in connection with a merger, acquisition, sale of assets, or other corporate transaction.</li>
      </ul>
      <p>
        <strong>Sharing with lenders may constitute a &ldquo;sale&rdquo; or &ldquo;share&rdquo; under certain U.S. state privacy laws (CCPA/CPRA).</strong> You have the right to opt out. See Section 7 below.
      </p>

      <h2>5. GLBA financial-privacy notice</h2>
      <p>
        Under the Gramm-Leach-Bliley Act, we provide the following notice regarding your nonpublic personal financial information:
      </p>
      <ul>
        <li><strong>Categories of information collected:</strong> identifiers, financial information, and Social Security Number digits, as listed in Section 2.</li>
        <li><strong>Categories of information shared:</strong> all categories above are shared with our lending partners for the purpose of offering you loan products.</li>
        <li><strong>Reasons for sharing:</strong> to provide you the service you requested (loan offers from our network) and as permitted by law.</li>
        <li><strong>Opt-out rights:</strong> federal law gives you the right to limit certain sharing. Most sharing we conduct is necessary to provide our service and cannot be opted out of without ceasing to use our service. You may, however, opt out of marketing-only sharing by contacting us.</li>
      </ul>

      <h2>6. FCRA notice</h2>
      <p>
        Submitting a request through {siteConfig.name} results in a soft credit inquiry. You have rights under the Fair Credit Reporting Act, including the right to access your credit file, dispute inaccurate information, and obtain one free credit report per year from each nationwide credit bureau via{" "}
        <a href="https://www.annualcreditreport.com" target="_blank" rel="noopener noreferrer">annualcreditreport.com</a>.
      </p>

      <h2>7. Your CCPA/CPRA rights (California residents)</h2>
      <ul>
        <li><strong>Right to know:</strong> request what categories and specific pieces of personal information we have collected.</li>
        <li><strong>Right to delete:</strong> request deletion (subject to legal exceptions).</li>
        <li><strong>Right to correct:</strong> request correction of inaccurate personal information.</li>
        <li><strong>Right to opt out of sale or sharing:</strong> opt out of our sharing for advertising/marketing. Visit{" "}
          <a href="/do-not-sell">Do Not Sell My Personal Information</a>.
        </li>
        <li><strong>Right to limit sensitive personal information:</strong> limit use of sensitive information (such as SSN digits) to permitted purposes.</li>
        <li><strong>Right to non-discrimination:</strong> we will not discriminate against you for exercising any right.</li>
      </ul>
      <p>To exercise any right, email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>

      <h2>8. Other state-law rights (Virginia, Colorado, Connecticut, Utah, Texas, etc.)</h2>
      <p>
        If you reside in a U.S. state with a comprehensive consumer privacy law, you have substantially similar rights to access, delete, correct, and opt out of certain processing. Contact us at the email above to exercise any state-law right.
      </p>

      <h2>9. GDPR (visitors from the EEA/UK)</h2>
      <p>
        We do not knowingly target the European Economic Area, United Kingdom, or Switzerland. If you are a resident of any such jurisdiction, please do not submit information through our service. Visitors from these jurisdictions have the rights of access, rectification, erasure, restriction, portability, objection, and to withdraw consent at any time.
      </p>

      <h2>10. Children</h2>
      <p>
        Our services are not directed at, and we do not knowingly collect information from, individuals under 18. If we learn we have collected information from a minor, we will delete it.
      </p>

      <h2>11. Cookies and tracking</h2>
      <p>
        We use cookies and similar technologies for essential site functionality, analytics (Google Analytics 4, Microsoft Clarity), and (with your consent) advertising. You can manage your preferences via our cookie banner and your browser settings.
      </p>

      <h2>12. Data security</h2>
      <p>
        We use 256-bit SSL/TLS encryption in transit and industry-standard safeguards including access controls and encryption at rest. No system is 100% secure, and we cannot guarantee absolute security. You are responsible for keeping your login credentials confidential.
      </p>

      <h2>13. Data retention</h2>
      <p>
        We retain personal information for as long as necessary to fulfill the purposes for which it was collected, comply with our legal obligations (including financial-records retention requirements), resolve disputes, and enforce our agreements. TCPA consent records are retained for at least four years.
      </p>

      <h2>14. International data transfers</h2>
      <p>
        Your information is stored in the United States. We do not knowingly transfer personal information internationally except as necessary to provide our service.
      </p>

      <h2>15. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be posted on this page with a new &ldquo;last updated&rdquo; date.
      </p>

      <h2>16. Contact &amp; complaints</h2>
      <p>
        For privacy questions, complaints, or to exercise any right, contact us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. You may also file a complaint with the California Attorney General (oag.ca.gov), Federal Trade Commission (ftc.gov), or your state attorney general.
      </p>

      <p><em>This page is a good-faith template summarizing common U.S. consumer privacy requirements. It is not legal advice. Consult counsel before launching in production.</em></p>
    </>
  );
}
