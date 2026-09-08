import { useState } from 'react';
import { newsletterSection as n } from '../content.js';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // Hook this up to your real email/newsletter provider (e.g. Mailchimp, Klaviyo).
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="px-5 sm:px-8 py-16">
      <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden">
        <img src={n.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-espresso/70" />

        <div className="relative py-16 sm:py-20 px-6 text-center text-white">
          <span className="inline-flex items-center gap-2 text-xs text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-clay" />
            {n.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-light leading-tight">
            {n.headlinePlain} <em className="not-italic italic">{n.headlineItalic}</em>
          </h2>
          <p className="mt-3 text-white/70 max-w-sm mx-auto">{n.sub}</p>

          {submitted ? (
            <p className="mt-8 text-sm text-white/90">Subscribed — welcome to the practice.</p>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 flex justify-center">
              <div className="flex w-full max-w-sm bg-white/10 border border-white/25 rounded-full p-1.5">
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
                  className="flex-1 bg-transparent px-4 text-sm text-white placeholder-white/50 outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-cream text-espresso text-sm font-medium rounded-full px-5 py-2.5 hover:bg-white transition-colors"
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
