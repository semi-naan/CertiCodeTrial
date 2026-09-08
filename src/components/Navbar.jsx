import { useState } from 'react';
import { nav } from '../content.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-5">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="font-serif text-xl tracking-tight">{nav.brand}</span>
        </a>

        <div className="hidden md:flex items-center gap-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2.5">
          {nav.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-white/90 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={nav.cta.href}
          className="hidden md:inline-block bg-cream text-espresso text-sm font-medium rounded-full px-5 py-2.5 hover:bg-white transition-colors"
        >
          {nav.cta.label}
        </a>

        <button
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-5 rounded-2xl bg-espresso/95 backdrop-blur px-6 py-6 flex flex-col gap-4">
          {nav.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/90 text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            onClick={() => setOpen(false)}
            className="mt-2 bg-cream text-espresso text-sm font-medium rounded-full px-5 py-2.5 text-center"
          >
            {nav.cta.label}
          </a>
        </div>
      )}
    </header>
  );
}
