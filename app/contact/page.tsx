import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8 prose prose-slate">
      <h1>Contact us</h1>
      <p>Questions about your application or our service? We&rsquo;re here to help.</p>
      <ul>
        <li><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
        <li><strong>Phone:</strong> <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}>{siteConfig.phone}</a></li>
        <li><strong>Hours:</strong> Monday–Friday, 9:00 AM – 6:00 PM ET</li>
      </ul>
    </article>
  );
}
