"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { experiences } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="bg-paper text-ink py-16 border-b-2 border-ink overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center py-3 font-grotesk text-xs tracking-widest uppercase text-ink-muted border-y-2 border-ink mb-12"
        >
          <div>KNOWN WHEREABOUTS</div>
          <div>CAREER TIMELINE & DETECTIVE LOGS</div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <span className="font-mono text-xs tracking-widest text-stamp font-bold uppercase block mb-2">
            LEGAL RECORD LOG
          </span>
          <h2 className="font-caslon text-4xl sm:text-5xl font-normal leading-tight">
            Chronological movements and professional history.
          </h2>
        </motion.div>

        {/* Detective Record Logs Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col border-b-2 border-ink divide-y divide-ink border-t-2"
        >
          {experiences.map((exp) => (
            <motion.article
              key={exp.id}
              variants={fadeUp}
              whileHover={{ backgroundColor: "var(--paper-warm)" }}
              transition={{ duration: 0.2 }}
              className="py-10 px-4 md:px-8 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 cursor-default bg-paper-bright"
            >
              {/* Left Column Chronological Dates */}
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs font-bold text-stamp uppercase tracking-widest border border-stamp px-2.5 py-0.5 w-max">
                  RECORD NO. 0{exp.id} · {exp.type}
                </span>
                <span className="font-mono text-sm font-bold text-ink uppercase tracking-wider mt-1">
                  {exp.period}
                </span>
                <span className="font-mono text-xs text-ink-muted uppercase tracking-wider">
                  {exp.location}
                </span>
              </div>

              {/* Right Column Detective Details */}
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-caslon text-2xl sm:text-3xl font-normal text-ink">
                    {exp.role}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-grotesk text-xs font-bold tracking-widest uppercase text-ink hover:text-stamp link-pencil mt-1"
                  >
                    {exp.company} <ExternalLink size={12} />
                  </a>
                </div>

                <ul className="flex flex-col gap-2.5 mt-2">
                  {exp.bullets.map((b, idx) => (
                    <li key={idx} className="font-serif text-base text-ink-soft leading-relaxed flex items-start gap-3">
                      <span className="font-mono text-xs text-stamp font-bold mt-1">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
