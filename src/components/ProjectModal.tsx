import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, ShieldCheck, Cpu, Code2, Layers, CheckCircle2, UserCheck } from 'lucide-react'
import { ProjectItem } from '../data/portfolioData'

interface ProjectModalProps {
  project: ProjectItem | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Modal Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-zinc-950 dark:bg-zinc-950 light:bg-white border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header Bar */}
          <div className="p-6 bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-zinc-100 border-b border-zinc-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {project.category}
              </span>
              {project.isProfessional && (
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {project.organization || 'aNquest Media'}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
              aria-label="Close Project Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {/* Title & Description */}
            <div>
              <h3 className="text-2xl font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {project.problem && (
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-1.5">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    The Challenge / Problem
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}
              {project.solution && (
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-1.5">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    Architectural Solution
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>

            {/* My Contribution */}
            {project.myContribution && (
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                  <UserCheck className="w-4 h-4" />
                  <span>Ayush's Core Contribution</span>
                </div>
                <p className="text-xs text-zinc-200 leading-relaxed">
                  {project.myContribution}
                </p>
              </div>
            )}

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                Key Features & Capabilities
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2">
                {project.highlights.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                Technologies Employed
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-zinc-900 text-cyan-300 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-6 bg-zinc-900/80 border-t border-zinc-800/80 flex items-center justify-between gap-4">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source on GitHub</span>
              </a>
            ) : (
              <span className="text-xs text-zinc-500 font-mono">Internal Production Codebase</span>
            )}

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold hover:from-blue-500 hover:to-cyan-400 transition-colors"
            >
              Close Details
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  )
}
