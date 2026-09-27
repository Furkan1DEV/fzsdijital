const stack = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Stripe",
  "n8n",
  "LangChain",
  "OpenAI",
  "WhatsApp API",
  "Vercel",
  "Neon Postgres",
  "STM32",
  "Vite",
];

export default function Marquee() {
  const items = [...stack, ...stack];

  return (
    <div className="relative overflow-hidden border-y border-line bg-panel/40 py-5">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent sm:w-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent sm:w-40"
        aria-hidden
      />

      <div className="marquee flex w-max">
        <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
          {items.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex shrink-0 items-center gap-2.5 font-display text-sm font-medium uppercase tracking-[0.18em] text-fg-muted/80"
            >
              <span className="h-1 w-1 rounded-full bg-brand-2/70" />
              {item}
            </span>
          ))}
        </div>
        <div className="marquee-track flex shrink-0 items-center gap-10 pr-10" aria-hidden>
          {items.map((item, index) => (
            <span
              key={`dup-${item}-${index}`}
              className="flex shrink-0 items-center gap-2.5 font-display text-sm font-medium uppercase tracking-[0.18em] text-fg-muted/80"
            >
              <span className="h-1 w-1 rounded-full bg-brand-2/70" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
