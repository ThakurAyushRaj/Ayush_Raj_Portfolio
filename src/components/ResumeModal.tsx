import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Printer, FileText, CheckCircle2, Building2, MapPin, Mail, Phone, Globe, Github, Linkedin } from 'lucide-react'
import { PERSONAL_INFO, EXPERIENCE_DATA, EDUCATION_DATA, SKILLS_DATA, PROFESSIONAL_WORK } from '../data/portfolioData'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-zinc-950 dark:bg-zinc-950 light:bg-white border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Modal Header */}
          <div className="p-4 sm:p-6 bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-zinc-100 border-b border-zinc-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-cyan-400" />
              <div>
                <h3 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
                  Ayush Raj — Resume
                </h3>
                <span className="text-xs text-zinc-400">Full Stack Developer CV</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>
              
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                aria-label="Close Resume Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content Container */}
          <div className="p-6 sm:p-10 space-y-8 max-h-[75vh] overflow-y-auto bg-zinc-950 dark:bg-zinc-950 light:bg-white text-zinc-100 dark:text-zinc-100 light:text-zinc-900 print:text-black">
            
            {/* Header / Info */}
            <div className="border-b border-zinc-800 pb-6 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-white dark:text-white light:text-zinc-900">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-base font-semibold text-cyan-400 dark:text-cyan-400 light:text-blue-600 mt-0.5">
                  {PERSONAL_INFO.title}
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-1">
                  {PERSONAL_INFO.location}
                </p>
              </div>

              <div className="text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700 space-y-1 font-mono">
                <div>Email: {PERSONAL_INFO.email}</div>
                <div>Phone: {PERSONAL_INFO.phone}</div>
                <div>LinkedIn: {PERSONAL_INFO.linkedinDisplay}</div>
                <div>GitHub: {PERSONAL_INFO.githubDisplay}</div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-zinc-800/80 pb-1">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed">
                Full-stack developer experienced in building and shipping production features across the MERN and MEAN stacks, React Native, and Flutter. Currently working at aNquest Media, developing CRM and EMR products powering lead and patient workflows for real estate and healthcare clients. Technical foundation includes REST API development, relational/NoSQL databases, and expanding expertise in AWS and system design.
              </p>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-zinc-800/80 pb-1">
                Work Experience
              </h2>
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.title} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold">
                    <span className="text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
                      {exp.title} — <span className="text-cyan-300">{exp.company}</span>
                    </span>
                    <span className="text-zinc-400 font-mono text-xs">{exp.period}</span>
                  </div>
                  <div className="text-[11px] text-zinc-400">{exp.location}</div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700 pl-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Production Work & Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-zinc-800/80 pb-1">
                Production Systems & Major Projects
              </h2>
              {PROFESSIONAL_WORK.map((proj) => (
                <div key={proj.id} className="text-xs space-y-1">
                  <div className="font-bold text-zinc-200 dark:text-zinc-200 light:text-zinc-900">
                    {proj.title} <span className="text-zinc-400 font-normal">({proj.organization})</span>
                  </div>
                  <div className="text-zinc-400">{proj.description}</div>
                  <div className="text-[11px] text-cyan-400 font-mono">
                    Technologies: {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-zinc-800/80 pb-1">
                Education
              </h2>
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.degree} className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-zinc-200 dark:text-zinc-200 light:text-zinc-900">{edu.degree}</span>
                    <span className="text-zinc-400 ml-2">— {edu.institution}</span>
                  </div>
                  <span className="text-zinc-400 font-mono">{edu.period}</span>
                </div>
              ))}
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-zinc-800/80 pb-1">
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {Object.entries(SKILLS_DATA).map(([cat, skills]) => (
                  <div key={cat}>
                    <span className="font-bold text-zinc-300">{cat}:</span>{' '}
                    <span className="text-zinc-400">{skills.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="p-4 bg-zinc-900/90 border-t border-zinc-800/80 flex items-center justify-between">
            <span className="text-xs text-zinc-400 font-mono">Factually Verified Portfolio CV</span>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  )
}
