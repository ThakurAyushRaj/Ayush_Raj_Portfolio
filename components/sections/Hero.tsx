"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo, stats } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";
import ScrollText from "@/components/ui/ScrollText";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  const [imgSrc, setImgSrc] = useState("/api/profile-photo");

  return (
    <section id="home" className="bg-paper text-ink pt-8 pb-16 border-b-2 border-ink overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Category Header Bar */}
        <div className="flex justify-between items-center py-2.5 font-grotesk text-xs tracking-widest uppercase text-ink-muted border-b border-ink/20 mb-10">
          <div>FRONT PAGE</div>
          <div>FILED UNDER: OPEN INVESTIGATIONS</div>
        </div>

        {/* Hero 2-Column Multi-Column Broadsheet Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-12 items-start"
        >
          
          {/* LEFT COLUMN (Case Overview) */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <div>
              <span className="font-mono text-xs tracking-widest text-stamp font-bold uppercase block mb-3">
                CASE NO. 43 — FINDINGS PUBLISHED
              </span>
              
              {/* Scroll-driven text animation for headline */}
              <ScrollText
                text="A Greater Noida web developer who likes building things — front to back."
                className="font-caslon text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] tracking-tight"
              />
            </div>

            {/* Journalistic Bio Quote Block */}
            <div className="border-l-4 border-ink pl-5 py-1">
              <ScrollText
                text="Three years in: Ayush Raj builds full-stack web applications at aNquest Media, and runs select projects on the side. He enjoys the whole process — going from a rough idea to something that ships."
                as="blockquote"
                className="font-serif italic text-lg sm:text-xl text-ink-soft leading-relaxed"
                delay={0.1}
              />
            </div>

            {/* Journalistic Byline */}
            <div className="font-grotesk text-xs tracking-wider uppercase text-ink-muted">
              By The Investigation Desk · Reporting from Greater Noida, between aNquest Media and Open Source
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("work")}
                className="font-grotesk text-xs font-bold tracking-widest uppercase px-6 py-3.5 bg-ink text-paper hover:bg-stamp transition-colors duration-200 shadow-sm"
              >
                Read the work →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("contact")}
                className="font-grotesk text-xs font-bold tracking-widest uppercase px-6 py-3.5 border border-ink text-ink hover:bg-paper-warm transition-colors duration-200"
              >
                Get in touch
              </motion.button>
            </div>

            {/* Metric Cell Box Grid */}
            <div className="border-y-2 border-ink grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-ink text-center mt-4 bg-paper-bright">
              {stats.map((s, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ backgroundColor: "var(--paper-warm)" }}
                  transition={{ duration: 0.2 }}
                  className="p-4 flex flex-col justify-center items-center cursor-default"
                >
                  <span className="font-caslon text-3xl font-bold">{s.value}</span>
                  <span className="font-grotesk text-[10px] tracking-wider uppercase text-ink-muted mt-1">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN (Subject Photo Frame & Tech Stack Bullets) */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            
            {/* Retro Photo Frame */}
            <motion.div
              whileHover={{ rotate: -0.5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative border-2 border-ink p-3 bg-paper-bright shadow-md"
            >
              {/* Polaroid Tape graphic */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-paper-deep/80 -rotate-1 border-x border-ink/20 shadow-xs pointer-events-none" />

              <div className="aspect-square relative overflow-hidden border border-ink/30 bg-paper-warm flex items-center justify-center group">
                <img
                  src={imgSrc}
                  onError={() =>
                    setImgSrc(
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                    )
                  }
                  alt="Ayush Raj"
                  className="w-full h-full object-cover contrast-105 transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="polaroid-overlay absolute inset-0 pointer-events-none" />

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileHover={{ opacity: 1, scale: 1, rotate: -5 }}
                  className="absolute bottom-4 right-4 transition-all duration-300"
                >
                  <span className="border-2 border-stamp text-stamp font-mono text-xs font-bold px-3 py-1 bg-paper/95 uppercase tracking-widest shadow-sm">
                    CONFIRMED
                  </span>
                </motion.div>
              </div>

              <p className="font-serif italic text-xs text-ink-muted text-center mt-3">
                "Pictured: the subject, in his natural habitat."
              </p>
            </motion.div>

            {/* Bullet Points Detailing Core Tech Stack */}
            <div className="border-2 border-ink p-5 bg-paper-bright">
              <span className="font-grotesk text-xs font-bold tracking-widest uppercase text-ink-muted block mb-3 border-b border-ink/20 pb-2">
                PRIMARY TOOLS DETECTED
              </span>
              <ul className="flex flex-col gap-2 font-mono text-xs text-ink">
                <li className="flex items-center gap-2">
                  <span className="text-stamp">▶</span> Next.js & React 18
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-stamp">▶</span> Tailwind CSS & Framer Motion
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-stamp">▶</span> Node.js & Express.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-stamp">▶</span> MongoDB & MySQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-stamp">▶</span> AWS (Amplify · Lambda · S3) & Vercel
                </li>
              </ul>
            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
