import { projects } from "@/lib/data";

export default function Projects() {
  const featuredLarge = projects[0]; // ERP Website
  const otherProjects = projects.slice(1);

  const images = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#181410] text-[#181410]">
      {/* ─── SECTION HEADER ─── */}
      <div className="border-b border-[#181410] pb-4 mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2">
        <div>
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#524b42] font-semibold">
            03 // PORTFOLIO ARCHIVES &amp; LIVE DEMOS
          </span>
          <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-[#181410] mt-1">
            FROM THE PORTFOLIO PAGES
          </h2>
        </div>
        <div className="text-xs font-serif uppercase tracking-[0.2em] text-[#524b42]">
          SELECTED EDITIONS, MMXIX &mdash; PRESENT
        </div>
      </div>

      {/* ─── ASYMMETRIC DARK INK PLATE GRID ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Large Featured Dark Ink Card (col-span-7) */}
        <div className="lg:col-span-7 relative group overflow-hidden border-2 border-[#c5a059] p-5 bg-[#181410] text-[#f4f1ea] flex flex-col justify-between space-y-4 shadow-2xl transition-all duration-500 hover:border-[#e5c178]">
          <div className="absolute top-3 right-3 text-[#c5a059] text-xs font-serif uppercase tracking-widest bg-black/60 px-2 py-0.5 border border-[#c5a059]/50 select-none">
            ✦ FEATURED SYSTEM ✦
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

          <div className="space-y-4 relative z-10">
            <div className="border border-[#c5a059]/40 p-1 bg-black/40 overflow-hidden">
              <img
                src={images[0]}
                alt={featuredLarge.title}
                className="w-full h-[320px] sm:h-[380px] object-cover broadsheet-photo filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="space-y-2 border-t border-[#c5a059]/30 pt-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-serif">
                <span className="uppercase tracking-[0.22em] font-bold text-[#c5a059]">
                  PLATE I &mdash; {featuredLarge.title}
                </span>
                <span className="italic text-[#d2c9b8] text-[11px]">
                  {featuredLarge.date}
                </span>
              </div>

              <p className="broadsheet-justify text-sm font-serif text-[#d2c9b8] leading-relaxed">
                {featuredLarge.description}
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-serif relative z-10">
            <div className="flex flex-wrap gap-2">
              {featuredLarge.tech.map((t, idx) => (
                <span key={idx} className="px-2 py-0.5 border border-[#c5a059]/50 text-[10px] font-serif uppercase tracking-widest text-[#e5c178] bg-black/40">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xs font-serif uppercase tracking-[0.2em] font-bold">
              {featuredLarge.demo && (
                <a
                  href={featuredLarge.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-[#c5a059] text-[#181410] hover:bg-[#e5c178] transition-colors border border-[#c5a059]"
                >
                  LIVE DEMO ↗
                </a>
              )}
              <a
                href={featuredLarge.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c5a059] hover:text-[#e5c178] hover:underline"
              >
                CODEBASE &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Stacked Small Dark Ink Cards (col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {otherProjects.map((project, idx) => (
            <div key={project.id || idx} className="relative group overflow-hidden border border-[#c5a059]/80 p-4 bg-[#181410] text-[#f4f1ea] space-y-3 flex-1 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-[#e5c178]">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

              <div className="space-y-3 relative z-10">
                <div className="border border-[#c5a059]/30 p-1 bg-black/40 overflow-hidden">
                  <img
                    src={images[(idx + 1) % images.length]}
                    alt={project.title}
                    className="w-full h-[150px] object-cover broadsheet-photo filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="space-y-1.5 border-t border-[#c5a059]/30 pt-2">
                  <div className="flex items-center justify-between text-xs font-serif">
                    <span className="uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                      PLATE {idx + 2} &mdash; {project.title}
                    </span>
                    <span className="italic text-[#d2c9b8] text-[11px]">
                      {project.date}
                    </span>
                  </div>

                  <p className="broadsheet-justify text-xs font-serif text-[#d2c9b8] leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#c5a059]/30 flex items-center justify-between text-[11px] font-serif uppercase tracking-[0.18em] relative z-10">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-0.5 bg-[#c5a059] text-[#181410] font-bold hover:bg-[#e5c178] transition-colors border border-[#c5a059]"
                  >
                    LIVE DEMO ↗
                  </a>
                ) : (
                  <span className="text-[#d2c9b8]/60 italic font-normal">ARCHIVAL BUILD</span>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#c5a059] hover:text-[#e5c178] hover:underline"
                >
                  CODE &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
