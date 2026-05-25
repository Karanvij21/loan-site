import type { Metadata } from "next";
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ — Personal Loan Questions Answered",
  description: "Answers to common questions about personal loans, credit checks, eligibility, funding speed, fees, and more.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  { q: "How much can I borrow?", a: "You can request from $100 up to $50,000. The actual amount you qualify for depends on the lender's evaluation of your income and credit profile." },
  { q: "Will applying affect my credit score?", a: "No. We perform a soft credit inquiry only. A hard inquiry occurs only if you accept a final offer and the lender requires one." },
  { q: "How fast will I receive funds?", a: "Once you accept and e-sign an offer, funds are typically deposited the next business day via ACH." },
  { q: "Can I get a loan with bad credit?", a: "Yes — our network includes lenders that consider FICO scores below 600. Approval is not guaranteed." },
  { q: "What do I need to apply?", a: "Age 18+, U.S. residency, a steady income, an active checking account, and valid email and phone." },
  { q: "Is there a fee to apply?", a: "No. The service is free and there is no obligation to accept any offer." },
  { q: "Is my information secure?", a: "We use 256-bit SSL encryption and industry-standard security practices to protect your data." },
  { q: "How do I opt out of marketing?", a: "Reply STOP to any SMS, click 'unsubscribe' in any email, or email us at " + siteConfig.email + "." },
  { q: "Do you operate in all states?", a: "We work with lenders that cover all 50 states, but specific loan products may not be available in every state due to local regulations." },
  { q: "Who is LendingTree?", a: "LendingTree is one of the largest online loan marketplaces in the United States. They are one of our network partners and may provide you offers based on your request." },
];

export default function FAQPage() {
  return (
    <>
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "FAQ", url: `${siteConfig.url}/faq` },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Frequently asked questions</h1>
        <dl className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-slate-200 bg-white p-5 open:shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-slate-900">
                <span>{f.q}</span>
                <span className="text-brand-600 transition group-open:rotate-45 text-xl">+</span>
              </summary>
              <dd className="mt-3 text-slate-700">{f.a}</dd>
            </details>
          ))}
        </dl>
      </article>
    </>
  );
}
