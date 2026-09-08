import { useState } from 'react';
import { testimonialSection as t } from '../content.js';

export default function Testimonial() {
  const [i, setI] = useState(0);

  return (
    <section id="testimonials" className="bg-cream py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <span className="inline-flex items-center gap-2 text-xs text-stone">
          <span className="w-1.5 h-1.5 rounded-full bg-clay" />
          {t.eyebrow}
        </span>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-light leading-tight">
          {t.headlinePlain} <em className="not-italic italic">{t.headlineItalic}</em>
        </h2>
        <p className="mt-4 text-stone">{t.sub}</p>
      </div>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 mt-14 bg-paper border border-line rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shrink-0"
        />
        <div className="text-center sm:text-left">
          <p className="font-serif text-xl sm:text-2xl leading-snug">&ldquo;{t.quote}&rdquo;</p>
          <div className="mt-4 flex items-center justify-center sm:justify-start gap-3">
            <div>
              <p className="text-sm font-medium">{t.name}</p>
              <p className="text-xs text-stone">{t.role}</p>
            </div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => setI((v) => v - 1)}
                aria-label="Previous testimonial"
                className="w-8 h-8 rounded-full border border-line flex items-center justify-center text-sm hover:bg-white transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => setI((v) => v + 1)}
                aria-label="Next testimonial"
                className="w-8 h-8 rounded-full bg-espresso text-white flex items-center justify-center text-sm hover:bg-bark transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
