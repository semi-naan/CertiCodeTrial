import { useState } from 'react';
import { nav } from '../content.js';

export default function Navbar({ onOpenApply }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#0A0A0C]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-brandOrange flex items-center justify-center text-white font-bold text-lg shadow-md shadow-brandOrange/20 group-hover:scale-105 transition-transform">
            C
          </div>
          <span className="font-serif text-xl tracking-tight text-white font-semibold">
            {nav.brand}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-7 py-2.5 shadow-inner">
          {nav.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-white/80 hover:text-brandOrange transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => onOpenApply && onOpenApply('General Application')}
          className="hidden md:inline-flex items-center gap-2 bg-brandOrange text-white text-sm font-medium rounded-full px-6 py-2.5 hover:bg-brandOrangeDark transition-all shadow-md shadow-brandOrange/30 hover:scale-[1.02] active:scale-[0.98]"
        >
          {nav.cta.label}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 hover:text-brandOrange transition-colors"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden mx-5 mb-4 rounded-2xl bg-[#121216] border border-white/10 p-6 flex flex-col gap-4 shadow-xl">
          {nav.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/90 hover:text-brandOrange text-sm font-medium py-1"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onOpenApply && onOpenApply('General Application');
            }}
            className="mt-2 bg-brandOrange text-white text-sm font-medium rounded-full px-5 py-2.5 text-center shadow-md hover:bg-brandOrangeDark transition-colors"
          >
            {nav.cta.label}
          </button>
        </div>
      )}
    </header>
  );
}
