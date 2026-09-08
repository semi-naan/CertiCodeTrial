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
    <section id="gallery" className="bg-cream py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <span className="inline-flex items-center gap-2 text-xs text-stone">
          <span className="w-1.5 h-1.5 rounded-full bg-clay" />
          {gallerySection.eyebrow}
        </span>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-light leading-tight">
          {gallerySection.headlinePlain}
          <br />
          <em className="not-italic italic">{gallerySection.headlineItalic}</em>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-12 grid grid-cols-2 sm:grid-cols-3 auto-rows-[140px] sm:auto-rows-[180px] gap-3 sm:gap-4">
        {gallerySection.images.map((src, i) => (
          <div key={i} className={`rounded-2xl overflow-hidden ${spans[i % spans.length]}`}>
            <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
