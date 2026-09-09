import { gallerySection } from '../content.js';

const spans = [
  'row-span-2',
  '',
  '',
  '',
  'row-span-2',
  '',
  '',
  '',
  '',
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-lightBg py-20 sm:py-28 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-brandOrange tracking-wide uppercase bg-brandOrange/10 px-4 py-1.5 rounded-full border border-brandOrange/20">
          <span className="w-1.5 h-1.5 rounded-full bg-brandOrange" />
          {gallerySection.eyebrow}
        </span>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-light leading-tight text-textDark">
          {gallerySection.headlinePlain}{' '}
          <em className="not-italic italic text-brandOrange">{gallerySection.headlineItalic}</em>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-12 grid grid-cols-2 sm:grid-cols-3 auto-rows-[160px] sm:auto-rows-[200px] gap-4">
        {gallerySection.images.map((src, i) => (
          <div
            key={i}
            className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-slate-200 ${
              spans[i % spans.length]
            }`}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
