import { experiences } from "@/lib/data";
import { motion } from "framer-motion";
import HangingNailCard from "@/components/ui/HangingNailCard";
import InkDrawUnderline from "@/components/ui/InkDrawUnderline";
import TextScramble from "@/components/ui/TextScramble";

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t-2 border-[#181410] text-[#181410]">
      {/* ─── SECTION HEADER ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-b-2 border-[#181410] pb-4 mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2"
      >
        <div>
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#c5a059] font-black">
            <TextScramble text="01 // CAREER & CHRONICLE" />
          </span>
          <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-[#181410] mt-1 font-black">
            <InkDrawUnderline color="#181410">
              <TextScramble text="PROFESSIONAL RECORD" as="span" />
            </InkDrawUnderline>
          </h2>
        </div>
        <div className="text-xs font-serif uppercase tracking-[0.2em] text-[#181410] font-black bg-[#181410]/5 px-3 py-1.5 border border-[#181410]">
          <TextScramble text="SDE DISPATCHES & TIMELINE" />
        </div>
      </motion.div>

      {/* ─── CHRONICLE LIST: 1ST CARD WHITE, 2ND CARD BLACK ─── */}
      <div className="space-y-10">
        {experiences.map((exp, idx) => {
          const isWhite = idx % 2 === 0; // 1st card (idx 0) is WHITE, 2nd card (idx 1) is BLACK
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <HangingNailCard
                cardTheme={isWhite ? "cream" : "obsidian"}
                dataCursorLabel="ROLE"
                className={`p-6 sm:p-8 space-y-4 border-2 ${
                  isWhite
                    ? "bg-[#FAF7F2] text-[#181410] border-[#181410] shadow-xl"
                    : "bg-[#090807] text-[#ffffff] border-white shadow-2xl"
                }`}
              >
                <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 relative z-10 ${
                  isWhite ? "border-[#181410]/20" : "border-white/30"
                }`}>
                  <div>
                    <span className={`text-[11px] font-serif uppercase tracking-[0.2em] font-bold ${
                      isWhite ? "text-[#524b42]" : "text-stone-300"
                    }`}>
                      [{exp.type}]
                    </span>
                    <h3 className={`font-anton text-2xl uppercase tracking-tight mt-0.5 font-black ${
                      isWhite ? "text-[#181410]" : "text-white"
                    }`}>
                      <TextScramble text={exp.role} as="span" />
                    </h3>
                    <div className={`text-sm font-serif font-bold ${
                      isWhite ? "text-[#181410]" : "text-white"
                    }`}>
                      {exp.company} &bull; <span className={`font-normal italic ${
                        isWhite ? "text-[#524b42]" : "text-stone-300"
                      }`}>{exp.location}</span>
                    </div>
                  </div>

                  <div className={`text-xs font-serif uppercase tracking-[0.2em] font-bold px-3 py-1.5 border shrink-0 ${
                    isWhite
                      ? "text-[#181410] bg-white border-[#181410]"
                      : "text-white bg-black border-white/60"
                  }`}>
                    {exp.period}
                  </div>
                </div>

                <ul className={`space-y-2.5 text-sm font-serif leading-relaxed relative z-10 ${
                  isWhite ? "text-[#181410]" : "text-stone-200"
                }`}>
                  {exp.bullets.map((bullet, bIdx) => (
                    <motion.li
                      key={bIdx}
                      whileHover={{ x: 6 }}
                      className="flex items-start gap-2.5 transition-transform"
                    >
                      <span className={`font-bold text-xs select-none pt-0.5 ${
                        isWhite ? "text-[#181410]" : "text-white"
                      }`}>▸</span>
                      <span className="broadsheet-justify">{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </HangingNailCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
