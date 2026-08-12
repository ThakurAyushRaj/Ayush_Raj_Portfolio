import React from 'react'
import { motion } from 'framer-motion'
import { Compass, Cpu, Server, Cloud, Network, ShieldCheck, ArrowRight } from 'lucide-react'
import { ENGINEERING_FOCUS_ITEMS } from '../data/portfolioData'

export const EngineeringFocus: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-zinc-900/90 border border-cyan-500/30 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          
          {/* Subtle Glow Circle */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>Engineering Focus</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Currently Exploring & <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Deepening Expertise</span>
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Actively expanding capabilities in cloud infrastructure and distributed systems to build high-availability backend architectures.
              </p>

              <div className="pt-4 flex items-center gap-4 text-xs font-mono text-cyan-400">
                <div className="flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-purple-400" />
                  <span>AWS Services</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-blue-400" />
                  <span>System Design</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-3">
                {ENGINEERING_FOCUS_ITEMS.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 hover:border-cyan-500/40 text-xs font-medium text-zinc-200 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                      <span>{item}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
