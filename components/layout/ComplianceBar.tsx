/**
 * Compliance bar shown above the header on every page.
 * Required by Google Ads and Bing Ads policies for personal-loan advertising:
 * APR range, loan size, term length, and credit-impact disclosure.
 *
 * Mobile shows compact summary; desktop shows full detail.
 */
export function ComplianceBar() {
  return (
    <div className="relative z-30 border-b border-ink-900/10 bg-ink-900 text-cream-200">
      <div className="mx-auto max-w-[1280px] px-5 py-2 lg:px-10">
        <p className="text-[11px] leading-[1.4] text-center tabular whitespace-nowrap overflow-x-auto">
          <span className="text-cream-100 font-medium">APR 5.99% – 35.99%</span>
          <span className="mx-2 opacity-40">·</span>
          <span>$100 – $50,000</span>
          <span className="hidden sm:inline">
            <span className="mx-2 opacity-40">·</span>
            <span>3 – 72 month terms</span>
          </span>
          <span className="hidden md:inline">
            <span className="mx-2 opacity-40">·</span>
            <span>Soft credit check, no impact to apply</span>
          </span>
        </p>
      </div>
    </div>
  );
}
