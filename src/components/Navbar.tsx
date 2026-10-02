import { useState } from "react";

const links = [
  ["About", "#about"], ["Skills", "#skills"], ["Automation", "#automation"], ["Projects", "#projects"],
  ["Architecture", "#architecture"], ["Experience", "#experience"], ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-700 bg-ink-950/90 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-display text-base font-semibold">M. Vishnusankar</a>
        <ul className="hidden items-center gap-6 text-sm text-mute md:flex">
          {links.map(([l, h]) => <li key={h}><a href={h} className="transition-colors hover:text-white">{l}</a></li>)}
        </ul>
        <button type="button" className="rounded p-2 md:hidden" aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M4 4l14 14M18 4L4 18" /> : <path d="M3 6h16M3 11h16M3 16h16" />}
          </svg>
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-ink-700 bg-ink-950 px-5 py-3 md:hidden">
          {links.map(([l, h]) => (
            <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-2.5 text-paper">{l}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
