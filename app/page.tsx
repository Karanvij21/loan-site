import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { FaqJsonLd, LoanProductJsonLd } from "@/components/seo/JsonLd";
import { LoanCalculator } from "@/components/home/LoanCalculator";
import { TrustBar } from "@/components/home/TrustBar";
import { HeroMark } from "@/components/home/HeroMark";
import { SocialProof } from "@/components/home/SocialProof";

export const metadata: Metadata = {
  title: `${siteConfig.name} · Personal Loans up to $50,000`,
  description:
    "Compare fixed-rate personal loans from $100 to $50,000 in two minutes. Soft credit check, no obligation, funds as fast as the next business day.",
  alternates: { canonical: "/" },
};

const products = [
  { n: "01", href: "/loans/personal", title: "Personal", amount: "$1,000 – $50,000", blurb: "Fixed-rate installment loans for any considered purpose." },
  { n: "02", href: "/loans/bad-credit", title: "Bad Credit", amount: "$500 – $10,000", blurb: "Lenders who weigh more than your score." },
  { n: "03", href: "/loans/emergency", title: "Emergency", amount: "$300 – $5,000", blurb: "Same-week funding for unexpected expenses." },
  { n: "04", href: "/loans/cash-advance", title: "Cash Advance", amount: "$100 – $1,000", blurb: "A short bridge to your next paycheck." },
];

const steps = [
  { n: "01", t: "Submit your request", b: "Two minutes. Loan amount, basic details, and a soft credit check that does not affect your score." },
  { n: "02", t: "Review your offers", b: "We match you instantly with lenders in our network, including LendingTree. Compare APR, monthly payment, and term side by side." },
  { n: "03", t: "Receive your funds", b: "Accept an offer, e-sign your agreement, and the lender deposits funds, typically by the next business day." },
];

const exampleRows = [
  { amount: 1000, apr: "9.99 – 35.99", term: "12 mo", monthly: "$87 – $99" },
  { amount: 5000, apr: "8.99 – 29.99", term: "36 mo", monthly: "$159 – $212" },
  { amount: 10000, apr: "7.49 – 24.99", term: "48 mo", monthly: "$241 – $317" },
  { amount: 25000, apr: "6.99 – 19.99", term: "60 mo", monthly: "$495 – $662" },
];

