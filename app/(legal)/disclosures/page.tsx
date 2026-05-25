import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclosures",
  description: `Important lending and advertising disclosures for ${siteConfig.name}.`,
  alternates: { canonical: "/disclosures" },
};

export default function DisclosuresPage() {
  return (
    <>
      <h1>Disclosures</h1>
      <h2>Not a lender</h2>
      <p>{siteConfig.name} is not a lender. We do not make loan or credit decisions. We connect consumers with lenders who may be able to offer them a loan.</p>
      <h2>APR &amp; representative example</h2>
      <p>APRs typically range from 5.99% to 35.99%. <strong>Representative example:</strong> A $10,000 loan at 19.99% APR over 48 months would have a monthly payment of approximately $304.42 and a total cost of $14,612.16.</p>
      <h2>Late and non-payment</h2>
      <p>Lenders may charge late fees and report non-payment to credit bureaus. Failure to repay may result in collection activity and damage to your credit.</p>
      <h2>State availability</h2>
      <p>Loan availability and terms vary by state. Not all lenders operate in all states.</p>
      <h2>Credit checks</h2>
      <p>Submitting a request results in a soft credit inquiry only, which does not affect your credit score. If you accept a final offer, the lender may perform a hard inquiry.</p>
      <h2>Affiliate disclosure</h2>
      <p>We may earn a referral fee when you accept an offer from one of our lending partners.</p>
    </>
  );
}
