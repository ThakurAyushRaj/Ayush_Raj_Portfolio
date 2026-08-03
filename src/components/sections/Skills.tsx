import { motion } from "framer-motion";

export default function Skills() {
  const desks = [
    {
      number: "DESK I",
      title: "FRONTEND & WEB ARCHITECTURE",
      body: "Crafting type-safe, interactive single-page dashboards and responsive web application interfaces using React, TypeScript, and modern styling architectures.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
      caption: "Interactive Dashboards & UI Systems",
      skills: ["React.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
      isDark: true,
      link: "#projects"
    },
    {
      number: "DESK II",
      title: "FULL-STACK & BACKEND SYSTEMS",
      body: "Architecting non-blocking REST APIs, microservices, and relational & NoSQL databases in Node.js, Express, MongoDB, and MySQL with AWS deployment.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      caption: "RESTful Pipelines & Database Schemas",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "AWS"],
      isDark: false,
      link: "#projects"
    },
    {
      number: "DESK III",
      title: "CROSS-PLATFORM MOBILE DESK",
      body: "Building production mobile applications for iOS & Android utilizing React Native and Flutter, integrated with push notifications, offline sync, and OAuth.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
      caption: "Native iOS & Android Applications",
      skills: ["React Native", "Flutter", "Dart", "Firebase"],
      isDark: true,
      link: "#projects"
    }
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#181410] text-[#181410]">
      {/* ─── SECTION HEADER ─── */}
      <div className="border-b border-[#181410] pb-4 mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2">
        <div>
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#524b42] font-semibold">
            02 // SERVICES &amp; SPECIALIZATIONS
          </span>
          <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-[#181410] mt-1">
            THE THREE DESKS
          </h2>
        </div>
        <div className="text-xs font-serif uppercase tracking-[0.2em] text-[#524b42]">
          WHAT THE STUDIO SETS, COLUMN BY COLUMN
        </div>
      </div>

      {/* ─── THREE COLUMNS WITH DARK INK CARDS ─── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {desks.map((desk, idx) => (
          <div
            key={idx}
            className={`relative group overflow-hidden p-6 border flex flex-col justify-between space-y-6 transition-all duration-500 ${
              desk.isDark
                ? "bg-[#181410] text-[#f4f1ea] border-[#c5a059] shadow-2xl hover:border-[#e5c178]"
                : "bg-[#f4f1ea] text-[#181410] border-[#181410] shadow-md hover:border-[#c5a059]"
            }`}
          >
            {/* Shimmer Light Sheen for Dark Cards */}
            {desk.isDark && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
            )}

            <div className="space-y-4 relative z-10">
              <div className={`text-xs font-serif uppercase tracking-[0.2em] font-bold border-b pb-2 flex items-center justify-between ${
                desk.isDark ? "border-[#c5a059]/40 text-[#c5a059]" : "border-[#181410] text-[#524b42]"
              }`}>
                <span>{desk.number}</span>
                <span className="text-base">{idx === 0 ? "✦" : idx === 1 ? "❦" : "❖"}</span>
              </div>

              <h3 className={`font-anton text-2xl uppercase tracking-tight leading-snug ${
                desk.isDark ? "text-[#f4f1ea]" : "text-[#181410]"
              }`}>
                {desk.title}
              </h3>

              <p className={`broadsheet-justify text-sm font-serif leading-relaxed ${
                desk.isDark ? "text-[#d2c9b8]" : "text-[#181410]"
              }`}>
                {desk.body}
              </p>

              {/* Inset Photo */}
              <div className={`border p-1 overflow-hidden ${
                desk.isDark ? "border-[#c5a059]/40 bg-black/40" : "border-[#181410] bg-[#181410]/5"
              }`}>
                <img
                  src={desk.image}
                  alt={desk.caption}
                  className="w-full h-[170px] object-cover broadsheet-photo filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`text-[11px] font-serif italic text-center pt-1 ${
                  desk.isDark ? "text-[#c5a059]" : "text-[#524b42]"
                }`}>
                  {desk.caption}
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {desk.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`px-2 py-0.5 border text-[11px] font-serif uppercase tracking-widest ${
                      desk.isDark
                        ? "bg-black/40 border-[#c5a059]/50 text-[#e5c178]"
                        : "bg-white/50 border-[#181410] text-[#181410]"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`pt-4 border-t relative z-10 ${
              desk.isDark ? "border-[#c5a059]/40" : "border-[#181410]"
            }`}>
              <a
                href={desk.link}
                className={`inline-block text-xs font-serif uppercase tracking-[0.22em] font-bold hover:underline underline-offset-4 ${
                  desk.isDark ? "text-[#c5a059] hover:text-[#e5c178]" : "text-[#181410]"
                }`}
              >
                READ THE CASE FILES &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
