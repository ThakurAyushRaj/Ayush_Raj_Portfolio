"use client";

import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#232E42] bg-[#0B0F17] py-10 px-4 text-sm text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-semibold text-gray-200">{personalInfo.name}</span> — {personalInfo.title}
        </div>
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-blue-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-[#232E42]/60 text-xs text-center text-gray-500">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Built with Next.js, React & Tailwind CSS.
      </div>
    </footer>
  );
}

