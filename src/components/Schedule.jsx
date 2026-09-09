import { useState } from 'react';
import { scheduleSection } from '../content.js';

export default function Schedule({ onOpenApply, activeCategory, setActiveCategory }) {
  const [internalCategory, setInternalCategory] = useState(scheduleSection.activeDay);
  const currentCategory = activeCategory || internalCategory;

  const handleTabClick = (category) => {
    if (setActiveCategory) {
      setActiveCategory(category);
    } else {
      setInternalCategory(category);
    }
  };

  const filteredClasses = scheduleSection.classes.filter(
    (c) => currentCategory === 'All' || c.category === currentCategory
  );

  return (
    <section id="openings" className="relative bg-[#0A0A0C] py-20 sm:py-28 overflow-hidden">
      {/* Background Graphic Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#F96A0E_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-brandOrange tracking-wide uppercase bg-brandOrange/10 px-4 py-1.5 rounded-full border border-brandOrange/20">
          <span className="w-1.5 h-1.5 rounded-full bg-brandOrange" />
          {scheduleSection.eyebrow}
        </span>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-light text-white leading-tight">
          {scheduleSection.headlinePlain}
          <br />
          <em className="not-italic italic text-brandOrange">{scheduleSection.headlineItalic}</em>
        </h2>
        <p className="mt-4 text-slate-400 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
          {scheduleSection.sub}
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 mt-12">
        <div className="bg-[#121216]/90 border border-white/10 backdrop-blur-lg rounded-3xl p-5 sm:p-8 shadow-2xl">
          {/* Category Tabs */}
          <div className="flex justify-start sm:justify-center gap-2 mb-8 overflow-x-auto no-scrollbar pb-2">
            {scheduleSection.days.map((d) => (
              <button
                key={d}
                onClick={() => handleTabClick(d)}
                className={`shrink-0 text-xs font-semibold rounded-full px-5 py-2.5 transition-all ${
                  currentCategory === d
                    ? 'bg-brandOrange text-white shadow-lg shadow-brandOrange/30 scale-105'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {d === 'All' ? 'All Roles' : `${d} Track`}
              </button>
            ))}
          </div>

          {/* Roles List */}
          <ul className="divide-y divide-white/10">
            {filteredClasses.length === 0 ? (
              <li className="py-8 text-center text-slate-400 text-sm">
                No roles found in this category right now.
              </li>
            ) : (
              filteredClasses.map((c, i) => (
                <li key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 hover:bg-white/5 px-4 rounded-xl transition-colors">
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="text-brandOrange font-mono font-bold text-xs w-6 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <img
                      src={c.img}
                      alt={c.name}
                      className="w-12 h-12 rounded-xl object-cover shrink-0 border border-white/10"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-white font-serif text-lg font-medium truncate">
                          {c.name}
                        </p>
                        <span className="text-[10px] font-semibold uppercase bg-brandOrange/20 text-brandOrange px-2 py-0.5 rounded border border-brandOrange/30">
                          {c.category}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs truncate mt-0.5">{c.note}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                    <span className="text-slate-400 text-xs">
                      {c.duration} &bull; <span className="text-white">{c.price}</span>
                    </span>
                    <button
                      onClick={() => onOpenApply && onOpenApply(c.name)}
                      className="bg-brandOrange text-white text-xs font-semibold rounded-full px-5 py-2.5 hover:bg-brandOrangeDark transition-all shadow-md shadow-brandOrange/20 hover:scale-105"
                    >
                      {scheduleSection.bookLabel}
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => onOpenApply && onOpenApply('General Application')}
            className="border border-white/20 text-white text-sm font-medium rounded-full px-7 py-3 hover:bg-white/10 transition-colors"
          >
            Submit General Application &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
