import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { Code2, Server, Smartphone, Cloud, FileText, CheckCircle2, Briefcase, Database, Layers, Cpu, ShieldCheck, Zap } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { InteractiveFolder } from "@/components/ui/InteractiveFolder";

export default function About() {
  const highlightIcons = [Code2, Server, Smartphone, Cloud];

  const folderConfigs = [
    {
      color: "#0F172A",
      label: "SHIPPED",
      infoTitle: "Production Apps",
      description: "1+ Live Systems — Powering real estate CRM & healthcare EMR workflows",
      infoDetails: [
        "CRM Platform — Lead management, agent assignment & analytics",
        "EMR System — Patient records, appointment scheduling & prescriptions",
        "Enterprise ERP — Operations, inventory control & financial tracking"
      ],
      items: [
        <FileText key="1" className="w-5 h-5 text-amber-600" />,
        <CheckCircle2 key="2" className="w-5 h-5 text-emerald-600" />,
        <Briefcase key="3" className="w-5 h-5 text-blue-600" />,
      ]
    },
    {
      color: "#1E40AF",
      label: "MERN",
      infoTitle: "Full-Stack Experience",
      description: "MERN & MEAN Stack — MongoDB, Express, React, Node.js, Angular",
      infoDetails: [
        "React & TypeScript — Type-safe interactive dashboard UIs",
        "Node.js & Express — High performance RESTful microservices",
        "MongoDB & MySQL — Relational & NoSQL database schemas"
      ],
      items: [
        <Code2 key="1" className="w-5 h-5 text-sky-500" />,
        <Server key="2" className="w-5 h-5 text-emerald-500" />,
        <Database key="3" className="w-5 h-5 text-amber-500" />,
      ]
    },
    {
      color: "#D97706",
      label: "MOBILE",
      infoTitle: "Mobile Frameworks",
      description: "React Native & Flutter — Native cross-platform mobile app development",
      infoDetails: [
        "React Native — Google Auth, FCM push notifications & offline storage",
        "Flutter — Dart powered responsive mobile user interfaces",
        "Cross-Platform — Single codebase shipping to iOS & Android"
      ],
      items: [
        <Smartphone key="1" className="w-5 h-5 text-purple-600" />,
        <Layers key="2" className="w-5 h-5 text-cyan-600" />,
        <Cpu key="3" className="w-5 h-5 text-orange-600" />,
      ]
    },
    {
      color: "#FF3000",
      label: "CLOUD",
      infoTitle: "Cloud Focus",
      description: "AWS Cloud Services — Scalable cloud deployment & backend focus",
      infoDetails: [
        "AWS S3 & CloudFront — Asset storage & global content distribution",
        "AWS Lambda — Serverless function execution & API triggers",
        "DevOps & Security — OAuth 2.0, CORS & Rate Limiting"
      ],
      items: [
        <Cloud key="1" className="w-5 h-5 text-pink-600" />,
        <ShieldCheck key="2" className="w-5 h-5 text-indigo-600" />,
        <Zap key="3" className="w-5 h-5 text-amber-500" />,
      ]
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E2E8F0]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        <motion.div variants={fadeUp} className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E40AF] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#D97706]" />
            <span>01 // About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Building features that solve real-world workflows.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div variants={fadeUp} className="lg:col-span-7 space-y-6 text-[#475569] text-base sm:text-lg leading-relaxed">
            <p className="border-l-4 border-[#0F172A] pl-4 py-1 text-[#0F172A] font-semibold">
              Full-stack developer experienced in building and shipping production features across the MERN and MEAN stacks, React Native, and Flutter.
            </p>
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
              Currently at <strong className="text-[#0F172A]">aNquest Media</strong>, developing CRM and EMR products that power lead and patient workflows for real estate and healthcare clients. Strong foundation in REST API design and both relational and NoSQL databases, with an expanding focus on AWS and system design.
            </p>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = highlightIcons[idx % highlightIcons.length];
              const isDark = idx % 2 === 1;
              const folderConfig = folderConfigs[idx % folderConfigs.length];

              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`p-5 rounded-2xl space-y-3 flex flex-col justify-between transition-all shadow-md relative group/card ${
                    isDark
                      ? "bg-[#0F172A] text-[#F9F6F0] border border-[#0F172A]"
                      : "bg-[#FFFFFF] text-[#0F172A] border border-[#E2E8F0] hover:border-[#0F172A]/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl w-fit ${
                      isDark ? "bg-[#1E293B] text-[#D97706]" : "bg-[#F1F5F9] text-[#1E40AF]"
                    }`}>
                      <Icon size={20} />
                    </div>

                    <div className="relative flex-shrink-0 -mr-2 -mt-2">
                      <InteractiveFolder
                        size={0.55}
                        color={folderConfig.color}
                        label={folderConfig.label}
                        infoTitle={folderConfig.infoTitle}
                        description={folderConfig.description}
                        infoDetails={folderConfig.infoDetails}
                        items={folderConfig.items}
                      />
                    </div>
                  </div>

                  <div>
                    <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${isDark ? "text-[#F9F6F0]" : "text-[#0F172A]"}`}>{stat.value}</div>
                    <div className={`text-xs font-semibold mt-0.5 ${isDark ? "text-[#CBD5E1]" : "text-[#475569]"}`}>{stat.label}</div>
                    <div className={`text-[11px] font-medium ${isDark ? "text-[#94A3B8]" : "text-[#64748B]"}`}>{stat.sub}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