const faqs = [
  { q: "How much can I borrow?", a: "You can request anywhere from $100 to $50,000. The amount you ultimately qualify for is decided by the lender based on your income, credit profile, and state of residence." },
  { q: "Will applying affect my credit score?", a: "No. Submitting a request performs a soft credit inquiry, which does not impact your credit score. If you accept a final offer, the lender may then perform a hard pull." },
  { q: "How fast will I receive funds?", a: "Once you accept and e-sign a final offer, funds are typically deposited into your bank account as fast as the next business day. Timing depends on your bank." },
  { q: "Can I get a loan with bad credit?", a: "Yes. Our partner network includes lenders who work with applicants who have less-than-perfect credit. Approval is not guaranteed and terms vary." },
  { q: "What do I need to apply?", a: "You will need to be at least 18 years old, a U.S. resident, have a steady source of income, an active checking account, and a valid email address and phone number." },
  { q: "Is there a fee to apply?", a: "No. Submitting a request is completely free with no obligation. We are paid by our lender partners when you accept an offer." },
  { q: "Is my information secure?", a: "Yes. All data is transmitted over 256-bit SSL encryption and stored using industry-standard security practices." },
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

      {/* ─────────────────────── HERO ─────────────────────── */}
      <section className="relative">
        <div className="mx-auto max-w-[1280px] px-6 pt-14 pb-20 lg:px-10 lg:pt-20 lg:pb-28">
          {/* Eyebrow pill */}
          <div className="reveal reveal-1">
            <span className="eyebrow-pill">
              <span className="h-1.5 w-1.5 rounded-full bg-forest-700" />
              Loan marketplace · not a lender
            </span>
          </div>

          <div className="mt-10 grid items-start gap-14 lg:grid-cols-[1fr_460px] lg:gap-20">
            {/* Headline column */}
            <div className="reveal reveal-2">
              <h1 className="text-[52px] leading-[0.98] tracking-tight text-ink-900 sm:text-[72px] lg:text-[88px]">
                Loan offers, <span className="text-forest-700">in minutes</span>.
              </h1>

              <p className="mt-8 max-w-[52ch] text-[18px] leading-[1.6] text-ink-700 sm:text-[20px]">
                Compare fixed-rate personal loan offers from <span className="tabular font-medium text-ink-900">$100 to $50,000</span> across a network of independent lenders. Soft credit check, no obligation. Approval, amount, and APR are decided by the lender.
              </p>
              <p className="mt-3 text-[11px] text-ink-500">
                Get Advance Loan is a free online marketplace, not a lender. We may receive compensation from lender partners when you accept an offer.
              </p>

              <div className="reveal reveal-3 mt-10 flex flex-wrap items-center gap-4">
                <Link href="/apply" className="btn btn-primary group">
                  Begin your request
                  <span aria-hidden className="btn-icon">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
                <Link href="/how-it-works" className="text-[15px] text-ink-700 underline decoration-cream-400 underline-offset-[6px] hover:decoration-ink-900 hover:text-ink-900">
                  How it works ↗
                </Link>
              </div>

              {/* Decorative hero mark, desktop only */}
              <div className="reveal reveal-4 mt-14 hidden h-[160px] w-[160px] overflow-hidden lg:block">
                <HeroMark />
              </div>
            </div>

            {/* Calculator column */}
            <div className="reveal reveal-3 flex justify-center lg:justify-end">
              <LoanCalculator />
            </div>
          </div>

          <div className="reveal reveal-5">
            <TrustBar />
          </div>
        </div>
      </section>

      {/* ─────────────────────── HOW IT WORKS ─────────────────────── */}
      <section className="border-y border-cream-300 bg-cream-50">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[280px_1fr] lg:gap-24">
            <div>
              <span className="eyebrow">The process</span>
              <h2 className="mt-4 text-[36px] leading-[1.05] tracking-tight text-ink-900 lg:text-[48px]">
                Three steps. <span className="text-forest-700">Twelve minutes</span>.
              </h2>
            </div>

            <ol className="space-y-0">
              {steps.map((s, i) => (
                <li key={s.n} className="grid grid-cols-[80px_1fr] gap-6 border-t border-cream-300 py-8 lg:grid-cols-[120px_1fr] lg:py-10">
                  <span
                    className="tabular text-3xl text-ink-300 lg:text-4xl"
                  >
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-2xl text-ink-900 lg:text-3xl">
                      {s.t}
                    </h3>
                    <p className="mt-3 max-w-[55ch] text-[16px] text-ink-700">{s.b}</p>
                  </div>
                  {i === steps.length - 1 && <span className="hidden" />}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ─────────────────────── PRODUCTS ─────────────────────── */}
      <section>
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Loan types</span>
              <h2 className="mt-3 text-[36px] leading-[1.05] tracking-tight text-ink-900 lg:text-[48px]">
                For most of life&rsquo;s <span className="text-forest-700">moments</span>.
              </h2>
            </div>
            <Link href="/apply" className="hidden text-[14px] text-ink-700 underline decoration-cream-400 underline-offset-[6px] hover:text-ink-900 md:inline">
              Start a request ↗
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-0 border-t border-cream-300 md:grid-cols-2">
            {products.map((p, i) => (
              <Link
                key={p.href}
                href={p.href}
                className={`group relative grid grid-cols-[auto_1fr_auto] items-baseline gap-6 border-b border-cream-300 py-8 transition-colors hover:bg-cream-50 ${
                  i % 2 === 0 ? "md:border-r md:border-r-cream-300 md:pr-8" : "md:pl-8"
                }`}
              >
                <span
                  className="tabular text-xl text-ink-300"
                >
                  {p.n}
                </span>
                <div className="min-w-0">
                  <h3 className="text-2xl text-ink-900 lg:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] text-ink-500">{p.blurb}</p>
                  <p className="mt-2 tabular text-[13px] text-forest-700">{p.amount}</p>
                </div>
                <span aria-hidden className="text-xl text-ink-300 transition-transform group-hover:translate-x-1 group-hover:text-ink-900">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── RATES TABLE ─────────────────────── */}
      <section className="border-t border-cream-300 bg-cream-50">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
            <div>
              <span className="eyebrow">Representative ranges</span>
              <h2 className="mt-3 text-[44px] leading-[1.02] tracking-tight text-ink-900 lg:text-[56px]">
                What to <span className="text-forest-700">expect</span>.
              </h2>
              <p className="mt-5 max-w-[36ch] text-[15px] text-ink-700">
                Actual offers depend on creditworthiness, term, lender, and state of residence. These numbers illustrate; they do not promise.
              </p>
            </div>

            <table className="w-full text-[14px]">
              <thead>
                <tr className="border-b border-ink-900 text-left">
                  <th scope="col" className="py-4 eyebrow !text-ink-900">Amount</th>
                  <th scope="col" className="py-4 eyebrow !text-ink-900">APR %</th>
                  <th scope="col" className="py-4 eyebrow !text-ink-900">Term</th>
                  <th scope="col" className="py-4 eyebrow !text-ink-900 text-right">Monthly</th>
                </tr>
              </thead>
              <tbody>
                {exampleRows.map((r) => (
                  <tr key={r.amount} className="border-b border-cream-300">
                    <td className="tabular py-5 text-[19px] font-semibold tracking-tight text-ink-900">
                      ${r.amount.toLocaleString()}
                    </td>
                    <td className="tabular py-5 text-ink-700">{r.apr}</td>
                    <td className="py-5 text-ink-700">{r.term}</td>
                    <td className="tabular py-5 text-right text-ink-900">{r.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─────────────────────── SOCIAL PROOF ─────────────────────── */}
      <SocialProof />

      {/* ─────────────────────── FAQ ─────────────────────── */}
      <section>
        <div className="mx-auto max-w-[920px] px-6 py-20 lg:px-10 lg:py-28">
          <span className="eyebrow">Frequently asked</span>
          <h2 className="mt-3 text-[36px] leading-[1.05] tracking-tight text-ink-900 lg:text-[48px]">
            Honest answers.
          </h2>

          <div className="mt-12 border-t border-ink-900">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-cream-300 py-5">
                <summary className="flex cursor-pointer items-baseline justify-between gap-6 marker:hidden">
                  <span className="text-lg text-ink-900 lg:text-xl">
                    {f.q}
                  </span>
                  <span className="shrink-0 text-xl text-ink-300 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-ink-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── CLOSING CTA ─────────────────────── */}
      <section className="relative overflow-hidden bg-forest-700 text-cream-100">
        <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <h2 className="text-[40px] leading-[1.05] tracking-tight lg:text-[64px]">
              Compare offers <span className="text-cream-100">without the noise</span>.
            </h2>
            <div className="lg:pb-3">
              <Link
                href="/apply"
                className="btn !bg-cream-100 !text-ink-900 hover:!bg-cream-200 !px-7 !py-4 !text-[15px]"
              >
                Start your request
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <p className="mt-3 text-[12px] text-cream-100/60">2 minutes · soft credit check · no obligation</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
