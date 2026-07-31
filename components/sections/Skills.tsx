"use client";

import { motion } from "framer-motion";
import { forensicsTable } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Skills() {
  return (
    <section id="stack" className="bg-paper text-ink py-16 border-b-2 border-ink overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center py-3 font-grotesk text-xs tracking-widest uppercase text-ink-muted border-y-2 border-ink mb-10"
        >
          <div>FORENSICS</div>
          <div>THE LAB REPORT / TECH STACK TABLE</div>
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="font-mono text-xs tracking-widest text-stamp font-bold uppercase block mb-2">
              LAB DIAGNOSTIC SUMMARY
            </span>
            <h2 className="font-caslon text-4xl sm:text-5xl font-normal leading-tight">
              Substances detected on the subject.
            </h2>
          </div>
          <p className="font-serif italic text-sm text-ink-muted max-w-xs">
            Findings are illustrative — what he reaches for day to day, not an arbitrary ranking.
          </p>
        </motion.div>

        {/* Investigation Evidence Table */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="border-2 border-ink overflow-x-auto bg-paper-bright shadow-sm"
        >
          
          {/* Table Header */}
          <div className="bg-ink text-paper font-grotesk text-xs font-bold tracking-widest uppercase grid grid-cols-12 px-6 py-3.5 min-w-[700px]">
            <div className="col-span-4">SUBSTANCE</div>
            <div className="col-span-2">CODE</div>
            <div className="col-span-3">DETECTED</div>
            <div className="col-span-3 text-right">FINDING</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-ink/20 min-w-[700px]">
            {forensicsTable.map((row, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ backgroundColor: "var(--paper-warm)" }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-12 px-6 py-4 items-center cursor-default"
              >
                <div className="col-span-4 font-caslon text-xl font-normal text-ink">
                  {row.substance}
                </div>
                <div className="col-span-2 font-mono text-xs text-stamp font-bold tracking-wider">
                  [{row.code}]
                </div>
                <div className="col-span-3 font-mono text-xs text-ink-muted uppercase tracking-wider">
                  {row.detected}
                </div>
                <div className="col-span-3 text-right">
                  <motion.span
                    whileHover={{ scale: 1.08, rotate: 0 }}
                    className={`inline-block font-mono text-[10px] font-bold tracking-widest px-3 py-1 border uppercase transition-transform ${
                      row.isPrimary
                        ? "border-stamp text-stamp bg-paper/80 -rotate-1"
                        : "border-ink/40 text-ink-muted rotate-1"
                    }`}
                  >
                    {row.finding}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
