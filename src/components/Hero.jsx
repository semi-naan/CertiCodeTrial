import { hero } from '../content.js';
import Navbar from './Navbar.jsx';

export default function Hero() {
  return (
    <section id="home" className="relative bg-espresso">
      <Navbar />

      <div className="relative h-[640px] sm:h-[720px] overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2">
          {hero.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-full h-full object-cover"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/10 to-espresso/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-transparent to-transparent" />

        <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 flex flex-col justify-center pt-16">
          <div className="max-w-xl">
            <h1 className="font-serif text-white text-5xl sm:text-6xl leading-[1.05] font-light">
              {hero.headline.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 text-white/75 text-base sm:text-lg max-w-sm">{hero.sub}</p>
            <a
              href={hero.cta.href}
              className="mt-8 inline-block bg-cream text-espresso text-sm font-medium rounded-full px-6 py-3 hover:bg-white transition-colors"
            >
              {hero.cta.label}
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-8">
            <div className="flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar">
              {hero.practices.map((p, i) => (
                <div key={i} className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-white/30">
                    <img src={p.img} alt={p.label} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-white/85 text-xs">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
