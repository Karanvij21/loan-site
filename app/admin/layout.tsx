import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] bg-paper-50">
      <header className="border-b border-paper-300 bg-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3 lg:px-10">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="grid h-8 w-8 place-items-center rounded-md bg-forest-700 text-paper-50 text-[12px] font-semibold"
            >
              GA
            </span>
            <span className="text-[14px] font-semibold tracking-tight text-ink-900">
              Admin
            </span>
          </div>
          <nav className="flex items-center gap-1 text-[13px]">
            <Link href="/admin/leads" className="rounded-md px-3 py-1.5 hover:bg-paper-100">
              Leads
            </Link>
            <Link href="/" className="rounded-md px-3 py-1.5 text-ink-500 hover:bg-paper-100">
              View site ↗
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-[1280px] px-6 py-8 lg:px-10">{children}</main>
    </div>
  );
}
