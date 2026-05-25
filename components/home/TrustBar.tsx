export function TrustBar() {
  const items = [
    { k: "2 min", v: "to apply" },
    { k: "0 fees", v: "to compare" },
    { k: "50 states", v: "covered" },
    { k: "$50K", v: "max amount" },
  ];
  return (
    <div className="mt-12">
      <hr className="rule" />
      <ul className="grid grid-cols-2 gap-y-6 py-6 sm:grid-cols-4">
        {items.map((i) => (
          <li key={i.k} className="flex flex-col">
            <span
              className="tabular text-2xl text-ink-900"
            >
              {i.k}
            </span>
            <span className="eyebrow mt-1.5">{i.v}</span>
          </li>
        ))}
      </ul>
      <hr className="rule" />
    </div>
  );
}
