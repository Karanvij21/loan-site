import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for ${siteConfig.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <h1>Terms of Use</h1>
      <p><em>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</em></p>
      <p>By using this site, you agree to these Terms.</p>
      <h2>1. Service description</h2>
      <p>{siteConfig.name} is a free online marketplace that connects consumers with lenders. We are not a lender, broker, or agent of any lender.</p>
      <h2>2. Eligibility</h2>
      <p>You must be at least 18 years old, a legal U.S. resident, and have a verifiable source of income.</p>
      <h2>3. Accuracy of information</h2>
      <p>You agree the information you submit is true, accurate, and complete.</p>
      <h2>4. No guarantee</h2>
      <p>Submission of a request is not a guarantee of approval. APR, terms, and fees depend solely on the lender&rsquo;s evaluation.</p>
      <h2>5. Intellectual property</h2>
      <p>All content is owned by {siteConfig.name} or its licensors and may not be reproduced without permission.</p>
      <h2>6. Disclaimers and limitation of liability</h2>
      <p>The service is provided &ldquo;as is.&rdquo; To the maximum extent permitted by law, we disclaim all warranties and limit liability.</p>
      <h2>7. Governing law</h2>
      <p>These Terms are governed by the laws of the State of Delaware, USA.</p>
      <h2>8. Contact</h2>
      <p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
      <p className="text-xs text-slate-500"><strong>NOTE:</strong> Starter template — have counsel review.</p>
    </>
  );
}
