import { useState } from 'react';
import { newsletterSection as n } from '../content.js';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    // Store in localStorage for persistence
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
    <section id="newsletter" className="px-5 sm:px-8 py-16 bg-lightBg">
      <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
        <img src={n.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-[#0A0A0C]/90 to-[#0A0A0C]/75" />

        <div className="relative py-16 sm:py-20 px-6 sm:px-12 text-center sm:text-left text-white max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-brandOrange tracking-wide uppercase bg-brandOrange/20 px-4 py-1.5 rounded-full border border-brandOrange/30">
            <span className="w-1.5 h-1.5 rounded-full bg-brandOrange" />
            {n.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-light leading-tight">
            {n.headlinePlain}{' '}
            <em className="not-italic italic text-brandOrange">{n.headlineItalic}</em>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">{n.sub}</p>

          {submitted ? (
            <div className="mt-8 bg-brandOrange/20 border border-brandOrange/40 rounded-2xl p-5 text-left flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brandOrange text-white flex items-center justify-center text-xl shrink-0 font-bold">
                ✓
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-lg">You're Subscribed!</h4>
                <p className="text-xs text-slate-200 mt-1">
                  We'll send updates on new internship tracks and application windows to <span className="font-semibold text-brandOrange">{email}</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setEmail('');
                  }}
                  className="mt-3 text-xs text-brandOrange hover:underline font-medium"
                >
                  Subscribe another email &rarr;
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-full p-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  {n.placeholder}
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={n.placeholder}
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-slate-400 outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-brandOrange text-white text-sm font-semibold rounded-xl sm:rounded-full px-6 py-2.5 hover:bg-brandOrangeDark transition-all shadow-md shadow-brandOrange/30"
                >
                  {n.cta}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
