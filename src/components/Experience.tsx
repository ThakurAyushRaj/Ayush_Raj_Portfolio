import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Sparkles, Building2 } from 'lucide-react'
import { EXPERIENCE_DATA } from '../data/portfolioData'

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Production Engineering at <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">aNquest Media</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Demonstrating career growth and direct full-time conversion in production software engineering.
          </p>
        </div>

        {/* Career Growth Progression Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-14 p-5 rounded-2xl bg-gradient-to-r from-blue-900/30 via-cyan-900/20 to-zinc-900/40 border border-cyan-500/30 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Career Progression</div>
              <div className="text-base font-bold text-white flex items-center gap-2 flex-wrap mt-0.5">
                <span className="text-zinc-300">SDE Intern</span>
                <span className="text-cyan-400 font-extrabold">→</span>
                <span className="text-cyan-300 font-extrabold">Software Development Engineer (Full-Time)</span>
              </div>
            </div>
          </div>
          <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold whitespace-nowrap">
            Converted to SDE Full-Time
          </div>
        </motion.div>

        {/* Vertical Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-zinc-800 -translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((role, idx) => {
              const isEven = idx % 2 === 0
              return (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 z-10 w-8 h-8 rounded-full bg-zinc-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <div className={`w-3 h-3 rounded-full ${role.isInternship ? 'bg-amber-400' : 'bg-cyan-400'}`} />
                  </div>

                  {/* Content Box */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200/80 backdrop-blur-xl shadow-xl hover:border-cyan-500/40 transition-all duration-300 group">
                      
                      {/* Header */}
                      <div className="flex flex-col space-y-1 mb-4">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className={`px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wide ${
                            role.isInternship 
                              ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
                              : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                          }`}>
                            {role.isInternship ? 'Internship Role' : 'Full-Time Role'}
                          </span>
                          <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{role.period}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 group-hover:text-cyan-400 transition-colors">
                          {role.title}
                        </h3>

                        <div className="flex items-center gap-3 text-xs text-zinc-400 font-medium">
                          <span className="flex items-center gap-1 text-zinc-300">
                            <Building2 className="w-3.5 h-3.5 text-blue-400" />
                            {role.company}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                            {role.location}
                          </span>
                        </div>
                      </div>

                      {/* Responsibilities List */}
                      <ul className="space-y-2.5 pt-2 border-t border-zinc-800/60">
                        {role.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-600 leading-normal">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </motion.div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
