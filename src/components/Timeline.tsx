import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Compass, GraduationCap, Briefcase, Award, Sparkles } from 'lucide-react'
import { TIMELINE_DATA } from '../data/portfolioData'

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Developer Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Milestones & <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Growth Path</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            From computer science fundamentals in 2021 to engineering production enterprise products.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-emerald-400 -translate-x-1/2" />

          <div className="space-y-8">
            {TIMELINE_DATA.map((item, idx) => {
              const isEven = idx % 2 === 0
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 z-10 w-9 h-9 rounded-full bg-zinc-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                    {item.type === 'education' ? (
                      <GraduationCap className="w-4 h-4 text-blue-400" />
                    ) : item.type === 'work' ? (
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                    )}
                  </div>

                  {/* Content Box */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="p-5 rounded-2xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200/80 backdrop-blur-xl shadow-xl hover:border-cyan-500/40 transition-all duration-300">
                      
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {item.date}
                        </span>
                        {item.subtitle && (
                          <span className="text-[11px] text-zinc-400 font-medium">
                            {item.subtitle}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-1">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-600 leading-relaxed">
                        {item.description}
                      </p>

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
