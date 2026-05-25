import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-[600px] flex-col px-6 py-32 text-center lg:px-10">
      <span className="eyebrow">Error 404</span>
      <h1
        className="mt-6 text-[88px] leading-[0.95] tracking-tight text-ink-900 lg:text-[140px]"
      >
        Not <span className="text-forest-700">found</span>.
      </h1>
      <p className="mt-6 text-[16px] leading-relaxed text-ink-700">
        We couldn&rsquo;t locate that page. It may have been moved or never existed.
      </p>
      <div className="mt-10">
        <Link href="/" className="btn btn-primary">
          Return home
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
            <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
