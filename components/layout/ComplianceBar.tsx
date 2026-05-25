/**
 * Compliance bar shown above the header on every page.
 * Required by Google Ads and Bing Ads policies for personal-loan advertising:
 * APR range + state availability + soft-pull disclaimer.
 */
export function ComplianceBar() {
  return (
    <div className="relative z-30 border-b border-ink-900/10 bg-ink-900 text-cream-200">
      <div className="mx-auto max-w-[1280px] px-5 py-2 lg:px-10">
        <p className="text-[11px] leading-[1.5] text-center tabular">
          <span className="text-cream-100 font-medium">APR 5.99% – 35.99%</span>
          <span className="mx-2 opacity-40">·</span>
          <span>Loans $100 – $50,000</span>
          <span className="mx-2 opacity-40">·</span>
          <span>Terms 3 – 72 months</span>
          <span className="hidden sm:inline">
            <span className="mx-2 opacity-40">·</span>
            <span>Soft credit check, no impact to apply</span>
          </span>
        </p>
      </div>
    </div>
  );
}
