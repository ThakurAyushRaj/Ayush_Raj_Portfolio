import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function CaseFilePage({ params }: { params: { slug: string } }) {
  const projectIndex = projects.findIndex((p) => p.slug === params.slug);
  
  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-paper text-ink pb-20">
      
      {/* ── TOP METADATA NAVIGATION BAR ─────────────────────── */}
      <div className="border-b-2 border-ink py-3 px-4 md:px-8 bg-paper font-grotesk text-xs tracking-widest uppercase flex flex-wrap justify-between items-center text-ink-muted">
        <Link href="/#work" className="font-bold text-ink hover:text-stamp flex items-center gap-1.5 link-pencil">
          <ArrowLeft size={12} /> BACK TO THE CASE
        </Link>
        <div className="hidden sm:block">THE AYUSH RAJ TIMES · CASE FILES</div>
        <div>FILED FROM GREATER NOIDA</div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-10">
        
        {/* ── CASE FILE IDENTIFIER BADGE ─────────────────────── */}
        <div className="font-mono text-xs font-bold text-stamp uppercase tracking-widest mb-4">
          CASE FILE · {project.exhibit.toUpperCase()} · {project.slug.toUpperCase()}
        </div>

        {/* ── ARTICLE HEADLINE ───────────────────────────────── */}
        <h1 className="font-caslon text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] tracking-tight mb-6">
          {project.headline}
        </h1>

        {/* ── SUBTITLE QUOTE ─────────────────────────────────── */}
        <blockquote className="border-l-4 border-ink pl-6 py-1 font-serif italic text-xl sm:text-2xl text-ink-soft leading-relaxed mb-6">
          {project.subtitle}
        </blockquote>

        {/* ── BYLINE ─────────────────────────────────────────── */}
        <div className="font-grotesk text-xs tracking-wider uppercase text-ink-muted border-b border-ink/25 pb-8 mb-10">
          BY <strong className="text-ink">THE INVESTIGATION DESK</strong> · {project.date}
        </div>

        {/* ── POLAROID HERO SCREENSHOT FRAME ─────────────────── */}
        <div className="relative border-2 border-ink p-3 bg-paper-bright mb-14">
          {/* Top Tape graphic */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-paper-deep/80 -rotate-1 border-x border-ink/20 shadow-xs pointer-events-none" />

          <div className="aspect-[16/9] relative overflow-hidden border border-ink/30 bg-paper-warm">
            <img
              src={project.imagePlaceholder}
              alt={project.title}
              className="w-full h-full object-cover grayscale contrast-125 mix-blend-multiply"
            />
            <div className="absolute bottom-4 right-4">
              <span className="border-2 border-stamp text-stamp font-mono text-xs font-bold px-3 py-1 bg-paper/90 uppercase tracking-widest">
                VERIFIED ARCHIVE
              </span>
            </div>
          </div>
        </div>

        {/* ── ARTICLE BODY & SIDEBAR GRID ────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 items-start">
          
          {/* LEFT: Editorial Story (Multi-column) */}
          <div className="flex flex-col gap-6">
            <h2 className="font-caslon text-3xl font-normal border-b border-ink/20 pb-3">
              Case Investigation & Architecture
            </h2>
            
            <div className="article-columns space-y-6">
              {project.storyParagraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`font-serif text-base text-ink leading-relaxed ${
                    idx === 0 ? "dropcap" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT: Metadata Sidebar Cards */}
          <div className="flex flex-col gap-8">
            
            {/* Tech Stack Card */}
            <div className="border-2 border-ink bg-paper-bright overflow-hidden">
              <div className="bg-ink text-paper px-4 py-2.5 font-grotesk text-xs font-bold tracking-widest uppercase">
                TECH STACK & SPECIFICATIONS
              </div>
              <div className="p-4 divide-y divide-ink/15">
                {project.techStack.map((tech, idx) => (
                  <div key={idx} className="py-2.5 flex flex-col gap-0.5">
                    <span className="font-caslon font-bold text-base text-ink">{tech.name}</span>
                    <span className="font-mono text-xs text-ink-muted">{tech.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Findings Card */}
            <div className="border-2 border-ink bg-paper-bright overflow-hidden">
              <div className="bg-ink text-paper px-4 py-2.5 font-grotesk text-xs font-bold tracking-widest uppercase">
                KEY FINDINGS
              </div>
              <div className="p-4 divide-y divide-ink/15">
                {project.keyFindings.map((finding, idx) => (
                  <div key={idx} className="py-2.5 flex justify-between items-center text-xs">
                    <span className="font-grotesk uppercase tracking-wider text-ink-muted">
                      {finding.label}
                    </span>
                    <span className="font-mono font-bold text-ink">{finding.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client & Scope Card */}
            <div className="border-2 border-ink p-4 bg-paper-bright flex flex-col gap-3">
              <div>
                <span className="font-grotesk text-[11px] uppercase tracking-wider text-ink-muted block">
                  CLIENT / SUITE
                </span>
                <span className="font-caslon text-lg text-ink font-bold">{project.client}</span>
              </div>
              <div>
                <span className="font-grotesk text-[11px] uppercase tracking-wider text-ink-muted block">
                  SCOPE OF WORK
                </span>
                <span className="font-mono text-xs text-ink">{project.scope}</span>
              </div>
              <div className="pt-2 border-t border-ink/20">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-grotesk text-xs font-bold tracking-widest uppercase text-ink hover:text-stamp link-pencil inline-flex items-center gap-1.5"
                >
                  Open Github Repository <ExternalLink size={12} />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* ── BOTTOM CASE NAVIGATION ─────────────────────────── */}
        <div className="mt-16 pt-8 border-t-2 border-ink flex justify-between items-center">
          <Link
            href={`/case-files/${prevProject.slug}`}
            className="font-grotesk text-xs font-bold tracking-widest uppercase text-ink hover:text-stamp flex items-center gap-2 link-pencil"
          >
            <ArrowLeft size={14} /> PREVIOUS: {prevProject.title}
          </Link>

          <Link
            href={`/case-files/${nextProject.slug}`}
            className="font-grotesk text-xs font-bold tracking-widest uppercase text-ink hover:text-stamp flex items-center gap-2 link-pencil"
          >
            NEXT: {nextProject.title} <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </main>
  );
}
