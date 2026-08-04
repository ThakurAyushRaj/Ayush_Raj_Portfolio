import { education } from "@/lib/data";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import HangingNailCard from "@/components/ui/HangingNailCard";
import InkDrawUnderline from "@/components/ui/InkDrawUnderline";
import TextScramble from "@/components/ui/TextScramble";

export default function Education() {
  const themes: Array<"emerald" | "burgundy" | "navy"> = ["emerald", "burgundy", "navy"];

  return (
    <section id="education" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#181410] text-[#181410]">
      {/* ─── SECTION HEADER ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-b border-[#181410] pb-4 mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2"
      >
        <div>
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#524b42] font-semibold">
            <TextScramble text="06 // ACADEMIC RECORD" />
          </span>
          <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-[#181410] mt-1 font-black">
            <InkDrawUnderline color="#c5a059">
              <TextScramble text="EDUCATION & CREDENTIALS" as="span" />
            </InkDrawUnderline>
          </h2>
        </div>
        <div className="text-xs font-serif uppercase tracking-[0.2em] text-[#524b42]">
          <TextScramble text="ACADEMIC QUALIFICATIONS" />
        </div>
      </motion.div>

      {/* ─── THREE HANGING NAIL CARDS WITH VIBRANT CONTRASTING THEMES ─── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {education.map((item, idx) => (
          <motion.div
            key={item.id || idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <HangingNailCard
              cardTheme={themes[idx % themes.length]}
              dataCursorLabel="DEGREE"
              className="p-6 h-full flex flex-col justify-between"
            >
              <div className="space-y-2 relative z-10">
                <div className="text-xs font-serif uppercase tracking-[0.2em] font-bold border-b border-white/20 pb-2 flex justify-between items-center">
                  <TextScramble text={`DEGREE ${idx + 1}`} />
                  <GraduationCap size={16} className="group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-anton text-xl uppercase tracking-tight pt-1">
                  <TextScramble text={item.degree} as="span" />
                </h3>
                <p className="text-xs font-serif opacity-80 font-semibold">
                  {item.institution}
                </p>
              </div>

              <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-serif uppercase tracking-[0.15em] relative z-10 font-bold">
                <span>{item.period}</span>
                <span>{item.location}</span>
              </div>
            </HangingNailCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
