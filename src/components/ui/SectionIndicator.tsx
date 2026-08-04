import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: "hero", label: "00 HERO" },
    { id: "services", label: "02 SERVICES" },
    { id: "projects", label: "03 PORTFOLIO" },
    { id: "about", label: "01 STUDIO" },
    { id: "experience", label: "05 CHRONICLE" },
    { id: "education", label: "06 EDUCATION" },
    { id: "contact", label: "04 BRIEF" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);

      const sectionElements = sections.map((s) => document.getElementById(s.id));
      const scrollPos = window.scrollY + 250;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end space-y-3 font-serif text-[10px] tracking-widest select-none pointer-events-auto"
      >
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <span
                className={`transition-all duration-300 font-bold uppercase ${
                  isActive
                    ? "text-[#c5a059] opacity-100 translate-x-0"
                    : "text-[#181410] opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
                }`}
              >
                {sec.label}
              </span>
              <div
                className={`h-2 transition-all duration-300 ${
                  isActive
                    ? "w-6 bg-[#c5a059] shadow-[0_0_8px_rgba(197,160,89,0.8)]"
                    : "w-2 bg-[#181410]/30 group-hover:bg-[#181410] group-hover:w-4"
                }`}
              />
            </a>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}
