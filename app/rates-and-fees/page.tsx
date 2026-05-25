import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rates & Fees",
  description: "Personal loan APR ranges, representative examples, and fee disclosures.",
  alternates: { canonical: "/rates-and-fees" },
};

const examples = [
  { amount: 1000, apr: "9.99% – 35.99%", term: "12 mo", monthly: "$87 – $99", total: "$1,044 – $1,188" },
  { amount: 5000, apr: "8.99% – 29.99%", term: "36 mo", monthly: "$159 – $212", total: "$5,724 – $7,632" },
  { amount: 10000, apr: "7.49% – 24.99%", term: "48 mo", monthly: "$241 – $317", total: "$11,568 – $15,216" },
  { amount: 25000, apr: "6.99% – 19.99%", term: "60 mo", monthly: "$495 – $662", total: "$29,700 – $39,720" },
  { amount: 50000, apr: "5.99% – 17.99%", term: "72 mo", monthly: "$828 – $1,099", total: "$59,616 – $79,128" },
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
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Rates &amp; Fees</h1>
        <p className="mt-4 text-lg text-slate-600">
          APRs in our network typically range from <strong>5.99% to 35.99%</strong>. Your actual rate depends on credit profile, loan amount, term, and lender.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">Representative examples</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Amount</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">APR</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Term</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Monthly</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Total cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {examples.map((e) => (
                <tr key={e.amount}>
                  <td className="px-4 py-3 font-medium text-slate-900">${e.amount.toLocaleString()}</td>
                  <td className="px-4 py-3 text-slate-700">{e.apr}</td>
                  <td className="px-4 py-3 text-slate-700">{e.term}</td>
                  <td className="px-4 py-3 text-slate-700">{e.monthly}</td>
                  <td className="px-4 py-3 text-slate-700">{e.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">Fees</h2>
        <ul className="mt-4 list-disc space-y-1 pl-6 text-slate-700">
          <li><strong>Origination fee:</strong> 0% – 8% of the loan amount, deducted at funding (lender-dependent).</li>
          <li><strong>Late payment fee:</strong> $15 – $40 (lender-dependent).</li>
          <li><strong>Returned-payment fee:</strong> Up to $35 if your payment is returned by your bank.</li>
          <li><strong>Prepayment penalty:</strong> Most lenders in our network charge none.</li>
        </ul>
      </article>
    </>
  );
}
