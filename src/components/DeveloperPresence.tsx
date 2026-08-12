import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, ExternalLink, Code2, FolderGit2, Mail, Phone, FileText, Globe } from 'lucide-react'
import { PERSONAL_INFO, PERSONAL_PROJECTS } from '../data/portfolioData'
import { GlassIcons, GlassIconsItem } from './ui/GlassIcons'

export const DeveloperPresence: React.FC = () => {
  const presenceGlassItems: GlassIconsItem[] = [
    { icon: <Github className="w-6 h-6" />, color: 'purple', label: 'GitHub', href: PERSONAL_INFO.github },
    { icon: <Linkedin className="w-6 h-6" />, color: 'blue', label: 'LinkedIn', href: PERSONAL_INFO.linkedin },
    { icon: <Mail className="w-6 h-6" />, color: 'red', label: 'Email', href: `mailto:${PERSONAL_INFO.email}` },
    { icon: <Phone className="w-6 h-6" />, color: 'emerald', label: 'Contact', href: `tel:${PERSONAL_INFO.phone}` },
    { icon: <FileText className="w-6 h-6" />, color: 'orange', label: 'Resume', href: PERSONAL_INFO.github },
    { icon: <Globe className="w-6 h-6" />, color: 'cyan', label: 'Portfolio', href: '#' }
  ]

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Github className="w-3.5 h-3.5" />
            <span>Developer Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            GitHub & <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Professional Presence</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Connect across GitHub, LinkedIn, and developer platforms through 3D glass interactive links.
          </p>
        </div>

        {/* 3D GlassIcons Interactive Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 sm:p-8 rounded-3xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white border border-zinc-800/80 backdrop-blur-xl shadow-xl overflow-hidden"
        >
          <GlassIcons items={presenceGlassItems} className="max-w-4xl" />
        </motion.div>

        {/* Top Direct Profiles Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          
          {/* GitHub Profile Card */}
          <motion.a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-zinc-900/50 dark:bg-zinc-900/50 light:bg-white border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200/80 backdrop-blur-xl shadow-xl hover:border-cyan-500/50 hover:shadow-cyan-500/10 transition-all duration-300 flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-zinc-800 text-white group-hover:scale-110 transition-transform">
                <Github className="w-7 h-7" />
              </div>
              <div>
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">GitHub Profile</div>
                <div className="text-lg font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 group-hover:text-cyan-300 transition-colors">
                  {PERSONAL_INFO.githubDisplay}
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">Explore open source repositories & code snippets</div>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
          </motion.a>

          {/* LinkedIn Profile Card */}
          <motion.a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-zinc-900/50 dark:bg-zinc-900/50 light:bg-white border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200/80 backdrop-blur-xl shadow-xl hover:border-blue-500/50 hover:shadow-blue-500/10 transition-all duration-300 flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-blue-600/20 text-blue-400 group-hover:scale-110 transition-transform border border-blue-500/30">
                <Linkedin className="w-7 h-7" />
              </div>
              <div>
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">LinkedIn Profile</div>
                <div className="text-lg font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 group-hover:text-blue-300 transition-colors">
                  {PERSONAL_INFO.linkedinDisplay}
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">Connect for career opportunities & engineering insights</div>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 transition-colors" />
          </motion.a>

        </div>

        {/* Public Repository Showcase List */}
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950/80 dark:bg-zinc-950/80 light:bg-zinc-100 border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-300">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800/60">
            <div className="flex items-center gap-2 text-sm font-bold text-zinc-200">
              <FolderGit2 className="w-4 h-4 text-cyan-400" />
              <span>Public Repositories Directory</span>
            </div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-cyan-400 hover:underline flex items-center gap-1"
            >
              <span>View Profile on GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {PERSONAL_PROJECTS.filter(p => p.githubUrl).map((repo) => (
              <a
                key={repo.id}
                href={repo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-800 hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5" />
                      {repo.title}
                    </span>
                    <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-cyan-400" />
                  </div>
                  <p className="text-xs text-zinc-400 line-clamp-2 mt-1">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-3 pt-2 border-t border-zinc-800/50">
                  {repo.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] font-mono text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
