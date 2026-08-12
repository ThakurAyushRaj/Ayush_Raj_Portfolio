import React from 'react'
import { motion } from 'framer-motion'
import { FolderGit2, Github, ExternalLink, Smartphone, ArrowRight, Bot, Layout, CheckCircle2, Folder } from 'lucide-react'
import { PERSONAL_PROJECTS, ProjectItem } from '../data/portfolioData'
import { FolderCard } from './ui/FolderCard'

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  // Construct 3D folder card vault items dynamically using REAL portfolio data
  const vaultProjects = PERSONAL_PROJECTS.map((proj) => {
    const highlights = proj.highlights || []
    return {
      project: proj,
      title: proj.title,
      description: proj.description,
      techStack: proj.technologies,
      files: [
        { name: highlights[0] || 'Core Architecture', tag: proj.technologies[0] || 'React' },
        { name: highlights[1] || 'Business Workflows', tag: proj.technologies[1] || 'Node.js' },
        { name: highlights[2] || 'Data Management', tag: proj.technologies[2] || proj.technologies[0] },
        { name: highlights[3] || 'System Features', tag: proj.technologies[0] || 'TypeScript' },
        { name: proj.githubUrl ? 'Source Repository' : 'System Documentation', tag: proj.githubUrl ? 'GitHub' : 'Docs' }
      ]
    }
  })

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Independent & Open Source</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Selected <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Personal Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Exploring production applications, mobile clients, and workflow automation tools.
          </p>
        </div>

        {/* 3D Interactive Project Folder Cards Vault */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 p-6 sm:p-10 rounded-3xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white border border-zinc-800/80 backdrop-blur-2xl shadow-2xl overflow-visible"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 mb-2">
              <Folder className="w-3.5 h-3.5" />
              <span>Interactive 3D Deliverable Vault</span>
            </div>
            <h3 className="text-2xl font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
              Click Any Project Folder to Explore Deliverables
            </h3>
            <p className="text-xs text-zinc-400 mt-1">Click a folder card to inspect real code files & view full project details</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 justify-items-center py-10 overflow-visible max-w-5xl mx-auto">
            {vaultProjects.map((vp, i) => (
              <div key={vp.project.id} className="flex flex-col items-center">
                <FolderCard
                  id={`vault-folder-${i}`}
                  title={vp.title}
                  description={vp.description}
                  techStack={vp.techStack}
                  files={vp.files}
                  onViewDetails={() => onSelectProject(vp.project)}
                  onFileClick={() => onSelectProject(vp.project)}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PERSONAL_PROJECTS.map((project, idx) => {
            const isMobileApp = project.technologies.includes('React Native')

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`p-6 rounded-2xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200/80 backdrop-blur-xl shadow-xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group ${
                  isMobileApp ? 'ring-1 ring-purple-500/20' : ''
                }`}
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {project.category}
                    </span>
                    {isMobileApp && (
                      <span className="flex items-center gap-1 text-[11px] font-medium text-amber-400">
                        <Smartphone className="w-3.5 h-3.5" />
                        Mobile Card
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 group-hover:text-cyan-400 transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-600 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Slack Bot Diagram */}
                  {project.diagramType === 'slack' && (
                    <div className="mb-5 p-3 rounded-xl bg-zinc-950/90 border border-zinc-800/80 text-[11px] font-mono">
                      <div className="text-[10px] text-cyan-400 font-bold uppercase mb-1">
                        Workflow Visualization
                      </div>
                      <div className="flex items-center justify-between font-bold text-zinc-300">
                        <span>Slack</span>
                        <span className="text-zinc-600">→</span>
                        <span className="text-blue-400">Node/Express</span>
                        <span className="text-zinc-600">→</span>
                        <span className="text-emerald-400">Google Sheets</span>
                      </div>
                    </div>
                  )}

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-100 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-xs font-medium text-zinc-200 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

