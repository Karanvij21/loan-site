import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Three simple steps: submit a free request, review your offers, receive funds. Soft credit check, no obligation.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorks() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "How it works", url: `${siteConfig.url}/how-it-works` },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">How it works</h1>
        <p className="mt-4 text-lg text-slate-600">
          {siteConfig.name} matches you with personal loan offers in three steps.
        </p>
        <ol className="mt-10 space-y-8">
          <Step n={1} title="Submit your free request">
            Fill out a short 2-minute form. We ask for the loan amount, basic personal info, your income, and your bank-account status. We perform a <strong>soft credit inquiry</strong> only — your credit score is not affected.
          </Step>
          <Step n={2} title="Review your offers">
            We instantly pass your request to our partner network, including LendingTree. Lenders respond in real time with rates, terms, and monthly payments. Compare offers and pick the one that fits.
          </Step>
          <Step n={3} title="Get funded">
            E-sign your loan agreement with the lender of your choice. Funds are typically deposited via ACH to your checking account as fast as the <strong>next business day</strong>.
          </Step>
        </ol>
        <div className="mt-12">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white hover:bg-brand-700"
          >
            Get started
          </Link>
        </div>
      </article>
    </>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-5">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">{n}</span>
      <div>
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        <p className="mt-2 text-slate-700">{children}</p>
      </div>
    </li>
  );
}
