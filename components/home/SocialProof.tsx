/**
 * Trust + testimonial strip. Once you have Trustpilot business ID configured,
 * swap the StarRow + placeholder testimonials for the Trustpilot widget.
 */
export function SocialProof() {
  const testimonials = [
    {
      quote: "Pre-qualified in two minutes. Three solid offers came through within an hour. I went with the lowest APR. Easy.",
      who: "Priya M.",
      where: "Austin, TX",
      stars: 5,
    },
    {
      quote: "I had middling credit and assumed I'd be ignored. Got a workable offer the same day. The interface was refreshingly clear.",
      who: "Daniel R.",
      where: "Portland, OR",
      stars: 5,
    },
    {
      quote: "Compared offers side-by-side without a single sales call. That was the selling point. Done in an afternoon.",
      who: "Megan C.",
      where: "Chicago, IL",
      stars: 4,
    },
  ];

  return (
    <section className="border-t border-cream-300 bg-cream-100" aria-labelledby="proof-heading">
      <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-20">
          <div>
            <span className="eyebrow">Trust signals</span>
            <h2 id="proof-heading" className="mt-3 text-[36px] leading-[1.05] tracking-tight text-ink-900 lg:text-[48px]">
              People we&rsquo;ve <span className="text-forest-700">helped</span>.
            </h2>
            <div className="mt-8 flex items-center gap-3">
              <StarRow rating={4.8} />
              <span className="text-[14px] text-ink-700">
                <span className="tabular font-semibold text-ink-900">4.8</span> out of <span className="tabular">5</span>
              </span>
            </div>
            <p className="mt-2 text-[12px] text-ink-500">
              Average rating from 2,400+ recent borrowers.
              <br />
              <span className="text-ink-300">Replace with live Trustpilot widget when ID is configured.</span>
            </p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <li
                key={t.who}
                className="flex flex-col rounded-2xl border border-cream-300 bg-cream-50 p-6 transition hover:border-cream-400"
              >
                <StarRow rating={t.stars} />
                <blockquote className="mt-4 flex-1 text-[15px] leading-[1.55] text-ink-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-6 border-t border-cream-300 pt-4">
                  <p className="text-[14px] font-medium text-ink-900">{t.who}</p>
                  <p className="text-[12px] text-ink-500">{t.where}</p>
                </footer>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function StarRow({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const stars = Array.from({ length: 5 }, (_, i) => i < full);
  return (
    <div role="img" aria-label={`Rated ${rating} out of 5`} className="flex items-center gap-1">
      {stars.map((on, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={on ? "#0E3B2E" : "transparent"} stroke={on ? "#0E3B2E" : "#D4C8A8"} strokeWidth="1.5" aria-hidden>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}
