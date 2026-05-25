import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Application Submitted",
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">✓</div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          You&rsquo;re all set!
        </h1>
        <p className="mt-3 text-slate-600">
          Your request has been submitted. We&rsquo;ll match you with offers from our lending partners and reach out shortly by email and phone.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white hover:bg-brand-700"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
