import { projects } from "@/lib/data";

export default function Projects() {
  const images = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
  ];

  const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

  return (
    <section id="projects" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#181410] text-[#181410]">
      {/* ─── SECTION HEADER ─── */}
      <div className="border-b border-[#181410] pb-4 mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2">
        <div>
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#181410] font-bold">
            03 // PORTFOLIO ARCHIVES &amp; LIVE DEMOS
          </span>
          <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-[#181410] mt-1 font-black">
            FROM THE PORTFOLIO PAGES
          </h2>
        </div>
        <div className="text-xs font-serif uppercase tracking-[0.2em] text-[#181410] font-semibold">
          SELECTED EDITIONS, MMXIX &mdash; PRESENT
        </div>
      </div>

      {/* ─── BALANCED 2-COLUMN BROADSHEET GRID (NO EMPTY GAPS) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {projects.map((project, idx) => (
          <div
            key={project.id || idx}
            className="relative group overflow-hidden border-2 border-[#c5a059] p-5 bg-[#181410] text-[#f4f1ea] flex flex-col justify-between space-y-4 shadow-xl transition-all duration-300 hover:border-[#e5c178] hover:shadow-2xl"
          >
            {/* Shimmer Light Sheen */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

            <div className="space-y-4 relative z-10">
              {/* Photo Frame */}
              <div className="border border-[#c5a059]/40 p-1 bg-black/40 overflow-hidden">
                <img
                  src={images[idx % images.length]}
                  alt={project.title}
                  className="w-full h-[220px] sm:h-[260px] object-cover broadsheet-photo filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Title & Date */}
              <div className="space-y-2 border-t border-[#c5a059]/30 pt-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-serif">
                  <span className="uppercase tracking-[0.2em] font-black text-[#c5a059] text-sm">
                    PLATE {romanNumerals[idx] || idx + 1} &mdash; {project.title}
                  </span>
                  <span className="italic text-[#d2c9b8] text-[11px] font-semibold">
                    {project.date}
                  </span>
                </div>

                <p className="broadsheet-justify text-sm font-serif text-[#d2c9b8] leading-relaxed">
                  {project.subtitle || project.description}
                </p>
              </div>
            </div>

            {/* Tech Badges & Action Links Row */}
            <div className="pt-4 border-t border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-serif relative z-10">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 border border-[#c5a059]/50 text-[10px] font-serif uppercase tracking-widest text-[#e5c178] bg-black/50 font-bold"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 text-xs font-serif uppercase tracking-[0.18em] font-bold shrink-0">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-[#c5a059] text-[#181410] hover:bg-[#e5c178] transition-all hover:scale-105 border border-[#c5a059] font-black"
                  >
                    LIVE DEMO ↗
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c5a059] hover:text-[#e5c178] hover:underline"
                >
                  CODEBASE &rarr;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
