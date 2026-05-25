export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="mx-auto max-w-[760px] px-6 py-20 lg:px-10 lg:py-28">
      <div className="legal-prose">{children}</div>
      <style>{`
        .legal-prose h1 {
          font-family: var(--font-display);
          font-weight: 380;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          line-height: 1.02;
          letter-spacing: -0.022em;
          color: var(--color-ink-900);
          margin-bottom: 1.5rem;
        }
        .legal-prose h2 {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 1.5rem;
          color: var(--color-ink-900);
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-cream-300);
        }
        .legal-prose p {
          color: var(--color-ink-700);
          font-size: 16px;
          line-height: 1.7;
          margin: 0.75rem 0;
        }
        .legal-prose em {
          color: var(--color-ink-500);
          font-style: italic;
        }
        .legal-prose strong { color: var(--color-ink-900); font-weight: 500; }
        .legal-prose a {
          color: var(--color-forest-700);
          text-decoration: underline;
          text-decoration-color: var(--color-cream-400);
          text-underline-offset: 4px;
        }
        .legal-prose a:hover { text-decoration-color: var(--color-forest-700); }
        .legal-prose ul {
          list-style: none;
          padding: 0;
          margin: 1rem 0;
        }
        .legal-prose ul li {
          color: var(--color-ink-700);
          font-size: 16px;
          padding-left: 1.5rem;
          position: relative;
          margin: 0.5rem 0;
        }
        .legal-prose ul li::before {
          content: "·";
          position: absolute;
          left: 0;
          color: var(--color-ink-300);
        }
      `}</style>
    </article>
  );
}
