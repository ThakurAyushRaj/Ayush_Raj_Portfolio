import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "@/lib/data";
import { ExternalLink, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function CaseFilePage() {
  const { slug } = useParams<{ slug: string }>();
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    return <Navigate to="/" replace />;
  }

  const project = projects[projectIndex];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#181410] pb-20 pt-10 font-serif">
      {/* Top Bar */}
      <div className="border-y border-[#181410] py-3 px-4 md:px-8 bg-[#181410] text-[#f4f1ea] text-xs font-serif tracking-widest uppercase flex flex-wrap justify-between items-center">
        <Link to="/#projects" className="font-bold text-[#c5a059] hover:text-[#e5c178] flex items-center gap-1.5 transition-colors">
          <ArrowLeft size={14} /> BACK TO PORTFOLIO PAGES [03]
        </Link>
        <div className="hidden sm:block font-semibold text-[#d2c9b8]/80">BROADSHEET CASE FILE ARCHIVE</div>
        <div className="font-bold text-[#c5a059]">{project.exhibit || "EXHIBIT"} // {project.slug.toUpperCase()}</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-block bg-[#181410] text-[#c5a059] px-3 py-1 font-bold text-xs uppercase tracking-widest border border-[#c5a059]">
            EXHIBIT SPECIFICATION // {project.scope.toUpperCase()}
          </div>

          <h1 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[0.95] text-[#181410]">
            {project.headline}
          </h1>

          <blockquote className="border-l-4 border-[#c5a059] pl-6 py-3 text-lg sm:text-2xl font-serif italic font-semibold text-[#181410] leading-relaxed bg-[#181410]/5">
            {project.subtitle}
          </blockquote>

          <div className="text-xs font-serif uppercase tracking-widest text-[#524b42] border-b border-[#181410] pb-4 font-bold flex flex-wrap items-center gap-4">
            <span>DISPATCH FILED BY: <strong className="text-[#181410]">AYUSH RAJ</strong></span>
            <span>•</span>
            <span>PERIOD: {project.date}</span>
            <span>•</span>
            <span>CLIENT: {project.client}</span>
          </div>
        </motion.div>

        {/* Project Image Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border border-[#181410] p-1 bg-[#181410]/5 overflow-hidden"
        >
          <img
            src={project.imagePlaceholder}
            alt={project.title}
            className="w-full h-[320px] sm:h-[450px] object-cover filter grayscale contrast-125 broadsheet-photo"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="font-anton text-2xl uppercase tracking-tight text-[#181410] border-b border-[#181410] pb-2 font-black">
              SYSTEM ARCHITECTURE &amp; STORY
            </h2>
            
            <div className="space-y-4 text-base font-serif leading-relaxed text-[#181410] broadsheet-justify">
              {project.storyParagraphs.map((paragraph, idx) => (
                <p key={idx} className="border-l-2 border-[#181410] pl-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Tech Stack Box */}
            <div className="border-2 border-[#181410] bg-[#181410] text-[#f4f1ea] p-5 shadow-xl space-y-3">
              <div className="text-xs font-serif uppercase tracking-[0.2em] font-bold text-[#c5a059] border-b border-[#c5a059]/40 pb-2">
                TECH STACK &amp; SPECIFICATIONS
              </div>
              <div className="space-y-2">
                {project.techStack.map((tech, idx) => (
                  <div key={idx} className="p-2.5 bg-black/50 border border-[#c5a059]/30 flex flex-col gap-0.5">
                    <span className="font-bold text-xs uppercase text-[#e5c178]">{tech.name}</span>
                    <span className="text-[11px] text-[#d2c9b8] uppercase">{tech.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics Box */}
            <div className="border-2 border-[#c5a059] bg-[#181410] text-[#f4f1ea] p-5 shadow-xl space-y-3">
              <div className="text-xs font-serif uppercase tracking-[0.2em] font-bold text-[#c5a059] border-b border-[#c5a059]/40 pb-2">
                SYSTEM METRICS &amp; HIGHLIGHTS
              </div>
              <div className="space-y-2">
                {project.keyFindings.map((finding, idx) => (
                  <div key={idx} className="p-2.5 bg-black/60 border border-[#c5a059]/30 flex justify-between items-center text-xs uppercase font-bold text-[#f4f1ea]">
                    <span className="text-[#d2c9b8]">{finding.label}</span>
                    <span className="text-[#e5c178]">{finding.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions Box */}
            <div className="border border-[#181410] p-6 bg-[#e8e4da] space-y-4 font-serif text-xs uppercase font-bold text-[#181410]">
              <div className="flex items-center gap-2 text-[#c5a059]">
                <CheckCircle2 size={16} />
                <span className="text-[#181410]">VERIFIED DISPATCH ENTRY</span>
              </div>
              <div className="pt-2 border-t border-[#181410] space-y-2">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-[#c5a059] hover:bg-[#e5c178] text-[#181410] font-bold border border-[#181410] flex items-center justify-center gap-2 transition-all hover:scale-105"
                  >
                    <span>LAUNCH LIVE EDITION DEMO ↗</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#181410] hover:bg-[#302922] text-[#f4f1ea] font-bold border border-[#181410] flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <span>VIEW REPOSITORY ON GITHUB [EXT]</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-[#181410] flex justify-between items-center text-xs font-serif uppercase tracking-widest font-bold">
          <Link
            to={`/case-files/${prevProject.slug}`}
            className="hover:text-[#c5a059] flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={14} /> PREV: {prevProject.title}
          </Link>

          <Link
            to={`/case-files/${nextProject.slug}`}
            className="hover:text-[#c5a059] flex items-center gap-2 transition-colors"
          >
            NEXT: {nextProject.title} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
