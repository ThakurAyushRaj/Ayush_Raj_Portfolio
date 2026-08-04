import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Section {
  id: string;
  label: string;
}

export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  const sections: Section[] = [
    { id: "hero", label: "00 FRONT PAGE" },
    { id: "experience", label: "01 CHRONICLE" },
    { id: "skills", label: "02 MATRIX" },
    { id: "projects", label: "03 PROJECTS" },
    { id: "about", label: "04 PROFILE" },
    { id: "education", label: "05 ACADEMICS" },
    { id: "contact", label: "06 COMMISSIONS" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((s) => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end space-y-2 pointer-events-none select-none">
      {sections.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className="pointer-events-auto flex items-center gap-2 group cursor-pointer py-1"
          >
            <span
              className={`text-[9px] font-serif uppercase tracking-[0.2em] font-bold transition-all duration-300 whitespace-nowrap shrink-0 ${
                isActive
                  ? "text-[#181410] opacity-100 translate-x-0"
                  : "text-[#524b42] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              }`}
            >
              {sec.label}
            </span>
            <div
              className={`h-2 transition-all duration-300 shrink-0 ${
                isActive
                  ? "w-6 bg-[#181410]"
                  : "w-2 bg-[#181410]/30 group-hover:w-4 group-hover:bg-[#181410]"
              }`}
            />
          </a>
        );
      })}
    </div>
  );
}
