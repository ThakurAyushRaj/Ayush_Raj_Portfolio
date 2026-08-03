import { personalInfo } from "@/lib/data";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="py-10 px-4 sm:px-8 max-w-7xl mx-auto space-y-10 text-[#181410]">
      {/* ─── KICKER & CV DOWNLOAD ACTION BAR ─── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#181410] pb-3 text-center sm:text-left">
        <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#181410] font-bold">
          DISCIPLINES: FULL-STACK ENGINEERING • MERN / MEAN • MOBILE ARCHITECTURE
        </span>

        <a
          href={personalInfo.resume}
          download="Ayush_Raj_CV.docx"
          className="px-4 py-2 bg-[#181410] text-[#f4f1ea] hover:bg-[#302922] transition-all hover:scale-105 text-xs font-serif uppercase tracking-[0.2em] font-bold flex items-center gap-2 border border-[#181410] shrink-0"
        >
          <Download size={14} />
          <span>DOWNLOAD CURRICULUM VITAE (.DOCX)</span>
        </a>
      </div>

      {/* ─── HUGE ANTON HEADLINE (~88px) ─── */}
      <div className="text-center space-y-2">
        <h2 className="font-anton text-5xl sm:text-7xl lg:text-[88px] uppercase tracking-tight text-[#181410] leading-[0.96] max-w-5xl mx-auto font-black">
          DESIGN &amp; CODE WORTH THE FRONT PAGE
        </h2>
        <div className="text-sm font-serif italic text-[#181410] font-semibold pt-2">
          Engineering scalable web, mobile &amp; enterprise platforms for real estate and healthcare workflows.
        </div>
      </div>

      {/* ─── TWO-COLUMN JUSTIFIED DROP-CAP LEDE ─── */}
      <div className="max-w-[920px] mx-auto border-y border-[#181410] py-8 my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#181410] text-[#181410]">
          <div className="broadsheet-dropcap broadsheet-justify text-base sm:text-lg leading-relaxed font-serif pr-0 md:pr-4">
            Hi, I&apos;m <strong>{personalInfo.name}</strong>, a Software Development Engineer at {personalInfo.company} dedicated to crafting robust digital products, high-throughput microservices, and elegant web &amp; mobile interfaces. With deep expertise across modern MERN/MEAN architectures, React Native, and Flutter, I engineer software built to endure.
          </div>
          <div className="broadsheet-justify text-base sm:text-lg leading-relaxed font-serif pt-6 md:pt-0 md:pl-8">
            From architecture to production rollout, every system is constructed with strict performance standards, clean component hierarchies, and resilient backend design. Whether designing complex healthcare EMR platforms or high-volume real estate CRM engines, quality is set in ink.
          </div>
        </div>
      </div>

      {/* ─── FULL-WIDTH FRAMED B&W FIGURE WITH CAPTION ROW ─── */}
      <div className="space-y-2">
        <div className="border border-[#181410] p-1 bg-[#181410]/5 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80"
            alt="The studio floor and engineering workstation"
            className="w-full h-[320px] sm:h-[470px] object-cover broadsheet-photo"
          />
        </div>
        <div className="border-b border-[#181410] pb-2 pt-1 flex flex-col sm:flex-row items-center justify-between text-xs font-serif uppercase tracking-[0.2em] text-[#181410] gap-2">
          <div>Fig. 01 &mdash; The studio floor &amp; production workstation, photographed on press day</div>
          <div className="italic font-normal">Silver gelatin print, MMXXVI</div>
        </div>
      </div>
    </section>
  );
}
