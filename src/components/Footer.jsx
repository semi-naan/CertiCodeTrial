import { useState } from 'react';
import { footer as f } from '../content.js';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="bg-espresso text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
          <div className="sm:col-span-1">
            <span className="font-serif text-xl">{f.brand}</span>
            <p className="mt-4 text-sm text-white/60 max-w-[220px]">{f.tagline}</p>
            <div className="mt-6 flex gap-3">
              {f.socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-xs text-white/70 hover:text-white hover:border-white/40 transition-colors"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {f.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-medium text-white/90">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-medium text-white/90">{f.newsletter.title}</h4>
            {submitted ? (
              <p className="mt-4 text-sm text-white/60">Thanks — you're subscribed.</p>
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
                  className="bg-white/10 border border-white/20 rounded-full px-4 py-2.5 text-sm text-white placeholder-white/50 outline-none"
                />
                <button
                  type="submit"
                  className="bg-cream text-espresso text-sm font-medium rounded-full px-4 py-2.5 hover:bg-white transition-colors"
                >
                  {f.newsletter.cta}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <span>{f.legal}</span>
          <div className="flex gap-6">
            {f.legalLinks.map((l) => (
              <a key={l} href="#" className="hover:text-white/80 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
