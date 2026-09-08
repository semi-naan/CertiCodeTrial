import { useState } from 'react';
import { scheduleSection } from '../content.js';

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(scheduleSection.activeDay);

  return (
    <section id="schedule" className="relative bg-espresso py-20 sm:py-28 overflow-hidden">
      <img
        src="https://loremflickr.com/1800/1200/servers,datacenter/all?lock=240"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-espresso/70" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <span className="inline-flex items-center gap-2 text-xs text-white/60">
          <span className="w-1.5 h-1.5 rounded-full bg-clay" />
          {scheduleSection.eyebrow}
        </span>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-light text-white leading-tight">
          {scheduleSection.headlinePlain}
          <br />
          <em className="not-italic italic">{scheduleSection.headlineItalic}</em>
        </h2>
        <p className="mt-4 text-white/70 max-w-md mx-auto">{scheduleSection.sub}</p>
      </div>

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 mt-12">
        <div className="bg-bark/80 backdrop-blur rounded-3xl p-5 sm:p-8">
          <div className="flex justify-center gap-2 sm:gap-3 mb-6 overflow-x-auto no-scrollbar">
            {scheduleSection.days.map((d) => (
              <button
                key={d}
                onClick={() => setActiveDay(d)}
                className={`shrink-0 text-sm rounded-full px-4 py-2 transition-colors ${
                  activeDay === d
                    ? 'bg-clay text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <ul className="divide-y divide-white/10">
            {scheduleSection.classes.map((c, i) => (
              <li key={i} className="flex items-center gap-4 py-4">
                <span className="text-white/40 text-sm w-6">{String(i + 1).padStart(2, '0')}</span>
                <img
                  src={c.img}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-white font-serif text-lg truncate">
                    {c.name} <em className="not-italic italic text-white/70">{c.style}</em>
                  </p>
                  <p className="text-white/50 text-sm truncate">{c.note}</p>
                </div>
                <span className="hidden sm:block text-white/60 text-sm shrink-0">
                  {c.duration} &bull; {c.price}
                </span>
                <button className="shrink-0 bg-cream text-espresso text-sm font-medium rounded-full px-4 py-2 hover:bg-white transition-colors">
                  {scheduleSection.bookLabel}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center mt-8">
          <a
            href={scheduleSection.cta.href}
            className="border border-white/30 text-white text-sm rounded-full px-6 py-3 hover:bg-white/10 transition-colors"
          >
            {scheduleSection.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
