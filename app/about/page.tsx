import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name}, an online loan marketplace connecting U.S. borrowers with trusted lender partners.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 prose prose-slate">
      <h1>About {siteConfig.name}</h1>
      <p>
        {siteConfig.name} is an independent online loan marketplace that helps U.S. consumers find competitive personal loan offers from a network of trusted lender partners, including <strong>LendingTree</strong>.
      </p>
      <p>
        Our mission is to make borrowing simple, transparent, and stress-free. We do not make loans ourselves. Instead, we use the information you provide to instantly match you with lenders most likely to offer you favorable terms.
      </p>
      <h2>What we believe</h2>
      <ul>
        <li><strong>Transparency</strong> — clear rates, terms, and fees on every offer.</li>
        <li><strong>Privacy</strong> — your data is encrypted in transit and never sold for marketing without consent.</li>
        <li><strong>Choice</strong> — you decide which offer (if any) to accept. No obligation.</li>
      </ul>
    </article>
  );
}
