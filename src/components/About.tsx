import React from 'react'
import { motion } from 'framer-motion'
import { User, Building2, MapPin, Cpu, Database, Server, Compass, GraduationCap, Award } from 'lucide-react'
import { PERSONAL_INFO } from '../data/portfolioData'

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Building Real-World <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Production Software</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Full-stack engineer focusing on high-reliability CRM and EMR software platforms.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200/80 backdrop-blur-xl shadow-xl space-y-4">
              
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
                Professional Overview & Background
              </h3>

              <div className="space-y-4 text-zinc-300 dark:text-zinc-300 light:text-zinc-600 text-sm sm:text-base leading-relaxed">
                <p>
                  {PERSONAL_INFO.aboutStory[0]}
                </p>
                <p className="border-l-2 border-cyan-500/80 pl-4 text-zinc-200 dark:text-zinc-200 light:text-zinc-800 font-medium">
                  {PERSONAL_INFO.aboutStory[1]}
                </p>
                <p>
                  {PERSONAL_INFO.aboutStory[2]}
                </p>
                <p>
                  {PERSONAL_INFO.aboutStory[3]}
                </p>
              </div>

              {/* Quick Info Tags */}
              <div className="pt-4 border-t border-zinc-800/60 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase font-bold">Company</div>
                    <div className="text-xs font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800">aNquest Media</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase font-bold">Location</div>
                    <div className="text-xs font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800">Greater Noida, India</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase font-bold">Focus</div>
                    <div className="text-xs font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800">AWS & System Design</div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col space-y-4"
          >
            {/* Feature Box 1 */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200/80 backdrop-blur-md flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 text-sm">
                  Production Database Architecture
                </h4>
                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-1 leading-relaxed">
                  Designing relational (MySQL, PostgreSQL) and NoSQL (MongoDB) schemas tailored for rapid lead routing and patient history persistence.
                </p>
              </div>
            </div>

            {/* Feature Box 2 */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200/80 backdrop-blur-md flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 text-sm">
                  RESTful APIs & Microservices
                </h4>
                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-1 leading-relaxed">
                  Developing high-throughput Node.js & Express APIs handling business workflows, authentication, and external webhook integrations.
                </p>
              </div>
            </div>

            {/* Feature Box 3 */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200/80 backdrop-blur-md flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 text-sm">
                  Voice & Meta Business Automation
                </h4>
                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-1 leading-relaxed">
                  Integrating Vobiz Telephony API for direct & bridge calling, alongside Meta WhatsApp Business API for automated lead follow-ups.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
