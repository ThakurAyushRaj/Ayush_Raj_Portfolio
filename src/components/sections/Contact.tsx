import { useState, FormEvent } from "react";
import { personalInfo } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Download } from "lucide-react";
import HangingNailCard from "@/components/ui/HangingNailCard";
import InkDrawUnderline from "@/components/ui/InkDrawUnderline";
import TextScramble from "@/components/ui/TextScramble";
import Magnetic from "@/components/ui/Magnetic";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#181410] text-[#181410] space-y-12">
      {/* ─── SECTION HEADER ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-b border-[#181410] pb-4 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2"
      >
        <div>
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#524b42] font-semibold">
            <TextScramble text="06 // TRANSMISSION & COMMISSIONS" />
          </span>
          <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-[#181410] mt-1 font-black">
            <InkDrawUnderline color="#181410">
              <TextScramble text="SUBMIT THE BRIEF" as="span" />
            </InkDrawUnderline>
          </h2>
        </div>
        <div className="text-xs font-serif uppercase tracking-[0.2em] text-[#524b42]">
          <TextScramble text="DIRECT DISPATCH & ENGAGEMENTS" />
        </div>
      </motion.div>

      {/* ─── HANGING NAIL COMMISSION CARD (HIGH CONTRAST OBSIDIAN BLACK & WHITE) ─── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-[800px] mx-auto"
      >
        <HangingNailCard
          cardTheme="obsidian"
          dataCursorLabel="BRIEF"
          className="py-12 px-6 sm:px-14 text-center space-y-8 bg-[#090807] text-[#ffffff] border-2 border-white shadow-2xl"
        >
          <div className="space-y-3 relative z-10">
            <div className="text-xs font-serif uppercase tracking-[0.25em] font-bold text-[#c5a059]">
              <TextScramble text="✦ NOW ACCEPTING AUTUMN & WINTER COMMISSIONS ✦" />
            </div>

            <h3 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none font-black">
              <TextScramble text="SUBMIT YOUR PROJECT BRIEF" as="span" />
            </h3>

            <p className="font-serif italic text-base sm:text-lg text-stone-300 max-w-xl mx-auto leading-relaxed pt-1">
              &ldquo;Direct engineering engagements accepted for web platforms, mobile applications, and API architecture. Direct responses dispatched within 24 hours.&rdquo;
            </p>
          </div>

          {/* ─── MONOCHROMATIC HIGH-CONTRAST FORM ─── */}
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
                  className="w-full bg-black border border-white/60 rounded-none px-4 py-3 text-xs font-serif uppercase text-white placeholder:text-stone-500 focus:outline-none focus:border-[#c5a059] focus:bg-black transition-all focus:ring-1 focus:ring-[#c5a059]"
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
                  className="w-full bg-black border border-white/60 rounded-none px-4 py-3 text-xs font-serif uppercase text-white placeholder:text-stone-500 focus:outline-none focus:border-[#c5a059] focus:bg-black transition-all focus:ring-1 focus:ring-[#c5a059]"
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
                className="w-full bg-black border border-white/60 rounded-none px-4 py-3 text-xs font-serif uppercase text-white placeholder:text-stone-500 focus:outline-none focus:border-[#c5a059] focus:bg-black transition-all focus:ring-1 focus:ring-[#c5a059]"
              ></textarea>
            </div>

            {/* SOLID WHITE BUTTON WITH MAGNETIC PULL & ZOOM OUT ON HOVER */}
            <Magnetic strength={0.3} className="w-full">
              <motion.button
                type="submit"
                data-cursor-label="SUBMIT"
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
                className="w-full py-4 px-8 bg-white hover:bg-[#c5a059] text-black hover:text-black font-serif text-xs uppercase tracking-[0.22em] font-black rounded-none border border-white cursor-pointer shadow-xl flex items-center justify-center gap-2 transition-colors"
              >
                <Send size={14} />
                <span>SUBMIT THE BRIEF &rarr;</span>
              </motion.button>
            </Magnetic>
          </form>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-3 border border-white bg-white text-black text-xs font-serif uppercase tracking-[0.2em] font-bold relative z-10 flex items-center justify-center gap-2"
              >
                <CheckCircle2 size={16} />
                <span>TRANSMISSION RECEIVED &bull; WE SHALL RESPOND ON PRESS DAY</span>
              </motion.div>
            )}
          </AnimatePresence>
        </HangingNailCard>
      </motion.div>

      {/* ─── DIRECT DISPATCH DETAILS ROW ─── */}
      <div className="max-w-4xl mx-auto border-t border-[#181410] pt-8 grid grid-cols-1 sm:grid-cols-4 gap-6 text-center text-xs font-serif uppercase tracking-[0.2em]">
        <motion.div whileHover={{ scale: 0.94 }} className="space-y-1">
          <div className="text-[#524b42] flex items-center justify-center gap-1">
            <Mail size={12} className="text-[#181410]" />
            <span>DIRECT EMAIL</span>
          </div>
          <a href={`mailto:${personalInfo.email}`} data-cursor-label="EMAIL" className="font-bold hover:underline text-[#181410]">
            {personalInfo.email}
          </a>
        </motion.div>

        <motion.div whileHover={{ scale: 0.94 }} className="space-y-1">
          <div className="text-[#524b42] flex items-center justify-center gap-1">
            <Phone size={12} className="text-[#181410]" />
            <span>PHONE</span>
          </div>
          <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} data-cursor-label="PHONE" className="font-bold hover:underline text-[#181410]">
            {personalInfo.phone}
          </a>
        </motion.div>

        <motion.div whileHover={{ scale: 0.94 }} className="space-y-1">
          <div className="text-[#524b42] flex items-center justify-center gap-1">
            <Download size={12} className="text-[#181410]" />
            <span>CURRICULUM VITAE</span>
          </div>
          <a
            href={personalInfo.resume}
            download="Ayush_Raj_CV.docx"
            data-cursor-label="CV (.DOCX)"
            className="font-bold text-[#181410] hover:underline underline-offset-4"
          >
            DOWNLOAD CV (.DOCX) ↓
          </a>
        </motion.div>

        <motion.div whileHover={{ scale: 0.94 }} className="space-y-1">
          <div className="text-[#524b42] flex items-center justify-center gap-1">
            <MapPin size={12} className="text-[#181410]" />
            <span>ADDRESS</span>
          </div>
          <div className="font-bold text-[#181410]">{personalInfo.location}</div>
        </motion.div>
      </div>
    </section>
  );
}
