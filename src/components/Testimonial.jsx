import { useState } from 'react';
import { testimonialSection as t } from '../content.js';

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const testimonials = t.testimonials || [
    {
      quote: t.quote,
      name: t.name,
      role: t.role,
      avatar: t.avatar,
    },
  ];

  const current = testimonials[index % testimonials.length];

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section id="testimonials" className="bg-lightBg py-20 sm:py-28 border-t border-slate-200/60">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-brandOrange tracking-wide uppercase bg-brandOrange/10 px-4 py-1.5 rounded-full border border-brandOrange/20">
          <span className="w-1.5 h-1.5 rounded-full bg-brandOrange" />
          {t.eyebrow}
        </span>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-light leading-tight text-textDark">
          {t.headlinePlain}{' '}
          <em className="not-italic italic text-brandOrange">{t.headlineItalic}</em>
        </h2>
        <p className="mt-4 text-textMuted text-base">{t.sub}</p>
      </div>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 mt-14">
        <div className="bg-cardBg border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-lg flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <img
            src={current.avatar}
            alt={current.name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shrink-0 border-2 border-brandOrange/30 shadow-md"
          />
          <div className="text-center sm:text-left flex-1">
            <p className="font-serif text-xl sm:text-2xl leading-relaxed text-textDark italic">
              &ldquo;{current.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
              <div>
                <p className="text-sm font-bold text-textDark">{current.name}</p>
                <p className="text-xs text-brandOrange font-medium">{current.role}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-textDark hover:bg-brandOrange hover:text-white hover:border-brandOrange transition-all shadow-sm"
                >
                  &larr;
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-full bg-darkHeader text-white flex items-center justify-center hover:bg-brandOrange transition-all shadow-sm"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
