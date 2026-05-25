import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-[680px] px-6 py-20 lg:px-10 lg:py-28">
      <span className="eyebrow">Reach us</span>
      <h1 className="mt-3 text-[52px] leading-[1.02] tracking-tight text-ink-900 lg:text-[72px]" style={{ fontFamily: "var(--font-display)", fontWeight: 380 }}>
        Contact <em className="italic text-forest-700">us</em>.
      </h1>
      <p className="mt-6 text-[16px] leading-relaxed text-ink-700">Questions about your application or our service? We&rsquo;re here to help.</p>

      <dl className="mt-12 border-t border-ink-900">
        <div className="flex items-baseline justify-between border-b border-cream-300 py-5">
          <dt className="eyebrow !text-ink-900">Email</dt>
          <dd><a href={`mailto:${siteConfig.email}`} className="text-[17px] text-ink-900 hover:text-forest-700 underline decoration-cream-400 underline-offset-[6px]">{siteConfig.email}</a></dd>
        </div>
        <div className="flex items-baseline justify-between border-b border-cream-300 py-5">
          <dt className="eyebrow !text-ink-900">Phone</dt>
          <dd><a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} className="tabular text-[17px] text-ink-900 hover:text-forest-700 underline decoration-cream-400 underline-offset-[6px]">{siteConfig.phone}</a></dd>
        </div>
        <div className="flex items-baseline justify-between border-b border-cream-300 py-5">
          <dt className="eyebrow !text-ink-900">Hours</dt>
          <dd className="text-[15px] text-ink-700">Mon–Fri · 9:00 AM – 6:00 PM ET</dd>
        </div>
      </dl>
    </article>
  );
}
