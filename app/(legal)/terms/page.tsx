import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for ${siteConfig.name}, an online loan marketplace and lead-generation service.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <h1>Terms of Use</h1>
      <p><em>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</em></p>
      <p>
        These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of the {siteConfig.name} website and services. By accessing or using our service, you agree to be bound by these Terms. If you do not agree, do not use the service.
      </p>

      <h2>1. Service description</h2>
      <p>
        {siteConfig.name} is a free online loan marketplace and lead-generation service. We are <strong>not a lender</strong>, broker, or agent of any lender. We use the information you submit to match you with independent third-party lenders, including LendingTree, who may make you an offer. All loan decisions, terms, APR, and fees are determined solely by the lender.
      </p>

      <h2>2. Eligibility</h2>
      <ul>
        <li>You must be at least 18 years old.</li>
        <li>You must be a legal U.S. resident with a valid Social Security Number.</li>
        <li>You must have a steady, verifiable source of income.</li>
        <li>You must have an active U.S. checking account.</li>
        <li>You must provide accurate, complete, and current information.</li>
      </ul>

      <h2>3. Accuracy of information</h2>
      <p>
        You represent and warrant that all information you submit is true, accurate, current, and complete. Submitting false information may constitute fraud and may subject you to civil and criminal penalties.
      </p>

      <h2>4. No guarantee</h2>
      <p>
        Submission of a request is <strong>not a guarantee</strong> of approval. APR, terms, fees, and approval depend solely on the lender&rsquo;s evaluation of your application. {siteConfig.name} makes no representation or warranty regarding any specific loan offer, amount, APR, or term.
      </p>

      <h2>5. Communication consent (TCPA)</h2>
      <p>
        When you submit a request, you provide express written consent for {siteConfig.name} and our lender partners (including LendingTree and the lenders in their network) to contact you at the phone number and email you provide, including by autodialed and prerecorded calls, SMS text messages, and email, regarding loan products and services, even if your number is registered on a Do Not Call list. Consent is not a condition of receiving a loan. Standard message and data rates may apply. See Section 11 below for opt-out instructions.
      </p>

      <h2>6. E-SIGN consent</h2>
      <p>
        You consent to receive disclosures, notices, contracts, and other communications electronically rather than on paper. You represent that you have the hardware, software, and internet access required to access electronic communications.
      </p>

      <h2>7. Account security &amp; prohibited use</h2>
      <p>
        You agree not to: (a) submit information on behalf of any other person without authorization; (b) use automated tools or scripts to interact with the service; (c) attempt to reverse engineer, decompile, or circumvent any security feature; (d) use the service for any unlawful purpose; (e) submit information that infringes the rights of others or violates any law.
      </p>

      <h2>8. Intellectual property</h2>
      <p>
        All content on this site (text, graphics, logos, software, and data compilations) is owned by {siteConfig.name} or its licensors and is protected by copyright, trademark, and other laws. You may not reproduce, modify, distribute, or create derivative works without prior written permission.
      </p>

      <h2>9. Third-party services</h2>
      <p>
        Our service relies on and links to third-party services (lenders, payment processors, analytics providers). We are not responsible for the practices of those third parties. Once you accept a lender&rsquo;s offer, your relationship is with that lender, not with us.
      </p>

      <h2>10. Disclaimers</h2>
      <p>
        THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. {siteConfig.name} DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT ANY OFFER WILL BE MADE OR ACCEPTED.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL {siteConfig.name.toUpperCase()} OR ITS AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOSS OF PROFITS, REVENUES, DATA, OR BUSINESS, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
      </p>

      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless {siteConfig.name}, its officers, directors, employees, and agents from any claim, loss, liability, or expense (including reasonable attorneys&rsquo; fees) arising out of your use of the service, your violation of these Terms, or your violation of any law or third-party right.
      </p>

      <h2>13. Opt-out / Do Not Call / SMS STOP</h2>
      <p>
        You can opt out of marketing communications at any time:
      </p>
      <ul>
        <li><strong>Email:</strong> click &ldquo;unsubscribe&rdquo; at the bottom of any marketing email.</li>
        <li><strong>SMS:</strong> reply STOP to any text message to unsubscribe. Reply HELP for help.</li>
        <li><strong>Phone:</strong> request to be added to our internal Do Not Call list by emailing <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</li>
        <li>See our <a href="/opt-out">opt-out / DNC page</a> for full details.</li>
      </ul>

      <h2>14. Arbitration &amp; dispute resolution</h2>
      <p>
        Any dispute arising under or relating to these Terms or the service shall be resolved by binding individual arbitration administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules. You waive any right to a jury trial and to participate in a class action. You may opt out of this arbitration provision by emailing <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> within 30 days of first accepting these Terms.
      </p>

      <h2>15. Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of Delaware, USA, without regard to its conflict-of-laws provisions. Any claim not subject to arbitration shall be brought in the state or federal courts located in Delaware.
      </p>

      <h2>16. Changes</h2>
      <p>
        We may modify these Terms at any time. Material changes will be posted with a new &ldquo;last updated&rdquo; date. Your continued use after such changes constitutes acceptance.
      </p>

      <h2>17. Contact</h2>
      <p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>

      <p><em>This page is a good-faith template. It is not legal advice. Consult counsel before launching in production.</em></p>
    </>
  );
}
