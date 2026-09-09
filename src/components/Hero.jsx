import { hero } from '../content.js';

export default function Hero({ onOpenApply, onSelectTrack }) {
  return (
    <section id="home" className="relative bg-[#0A0A0C]">
      <div className="relative h-[620px] sm:h-[700px] overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 opacity-60">
          {hero.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-full h-full object-cover"
            />
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/50 to-[#0A0A0C]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-[#0A0A0C]/80 to-transparent" />

        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 flex flex-col justify-center pt-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-brandOrange bg-brandOrange/10 border border-brandOrange/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-brandOrange animate-pulse" />
              Remote-First IT & Internships
            </span>
            <h1 className="font-serif text-white text-5xl sm:text-6xl font-normal leading-[1.08] tracking-tight">
              {hero.headline.map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? <span className="text-brandOrange italic">{line}</span> : line}
                </span>
              ))}
            </h1>
            <p className="mt-6 text-slate-300 text-base sm:text-lg max-w-lg font-light leading-relaxed">
              {hero.sub}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={hero.cta.href}
                className="inline-flex items-center gap-2 bg-brandOrange text-white text-sm font-medium rounded-full px-7 py-3 hover:bg-brandOrangeDark transition-all shadow-lg shadow-brandOrange/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                {hero.cta.label} &rarr;
              </a>
              <button
                onClick={() => onOpenApply && onOpenApply('General Application')}
                className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 text-sm font-medium rounded-full px-6 py-3 hover:bg-white/20 transition-all"
              >
                Apply for Internship
              </button>
            </div>
          </div>
        </div>

        {/* Practice Tracks Bar */}
        <div className="absolute bottom-0 left-0 right-0 py-6 bg-gradient-to-t from-[#0A0A0C] to-transparent">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {hero.practices.map((p, i) => (
                <a
                  key={i}
                  href="#openings"
                  onClick={() => onSelectTrack && onSelectTrack(p.track)}
                  className="flex items-center gap-3 shrink-0 bg-white/5 hover:bg-brandOrange/20 border border-white/10 hover:border-brandOrange/40 rounded-full pl-2 pr-5 py-2 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-brandOrange/50 shrink-0">
                    <img src={p.img} alt={p.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-white/90 text-xs font-medium group-hover:text-brandOrange transition-colors">
                    {p.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
