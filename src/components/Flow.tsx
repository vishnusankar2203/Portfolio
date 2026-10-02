export function Arrow({ horizontal = false, delay = 0 }: { horizontal?: boolean; delay?: number }) {
  return (
    <svg aria-hidden="true" width="20" height="26" viewBox="0 0 20 26"
      className={`my-1 shrink-0 text-accent ${horizontal ? "lg:mx-1 lg:my-0 lg:-rotate-90" : ""}`}>
      <line x1="10" y1="0" x2="10" y2="18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M4 15l6 8 6-8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle className="flow-dot" cx="10" cy="6" r="2" fill="currentColor" style={{ animationDelay: `${delay}ms` }} />
    </svg>
  );
}

export function Node({ children, strong = false }: { children: React.ReactNode; strong?: boolean }) {
  return (
    <div className={`w-full rounded border px-3 py-2 text-center text-sm leading-snug ${strong ? "border-accent bg-accent/10 text-white" : "border-ink-600 bg-ink-800 text-paper"}`}>
      {children}
    </div>
  );
}

export default function Flow({ steps, horizontal = false, label }: { steps: string[]; horizontal?: boolean; label: string }) {
  return (
    <ol aria-label={label} className={`flex items-center ${horizontal ? "flex-col lg:flex-row" : "flex-col"}`}>
      {steps.map((s, i) => (
        <li key={s} className={`flex w-full items-center ${horizontal ? "flex-col lg:flex-1 lg:flex-row" : "flex-col"}`}>
          <Node strong={i === steps.length - 1}>{s}</Node>
          {i < steps.length - 1 && <Arrow horizontal={horizontal} delay={i * 350} />}
        </li>
      ))}
    </ol>
  );
}
