import { useState } from 'react';
import { classesSection } from '../content.js';

export default function Classes() {
  const [index, setIndex] = useState(0);
  const items = classesSection.items;

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <section id="classes" className="bg-cream py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <div className="max-w-md">
            <span className="inline-flex items-center gap-2 text-xs text-stone">
              <span className="w-1.5 h-1.5 rounded-full bg-clay" />
              {classesSection.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-light leading-tight">
              {classesSection.headlinePlain}
              <br />
              <em className="not-italic italic">{classesSection.headlineItalic}</em>
            </h2>
            <p className="mt-4 text-stone">{classesSection.sub}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {classesSection.tags.map((t, i) => (
              <span
                key={i}
                className="text-xs border border-line rounded-full px-4 py-2 text-stone"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((c, i) => (
            <div key={i} className="group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  src={c.img}
                  alt={`${c.name} ${c.style}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/90 text-espresso text-xs rounded-full px-3 py-1">
                  {c.level}
                </span>
                <span className="absolute top-4 right-4 bg-white/90 text-espresso text-xs rounded-full px-3 py-1">
                  {c.duration}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-xl">
                {c.name} <em className="not-italic italic text-stone">{c.style}</em>
              </h3>
              <p className="mt-1 text-sm text-stone">{c.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between">
          <a
            href={classesSection.viewAll.href}
            className="bg-espresso text-white text-sm font-medium rounded-full px-6 py-3 hover:bg-bark transition-colors"
          >
            {classesSection.viewAll.label}
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous class"
              className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:bg-white transition-colors"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next class"
              className="w-10 h-10 rounded-full bg-espresso text-white flex items-center justify-center hover:bg-bark transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
