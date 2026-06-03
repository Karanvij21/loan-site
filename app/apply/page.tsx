import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import { RoundSkyForm } from "@/components/apply/RoundSkyForm";

export const metadata: Metadata = {
  title: "Begin your request",
  description:
    "Apply for a personal loan from $100 to $50,000. Two minutes. Soft credit check only. No impact on your credit score.",
  alternates: { canonical: "/apply", languages: { "en-US": "/apply", "es-US": "/es/apply" } },
  robots: { index: true, follow: true },
};

export default function ApplyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Apply", url: `${siteConfig.url}/apply` },
        ]}
      />
      <article className="mx-auto max-w-[1080px] px-6 pt-12 pb-20 lg:px-10 lg:pt-16 lg:pb-24">
        <div className="flex items-center gap-3 text-[12px] text-ink-500">
          <Link href="/" className="hover:text-ink-900">Home</Link>
          <span className="text-ink-300">/</span>
          <span className="text-ink-900">Begin</span>
        </div>

        <header className="mt-6 grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          <h1 className="text-[44px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
            Your <span className="text-forest-700">request</span>.
          </h1>
          <p className="max-w-[28ch] text-[14px] text-ink-500">
            About two minutes. Soft credit check only. There is no impact on your score for asking.
          </p>
        </header>

        {/* Trust strip */}
        <ul className="mt-10 grid gap-3 sm:grid-cols-3 text-[13px]">
          <li className="flex items-center gap-3 rounded-lg border border-cream-300 bg-cream-50/60 px-4 py-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="text-forest-700">
              <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-ink-900"><strong className="font-semibold">256-bit SSL.</strong> <span className="text-ink-700">Data encrypted end-to-end.</span></span>
          </li>
          <li className="flex items-center gap-3 rounded-lg border border-cream-300 bg-cream-50/60 px-4 py-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="text-forest-700">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
              <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-ink-900"><strong className="font-semibold">Soft credit check.</strong> <span className="text-ink-700">No impact to your score.</span></span>
          </li>
          <li className="flex items-center gap-3 rounded-lg border border-cream-300 bg-cream-50/60 px-4 py-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="text-forest-700">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <span className="text-ink-900"><strong className="font-semibold">Free service.</strong> <span className="text-ink-700">No fees. No obligation.</span></span>
          </li>
        </ul>

        {/* Round Sky form embed */}
        <section className="mt-8 rounded-[18px] border border-cream-300 bg-cream-50 p-3 sm:p-5 lg:p-8">
          <Suspense fallback={<div className="h-[480px] animate-pulse rounded-[14px] bg-cream-100 ring-1 ring-cream-300" />}>
            <RoundSkyForm />
          </Suspense>
        </section>

        {/* Consent + disclosure block */}
        <section className="mt-8 space-y-3 text-[12px] leading-relaxed text-ink-500">
          <p>
            By submitting your information you agree to our <Link href="/terms" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">Terms of Use</Link>, <Link href="/privacy" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">Privacy Policy</Link>, and <Link href="/disclosures" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">consumer disclosures</Link>, and consent to be contacted by {siteConfig.name} and lender partners (including Round Sky, LendingTree, and the lenders in their networks) by telephone, autodialed and prerecorded calls, SMS text messages, and email regarding loan products and services, even if your number is on a Do Not Call list. Consent is not a condition of receiving a loan. Standard message and data rates may apply. Reply STOP to opt out of SMS at any time.
          </p>
          <p>
            <strong className="text-ink-700">{siteConfig.name}</strong> is a brand operated by {siteConfig.legalEntity}. We are not a lender. APRs available through our lender network typically range from 5.99% to 35.99% depending on lender, credit, amount, and state. Loan amounts $100 to $50,000. Terms 3 to 72 months. See <Link href="/disclosures" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">full disclosures</Link> for representative examples and state-specific information.
          </p>
        </section>

        {/* What happens next */}
        <section className="mt-14 grid gap-8 lg:grid-cols-3">
          <Step n="01" k="Submit" v="A short two-minute form. We perform a soft credit inquiry only. Your score is not affected." />
          <Step n="02" k="Review offers" v="Lenders in our network respond in real time with rates, terms, and monthly payments. Compare and choose." />
          <Step n="03" k="Get funded" v="E-sign your loan agreement. Funds are typically deposited via ACH as fast as the next business day." />
        </section>
      </article>
    </>
  );
}

function Step({ n, k, v }: { n: string; k: string; v: string }) {
  return (
    <div className="border-t border-ink-900 pt-5">
      <div className="flex items-baseline gap-3">
        <span className="tabular text-[14px] text-ink-300">{n}</span>
        <h2 className="text-[18px] font-semibold text-ink-900">{k}</h2>
      </div>
      <p className="mt-2 text-[14px] leading-[1.65] text-ink-700">{v}</p>
    </div>
  );
}
