import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request received",
  robots: { index: false, follow: false },
};

const next = [
  {
    t: "Within minutes",
    b: "You'll receive an email confirmation. Check your inbox (and spam folder) for a message from us.",
  },
  {
    t: "Within an hour",
    b: "We'll match your request with lenders in our network. The fastest will reach out directly by phone, SMS, or email with prequalified offers.",
  },
  {
    t: "Same business day",
    b: "Compare offers, choose the one that fits, e-sign with the lender. Funds are typically deposited the next business day.",
  },
];

export default function SuccessPage() {
  return (
    <div className="mx-auto max-w-[680px] px-6 pt-16 pb-32 lg:px-10">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-forest-700 text-cream-100">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <h1 className="mt-8 text-[40px] leading-[1.02] tracking-tight text-ink-900 lg:text-[56px]">
        Request <span className="text-forest-700">received</span>.
      </h1>
      <p className="mt-5 max-w-[56ch] text-[16px] leading-relaxed text-ink-700">
        Thanks. We&rsquo;ve forwarded your information to our lender network. Here&rsquo;s what happens next.
      </p>

      <ol className="mt-12 border-t border-ink-900">
        {next.map((n, i) => (
          <li key={n.t} className="grid grid-cols-[60px_1fr] gap-6 border-b border-cream-300 py-6">
            <span className="tabular text-[18px] font-semibold text-ink-300">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="text-[18px] font-semibold text-ink-900">{n.t}</h2>
              <p className="mt-1 text-[14px] text-ink-700">{n.b}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12 rounded-xl bg-cream-50 ring-1 ring-cream-300 p-6">
        <h2 className="text-[15px] font-semibold text-ink-900">Important reminders</h2>
        <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-ink-700">
          <li>· This is a soft credit inquiry. Your credit score is not affected.</li>
          <li>· Submitting a request does not guarantee approval, amount, or APR.</li>
          <li>· Lender offers, terms, and APR depend on the lender&rsquo;s underwriting.</li>
          <li>· You may opt out of marketing communications at any time. <Link href="/opt-out" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900">How to opt out ↗</Link></li>
        </ul>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link href="/" className="btn btn-secondary">
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
            <path d="M11 7H3M7 11l-4-4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Return home
        </Link>
        <a href={`mailto:${siteConfig.email}`} className="text-[14px] text-ink-700 underline decoration-cream-400 underline-offset-[6px] hover:text-ink-900 hover:decoration-ink-900">
          Email support ↗
        </a>
      </div>
    </div>
  );
}
