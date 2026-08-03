import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#181410] text-[#181410]">
      {/* ─── SECTION HEADER ─── */}
      <div className="border-b border-[#181410] pb-4 mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2">
        <div>
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#524b42] font-semibold">
            05 // CAREER &amp; CHRONICLE
          </span>
          <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-[#181410] mt-1">
            PROFESSIONAL RECORD
          </h2>
        </div>
        <div className="text-xs font-serif uppercase tracking-[0.2em] text-[#524b42]">
          SDE DISPATCHES &amp; TIMELINE
        </div>
      </div>

      {/* ─── CHRONICLE LIST WITH DARK INK CARDS ─── */}
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={exp.id}
            className={`relative group overflow-hidden p-6 sm:p-8 border space-y-4 transition-all duration-500 ${
              idx === 0
                ? "bg-[#181410] text-[#f4f1ea] border-[#c5a059] shadow-2xl hover:border-[#e5c178]"
                : "bg-[#181410]/95 text-[#f4f1ea] border-[#181410] shadow-xl hover:border-[#c5a059]"
            }`}
          >
            {/* Shimmer Light Sheen */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#c5a059]/40 pb-3 relative z-10">
              <div>
                <span className="text-[11px] font-serif uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                  [{exp.type}]
                </span>
                <h3 className="font-anton text-2xl uppercase tracking-tight text-[#f4f1ea] mt-0.5">
                  {exp.role}
                </h3>
                <div className="text-sm font-serif font-bold text-[#e5c178]">
                  {exp.company} &bull; <span className="font-normal italic text-[#d2c9b8]">{exp.location}</span>
                </div>
              </div>

              <div className="text-xs font-serif uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                {exp.period}
              </div>
            </div>

            <ul className="space-y-2 text-sm font-serif leading-relaxed text-[#d2c9b8] relative z-10">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2.5">
                  <span className="font-bold text-xs text-[#c5a059] select-none">▸</span>
                  <span className="broadsheet-justify">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
