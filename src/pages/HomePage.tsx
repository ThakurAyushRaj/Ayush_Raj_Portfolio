import { Hero, Experience, Skills, Projects, About, Education, Contact } from "@/components/sections";
import { MinimalBroadsheetBackground } from "@/components/ui";

export default function HomePage() {
  return (
    <MinimalBroadsheetBackground className="bg-[#f4f1ea] min-h-screen py-3 sm:py-8 px-2 sm:px-4">
      {/* ─── SINGLE CENTERED BROADSHEET SHEET WITH 1PX PAGE FRAME ─── */}
      <div className="max-w-[1280px] mx-auto bg-[#f4f1ea] border border-[#181410] broadsheet-sheet text-[#181410] relative z-10">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <About />
        <Education />
        <Contact />
      </div>
    </MinimalBroadsheetBackground>
  );
}
