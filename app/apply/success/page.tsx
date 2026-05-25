import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Request received",
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <div className="mx-auto max-w-[680px] px-6 pt-20 pb-32 text-center lg:px-10">
      <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-forest-700 text-cream-100">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h1 className="mt-10 text-[52px] leading-[1.02] tracking-tight text-ink-900 lg:text-[72px]" style={{ fontFamily: "var(--font-display)", fontWeight: 380 }}>
        Request <em className="italic text-forest-700">received</em>.
      </h1>
      <p className="mt-6 max-w-[48ch] mx-auto text-[16px] leading-relaxed text-ink-700">
        We&rsquo;re matching you with offers from our lending network now. Watch your email and phone over the next few minutes — your offers will arrive shortly.
      </p>
      <hr className="rule mx-auto mt-10 max-w-[120px]" />
      <Link href="/" className="btn btn-secondary mt-10">
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
          <path d="M11 7H3M7 11l-4-4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Return home
      </Link>
    </div>
  );
}
