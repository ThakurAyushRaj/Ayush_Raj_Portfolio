"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Projects() {
  return (
    <section id="work" className="bg-paper text-ink py-16 border-b-2 border-ink overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center py-3 font-grotesk text-xs tracking-widest uppercase text-ink-muted border-y-2 border-ink mb-12"
        >
          <div>THE EVIDENCE</div>
          <div>Exhibits A – E · Entered 2023 – Now</div>
        </motion.div>

        {/* Works List / Exhibits */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="flex flex-col border-b-2 border-ink"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              id={`exhibit-${project.slug}`}
              variants={fadeUp}
              whileHover={{ backgroundColor: "var(--paper-warm)" }}
              transition={{ duration: 0.3 }}
              className="group relative border-t border-ink py-10 px-4 md:px-8 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between cursor-pointer"
            >
              {/* Framed Screenshot (Left Column) */}
              <div className="w-full lg:w-[42%] shrink-0">
                <motion.div
                  whileHover={{ rotate: -0.5, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative border-2 border-ink p-2.5 bg-paper-bright shadow-sm"
                >
                  {/* Tape Graphic */}
                  <div className="absolute -top-2.5 left-8 w-20 h-4 bg-paper-deep/80 -rotate-2 border-x border-ink/20 pointer-events-none" />

                  <div className="aspect-[16/10] relative overflow-hidden border border-ink/30 bg-paper-warm">
                    <img
                      src={project.imagePlaceholder}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale contrast-125 mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Hover Red Dot Matrix Overlay */}
                    <div className="polaroid-overlay absolute inset-0 pointer-events-none" />

                    {/* Confirmed Vintage Badge */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 rotate-[-4deg]">
                      <span className="border-2 border-stamp text-stamp font-mono text-[10px] font-bold px-2.5 py-1 bg-paper/95 uppercase tracking-widest shadow-xs">
                        {project.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Exhibit Details (Right Column) */}
              <div className="flex-1 flex flex-col justify-between h-full gap-5">
                <div>
                  {/* Exhibit Badge & Status */}
                  <div className="flex items-center gap-3 font-mono text-xs text-ink-muted mb-2">
                    <span className="border border-stamp text-stamp px-2 py-0.5 font-bold uppercase tracking-wider">
                      {project.exhibit} · {project.title}
                    </span>
                    <span className="border border-ink/40 px-2 py-0.5 uppercase tracking-widest text-[10px] bg-paper">
                      Status: {project.status}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-caslon text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-ink group-hover:text-stamp transition-colors duration-200">
                    <Link href={`/case-files/${project.slug}`} className="hover:underline">
                      {project.headline}
                    </Link>
                  </h3>

                  {/* Investigative Summary */}
                  <p className="font-serif italic text-base text-ink-muted mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags Pill Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <motion.span
                      key={t}
                      whileHover={{ scale: 1.05, borderColor: "var(--ink)" }}
                      className="font-mono text-[11px] uppercase tracking-wider px-3 py-1 border border-ink/30 bg-paper/60 text-ink-muted group-hover:border-ink group-hover:text-ink transition-colors cursor-default"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                {/* Open Case File CTA Link */}
                <div className="pt-2">
                  <Link
                    href={`/case-files/${project.slug}`}
                    className="inline-flex items-center gap-2 font-grotesk text-xs font-bold tracking-widest uppercase text-ink group-hover:text-stamp link-pencil"
                  >
                    Open case file →
                  </Link>
                </div>

              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
