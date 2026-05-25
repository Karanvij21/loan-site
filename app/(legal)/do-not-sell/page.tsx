import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Do Not Sell or Share My Personal Information",
  description: `Exercise your CCPA/CPRA right to opt out of the sale or sharing of personal information at ${siteConfig.name}.`,
  alternates: { canonical: "/do-not-sell" },
};

export default function DoNotSellPage() {
  return (
    <>
      <h1>Do Not Sell or Share My Personal Information</h1>
      <p><em>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</em></p>

      <h2>Your right to opt out</h2>
      <p>
        Under the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA), and similar laws in other U.S. states (Virginia, Colorado, Connecticut, Utah, Texas, and others), you have the right to opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of your personal information.
      </p>

      <h2>What &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; means here</h2>
      <p>
        {siteConfig.name} does not sell your personal information for monetary consideration in the traditional sense. However, when we share your information with lender partners (including LendingTree and its downstream lender network) for the purpose of obtaining loan offers for you, that activity may meet the broad statutory definition of &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; under these laws because we receive compensation from lenders when leads are forwarded or when offers are accepted.
      </p>

      <h2>How to opt out</h2>
      <p>To opt out of the sale or sharing of your personal information, choose any of the following:</p>
      <ul>
        <li>
          <strong>Email opt-out:</strong> send a request to{" "}
          <a href={`mailto:${siteConfig.email}?subject=Do%20Not%20Sell%20Opt-Out%20Request`}>
            {siteConfig.email}
          </a>{" "}
          with the subject line &ldquo;Do Not Sell Opt-Out Request.&rdquo; Please include your full name, email, and (if known) the date you submitted a request.
        </li>
        <li>
          <strong>Phone opt-out:</strong> call{" "}
          <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}>{siteConfig.phone}</a>{" "}
          and request to be added to our Do Not Sell list.
        </li>
        <li>
          <strong>Global Privacy Control (GPC):</strong> we honor browser-level GPC signals as a valid opt-out request. Enable GPC in your browser settings or via a supported extension.
        </li>
      </ul>

      <h2>What happens after you opt out</h2>
      <p>
        We will process your request within 15 business days. Note that if you have already submitted a loan request, the information you previously provided may have already been shared with lender partners; we cannot retroactively recall that data from third parties, but you may contact each lender directly to request that they cease processing or delete your information.
      </p>

      <h2>Important: opting out before applying</h2>
      <p>
        Opting out of sharing while still using our loan-matching service is not possible because forwarding your information to lenders is the core of how the service works. If you opt out, we will not forward your information to lenders, which means you will not receive loan offers from us. If you only want to stop receiving marketing communications (but still want loan offers), see our{" "}
        <a href="/opt-out">opt-out / DNC page</a> instead.
      </p>

      <h2>Verifying your request</h2>
      <p>
        To prevent fraud, we may require you to verify your identity before processing your request (typically by matching information you provide to data we already hold, such as email and phone).
      </p>

      <h2>Authorized agents</h2>
      <p>
        You may designate an authorized agent to make a request on your behalf. The agent must provide signed permission from you and demonstrate the authority to act on your behalf.
      </p>

      <h2>Non-discrimination</h2>
      <p>
        We will not discriminate against you for exercising your right to opt out. We will not deny you our services or charge different prices or rates for exercising any privacy right.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>

      <p><em>This page is a good-faith template summarizing CCPA/CPRA opt-out rights. It is not legal advice. Consult counsel before launching in production.</em></p>
    </>
  );
}
