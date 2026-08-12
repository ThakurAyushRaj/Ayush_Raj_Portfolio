import React from 'react'
import { motion } from 'framer-motion'
import { 
  Layers, 
  Layout, 
  Building2, 
  Activity, 
  Server, 
  Smartphone, 
  PhoneCall, 
  MessageSquare, 
  Bot, 
  Zap, 
  ArrowUpRight 
} from 'lucide-react'
import { WHAT_I_BUILD_ITEMS } from '../data/portfolioData'

export const WhatIBuild: React.FC = () => {
  const icons = [
    <Layout className="w-5 h-5 text-blue-400" />,
    <Building2 className="w-5 h-5 text-cyan-400" />,
    <Activity className="w-5 h-5 text-emerald-400" />,
    <Server className="w-5 h-5 text-purple-400" />,
    <Smartphone className="w-5 h-5 text-amber-400" />,
    <PhoneCall className="w-5 h-5 text-rose-400" />,
    <MessageSquare className="w-5 h-5 text-green-400" />,
    <Bot className="w-5 h-5 text-indigo-400" />,
    <Zap className="w-5 h-5 text-sky-400" />
  ]

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Software Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            What I <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">Engineer & Build</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Domains and production software solutions built across web, mobile, and backend microservices.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHAT_I_BUILD_ITEMS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200/80 backdrop-blur-xl shadow-xl hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/60 group-hover:scale-110 transition-transform">
                    {icons[idx]}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                </div>
                
                <h3 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
