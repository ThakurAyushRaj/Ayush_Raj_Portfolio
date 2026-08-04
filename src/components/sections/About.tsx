import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import InkDrawUnderline from "@/components/ui/InkDrawUnderline";
import TextScramble from "@/components/ui/TextScramble";
import HangingNailCard from "@/components/ui/HangingNailCard";
import { Quote } from "lucide-react";

export default function About() {
  const clientRegister = [
    "ANQUEST MEDIA",
    "REAL ESTATE CRM PLATFORM",
    "HEALTHCARE EMR SYSTEM",
    "IIMT COLLEGE SYSTEMS",
    "OPEN SOURCE COLLABORATIVES",
    "ENTERPRISE OPERATIONS ERP",
    "CROSS-PLATFORM MOBILE SUITE"
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#181410] text-[#181410] space-y-16">
      {/* ─── ABOUT THE STUDIO LEDE ─── */}
      <div className="border-b border-[#181410] pb-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 border-b border-[#181410] pb-3"
        >
          <div>
            <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#524b42] font-semibold">
              <TextScramble text="01 // THE STUDIO COLOPHON" />
            </span>
            <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-[#181410] mt-1 font-black">
              <InkDrawUnderline color="#c5a059">
                <TextScramble text="THE STUDIO & PRESS" as="span" />
              </InkDrawUnderline>
            </h2>
          </div>
          <div className="text-xs font-serif uppercase tracking-[0.2em] text-[#524b42]">
            <TextScramble text="BACKGROUND & PHILOSOPHY" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-8 broadsheet-justify text-base sm:text-lg font-serif leading-relaxed space-y-4 text-[#181410]"
          >
            <p className="font-semibold text-lg sm:text-xl italic border-l-4 border-[#c5a059] pl-4 py-1 bg-[#181410]/5 text-[#181410]">
              Software engineering executed with the precision of print production. Every line of code, schema definition, and interface element is designed for longevity.
            </p>
            <p>
              Currently serving as Software Development Engineer at <strong>{personalInfo.company}</strong>, building scalable CRM and EMR systems that manage critical lead flows and healthcare patient records. Specialized in clean microservice interfaces, reactive mobile architectures, and resilient database schemas.
            </p>
          </motion.div>

          {/* Studio Metrics Hanging Nail Card (Navy Theme) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4"
          >
            <HangingNailCard
              cardTheme="navy"
              dataCursorLabel="METRICS"
              className="p-6"
            >
              <div className="font-bold border-b border-[#38bdf8]/40 pb-2 uppercase tracking-[0.2em] text-[#38bdf8] flex justify-between items-center relative z-10">
                <TextScramble text="STUDIO METRICS" />
                <span>✦</span>
              </div>

              <div className="space-y-2 relative z-10 text-xs font-serif pt-2">
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="opacity-80">YEARS IN PRESS</span>
                  <span className="font-bold text-[#38bdf8]">
                    <AnimatedCounter to={4} suffix="+ YEARS" />
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="opacity-80">LIVE SYSTEMS</span>
                  <span className="font-bold text-[#38bdf8]">PRODUCTION CRM/EMR</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="opacity-80">PRIMARY STACK</span>
                  <span className="font-bold text-[#38bdf8]">MERN / REACT NATIVE</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="opacity-80">LOCATION</span>
                  <span className="font-bold text-[#38bdf8]">{personalInfo.location}</span>
                </div>
              </div>
            </HangingNailCard>
          </motion.div>
        </div>
      </div>

      {/* ─── LETTERS TO THE EDITOR HANGING NAIL CARD (BURGUNDY THEME) ─── */}
      <motion.div
        id="letters"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <HangingNailCard
          cardTheme="burgundy"
          dataCursorLabel="QUOTE"
          className="py-10 px-6 sm:px-12 text-center space-y-6"
        >
          <div className="text-xs font-serif uppercase tracking-[0.3em] font-semibold text-[#fb923c] relative z-10 flex items-center justify-center gap-2">
            <Quote size={14} className="text-[#fb923c]" />
            <TextScramble text="✦ LETTERS TO THE EDITOR ✦" as="span" />
          </div>

          <blockquote className="font-playfair italic text-2xl sm:text-4xl text-[#fff7ed] max-w-4xl mx-auto leading-snug px-4 relative z-10">
            &ldquo;Ayush delivered full-stack CRM and EMR systems that transformed our operational workflows with remarkable speed and precision.&rdquo;
          </blockquote>

          <div className="text-xs font-serif uppercase tracking-[0.22em] font-bold text-[#fb923c] relative z-10">
            &mdash; EXECUTIVE ENGINEERING LEADERSHIP, ANQUEST MEDIA &bull; RECEIVED MMXXV
          </div>
        </HangingNailCard>
      </motion.div>

      {/* ─── THE CLIENT REGISTER WITH ANIMATED MARQUEE TICKER ─── */}
      <div className="text-center space-y-4 py-4 overflow-hidden">
        <div className="text-xs font-serif uppercase tracking-[0.3em] text-[#524b42] font-semibold">
          <TextScramble text="THE CLIENT REGISTER" />
        </div>

        <div className="py-2 border-y border-[#181410]/30 overflow-hidden relative">
          <div className="whitespace-nowrap flex gap-8 animate-[marquee_24s_linear_infinite] text-xs font-serif uppercase tracking-[0.22em] font-bold text-[#181410]">
            {clientRegister.concat(clientRegister).map((client, idx) => (
              <span key={idx} className="inline-flex items-center gap-6">
                <motion.span whileHover={{ scale: 1.1, color: "#c5a059" }}>{client}</motion.span>
                <span className="text-sm font-normal text-[#524b42]">
                  {idx % 3 === 0 ? "❦" : idx % 3 === 1 ? "❖" : "✦"}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
