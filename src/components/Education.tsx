import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen } from 'lucide-react'
import { EDUCATION_DATA } from '../data/portfolioData'

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Education & <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Academic Background</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Solid foundation in Computer Science & Engineering principles.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200/80 backdrop-blur-xl shadow-xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-1.5 group-hover:text-cyan-400 transition-colors">
                  {edu.degree}
                </h3>

                <p className="text-xs font-semibold text-cyan-300 mb-3">
                  {edu.institution}
                </p>

                {edu.details && (
                  <p className="text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-600 leading-relaxed">
                    {edu.details}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-800/50 flex items-center gap-1.5 text-[11px] text-zinc-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Academic Record</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
