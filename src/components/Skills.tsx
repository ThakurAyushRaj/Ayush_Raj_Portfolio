import React from 'react'
import { motion } from 'framer-motion'
import { 
  Cpu, 
  Code2, 
  Layout, 
  Database, 
  Cloud, 
  Terminal, 
  Smartphone, 
  Server, 
  Flame, 
  GitBranch,
  FileCode,
  Palette,
  Braces,
  Zap,
  Globe
} from 'lucide-react'
import { GlassIcons, GlassIconsItem } from './ui/GlassIcons'

export const Skills: React.FC = () => {
  const glassTechItems: GlassIconsItem[] = [
    // Programming Languages & Web Standards
    { icon: <Code2 className="w-6 h-6" />, color: 'amber', label: 'JavaScript' },
    { icon: <Code2 className="w-6 h-6" />, color: 'orange', label: 'TypeScript' },
    { icon: <FileCode className="w-6 h-6" />, color: 'sky', label: 'Dart' },
    { icon: <FileCode className="w-6 h-6" />, color: 'red', label: 'HTML5' },
    { icon: <Palette className="w-6 h-6" />, color: 'indigo', label: 'CSS3' },
    { icon: <Braces className="w-6 h-6" />, color: 'pink', label: 'C / C++' },
    { icon: <Terminal className="w-6 h-6" />, color: 'blue', label: 'Python' },
    { icon: <Database className="w-6 h-6" />, color: 'cyan', label: 'SQL' },
    
    // Frameworks & Mobile SDKs
    { icon: <Layout className="w-6 h-6" />, color: 'blue', label: 'React.js' },
    { icon: <Smartphone className="w-6 h-6" />, color: 'cyan', label: 'React Native' },
    { icon: <Smartphone className="w-6 h-6" />, color: 'teal', label: 'Flutter' },
    { icon: <Zap className="w-6 h-6" />, color: 'emerald', label: 'Tailwind CSS' },
    
    // Backend Runtimes, Databases & Cloud Tools
    { icon: <Terminal className="w-6 h-6" />, color: 'emerald', label: 'Node.js' },
    { icon: <Server className="w-6 h-6" />, color: 'green', label: 'Express.js' },
    { icon: <Globe className="w-6 h-6" />, color: 'purple', label: 'REST APIs' },
    { icon: <Database className="w-6 h-6" />, color: 'teal', label: 'MongoDB' },
    { icon: <Database className="w-6 h-6" />, color: 'indigo', label: 'PostgreSQL' },
    { icon: <Database className="w-6 h-6" />, color: 'blue', label: 'MySQL' },
    { icon: <Flame className="w-6 h-6" />, color: 'red', label: 'Firebase' },
    { icon: <Cloud className="w-6 h-6" />, color: 'purple', label: 'AWS' },
    { icon: <GitBranch className="w-6 h-6" />, color: 'rose', label: 'Git & GitHub' }
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Skills & <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Technology Stack</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Verified production toolset and programming languages showcased with 3D glassmorphic interactive cards.
          </p>
        </div>

        {/* 3D GlassIcons Interactive Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-10 rounded-3xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200 backdrop-blur-2xl shadow-2xl overflow-hidden"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
              Interactive Tech Stack & Languages
            </h3>
            <p className="text-xs text-zinc-400 mt-1">Hover over any 3D glass icon to explore languages & technologies</p>
          </div>
          
          <GlassIcons items={glassTechItems} className="max-w-5xl" />
        </motion.div>

      </div>
    </section>
  )
}

