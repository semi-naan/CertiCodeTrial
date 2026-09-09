import { blogSection } from '../content.js';

export default function Blog() {
  return (
    <section id="blog" className="bg-lightBg py-20 sm:py-28 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-brandOrange tracking-wide uppercase bg-brandOrange/10 px-4 py-1.5 rounded-full border border-brandOrange/20">
          <span className="w-1.5 h-1.5 rounded-full bg-brandOrange" />
          {blogSection.eyebrow}
        </span>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-light leading-tight text-textDark">
          {blogSection.headlinePlain}{' '}
          <em className="not-italic italic text-brandOrange">{blogSection.headlineItalic}</em>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {blogSection.featured.map((a, i) => (
          <div key={i} className="group bg-cardBg border border-slate-200/80 rounded-2xl overflow-hidden p-4 shadow-sm hover:shadow-md transition-all">
            <div className="rounded-xl overflow-hidden aspect-[16/9] relative">
              <img
                src={a.img}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#0A0A0C]/80 backdrop-blur-md text-white text-xs font-medium rounded-full px-3 py-1 border border-white/10">
                {a.tag}
              </span>
            </div>
            <div className="pt-4">
              <h3 className="font-serif text-xl font-bold leading-snug text-textDark group-hover:text-brandOrange transition-colors">
                {a.title} <em className="not-italic italic text-brandOrange">{a.titleItalic}</em>
              </h3>
              <p className="mt-2 text-xs text-textMuted leading-relaxed">{a.excerpt}</p>
              <p className="mt-3 text-[11px] font-semibold text-brandOrange">{a.readTime}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {blogSection.posts.map((a, i) => (
          <div key={i} className="group bg-cardBg border border-slate-200/80 rounded-2xl overflow-hidden p-4 shadow-sm hover:shadow-md transition-all">
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <img
                src={a.img}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="pt-4">
              <h3 className="font-serif text-lg font-bold leading-snug text-textDark group-hover:text-brandOrange transition-colors">
                {a.title} <em className="not-italic italic text-brandOrange">{a.titleItalic}</em>
              </h3>
              <p className="mt-1.5 text-xs text-textMuted leading-relaxed">{a.excerpt}</p>
              <p className="mt-3 text-[11px] font-semibold text-brandOrange">{a.readTime}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <a
          href={blogSection.cta.href}
          className="bg-darkHeader text-white text-sm font-medium rounded-full px-7 py-3 hover:bg-brandOrange transition-all shadow-md"
        >
          {blogSection.cta.label} &rarr;
        </a>
      </div>
    </section>
  );
}
