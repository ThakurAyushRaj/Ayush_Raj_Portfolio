import React from 'react'
import { motion } from 'framer-motion'
import { Building2, ArrowRight, ShieldCheck } from 'lucide-react'
import { PROFESSIONAL_WORK, ProjectItem } from '../data/portfolioData'

interface ProfessionalWorkProps {
  onSelectProject: (project: ProjectItem) => void
}

export const ProfessionalWork: React.FC<ProfessionalWorkProps> = ({ onSelectProject }) => {
  return (
    <section id="professional-work" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>aNquest Media • Enterprise Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Professional <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Production Systems</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            High-impact software engineering projects developed for client workflows at aNquest Media.
          </p>
        </div>

        {/* Professional Projects Grid using Uiverse.io Card by Javierrocadev */}
        <div className="grid md:grid-cols-2 gap-8">
          {PROFESSIONAL_WORK.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="pro-uiverse-card group cursor-pointer"
              onClick={() => onSelectProject(project)}
            >
              {/* Upper Text Content */}
              <div className="pro-uiverse-text">
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-400/30">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-zinc-800/80 text-zinc-300 border border-zinc-700">
                      {project.organization}
                    </span>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Subtitle / Description */}
                <p className="pro-uiverse-subtitle">
                  {project.description}
                </p>

                {/* Special Visual Diagram for Vobiz Voice API Bridge */}
                {project.diagramType === 'vobiz' && (
                  <div className="my-4 p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs font-mono space-y-2">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-cyan-400">
                      Telephony Call Flow Architectures
                    </div>
                    
                    <div className="p-2 rounded bg-zinc-900/80 flex items-center justify-between">
                      <span className="text-zinc-300">Direct Call:</span>
                      <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-[11px]">
                        <span>Agent</span>
                        <span className="text-zinc-500">→</span>
                        <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">Vobiz API</span>
                        <span className="text-zinc-500">→</span>
                        <span>Lead</span>
                      </div>
                    </div>

                    <div className="p-2 rounded bg-zinc-900/80 flex items-center justify-between">
                      <span className="text-zinc-300">Masked Bridge:</span>
                      <div className="flex items-center gap-1.5 text-emerald-300 font-bold text-[11px]">
                        <span>Agent</span>
                        <span className="text-zinc-500">←</span>
                        <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">Vobiz Bridge</span>
                        <span className="text-zinc-500">→</span>
                        <span>Lead</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-950/80 text-cyan-300 border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Bar (Single View Details Button) */}
              <div className="pro-uiverse-icons">
                <button
                  type="button"
                  className="pro-uiverse-btn"
                  onClick={(e) => {
                    e.stopPropagation()
                    onSelectProject(project)
                  }}
                >
                  <span>View Details</span>
                  <ArrowRight className="pro-uiverse-svg-icon" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
