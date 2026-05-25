import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rates & fees",
  description: "Personal loan APR ranges, representative examples, and fee disclosures.",
  alternates: { canonical: "/rates-and-fees" },
};

const examples = [
  { amount: 1000, apr: "9.99 – 35.99", term: "12 mo", monthly: "$87 – $99", total: "$1,044 – $1,188" },
  { amount: 5000, apr: "8.99 – 29.99", term: "36 mo", monthly: "$159 – $212", total: "$5,724 – $7,632" },
  { amount: 10000, apr: "7.49 – 24.99", term: "48 mo", monthly: "$241 – $317", total: "$11,568 – $15,216" },
  { amount: 25000, apr: "6.99 – 19.99", term: "60 mo", monthly: "$495 – $662", total: "$29,700 – $39,720" },
  { amount: 50000, apr: "5.99 – 17.99", term: "72 mo", monthly: "$828 – $1,099", total: "$59,616 – $79,128" },
];

const fees = [
  { k: "Origination", v: "0% – 8% of the loan amount, deducted at funding (lender-dependent)." },
  { k: "Late payment", v: "$15 – $40 (lender-dependent)." },
  { k: "Returned payment", v: "Up to $35 if your payment is returned by your bank." },
  { k: "Prepayment", v: "Most lenders in our network charge none." },
];

export default function RatesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Rates & Fees", url: `${siteConfig.url}/rates-and-fees` },
        ]}
      />
      <article className="mx-auto max-w-[1080px] px-6 py-20 lg:px-10 lg:py-28">
        <span className="eyebrow">What to expect</span>
        <h1 className="mt-3 text-[52px] leading-[1.02] tracking-tight text-ink-900 lg:text-[80px]" style={{ fontFamily: "var(--font-display)", fontWeight: 380 }}>
          Rates &amp; <em className="italic text-forest-700">fees</em>.
        </h1>
        <p className="mt-6 max-w-[58ch] text-[17px] leading-[1.6] text-ink-700">
          APRs in our network typically range from <span className="tabular text-ink-900">5.99% to 35.99%</span>. Your actual rate depends on credit profile, loan amount, term, and lender.
        </p>

        <h2 className="mt-16 text-[28px] text-ink-900 lg:text-[36px]" style={{ fontFamily: "var(--font-display)" }}>
          Representative examples
        </h2>
        <table className="mt-6 w-full text-[14px]">
          <thead>
            <tr className="border-b border-ink-900 text-left">
              <th className="py-4 eyebrow !text-ink-900">Amount</th>
              <th className="py-4 eyebrow !text-ink-900">APR %</th>
              <th className="py-4 eyebrow !text-ink-900">Term</th>
              <th className="py-4 eyebrow !text-ink-900">Monthly</th>
              <th className="py-4 eyebrow !text-ink-900 text-right">Total cost</th>
            </tr>
          </thead>
          <tbody>
            {examples.map((e) => (
              <tr key={e.amount} className="border-b border-cream-300">
                <td className="tabular py-5 text-ink-900" style={{ fontFamily: "var(--font-display)", fontSize: 22 }}>${e.amount.toLocaleString()}</td>
                <td className="tabular py-5 text-ink-700">{e.apr}</td>
                <td className="py-5 text-ink-700">{e.term}</td>
                <td className="tabular py-5 text-ink-700">{e.monthly}</td>
                <td className="tabular py-5 text-right text-ink-900">{e.total}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="mt-16 text-[28px] text-ink-900 lg:text-[36px]" style={{ fontFamily: "var(--font-display)" }}>
          Fees
        </h2>
        <dl className="mt-6 border-t border-ink-900">
          {fees.map((f) => (
            <div key={f.k} className="grid grid-cols-[180px_1fr] gap-6 border-b border-cream-300 py-5">
              <dt className="eyebrow !text-ink-900">{f.k}</dt>
              <dd className="text-[15px] text-ink-700">{f.v}</dd>
            </div>
          ))}
        </dl>
      </article>
    </>
  );
}
