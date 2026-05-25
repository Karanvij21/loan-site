import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}. How we collect, use, share, and protect your personal information.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p><em>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</em></p>
      <p>
        This Privacy Policy describes how {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, and shares your information when you use our website and services.
      </p>
      <h2>1. Information we collect</h2>
      <p>We collect information you provide directly (name, contact info, financial details), information collected automatically (IP, device, cookies), and information from third parties (lender partners, credit bureaus where applicable).</p>
      <h2>2. How we use your information</h2>
      <p>To match you with lender offers, communicate with you, comply with law, and improve our services.</p>
      <h2>3. How we share your information</h2>
      <p>With lender partners in our network (including LendingTree and its sub-network), service providers, and where required by law. We do not sell your information for monetary consideration; however, sharing with lender partners may constitute a &ldquo;sale&rdquo; or &ldquo;share&rdquo; under certain U.S. state privacy laws (CCPA/CPRA).</p>
      <h2>4. Your rights (CCPA, GDPR, state laws)</h2>
      <p>You may request access, deletion, correction, or opt-out of sale/share by contacting us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
      <h2>5. Cookies and tracking</h2>
      <p>We use cookies and similar technologies for analytics and advertising. You can manage your preferences via the cookie banner.</p>
      <h2>6. Data security</h2>
      <p>We use 256-bit SSL encryption and industry-standard safeguards. No system is 100% secure.</p>
      <h2>7. Children</h2>
      <p>Our services are not intended for individuals under 18.</p>
      <h2>8. Contact</h2>
      <p>Questions? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
      <p className="text-xs text-slate-500"><strong>NOTE:</strong> This is a starter template. Have legal counsel review and customize before launch.</p>
    </>
  );
}
