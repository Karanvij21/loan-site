export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 prose prose-slate prose-headings:tracking-tight prose-a:text-brand-700">
      {children}
    </article>
  );
}
