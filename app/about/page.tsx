import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name}, an independent online loan marketplace connecting U.S. borrowers with trusted lender partners.`,
  alternates: { canonical: "/about" },
};

const values = [
  { k: "Transparency", v: "Clear rates, terms, and fees on every offer. No fine print designed to confuse." },
  { k: "Privacy", v: "Your data is encrypted in transit and never sold for marketing without your explicit consent." },
  { k: "Choice", v: "You decide which offer, if any, to accept. There is no obligation, ever." },
];

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-[920px] px-6 py-20 lg:px-10 lg:py-28">
      <span className="eyebrow">About us</span>
      <h1 className="mt-3 text-[52px] leading-[1.02] tracking-tight text-ink-900 lg:text-[80px]" style={{ fontFamily: "var(--font-display)", fontWeight: 380 }}>
        A marketplace, <em className="italic text-forest-700">not a lender</em>.
      </h1>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_280px]">
        <div className="space-y-5 text-[17px] leading-[1.7] text-ink-700">
          <p>
            {siteConfig.name} is an independent online loan marketplace that helps U.S. consumers find competitive personal loan offers from a network of trusted lender partners, including <span className="text-ink-900">LendingTree</span>.
          </p>
          <p>
            Our mission is to make borrowing simple, transparent, and stress-free. We do not make loans ourselves. Instead, we use the information you provide to match you with the lenders most likely to offer you favorable terms.
          </p>
        </div>
        <aside className="rounded-[14px] bg-cream-50 ring-1 ring-cream-300 p-6">
          <span className="eyebrow">At a glance</span>
          <ul className="mt-5 space-y-3 text-[14px]">
            <li className="flex justify-between border-b border-cream-300 pb-2"><span className="text-ink-500">Service</span><span className="text-ink-900">Loan marketplace</span></li>
            <li className="flex justify-between border-b border-cream-300 pb-2"><span className="text-ink-500">Coverage</span><span className="text-ink-900">All 50 states</span></li>
            <li className="flex justify-between border-b border-cream-300 pb-2"><span className="text-ink-500">Founded</span><span className="text-ink-900 tabular">2024</span></li>
            <li className="flex justify-between"><span className="text-ink-500">Cost to apply</span><span className="text-ink-900">Free</span></li>
          </ul>
        </aside>
      </div>

      <h2 className="mt-20 text-[36px] text-ink-900 lg:text-[48px]" style={{ fontFamily: "var(--font-display)" }}>
        What we believe.
      </h2>
      <dl className="mt-8 border-t border-ink-900">
        {values.map((v, i) => (
          <div key={v.k} className="grid grid-cols-[60px_180px_1fr] gap-6 border-b border-cream-300 py-6">
            <span className="tabular text-2xl text-ink-300" style={{ fontFamily: "var(--font-display)" }}>{String(i + 1).padStart(2, "0")}</span>
            <dt className="text-xl text-ink-900" style={{ fontFamily: "var(--font-display)" }}>{v.k}</dt>
            <dd className="text-[15px] leading-relaxed text-ink-700">{v.v}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
