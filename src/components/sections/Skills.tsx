import { motion } from "framer-motion";
import HangingNailCard from "@/components/ui/HangingNailCard";
import InkDrawUnderline from "@/components/ui/InkDrawUnderline";
import TextScramble from "@/components/ui/TextScramble";
import InteractiveTechOrbit from "@/components/ui/InteractiveTechOrbit";

export default function Skills() {
  const desks = [
    {
      number: "DESK I",
      title: "FRONTEND & WEB ARCHITECTURE",
      body: "Crafting type-safe, interactive single-page dashboards and responsive web application interfaces using React, TypeScript, and modern styling architectures.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
      caption: "Interactive Dashboards & UI Systems",
      skills: ["React.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
      skillLevels: [
        { name: "React & TS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js / Vite", level: 85 },
      ],
      theme: "navy" as const,
      accentText: "text-[#38bdf8]",
      borderAccent: "border-[#38bdf8]/40",
      bgBar: "bg-[#38bdf8]",
      link: "#projects"
    },
    {
      number: "DESK II",
      title: "FULL-STACK & BACKEND SYSTEMS",
      body: "Architecting non-blocking REST APIs, microservices, and relational & NoSQL databases in Node.js, Express, MongoDB, and MySQL with AWS deployment.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      caption: "RESTful Pipelines & Database Schemas",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "AWS"],
      skillLevels: [
        { name: "Node.js & Express", level: 92 },
        { name: "MongoDB & SQL", level: 88 },
        { name: "AWS Cloud Services", level: 75 },
      ],
      theme: "emerald" as const,
      accentText: "text-[#34d399]",
      borderAccent: "border-[#34d399]/40",
      bgBar: "bg-[#34d399]",
      link: "#projects"
    },
    {
      number: "DESK III",
      title: "CROSS-PLATFORM MOBILE DESK",
      body: "Building production mobile applications for iOS & Android utilizing React Native and Flutter, integrated with push notifications, offline sync, and OAuth.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
      caption: "Native iOS & Android Applications",
      skills: ["React Native", "Flutter", "Dart", "Firebase"],
      skillLevels: [
        { name: "React Native", level: 90 },
        { name: "Flutter & Dart", level: 82 },
        { name: "Firebase & Push FCM", level: 88 },
      ],
      theme: "burgundy" as const,
      accentText: "text-[#fb923c]",
      borderAccent: "border-[#fb923c]/40",
      bgBar: "bg-[#fb923c]",
      link: "#projects"
    }
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#181410] text-[#181410]">
      {/* ─── SECTION HEADER ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-b border-[#181410] pb-4 mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2"
      >
        <div>
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#524b42] font-semibold">
            <TextScramble text="02 // SERVICES & SPECIALIZATIONS" />
          </span>
          <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-[#181410] mt-1 font-black">
            <InkDrawUnderline color="#c5a059">
              <TextScramble text="THE THREE DESKS" as="span" />
            </InkDrawUnderline>
          </h2>
        </div>
        <div className="text-xs font-serif uppercase tracking-[0.2em] text-[#524b42]">
          <TextScramble text="WHAT THE STUDIO SETS, COLUMN BY COLUMN" />
        </div>
      </motion.div>

      {/* ─── CREATIVE INTERACTIVE TECH MATRIX LABORATORY ─── */}
      <InteractiveTechOrbit />

      {/* ─── THREE COLUMNS WITH HANGING NAIL CARDS (VIBRANT CONTRASTING COLOUR THEMES) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {desks.map((desk, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <HangingNailCard
              cardTheme={desk.theme}
              dataCursorLabel="DESK"
              className="p-6 h-full flex flex-col justify-between"
            >
              <div className="space-y-4 relative z-10">
                <div className={`text-xs font-serif uppercase tracking-[0.2em] font-bold border-b pb-2 flex items-center justify-between ${desk.borderAccent} ${desk.accentText}`}>
                  <TextScramble text={desk.number} />
                  <span className="text-base group-hover:rotate-45 transition-transform">
                    {idx === 0 ? "✦" : idx === 1 ? "❦" : "❖"}
                  </span>
                </div>

                <h3 className="font-anton text-2xl uppercase tracking-tight leading-snug">
                  <TextScramble text={desk.title} as="span" />
                </h3>

                <p className="broadsheet-justify text-sm font-serif leading-relaxed opacity-90">
                  {desk.body}
                </p>

                {/* Photo Frame inside Hanging Desk Poster */}
                <div className="border border-white/20 p-1 bg-black/40 overflow-hidden relative">
                  <img
                    src={desk.image}
                    alt={desk.caption}
                    className="w-full h-[170px] object-cover broadsheet-photo filter grayscale contrast-125 group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className={`text-[11px] font-serif italic text-center pt-1 ${desk.accentText}`}>
                    {desk.caption}
                  </div>
                </div>

                {/* Animated Progress Bars */}
                <div className="space-y-2.5 pt-1">
                  {desk.skillLevels.map((s, sIdx) => (
                    <div key={sIdx} className="space-y-1 text-xs font-serif">
                      <div className="flex justify-between font-semibold">
                        <span>{s.name}</span>
                        <span className={`font-bold ${desk.accentText}`}>{s.level}%</span>
                      </div>
                      <div className="h-2 w-full p-0.5 border border-white/20 bg-black/80">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2 + sIdx * 0.1, ease: "easeOut" }}
                          className={`h-full ${desk.bgBar}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {desk.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`px-2.5 py-1 border text-[11px] font-serif uppercase tracking-widest font-bold bg-black/60 ${desk.borderAccent} ${desk.accentText}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className={`pt-4 border-t relative z-10 ${desk.borderAccent}`}>
                <a
                  href={desk.link}
                  className={`inline-flex items-center gap-1.5 text-xs font-serif uppercase tracking-[0.22em] font-bold ${desk.accentText} hover:underline`}
                >
                  <span>READ THE CASE FILES</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </HangingNailCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
