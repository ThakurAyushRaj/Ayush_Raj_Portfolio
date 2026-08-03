import { useState, FormEvent } from "react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#181410] text-[#181410] space-y-12">
      {/* ─── SECTION HEADER ─── */}
      <div className="border-b border-[#181410] pb-4 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2">
        <div>
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#524b42] font-semibold">
            04 // TRANSMISSION &amp; COMMISSIONS
          </span>
          <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-[#181410] mt-1">
            SUBMIT THE BRIEF
          </h2>
        </div>
        <div className="text-xs font-serif uppercase tracking-[0.2em] text-[#524b42]">
          DIRECT DISPATCH &amp; ENGAGEMENTS
        </div>
      </div>

      {/* ─── ENHANCED DARK INK COMMISSION CARD ─── */}
      <div className="max-w-[800px] mx-auto relative group overflow-hidden border-2 border-[#c5a059] py-12 px-6 sm:px-14 text-center space-y-8 bg-[#181410] text-[#f4f1ea] shadow-2xl transition-all duration-500 hover:border-[#e5c178]">
        {/* Shimmer Light Sheen */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

        <div className="space-y-3 relative z-10">
          <div className="text-xs font-serif uppercase tracking-[0.25em] font-semibold text-[#c5a059]">
            ✦ NOW ACCEPTING AUTUMN &amp; WINTER COMMISSIONS ✦
          </div>

          <h3 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight text-[#f4f1ea] leading-none">
            PUT YOUR BRAND ABOVE THE FOLD
          </h3>

          <p className="font-serif italic text-base sm:text-lg text-[#d2c9b8] max-w-xl mx-auto leading-relaxed pt-1">
            &ldquo;Engagements are accepted on a limited quarterly basis to ensure broadsheet quality execution. Direct responses dispatched within 24 hours.&rdquo;
          </p>
        </div>

        {/* ─── DARK INK FORM ─── */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-xl mx-auto relative z-10 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-serif uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                Correspondent Name
              </label>
              <input
                type="text"
                required
                placeholder="E.G. ALEX MORGAN"
                className="w-full bg-black/60 border border-[#c5a059]/60 rounded-none px-4 py-3 text-xs font-serif uppercase text-[#f4f1ea] placeholder:text-[#d2c9b8]/40 focus:outline-none focus:border-[#e5c178] focus:bg-black/90 transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-serif uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                Dispatch Email
              </label>
              <input
                type="email"
                required
                placeholder="ALEX@COMPANY.COM"
                className="w-full bg-black/60 border border-[#c5a059]/60 rounded-none px-4 py-3 text-xs font-serif uppercase text-[#f4f1ea] placeholder:text-[#d2c9b8]/40 focus:outline-none focus:border-[#e5c178] focus:bg-black/90 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-serif uppercase tracking-[0.2em] font-bold text-[#c5a059]">
              Commission Brief &amp; Scope
            </label>
            <textarea
              rows={4}
              required
              placeholder="OUTLINE YOUR PRODUCT OR SYSTEM REQUIREMENTS..."
              className="w-full bg-black/60 border border-[#c5a059]/60 rounded-none px-4 py-3 text-xs font-serif uppercase text-[#f4f1ea] placeholder:text-[#d2c9b8]/40 focus:outline-none focus:border-[#e5c178] focus:bg-black/90 transition-colors"
            ></textarea>
          </div>

          {/* SOLID METALLIC GOLD / DARK BUTTON */}
          <button
            type="submit"
            className="w-full py-4 px-8 bg-[#c5a059] hover:bg-[#e5c178] text-[#181410] font-serif text-xs uppercase tracking-[0.22em] font-bold rounded-none transition-all hover:scale-[1.03] border border-[#c5a059] cursor-pointer shadow-lg"
          >
            SUBMIT THE BRIEF &rarr;
          </button>
        </form>

        {submitted && (
          <div className="p-3 border border-[#c5a059] bg-[#c5a059] text-[#181410] text-xs font-serif uppercase tracking-[0.2em] font-bold relative z-10">
            TRANSMISSION RECEIVED &bull; WE SHALL RESPOND ON PRESS DAY
          </div>
        )}
      </div>

      {/* ─── DIRECT DISPATCH DETAILS ROW ─── */}
      <div className="max-w-4xl mx-auto border-t border-[#181410] pt-8 grid grid-cols-1 sm:grid-cols-4 gap-6 text-center text-xs font-serif uppercase tracking-[0.2em]">
        <div className="space-y-1">
          <div className="text-[#524b42]">DIRECT EMAIL</div>
          <a href={`mailto:${personalInfo.email}`} className="font-bold hover:underline">
            {personalInfo.email}
          </a>
        </div>

        <div className="space-y-1">
          <div className="text-[#524b42]">PHONE / TELEGRAPH</div>
          <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="font-bold hover:underline">
            {personalInfo.phone}
          </a>
        </div>

        <div className="space-y-1">
          <div className="text-[#524b42]">CURRICULUM VITAE</div>
          <a
            href={personalInfo.resume}
            download="Ayush_Raj_CV.docx"
            className="font-bold text-[#181410] hover:underline underline-offset-4"
          >
            DOWNLOAD CV (.DOCX) ↓
          </a>
        </div>

        <div className="space-y-1">
          <div className="text-[#524b42]">STUDIO HEADQUARTERS</div>
          <div className="font-bold">{personalInfo.location}</div>
        </div>
      </div>
    </section>
  );
}
