import type { Metadata } from "next";
import { Suspense } from "react";
import { ApplicationForm } from "@/components/apply/ApplicationForm";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apply for a Personal Loan",
  description:
    "Apply for a personal loan from $100 to $50,000. Takes about 2 minutes. Soft credit check only — no impact on your credit score.",
  alternates: { canonical: "/apply" },
  robots: { index: true, follow: true },
};

export default function ApplyPage() {
  return (
    <div className="bg-slate-50">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Apply", url: `${siteConfig.url}/apply` },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Get your loan offers
          </h1>
          <p className="mt-3 text-slate-600">
            Takes about 2 minutes. Soft credit check only — no impact on your score.
          </p>
        </header>
        <Suspense fallback={<div className="h-96 animate-pulse rounded-2xl bg-white" />}>
          <ApplicationForm />
        </Suspense>
      </div>
    </div>
  );
}
