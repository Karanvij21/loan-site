import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { FaqJsonLd, LoanProductJsonLd } from "@/components/seo/JsonLd";
import { LoanCalculator } from "@/components/home/LoanCalculator";
import { TrustBar } from "@/components/home/TrustBar";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Personal Loans up to $50,000 | Apply Online`,
  description:
    "Compare personal loan offers from $100 up to $50,000 in 2 minutes. Bad credit considered. Soft credit check. Free, no obligation. Funds as fast as next business day.",
  alternates: { canonical: "/" },
};

const products = [
  {
    href: "/loans/personal",
    title: "Personal Loans",
    amount: "$1,000 – $50,000",
    blurb: "Fixed-rate installment loans for almost any purpose.",
  },
  {
    href: "/loans/bad-credit",
    title: "Bad Credit Loans",
    amount: "$500 – $10,000",
    blurb: "Lenders that consider applicants with all credit profiles.",
  },
  {
    href: "/loans/emergency",
    title: "Emergency Loans",
    amount: "$300 – $5,000",
    blurb: "Get funds fast when an unexpected expense hits.",
  },
  {
    href: "/loans/cash-advance",
    title: "Cash Advance",
    amount: "$100 – $1,000",
    blurb: "Short-term cash advances to bridge to your next paycheck.",
  },
];

const steps = [
  {
    n: "01",
    title: "Submit your request",
    body: "Tell us how much you need and answer a few questions. Takes about 2 minutes. No impact on your credit score.",
  },
  {
    n: "02",
    title: "Review offers",
    body: "We instantly match you with lenders in our partner network. Compare APR, monthly payment, and terms side by side.",
  },
  {
    n: "03",
    title: "Receive funds",
    body: "Choose your offer, e-sign the agreement, and get funds deposited as fast as the next business day.",
  },
];

const exampleRows = [
  { amount: 1000, apr: "9.99% – 35.99%", term: "12 mo", monthly: "$87 – $99" },
  { amount: 5000, apr: "8.99% – 29.99%", term: "36 mo", monthly: "$159 – $212" },
  { amount: 10000, apr: "7.49% – 24.99%", term: "48 mo", monthly: "$241 – $317" },
  { amount: 25000, apr: "6.99% – 19.99%", term: "60 mo", monthly: "$495 – $662" },
];

const faqs = [
  {
    q: "How much can I borrow?",
    a: "You can request anywhere from $100 to $50,000. The amount you ultimately qualify for is decided by the lender based on your income, credit profile, and state of residence.",
  },
  {
    q: "Will applying affect my credit score?",
    a: "No. Submitting a request on our site performs a soft credit inquiry, which does not impact your credit score. If you accept a final offer, the lender may then perform a hard pull.",
  },
  {
    q: "How fast will I receive funds?",
    a: "Once you accept and e-sign a final offer, funds are typically deposited into your bank account as fast as the next business day. Timing depends on your bank.",
  },
  {
    q: "Can I get a loan with bad credit?",
    a: "Yes. Our partner network includes lenders who specialize in working with applicants who have less-than-perfect credit. Approval is not guaranteed and terms vary.",
  },
  {
    q: "What do I need to apply?",
    a: "You will need to be at least 18 years old, a U.S. resident, have a steady source of income, an active checking account, and a valid email address and phone number.",
  },
  {
    q: "Is there a fee to apply?",
    a: "No. Submitting a request is completely free with no obligation. We are paid by our lender partners when you accept an offer.",
  },
  {
    q: "Is my information secure?",
    a: "Yes. All data is transmitted over 256-bit SSL encryption and stored using industry-standard security practices.",
  },
];

export default function HomePage() {
  return (
    <>
      <LoanProductJsonLd
        name="Personal Loan"
        description="Personal installment loans from $100 to $50,000."
        amountMin={100}
        amountMax={50000}
        termMonthsMin={3}
        termMonthsMax={72}
        aprMin={5.99}
        aprMax={35.99}
      />
      <FaqJsonLd items={faqs} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
              A smarter way to borrow
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Personal loans up to <span className="text-brand-700">$50,000</span> — in minutes
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Compare offers from a network of trusted lenders. Soft credit check. No obligation.
              Funds as fast as the next business day.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Get my offers
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:border-brand-600 hover:text-brand-700"
              >
                How it works
              </Link>
            </div>
            <TrustBar />
          </div>
          <div className="flex items-center">
            <LoanCalculator />
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="products-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="products-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Loans for every situation
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Whether you need cash today or are planning a large purchase, our network has options for you.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand-500 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-1 text-sm font-medium text-brand-700">{p.amount}</p>
                <p className="mt-3 text-sm text-slate-600">{p.blurb}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-700 group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="how-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="how-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Get funds in 3 easy steps
            </h2>
            <p className="mt-3 text-lg text-slate-600">From request to deposit, the entire process can take less than 24 hours.</p>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="relative rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                  {s.n}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* EXAMPLE RATES TABLE */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="rates-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="rates-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Example rates & payments
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Representative ranges only. Your actual rate depends on creditworthiness, loan amount, term, and lender.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left font-semibold">Loan amount</th>
                  <th scope="col" className="px-6 py-4 text-left font-semibold">APR range</th>
                  <th scope="col" className="px-6 py-4 text-left font-semibold">Term</th>
                  <th scope="col" className="px-6 py-4 text-left font-semibold">Est. monthly payment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {exampleRows.map((r) => (
                  <tr key={r.amount}>
                    <td className="px-6 py-4 font-medium text-slate-900">${r.amount.toLocaleString()}</td>
                    <td className="px-6 py-4 text-slate-700">{r.apr}</td>
                    <td className="px-6 py-4 text-slate-700">{r.term}</td>
                    <td className="px-6 py-4 text-slate-700">{r.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ — also emitted as JSON-LD above */}
      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-slate-200 bg-white p-5 open:shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-slate-900 marker:hidden">
                  <span>{f.q}</span>
                  <span className="text-brand-600 transition group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <dd className="mt-3 text-slate-700">{f.a}</dd>
              </details>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to see your offers?
          </h2>
          <p className="max-w-2xl text-brand-100">
            It takes about 2 minutes and won&rsquo;t affect your credit score.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-brand-700 shadow-sm hover:bg-brand-50"
          >
            Start my free request
          </Link>
        </div>
      </section>
    </>
  );
}
