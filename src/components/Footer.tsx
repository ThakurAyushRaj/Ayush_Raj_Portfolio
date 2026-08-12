import React from 'react'
import { Github, Linkedin, Mail, ArrowUp, Code2 } from 'lucide-react'
import { PERSONAL_INFO } from '../data/portfolioData'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950/90 dark:bg-zinc-950/90 light:bg-zinc-100 text-zinc-400 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800/60">
          
          {/* Brand & Location */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2 font-bold text-lg text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
              <Code2 className="w-5 h-5 text-cyan-400" />
              <span>{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-xs text-cyan-400 font-semibold">{PERSONAL_INFO.title}</p>
            <p className="text-xs text-zinc-500">{PERSONAL_INFO.location}</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800/80 text-zinc-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800/80 text-zinc-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800/80 text-zinc-400 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll To Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800/80 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400" />
          </button>

        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-xs text-zinc-500 font-mono">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}
