import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  FaqJsonLd,
  LoanProductJsonLd,
  SpeakableJsonLd,
} from "@/components/seo/JsonLd";
import {
  amounts,
  amountBySlug,
  monthlyPayment,
  tierBullets,
  tierFaq,
  tierIntro,
  totalCost,
} from "@/lib/amounts";
import { defaultAuthor, defaultReviewer, authorUrl } from "@/lib/authors";
import { formatCurrency } from "@/lib/utils";

const PUBLISHED = "2026-02-08";
const REVIEWED = "2026-05-22";

export function generateStaticParams() {
  return amounts.map((a) => ({ amount: a.slug }));
}

type Props = { params: Promise<{ amount: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { amount } = await params;
  const a = amountBySlug[amount];
  if (!a) return {};
  const title = `${formatCurrency(a.amount)} Personal Loan: APR, Monthly Payment, Terms`;
  const description = `Compare ${formatCurrency(a.amount)} personal loan offers. APRs typically ${a.aprMin}% to ${a.aprMax}%, terms ${a.termMin} to ${a.termMax} months. Example monthly payment included.`;
  return {
    title,
    description,
    alternates: { canonical: `/loans/amount/${a.slug}` },
    openGraph: { title, description, url: `/loans/amount/${a.slug}` },
  };
}

export default async function AmountPage({ params }: Props) {
  const { amount } = await params;
  const a = amountBySlug[amount];
  if (!a) notFound();

  const amt = formatCurrency(a.amount);
  const url = `${siteConfig.url}/loans/amount/${a.slug}`;
  const monthly = Math.round(monthlyPayment(a.amount, a.exampleApr, a.exampleTermMonths));
  const total = Math.round(totalCost(a.amount, a.exampleApr, a.exampleTermMonths));
  const bullets = tierBullets(a);
  const faqs = tierFaq(a);
  const intro = tierIntro(a);

  return (
    <>
      <LoanProductJsonLd
        name={`${amt} personal loan`}
        description={`Personal installment loan of ${amt} with APRs typically ${a.aprMin}% to ${a.aprMax}% and terms of ${a.termMin} to ${a.termMax} months.`}
        amountMin={a.amount}
        amountMax={a.amount}
        termMonthsMin={a.termMin}
        termMonthsMax={a.termMax}
        aprMin={a.aprMin}
        aprMax={a.aprMax}
      />
      <FaqJsonLd items={faqs} />
      <ArticleJsonLd
        headline={`${amt} personal loan`}
        description={`Compare ${amt} personal loan offers and see an example monthly payment.`}
        url={url}
        datePublished={PUBLISHED}
        dateModified={REVIEWED}
        authorName={defaultAuthor.name}
        authorUrl={authorUrl(defaultAuthor)}
        reviewerName={defaultReviewer.name}
        reviewerUrl={authorUrl(defaultReviewer)}
        articleSection="Personal loans"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Loans", url: `${siteConfig.url}/loans/personal` },
          { name: "By amount", url: `${siteConfig.url}/loans/amount` },
          { name: amt, url },
        ]}
      />
      <SpeakableJsonLd url={url} cssSelectors={[".amount-intro", ".amount-example"]} />

      {/* HERO */}
      <section className="border-b border-cream-300">
        <div className="mx-auto max-w-[1280px] px-6 pt-12 pb-20 lg:px-10 lg:pt-16 lg:pb-24">
          <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[12px] text-ink-500">
            <Link href="/" className="hover:text-ink-900">Home</Link>
            <span className="text-ink-300">/</span>
            <Link href="/loans/personal" className="hover:text-ink-900">Loans</Link>
            <span className="text-ink-300">/</span>
            <Link href="/loans/amount" className="hover:text-ink-900">By amount</Link>
            <span className="text-ink-300">/</span>
            <span className="text-ink-900">{amt}</span>
          </nav>

          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1fr_360px] lg:gap-20">
            <div>
              <span className="eyebrow">By loan amount</span>
              <h1 className="mt-4 text-[44px] leading-[1.02] tracking-tight text-ink-900 lg:text-[64px]">
                {amt} <span className="text-forest-700">personal loan</span>.
              </h1>
              <p className="amount-intro mt-6 max-w-[60ch] text-[18px] leading-[1.55] text-ink-700">
                {intro}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/apply" className="btn btn-primary">
                  Begin a request
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/calculators/loan-payment" className="text-[14px] text-ink-700 underline decoration-cream-400 underline-offset-[6px] hover:text-ink-900 hover:decoration-ink-900">
                  Run your own numbers ↗
                </Link>
              </div>
            </div>

            <aside className="amount-example rounded-[14px] bg-cream-50 ring-1 ring-cream-300 p-6">
              <span className="eyebrow">Example</span>
              <dl className="mt-5 space-y-4">
                <Row k="Loan amount" v={amt} />
                <Row k="APR" v={`${a.exampleApr}%`} />
                <Row k="Term" v={`${a.exampleTermMonths} months`} />
                <Row k="Monthly payment" v={formatCurrency(monthly)} />
                <Row k="Total repaid" v={formatCurrency(total)} />
              </dl>
              <p className="mt-4 text-[11px] leading-relaxed text-ink-500">
                Illustrative only. Your actual rate, term, and payment depend on the lender's evaluation of your application.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* BULLETS */}
      <section className="bg-cream-50 border-b border-cream-300">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-24">
            <div>
              <span className="eyebrow">At a glance</span>
              <h2 className="mt-3 text-[36px] leading-[1.05] tracking-tight text-ink-900 lg:text-[48px]">
                The {amt} <span className="text-forest-700">snapshot</span>.
              </h2>
            </div>
            <ul className="space-y-0 border-t border-ink-900">
              {bullets.map((b, i) => (
                <li key={b} className="grid grid-cols-[40px_1fr] gap-4 border-b border-cream-300 py-5">
                  <span className="tabular text-[15px] text-ink-300">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[16px] text-ink-900">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-[920px] px-6 py-20 lg:px-10 lg:py-28">
          <span className="eyebrow">{amt} questions</span>
          <h2 className="mt-3 text-[36px] leading-[1.05] tracking-tight text-ink-900 lg:text-[48px]">
            Common questions.
          </h2>
          <div className="mt-12 border-t border-ink-900">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-cream-300 py-5">
                <summary className="flex cursor-pointer items-baseline justify-between gap-6 marker:hidden">
                  <span className="text-lg text-ink-900 lg:text-xl">{f.q}</span>
                  <span className="shrink-0 text-xl text-ink-300 transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-ink-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED AMOUNTS */}
      <section>
        <div className="mx-auto max-w-[1080px] px-6 py-12 lg:px-10">
          <span className="eyebrow">Other amounts</span>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
            {amounts.filter((x) => x.slug !== a.slug).map((x) => (
              <li key={x.slug}>
                <Link href={`/loans/amount/${x.slug}`} className="text-ink-700 underline decoration-cream-400 underline-offset-[4px] hover:text-ink-900 hover:decoration-ink-900">
                  {formatCurrency(x.amount)} loan
                </Link>
              </li>
            ))}
            <li>
              <Link href="/loans/amount" className="text-ink-900 underline decoration-cream-400 underline-offset-[4px] hover:decoration-ink-900">
                All amounts →
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-700 text-cream-100">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-[36px] leading-[1.05] tracking-tight lg:text-[56px]">
              Ready for your {amt}?
            </h2>
            <Link href="/apply" className="btn !bg-cream-100 !text-ink-900 hover:!bg-cream-200 !px-7 !py-4 !text-[15px]">
              Begin your request
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-cream-300 pb-3 last:border-0 last:pb-0">
      <dt className="text-[12px] uppercase tracking-[0.15em] text-ink-500">{k}</dt>
      <dd className="tabular text-right text-[15px] font-semibold text-ink-900">{v}</dd>
    </div>
  );
}
