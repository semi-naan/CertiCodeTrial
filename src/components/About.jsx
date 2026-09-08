import { about } from '../content.js';

export default function About() {
  return (
    <section id="about" className="bg-cream py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <span className="inline-flex items-center gap-2 text-xs text-stone">
          <span className="w-1.5 h-1.5 rounded-full bg-clay" />
          {about.eyebrow}
        </span>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-light leading-tight">
          {about.headlinePlain}
          <br />
          <em className="not-italic font-normal italic">{about.headlineItalic}</em>
        </h2>
        <p className="mt-5 text-stone max-w-md mx-auto">{about.sub}</p>
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 mt-14">
        <div className="flex justify-center items-end gap-[-20px] relative h-[420px] sm:h-[480px]">
          {about.images.map((im, i) => (
            <div
              key={i}
              className={`absolute rounded-2xl overflow-hidden shadow-xl w-[220px] sm:w-[280px] h-[380px] sm:h-[440px] ${
                i === 0
                  ? 'left-1/2 -translate-x-[130%] rotate-[-6deg]'
                  : i === 2
                  ? 'left-1/2 translate-x-[30%] rotate-[6deg]'
                  : 'left-1/2 -translate-x-1/2 z-10'
              }`}
            >
              <img src={im.img} alt="" className="w-full h-full object-cover" />
              {im.tag && (
                <span className="absolute top-4 left-4 bg-white/90 text-espresso text-xs rounded-full px-3 py-1">
                  {im.tag}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        {about.stats.map((s, i) => (
          <div key={i} className={i > 0 ? 'sm:border-l sm:border-line sm:pl-10' : ''}>
            <div className="font-serif text-4xl">
              {s.value}
              <span className="text-2xl align-top">{s.suffix}</span>
            </div>
            <div className="mt-2 text-sm font-medium">
              {s.title} <em className="not-italic italic">{s.titleItalic}</em>
            </div>
            <p className="mt-2 text-sm text-stone">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <a
          href={about.cta.href}
          className="bg-espresso text-white text-sm font-medium rounded-full px-6 py-3 hover:bg-bark transition-colors"
        >
          {about.cta.label}
        </a>
      </div>
    </section>
  );
}
