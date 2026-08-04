import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code, Database, Smartphone, Cloud, Layers } from "lucide-react";
import TapedCard from "@/components/ui/TapedCard";

interface TechNode {
  id: string;
  name: string;
  category: string;
  icon: any;
  projectsCount: number;
  description: string;
}

export default function InteractiveTechOrbit() {
  const [selectedTech, setSelectedTech] = useState<string>("react");

  const techNodes: TechNode[] = [
    { id: "react", name: "React.js", category: "Frontend", icon: Code, projectsCount: 8, description: "Type-safe reactive UI components & single-page application dashboards." },
    { id: "ts", name: "TypeScript", category: "Language", icon: Layers, projectsCount: 10, description: "Strict static type checking across full-stack component & API contracts." },
    { id: "node", name: "Node.js & Express", category: "Backend", icon: Cpu, projectsCount: 7, description: "High-throughput asynchronous REST APIs & microservice endpoints." },
    { id: "mongo", name: "MongoDB & SQL", category: "Database", icon: Database, projectsCount: 6, description: "Relational & NoSQL document modeling, indexing, and transactional pipelines." },
    { id: "mobile", name: "React Native & Flutter", category: "Mobile", icon: Smartphone, projectsCount: 4, description: "Cross-platform native iOS & Android applications with FCM push sync." },
    { id: "aws", name: "AWS Cloud", category: "DevOps", icon: Cloud, projectsCount: 5, description: "Cloud deployment via AWS S3, Amplify, Lambda, and serverless architectures." },
  ];

  const activeNode = techNodes.find((t) => t.id === selectedTech) || techNodes[0];

  return (
    <TapedCard
      tapePosition="top-corners"
      tapeColor="paper"
      dataCursorLabel="MATRIX"
      className="w-full my-12 p-6 sm:p-8 bg-[#090807] text-[#ffffff] border-2 border-white/80 shadow-2xl font-serif"
    >
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

      <div className="relative z-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/30 pb-4">
          <div>
            <span className="text-xs font-serif uppercase tracking-[0.25em] text-white font-bold">
              ✦ INTERACTIVE ENGINE MATRIX
            </span>
            <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-white mt-0.5 font-black">
              SYSTEM ARCHITECTURE LABORATORY
            </h3>
          </div>
          <div className="text-xs font-serif uppercase tracking-[0.2em] text-stone-300 italic font-semibold">
            SELECT A CORE TECHNOLOGY NODE TO INSPECT
          </div>
        </div>

        {/* Tech Nodes Grid Buttons (Monochromatic Black & White) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {techNodes.map((tech) => {
            const Icon = tech.icon;
            const isActive = selectedTech === tech.id;
            return (
              <motion.button
                key={tech.id}
                onClick={() => setSelectedTech(tech.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 border text-left flex flex-col justify-between space-y-2 transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.6)] font-bold"
                    : "bg-black/80 text-white border-white/40 hover:border-white hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon size={16} className={isActive ? "text-black" : "text-white"} />
                  <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 border ${
                    isActive ? "bg-black text-white border-black" : "bg-white/10 text-white border-white/40"
                  }`}>
                    {tech.projectsCount} APPS
                  </span>
                </div>
                <div className="text-xs font-serif uppercase tracking-wider font-bold pt-1">
                  {tech.name}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Tech Detail Panel (Black & White High Contrast) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="p-5 bg-black border border-white/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs"
          >
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-2 text-stone-200 uppercase font-bold tracking-widest text-[11px]">
                <span>CATEGORY: {activeNode.category}</span>
                <span>•</span>
                <span>PRODUCTION STATUS: VERIFIED</span>
              </div>
              <p className="text-sm font-serif text-white font-medium leading-relaxed">
                {activeNode.description}
              </p>
            </div>

            <a
              href="#projects"
              className="px-4 py-2 bg-white text-black font-serif uppercase tracking-[0.2em] font-bold border border-white hover:bg-stone-200 transition-all shrink-0 hover:scale-105"
            >
              FILTER PROJECTS &rarr;
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </TapedCard>
  );
}
