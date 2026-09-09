import { useState } from 'react';
import { classesSection } from '../content.js';

export default function Classes({ onOpenApply }) {
  const items = classesSection.items;
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const prev = () => setStartIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setStartIndex((i) => (i + 1) % items.length);

  // Get current visible items for carousel effect
  const visibleItems = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleItems.push(items[(startIndex + i) % items.length]);
  }

  return (
    <section id="programs" className="bg-lightBg py-20 sm:py-28 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-brandOrange tracking-wide uppercase bg-brandOrange/10 px-4 py-1.5 rounded-full border border-brandOrange/20">
              <span className="w-1.5 h-1.5 rounded-full bg-brandOrange" />
              {classesSection.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-light leading-tight text-textDark">
              {classesSection.headlinePlain}
              <br />
              <em className="not-italic italic text-brandOrange">{classesSection.headlineItalic}</em>
            </h2>
            <p className="mt-4 text-textMuted text-base">{classesSection.sub}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {classesSection.tags.map((t, i) => (
              <span
                key={i}
                className="text-xs font-medium border border-slate-200 bg-white rounded-full px-4 py-2 text-textMuted shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Carousel Items */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {visibleItems.map((c, i) => (
            <div
              key={i}
              className="group bg-cardBg border border-slate-200/80 rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4">
                  <img
                    src={c.img}
                    alt={`${c.name} ${c.style}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#0A0A0C]/80 backdrop-blur-md text-white text-xs font-medium rounded-full px-3 py-1 border border-white/10">
                    {c.level}
                  </span>
                  <span className="absolute top-3 right-3 bg-brandOrange text-white text-xs font-medium rounded-full px-3 py-1 shadow-md">
                    {c.duration}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-textDark">
                  {c.name} <span className="text-xs font-normal font-sans text-brandOrange bg-brandOrange/10 px-2 py-0.5 rounded-md ml-1">{c.style}</span>
                </h3>
                <p className="mt-2 text-xs text-textMuted leading-relaxed">{c.description}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenApply && onOpenApply(c.name)}
                  className="text-xs font-semibold text-brandOrange hover:text-brandOrangeDark flex items-center gap-1 transition-colors"
                >
                  Apply for Track &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Controls and Footer Link */}
        <div className="mt-12 flex items-center justify-between">
          <a
            href={classesSection.viewAll.href}
            className="bg-brandOrange text-white text-sm font-medium rounded-full px-7 py-3 hover:bg-brandOrangeDark transition-all shadow-md shadow-brandOrange/20"
          >
            {classesSection.viewAll.label} &rarr;
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous class"
              className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-textDark hover:bg-brandOrange hover:text-white hover:border-brandOrange transition-all shadow-sm"
            >
              &larr;
            </button>
            <button
              onClick={next}
              aria-label="Next class"
              className="w-10 h-10 rounded-full bg-darkHeader text-white flex items-center justify-center hover:bg-brandOrange transition-all shadow-sm"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
