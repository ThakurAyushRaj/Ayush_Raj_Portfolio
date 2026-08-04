import { personalInfo } from "@/lib/data";
import { Download, Sparkles, Code2, Server, Layers, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import InkDrawUnderline from "@/components/ui/InkDrawUnderline";
import TextScramble from "@/components/ui/TextScramble";
import PressSeal from "@/components/ui/PressSeal";
import TiltCard from "@/components/ui/TiltCard";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  const statsList = [
    { value: 4, suffix: "+ YRS", label: "PRODUCTION PRESS", sub: "FULL-STACK SDE EXPERIENCE", icon: Code2 },
    { value: 10, suffix: "+", label: "PRODUCTION APPS", sub: "CRM, EMR & MOBILE SUITES", icon: Server },
    { value: 99, suffix: ".9%", label: "SYSTEM UPTIME", sub: "RESILIENT MICROSERVICES", icon: Cpu },
    { value: 100, suffix: "%", label: "TYPE SAFETY", sub: "REACT, TYPESCRIPT & NODE", icon: Layers },
  ];

  return (
    <motion.section
      id="hero"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="py-10 px-4 sm:px-8 max-w-7xl mx-auto space-y-10 text-[#181410] relative"
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

        <a
          href={personalInfo.resume}
          download="Ayush_Raj_CV.docx"
          data-cursor-label="CV (.DOCX)"
          className="px-4 py-2 bg-[#181410] text-[#f4f1ea] hover:bg-[#302922] transition-all hover:scale-105 text-xs font-serif uppercase tracking-[0.2em] font-bold flex items-center gap-2 border border-[#181410] shrink-0 shadow-md cursor-pointer"
        >
          <Download size={14} />
          <span>DOWNLOAD CURRICULUM VITAE (.DOCX)</span>
        </a>
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
      <motion.div variants={fadeUp} className="max-w-[920px] mx-auto border-y border-[#181410] py-8 my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#181410] text-[#181410]">
          <div className="broadsheet-dropcap broadsheet-justify text-base sm:text-lg leading-relaxed font-serif pr-0 md:pr-4">
            Hi, I&apos;m <strong>{personalInfo.name}</strong>, a Software Development Engineer at {personalInfo.company} dedicated to crafting robust digital products, high-throughput microservices, and elegant web &amp; mobile interfaces. With deep expertise across modern MERN/MEAN architectures, React Native, and Flutter, I engineer software built to endure.
          </div>
          <div className="broadsheet-justify text-base sm:text-lg leading-relaxed font-serif pt-6 md:pt-0 md:pl-8">
            From architecture to production rollout, every system is constructed with strict performance standards, clean component hierarchies, and resilient backend design. Whether designing complex healthcare EMR platforms or high-volume real estate CRM engines, quality is set in ink.
          </div>
        </div>
      </motion.div>

      {/* ─── ANIMATED METRICS / STATS BANNER WITH 3D TILT ─── */}
      <motion.div
        variants={fadeUp}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-4"
      >
        {statsList.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <TiltCard key={idx} tiltAmount={10} scaleAmount={1.03}>
              <div
                data-cursor-label="STAT"
                className="p-5 bg-[#181410] text-[#f4f1ea] border-2 border-[#181410] space-y-1 shadow-lg relative group overflow-hidden h-full flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                <div className="flex items-center justify-between text-[#c5a059] text-xs font-serif font-bold uppercase tracking-wider">
                  <TextScramble text={stat.label} />
                  <Icon size={16} />
                </div>

                <div className="font-anton text-3xl sm:text-4xl text-[#e5c178] pt-2">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </div>

                <div className="text-[11px] font-serif italic text-[#d2c9b8] font-semibold pt-1">
                  {stat.sub}
                </div>
              </div>
            </TiltCard>
          );
        })}
      </motion.div>

      {/* ─── FULL-WIDTH FRAMED B&W FIGURE WITH 3D TILT & HOVER INTERACTION ─── */}
      <motion.div variants={fadeUp} className="space-y-2">
        <TiltCard tiltAmount={6} scaleAmount={1.01}>
          <div
            data-cursor-label="INSPECT"
            className="border border-[#181410] p-1 bg-[#181410]/5 overflow-hidden group relative cursor-pointer"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80"
              alt="Source code engine and production build system"
              className="w-full h-[320px] sm:h-[470px] object-cover filter grayscale contrast-150 brightness-90 broadsheet-photo transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 bg-[#181410]/90 text-[#c5a059] border border-[#c5a059] px-3 py-1 text-xs font-serif uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              ✦ HIGH-THROUGHPUT CODE ENGINE
            </div>
          </div>
        </TiltCard>
        <div className="border-b border-[#181410] pb-2 pt-1 flex flex-col sm:flex-row items-center justify-between text-xs font-serif uppercase tracking-[0.2em] text-[#181410] gap-2 font-bold">
          <div>Fig. 01 &mdash; The source code engine &amp; production build system, photographed on press day</div>
          <div className="italic font-normal">Silver gelatin print, MMXXVI</div>
        </div>
      </motion.div>
    </motion.section>
  );
}
