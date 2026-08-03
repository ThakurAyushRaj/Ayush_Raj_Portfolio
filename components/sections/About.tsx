"use client";

import { personalInfo, stats } from "@/lib/data";
import { User, Code, Layers, Server, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-6xl mx-auto border-t border-[#232E42]">
      <div className="space-y-12">
        {/* Section Heading */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Building software products that ship and solve real-world problems.
          </h2>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg">
            <p>{personalInfo.about}</p>
            <p className="text-gray-400 text-base">
              With 3+ years of coding and product development experience, I specialize in architecting responsive React/Next.js frontends, scalable Node.js/Express APIs, resilient database schemas in MongoDB/MySQL, and cross-platform mobile apps using React Native and Flutter.
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="clean-card p-4 text-center">
                  <div className="text-2xl font-extrabold text-blue-400">{stat.value}</div>
                  <div className="text-xs font-semibold text-gray-200 mt-1">{stat.label}</div>
                  <div className="text-[11px] text-gray-400">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Capabilities Card */}
          <div className="lg:col-span-5 clean-card p-6 md:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-[#232E42] pb-4 flex items-center gap-2">
              <Cpu size={18} className="text-blue-400" />
              <span>Core Stack Overview</span>
            </h3>

            <div className="space-y-4">
              <div className="space-y-1">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Code size={14} className="text-blue-400" />
                  <span>Frontend Engineering</span>
                </div>
                <div className="text-sm font-medium text-white">React.js, Next.js, TypeScript, Tailwind CSS</div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Server size={14} className="text-blue-400" />
                  <span>Backend & API Architecture</span>
                </div>
                <div className="text-sm font-medium text-white">Node.js, Express.js, RESTful APIs, JWT Auth</div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers size={14} className="text-blue-400" />
                  <span>Mobile & Cloud Infrastructure</span>
                </div>
                <div className="text-sm font-medium text-white">React Native, Flutter, MongoDB, MySQL, AWS, Firebase</div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#232E42]">
              <div className="text-xs text-gray-400">Current Role</div>
              <div className="text-sm font-semibold text-white mt-1">
                Software Development Engineer at <a href={personalInfo.companyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{personalInfo.company}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

