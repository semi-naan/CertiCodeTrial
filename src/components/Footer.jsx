import { useState } from 'react';
import { footer as f } from '../content.js';

export default function Footer({ onOpenApply }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    try {
      const existing = JSON.parse(localStorage.getItem('certicode_subscribers') || '[]');
      if (!existing.includes(email)) {
        existing.push(email);
        localStorage.setItem('certicode_subscribers', JSON.stringify(existing));
      }
    } catch (err) {
      console.error('Storage error:', err);
    }

    setSubmitted(true);
  };

  return (
    <footer id="contact" className="bg-[#0A0A0C] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-brandOrange flex items-center justify-center text-white font-bold text-lg shadow-md shadow-brandOrange/20">
                C
              </div>
              <span className="font-serif text-xl tracking-tight text-white font-semibold">
                {f.brand}
              </span>
            </a>
            <p className="mt-4 text-xs text-slate-400 leading-relaxed max-w-[240px]">{f.tagline}</p>
          </div>

          {/* Nav Links Columns */}
          {f.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-xs text-slate-400 hover:text-brandOrange transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">{f.newsletter.title}</h4>
            {submitted ? (
              <div className="mt-4 bg-brandOrange/20 border border-brandOrange/40 rounded-xl p-3 text-xs text-slate-200">
                ✓ Subscribed! You're on the list for new internship announcements.
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-2">
                <label htmlFor="footer-email" className="sr-only">
                  {f.newsletter.placeholder}
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={f.newsletter.placeholder}
                  className="bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-brandOrange"
                />
                <button
                  type="submit"
                  className="bg-brandOrange text-white text-xs font-semibold rounded-xl px-4 py-2.5 hover:bg-brandOrangeDark transition-all shadow-md shadow-brandOrange/20"
                >
                  {f.newsletter.cta}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Legal & Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>{f.legal}</span>
          <div className="flex gap-6">
            {f.legalLinks.map((l) => (
              <a key={l} href="#" className="hover:text-slate-300 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
