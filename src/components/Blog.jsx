import { blogSection } from '../content.js';

export default function Blog() {
  return (
    <section id="blog" className="bg-cream py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <span className="inline-flex items-center gap-2 text-xs text-stone">
          <span className="w-1.5 h-1.5 rounded-full bg-clay" />
          {blogSection.eyebrow}
        </span>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-light leading-tight">
          {blogSection.headlinePlain}
          <br />
          <em className="not-italic italic">{blogSection.headlineItalic}</em>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {blogSection.featured.map((a, i) => (
          <a key={i} href="#" className="group block">
            <div className="rounded-2xl overflow-hidden aspect-[5/4] relative">
              <img src={a.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-4 left-4 bg-white/90 text-espresso text-xs rounded-full px-3 py-1">
                {a.tag}
              </span>
            </div>
            <h3 className="mt-4 font-serif text-xl leading-snug">
              {a.title} <em className="not-italic italic text-stone">{a.titleItalic}</em>
            </h3>
            <p className="mt-1 text-sm text-stone">{a.excerpt}</p>
            <p className="mt-2 text-xs text-stone">{a.readTime}</p>
          </a>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {blogSection.posts.map((a, i) => (
          <a key={i} href="#" className="group block">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={a.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="mt-4 font-serif text-lg leading-snug">
              {a.title} <em className="not-italic italic text-stone">{a.titleItalic}</em>
            </h3>
            <p className="mt-1 text-sm text-stone">{a.excerpt}</p>
            <p className="mt-2 text-xs text-stone">{a.readTime}</p>
          </a>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <a
          href={blogSection.cta.href}
          className="bg-espresso text-white text-sm font-medium rounded-full px-6 py-3 hover:bg-bark transition-colors"
        >
          {blogSection.cta.label}
        </a>
      </div>
    </section>
  );
}
