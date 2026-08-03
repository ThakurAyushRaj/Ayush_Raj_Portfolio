import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#181410] text-[#181410]">
      {/* ─── SECTION HEADER ─── */}
      <div className="border-b border-[#181410] pb-4 mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2">
        <div>
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#524b42] font-semibold">
            06 // ACADEMIC RECORD
          </span>
          <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-[#181410] mt-1">
            EDUCATION &amp; CREDENTIALS
          </h2>
        </div>
        <div className="text-xs font-serif uppercase tracking-[0.2em] text-[#524b42]">
          ACADEMIC QUALIFICATIONS
        </div>
      </div>

      {/* ─── THREE DARK INK COLUMNS ─── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {education.map((item, idx) => (
          <div
            key={item.id || idx}
            className={`relative group overflow-hidden border p-6 bg-[#181410] text-[#f4f1ea] flex flex-col justify-between space-y-4 shadow-xl transition-all duration-500 ${
              idx === 0 ? "border-[#c5a059] shadow-2xl hover:border-[#e5c178]" : "border-[#181410] hover:border-[#c5a059]"
            }`}
          >
            {/* Shimmer Light Sheen */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

            <div className="space-y-2 relative z-10">
              <div className="text-xs font-serif uppercase tracking-[0.2em] font-bold text-[#c5a059] border-b border-[#c5a059]/30 pb-1 flex justify-between items-center">
                <span>DEGREE {idx + 1}</span>
                <span>✦</span>
              </div>
              <h3 className="font-anton text-xl uppercase tracking-tight text-[#f4f1ea] pt-1">
                {item.degree}
              </h3>
              <p className="text-xs font-serif text-[#d2c9b8] font-semibold">
                {item.institution}
              </p>
            </div>

            <div className="pt-3 border-t border-[#c5a059]/30 flex items-center justify-between text-xs font-serif uppercase tracking-[0.15em] text-[#c5a059] relative z-10">
              <span>{item.period}</span>
              <span>{item.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
