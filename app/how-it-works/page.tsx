import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  BreadcrumbJsonLd,
  HowToJsonLd,
  SpeakableJsonLd,
} from "@/components/seo/JsonLd";

const URL = `${siteConfig.url}/how-it-works`;

export const metadata: Metadata = {
  title: "How Personal Loans Work in 2026: 3 Steps, Soft Check, Funds Next Day",
  description:
    "Three steps: submit a free 2-minute request (soft check, no score impact), review lender offers, get funded as fast as the next business day. Free, no obligation.",
  alternates: { canonical: "/how-it-works", languages: { "en-US": "/how-it-works", "es-US": "/es/how-it-works" } },
};

const steps = [
  { n: "01", t: "Submit your free request", b: "A short two-minute form. We ask for the loan amount, basic personal info, your income, and your bank-account status. We perform a soft credit inquiry only. Your credit score is not affected." },
  { n: "02", t: "Review your offers", b: "We instantly share your request with lenders in our network, including LendingTree. Lenders respond in real time with rates, terms, and monthly payments. Compare offers and choose what fits." },
  { n: "03", t: "Get funded", b: "E-sign your loan agreement with the lender of your choice. Funds are typically deposited via ACH to your checking account as fast as the next business day." },
];

export default function HowItWorks() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "How it works", url: URL },
        ]}
      />
      <HowToJsonLd
        name="How to get a personal loan online"
        description="Three steps to compare and accept a personal-loan offer from the Get Advance Loan lender network."
        totalTime="PT12M"
        steps={steps.map((s) => ({ name: s.t, text: s.b }))}
      />
      <SpeakableJsonLd
        url={URL}
        cssSelectors={["h1", ".how-step h2", ".how-step p"]}
      />
      <article className="mx-auto max-w-[920px] px-6 py-20 lg:px-10 lg:py-28">
        <span className="eyebrow">The process</span>
        <h1 className="mt-3 text-[40px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
          Three steps. <span className="text-forest-700">Roughly twelve minutes.</span>
        </h1>

        <ol className="mt-16 border-t border-ink-900">
          {steps.map((s) => (
            <li key={s.n} className="how-step grid grid-cols-[60px_1fr] gap-6 border-b border-cream-300 py-10 lg:grid-cols-[120px_1fr]">
              <span className="tabular text-3xl text-ink-300 lg:text-4xl">{s.n}</span>
              <div>
                <h2 className="text-2xl text-ink-900 lg:text-3xl">{s.t}</h2>
                <p className="mt-3 max-w-[60ch] text-[16px] leading-relaxed text-ink-700">{s.b}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14">
          <Link href="/apply" className="btn btn-primary">
            Begin your request
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </article>
    </>
  );
}
