export function Marquee() {
  const item = "🚀 Admissions Open for 2026-27";
  const items = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div className="bg-sapphire text-primary-foreground overflow-hidden border-y border-sapphire/20">
      <div className="flex animate-marquee whitespace-nowrap py-3">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0">
            {items.map((i) => (
              <span
                key={`${dup}-${i}`}
                className="mx-8 text-sm md:text-base font-semibold tracking-wide"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
