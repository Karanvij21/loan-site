import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">404</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Page not found</h1>
      <p className="mt-4 text-slate-600">We couldn&rsquo;t find that page. It may have been moved or deleted.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white hover:bg-brand-700"
      >
        Back to home
      </Link>
    </div>
  );
}
