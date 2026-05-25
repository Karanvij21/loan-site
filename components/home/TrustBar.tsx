export function TrustBar() {
  const items = [
    { label: "256-bit SSL", sub: "Bank-grade encryption" },
    { label: "Soft check", sub: "No impact on credit" },
    { label: "All 50 states", sub: "Where legal" },
    { label: "2 minutes", sub: "Fast application" },
  ];
  return (
    <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4" aria-label="Trust signals">
      {items.map((i) => (
        <li key={i.label} className="rounded-lg border border-slate-200 bg-white/70 p-3 text-center">
          <p className="text-sm font-semibold text-slate-900">{i.label}</p>
          <p className="text-xs text-slate-500">{i.sub}</p>
        </li>
      ))}
    </ul>
  );
}
