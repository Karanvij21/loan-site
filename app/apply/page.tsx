import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ApplicationForm } from "@/components/apply/ApplicationForm";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Begin your request",
  description:
    "Apply for a personal loan from $100 to $50,000. Two minutes. Soft credit check only. No impact on your credit score.",
  alternates: { canonical: "/apply" },
  robots: { index: true, follow: true },
};

export default function ApplyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Apply", url: `${siteConfig.url}/apply` },
        ]}
      />
      <div className="mx-auto max-w-[920px] px-6 pt-12 pb-20 lg:px-10 lg:pt-16">
        <div className="mb-12">
          <div className="flex items-center gap-3 text-[12px] text-ink-500">
            <Link href="/" className="hover:text-ink-900">Home</Link>
            <span className="text-ink-300">/</span>
            <span className="text-ink-900">Begin</span>
          </div>

          <div className="mt-6 grid items-end gap-6 lg:grid-cols-[1fr_auto]">
            <h1 className="text-[44px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
              Your <span className="text-forest-700">request</span>.
            </h1>
            <p className="max-w-[28ch] text-[14px] text-ink-500">
              About two minutes. Soft credit check only. There is no impact on your score for asking.
            </p>
          </div>
        </div>

        <Suspense fallback={<div className="h-[480px] animate-pulse rounded-[18px] bg-cream-50 ring-1 ring-cream-300" />}>
          <ApplicationForm />
        </Suspense>
      </div>
    </>
  );
}
