import { personalInfo } from "@/lib/data";
import { Download, Sparkles, Code2, Server, Layers, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import InkDrawUnderline from "@/components/ui/InkDrawUnderline";
import TextScramble from "@/components/ui/TextScramble";
import PressSeal from "@/components/ui/PressSeal";
import HangingNailCard from "@/components/ui/HangingNailCard";
import TapedCard from "@/components/ui/TapedCard";
import Magnetic from "@/components/ui/Magnetic";
import LiveTerminal from "@/components/ui/LiveTerminal";
import RubberStamp from "@/components/ui/RubberStamp";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  const statsList = [
    {
      value: 4,
      suffix: "+ YRS",
      label: "PRODUCTION PRESS",
      sub: "FULL-STACK SDE EXPERIENCE",
      icon: Code2,
      cardBg: "bg-[#181410] text-[#f4f1ea] border-2 border-[#c5a059]",
      tapeColor: "gold" as const,
      accentText: "text-[#e5c178]",
      rotate: -1.2,
    },
    {
      value: 10,
      suffix: "+",
      label: "PRODUCTION APPS",
      sub: "CRM, EMR & MOBILE SUITES",
      icon: Server,
      cardBg: "bg-[#0f172a] text-[#f8fafc] border-2 border-[#38bdf8]",
      tapeColor: "cyan" as const,
      accentText: "text-[#38bdf8]",
      rotate: 1.1,
    },
    {
      value: 99,
      suffix: ".9%",
      label: "SYSTEM UPTIME",
      sub: "RESILIENT MICROSERVICES",
      icon: Cpu,
      cardBg: "bg-[#064e3b] text-[#ecfdf5] border-2 border-[#34d399]",
      tapeColor: "mint" as const,
      accentText: "text-[#34d399]",
      rotate: -0.9,
    },
    {
      value: 100,
      suffix: "%",
      label: "TYPE SAFETY",
      sub: "REACT, TYPESCRIPT & NODE",
      icon: Layers,
      cardBg: "bg-[#451a03] text-[#fff7ed] border-2 border-[#fb923c]",
      tapeColor: "coral" as const,
      accentText: "text-[#fb923c]",
      rotate: 1.3,
    },
  ];

  return (
    <motion.section
      id="hero"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="py-10 px-4 sm:px-8 max-w-7xl mx-auto space-y-12 text-[#181410] relative"
    >
      {/* Floating Rotating Press Seal Emblem */}
      <div className="hidden lg:block absolute right-8 top-12 z-20">
        <PressSeal />
      </div>

      {/* ─── KICKER & CV DOWNLOAD ACTION BAR ─── */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#181410] pb-3 text-center sm:text-left"
      >
        <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#181410] font-bold flex items-center gap-2">
          <Sparkles size={14} className="text-[#c5a059] animate-pulse" />
          <TextScramble text="DISCIPLINES: FULL-STACK ENGINEERING • MERN / MEAN • MOBILE ARCHITECTURE" />
        </span>

        <div className="flex items-center gap-3">
          <RubberStamp text="VERIFIED SDE" color="gold" rotate={-4} />
          <Magnetic strength={0.3}>
            <a
              href={personalInfo.resume}
              download="Ayush_Raj_CV.docx"
              data-cursor-label="CV (.DOCX)"
              className="px-4 py-2 bg-[#181410] text-[#f4f1ea] hover:bg-[#c5a059] hover:text-[#181410] transition-all text-xs font-serif uppercase tracking-[0.2em] font-bold flex items-center gap-2 border border-[#181410] shrink-0 shadow-md cursor-pointer"
            >
              <Download size={14} />
              <span>DOWNLOAD CV (.DOCX)</span>
            </a>
          </Magnetic>
        </div>
      </motion.div>

      {/* ─── HUGE ANTON HEADLINE (~88px) WITH TEXT SCRAMBLE CIPHER ANIMATION ─── */}
      <div className="text-center space-y-3 pt-2">
        <div className="font-anton text-5xl sm:text-7xl lg:text-[88px] uppercase tracking-tight text-[#181410] leading-[0.96] max-w-5xl mx-auto font-black justify-center">
          <InkDrawUnderline color="#c5a059">
            <TextScramble text="DESIGN & CODE" as="span" />
          </InkDrawUnderline>{" "}
          <TextScramble text="WORTH THE FRONT PAGE" as="span" />
        </div>

        <motion.div
          variants={fadeUp}
          className="text-sm sm:text-base font-serif italic text-[#181410] font-semibold pt-2 max-w-2xl mx-auto"
        >
          Engineering scalable web, mobile &amp; enterprise platforms for real estate and healthcare workflows.
        </motion.div>
      </div>

      {/* ─── TWO-COLUMN JUSTIFIED DROP-CAP LEDE ─── */}
      <motion.div variants={fadeUp} className="max-w-[920px] mx-auto border-y border-[#181410] py-8 my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#181410] text-[#181410]">
          <div className="broadsheet-dropcap broadsheet-justify text-base sm:text-lg leading-relaxed font-serif pr-0 md:pr-4">
            Hi, I&apos;m <strong>{personalInfo.name}</strong>, a Software Development Engineer at {personalInfo.company} dedicated to crafting robust digital products, high-throughput microservices, and elegant web &amp; mobile interfaces. With deep expertise across modern MERN/MEAN architectures, React Native, and Flutter, I engineer software built to endure.
          </div>
          <div className="broadsheet-justify text-base sm:text-lg leading-relaxed font-serif pt-6 md:pt-0 md:pl-8">
            From architecture to production rollout, every system is constructed with strict performance standards, clean component hierarchies, and resilient backend design. Whether designing complex healthcare EMR platforms or high-volume real estate CRM engines, quality is set in ink.
          </div>
        </div>
      </motion.div>

      {/* ─── CREATIVE INTERACTIVE LIVE TERMINAL SIMULATOR ─── */}
      <motion.div variants={fadeUp} className="max-w-4xl mx-auto">
        <HangingNailCard cardTheme="obsidian" dataCursorLabel="SHELL">
          <LiveTerminal />
        </HangingNailCard>
      </motion.div>

      {/* ─── TAPED STATS CARDS WITH VIBRANT CONTRASTING SCOTCH TAPE STRIPS ─── */}
      <motion.div
        variants={fadeUp}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-4"
      >
        {statsList.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <TapedCard
              key={idx}
              initialRotate={stat.rotate}
              tapePosition="top-corners"
              tapeColor={stat.tapeColor}
              dataCursorLabel="STAT"
              className={`p-5 h-full flex flex-col justify-between ${stat.cardBg} shadow-2xl`}
            >
              <div className="space-y-2 relative z-10 flex flex-col justify-between h-full">
                <div className={`flex items-center justify-between text-xs font-serif font-bold uppercase tracking-wider border-b border-white/20 pb-2 ${stat.accentText}`}>
                  <TextScramble text={stat.label} />
                  <motion.div whileHover={{ rotate: 15, scale: 1.2 }}>
                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                  </motion.div>
                </div>

                <div className={`font-anton text-3xl sm:text-4xl pt-2 tracking-tight group-hover:scale-105 transition-transform origin-left font-black ${stat.accentText}`}>
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </div>

                <div className="text-[11px] font-serif italic font-semibold pt-1 border-t border-white/20 opacity-80">
                  {stat.sub}
                </div>
              </div>
            </TapedCard>
          );
        })}
      </motion.div>

      {/* ─── HANGING NAIL PHOTO EXHIBIT FRAME ─── */}
      <motion.div variants={fadeUp} className="space-y-2">
        <HangingNailCard
          cardTheme="obsidian"
          dataCursorLabel="INSPECT"
          className="p-2 cursor-pointer"
        >
          <div className="relative overflow-hidden group/photo">
            <motion.img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80"
              alt="Source code engine and production build system"
              className="w-full h-[320px] sm:h-[470px] object-cover filter grayscale contrast-125 broadsheet-photo transition-transform duration-700 group-hover/photo:scale-105"
            />
            {/* Rubber stamp overlay */}
            <div className="absolute top-4 right-4 z-20">
              <RubberStamp text="SHIPPED TO PRESS" color="emerald" rotate={6} />
            </div>
          </div>
        </HangingNailCard>
        <div className="border-b border-[#181410] pb-2 pt-1 flex flex-col sm:flex-row items-center justify-between text-xs font-serif uppercase tracking-[0.2em] text-[#181410] gap-2 font-bold">
          <div>Fig. 01 &mdash; The source code engine &amp; production build system, photographed on press day</div>
          <div className="italic font-normal">Silver gelatin print, MMXXVI</div>
        </div>
      </motion.div>
    </motion.section>
  );
}
