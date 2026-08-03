import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "@/lib/data";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";

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
    <main className="min-h-screen bg-white text-black pb-20 pt-20 font-sans swiss-grid-pattern">
      <div className="border-b-4 border-black py-3 px-4 md:px-8 bg-white font-sans text-xs tracking-widest uppercase flex flex-wrap justify-between items-center text-black">
        <Link to="/#projects" className="font-black text-black hover:text-[#FF3000] flex items-center gap-1.5 transition-colors">
          <ArrowLeft size={14} /> BACK TO SELECTED WORKS [03]
        </Link>
        <div className="hidden sm:block font-black text-black/60">SWISS INTERNATIONAL TYPOGRAPHIC ARCHIVE</div>
        <div className="font-black text-[#FF3000]">EXHIBIT // {project.slug.toUpperCase()}</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10">
        <div className="inline-block bg-[#FF3000] text-white px-3 py-1 font-black text-xs uppercase tracking-widest mb-4 border border-black">
          EXHIBIT SPECIFICATION // {project.scope.toUpperCase()}
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-6 text-black">
          {project.headline}
        </h1>

        <blockquote className="border-l-4 border-black pl-6 py-2 text-lg sm:text-2xl font-bold uppercase tracking-wide text-black/90 leading-relaxed mb-6 bg-[#F2F2F2]">
          {project.subtitle}
        </blockquote>

        <div className="text-xs font-black tracking-widest uppercase text-black/60 border-b-2 border-black pb-6 mb-10">
          DOCUMENT RECORDED BY <strong className="text-black">AYUSH RAJ</strong> // {project.date}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-black uppercase text-black border-b-2 border-black pb-3">
              SYSTEM ARCHITECTURE & STORY
            </h2>
            
            <div className="space-y-4 font-sans text-sm sm:text-base font-medium leading-relaxed text-black">
              {project.storyParagraphs.map((paragraph, idx) => (
                <p key={idx} className="border-l-2 border-black pl-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="border-2 border-black bg-white swiss-dots">
              <div className="bg-black text-white px-4 py-3 text-xs font-black tracking-widest uppercase">
                TECH STACK & SPECIFICATIONS
              </div>
              <div className="p-4 space-y-2 font-sans">
                {project.techStack.map((tech, idx) => (
                  <div key={idx} className="p-2.5 bg-[#F2F2F2] border border-black/30 flex flex-col gap-0.5">
                    <span className="font-black text-xs uppercase text-black">{tech.name}</span>
                    <span className="text-[10px] font-bold text-black/70 uppercase">{tech.role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 border-black bg-white">
              <div className="bg-black text-white px-4 py-3 text-xs font-black tracking-widest uppercase">
                SYSTEM METRICS & HIGHLIGHTS
              </div>
              <div className="p-4 space-y-2 font-sans">
                {project.keyFindings.map((finding, idx) => (
                  <div key={idx} className="p-2.5 bg-[#FF3000] text-white border border-black flex justify-between items-center text-xs font-black uppercase tracking-wider">
                    <span>{finding.label}</span>
                    <span>{finding.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 border-black p-6 bg-[#F2F2F2] space-y-4 font-sans text-xs font-black uppercase text-black">
              <div>
                <span className="text-[10px] text-black/60 tracking-widest block">CLIENT / SYSTEM SUITE</span>
                <span className="text-sm font-black text-black">{project.client}</span>
              </div>
              <div>
                <span className="text-[10px] text-black/60 tracking-widest block">SCOPE OF WORK</span>
                <span className="text-xs font-black text-[#FF3000]">{project.scope}</span>
              </div>
              <div className="pt-3 border-t-2 border-black space-y-2">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 text-xs font-black flex items-center justify-center gap-2 bg-[#181410] text-[#f4f1ea] border border-black hover:bg-[#302922] transition-colors"
                  >
                    <span>LAUNCH LIVE EDITION DEMO ↗</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs font-black flex items-center justify-center gap-2 bg-white text-black border border-black hover:bg-gray-100 transition-colors"
                >
                  <span>VIEW REPOSITORY ON GITHUB [EXT]</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t-4 border-black flex justify-between items-center text-xs font-black uppercase tracking-widest">
          <Link
            to={`/case-files/${prevProject.slug}`}
            className="hover:text-[#FF3000] flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={14} /> PREV: {prevProject.title}
          </Link>

          <Link
            to={`/case-files/${nextProject.slug}`}
            className="hover:text-[#FF3000] flex items-center gap-2 transition-colors"
          >
            NEXT: {nextProject.title} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
