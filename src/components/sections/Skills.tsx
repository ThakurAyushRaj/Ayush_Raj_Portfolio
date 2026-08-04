import { useState } from "react";
import { motion } from "framer-motion";
import HangingNailCard from "@/components/ui/HangingNailCard";
import InkDrawUnderline from "@/components/ui/InkDrawUnderline";
import TextScramble from "@/components/ui/TextScramble";
import InteractiveTechOrbit from "@/components/ui/InteractiveTechOrbit";
import { Code, Server, Smartphone } from "lucide-react";

export default function Skills() {
  const skillDesks = [
    {
      desk: "DESK I",
      category: "FRONTEND & WEB SYSTEMS",
      theme: "navy" as const,
      icon: Code,
      accent: "text-[#38bdf8]",
      skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "HTML5 & CSS3", "Framer Motion"],
      blurb: "Type-safe modular web applications built with strict component hierarchies and fluid motion.",
    },
    {
      desk: "DESK II",
      category: "BACKEND & MICROSERVICES",
      theme: "emerald" as const,
      icon: Server,
      accent: "text-[#34d399]",
      skills: ["Node.js", "Express.js", "REST APIs", "MongoDB & Mongoose", "MySQL & PostgreSQL", "Firebase"],
      blurb: "Asynchronous microservices, secure authentication pipelines, and transactional database schemas.",
    },
    {
      desk: "DESK III",
      category: "MOBILE & ARCHITECTURE",
      theme: "burgundy" as const,
      icon: Smartphone,
      accent: "text-[#fb923c]",
      skills: ["React Native", "Flutter & Dart", "FCM Push Sync", "Google Workspace OAuth", "Vobiz Voice API", "AWS Cloud"],
      blurb: "Cross-platform mobile suites, real-time push notifications, telephony integration, and cloud deployments.",
    },
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#181410] text-[#181410] space-y-16">
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
            <TextScramble text="02 // ENGINE MATRIX & TECHNICAL DISCIPLINE" />
          </span>
          <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-[#181410] mt-1 font-black">
            <InkDrawUnderline color="#c5a059">
              <TextScramble text="ENGINE MATRIX & SKILLS" as="span" />
            </InkDrawUnderline>
          </h2>
        </div>
        <div className="text-xs font-serif uppercase tracking-[0.2em] text-[#524b42]">
          <TextScramble text="WHAT WE ENGINEER, COLUMN BY COLUMN" />
        </div>
      </motion.div>

      {/* ─── INTERACTIVE SYSTEM ARCHITECTURE LABORATORY (BLACK & WHITE TAPED CARD) ─── */}
      <InteractiveTechOrbit />

      {/* ─── THREE HANGING DESK CARDS WITH CONTRASTING COLORS ─── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {skillDesks.map((desk, idx) => {
          const Icon = desk.icon;
          return (
            <motion.div
              key={desk.desk}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <HangingNailCard
                cardTheme={desk.theme}
                dataCursorLabel="DESK"
                className="p-6 h-full flex flex-col justify-between"
              >
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between border-b border-white/20 pb-3">
                    <span className="text-xs font-serif font-black uppercase tracking-[0.25em] opacity-80">
                      {desk.desk}
                    </span>
                    <Icon size={18} className={desk.accent} />
                  </div>

                  <h3 className={`font-anton text-xl uppercase tracking-tight font-black ${desk.accent}`}>
                    <TextScramble text={desk.category} as="span" />
                  </h3>

                  <p className="text-xs font-serif leading-relaxed opacity-90 broadsheet-justify italic">
                    {desk.blurb}
                  </p>

                  <div className="pt-2 border-t border-white/20 space-y-2">
                    <div className="text-[10px] font-serif uppercase tracking-[0.2em] font-bold opacity-70">
                      CORE TECHNOLOGIES:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {desk.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 border border-white/30 text-[10px] font-serif uppercase tracking-widest bg-black/60 font-bold"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </HangingNailCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
