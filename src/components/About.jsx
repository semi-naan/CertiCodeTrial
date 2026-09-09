import { about } from '../content.js';

export default function About() {
  return (
    <section id="about" className="bg-lightBg py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-brandOrange tracking-wide uppercase bg-brandOrange/10 px-4 py-1.5 rounded-full border border-brandOrange/20">
          <span className="w-1.5 h-1.5 rounded-full bg-brandOrange" />
          {about.eyebrow}
        </span>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-light leading-tight text-textDark">
          {about.headlinePlain}{' '}
          <em className="not-italic font-normal italic text-brandOrange">{about.headlineItalic}</em>
        </h2>
        <p className="mt-5 text-textMuted max-w-lg mx-auto text-base leading-relaxed">
          {about.sub}
        </p>
      </div>

      {/* Image Gallery Cards */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 mt-14">
        <div className="flex justify-center items-end relative h-[380px] sm:h-[440px]">
          {about.images.map((im, i) => (
            <div
              key={i}
              className={`absolute rounded-2xl overflow-hidden shadow-xl border-4 border-white w-[220px] sm:w-[280px] h-[320px] sm:h-[390px] transition-transform duration-300 hover:z-20 hover:scale-105 ${
                i === 0
                  ? 'left-1/2 -translate-x-[125%] rotate-[-4deg]'
                  : i === 2
                  ? 'left-1/2 translate-x-[25%] rotate-[4deg]'
                  : 'left-1/2 -translate-x-1/2 z-10 shadow-2xl'
              }`}
            >
              <img src={im.img} alt="" className="w-full h-full object-cover" />
              {im.tag && (
                <span className="absolute top-4 left-4 bg-[#0A0A0C]/80 backdrop-blur-md text-white text-xs font-medium rounded-full px-3 py-1 border border-white/10">
                  {im.tag}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stat Cards */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {about.stats.map((s, i) => (
          <div
            key={i}
            className="bg-cardBg border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <div className="font-serif text-4xl font-bold text-brandOrange">
              {s.value}
              <span className="text-2xl align-top">{s.suffix}</span>
            </div>
            <div className="mt-2 text-base font-semibold text-textDark">
              {s.title} <em className="not-italic italic text-brandOrange">{s.titleItalic}</em>
            </div>
            <p className="mt-2 text-xs text-textMuted leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12">
        <a
          href={about.cta.href}
          className="bg-darkHeader text-white text-sm font-medium rounded-full px-7 py-3 hover:bg-brandOrange transition-all shadow-md hover:scale-[1.02]"
        >
          {about.cta.label} &rarr;
        </a>
      </div>
    </section>
  );
}
