"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-b-4 border-black swiss-grid-pattern">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-black pb-4">
          <div className="flex items-center gap-2">
            <span className="text-[#FF3000] font-black text-sm">06.</span>
            <span className="text-xs font-black uppercase tracking-widest text-black">
              TRANSMISSION PROTOCOL // DIRECT INQUIRY
            </span>
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-black/60">
            DISPATCH CHANNEL
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-black tracking-tight leading-tight max-w-4xl">
          INITIATE DIRECT COMMUNICATION.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Info Box */}
          <motion.div variants={fadeUp} className="lg:col-span-5 border-2 border-black bg-white p-6 sm:p-8 space-y-6 swiss-dots">
            <h3 className="text-lg font-black uppercase text-black border-b-2 border-black pb-3">
              DIRECT CHANNELS
            </h3>

            <div className="space-y-4 font-sans text-xs font-black uppercase text-black">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 p-3 bg-[#F2F2F2] border-2 border-black hover:bg-[#FF3000] hover:text-white transition-colors group"
              >
                <Mail size={18} className="text-[#FF3000] group-hover:text-white shrink-0" />
                <div>
                  <div className="text-[10px] opacity-70">EMAIL ADDRESS</div>
                  <div className="font-black text-sm">{personalInfo.email}</div>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 p-3 bg-[#F2F2F2] border-2 border-black hover:bg-black hover:text-white transition-colors group"
              >
                <Phone size={18} className="text-[#FF3000] group-hover:text-white shrink-0" />
                <div>
                  <div className="text-[10px] opacity-70">PHONE / WHATSAPP</div>
                  <div className="font-black text-sm">{personalInfo.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 bg-[#F2F2F2] border-2 border-black">
                <MapPin size={18} className="text-[#FF3000] shrink-0" />
                <div>
                  <div className="text-[10px] opacity-70">LOCATION BASE</div>
                  <div className="font-black text-sm">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-4 border-t-2 border-black flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 swiss-btn-primary py-3 text-center text-xs flex items-center justify-center gap-2"
              >
                <Github size={14} />
                <span>GITHUB [EXT]</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 swiss-btn-secondary py-3 text-center text-xs flex items-center justify-center gap-2"
              >
                <Linkedin size={14} />
                <span>LINKEDIN [EXT]</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeUp} className="lg:col-span-7 border-2 border-black bg-[#F2F2F2] p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-black uppercase text-black border-b-2 border-black pb-3">
              DISPATCH MESSAGE FORM
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-wider text-black">YOUR NAME / IDENTITY</label>
                  <input
                    type="text"
                    required
                    placeholder="E.G. ALEX MORGAN"
                    className="w-full bg-white border-2 border-black px-4 py-3 text-xs font-black uppercase text-black focus:outline-none focus:border-[#FF3000] transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-wider text-black">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    placeholder="NAME@COMPANY.COM"
                    className="w-full bg-white border-2 border-black px-4 py-3 text-xs font-black uppercase text-black focus:outline-none focus:border-[#FF3000] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-black">SUBJECT / INQUIRY CATEGORY</label>
                <input
                  type="text"
                  required
                  placeholder="PROJECT INQUIRY / FULL-TIME OPPORTUNITY"
                  className="w-full bg-white border-2 border-black px-4 py-3 text-xs font-black uppercase text-black focus:outline-none focus:border-[#FF3000] transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-black">TRANSMISSION MESSAGE BODY</label>
                <textarea
                  rows={4}
                  required
                  placeholder="ENTER DETAILED SPECIFICATIONS..."
                  className="w-full bg-white border-2 border-black px-4 py-3 text-xs font-black uppercase text-black focus:outline-none focus:border-[#FF3000] transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full swiss-btn-primary py-4 text-xs font-black flex items-center justify-center gap-2"
              >
                <Send size={16} />
                <span>DISPATCH TRANSMISSION →</span>
              </button>
            </form>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-[#FF3000] text-white border-2 border-black text-xs font-black uppercase flex items-center gap-2"
              >
                <CheckCircle size={18} className="shrink-0" />
                <span>[✓] TRANSMISSION SENT SUCCESSFULLY. ACKNOWLEDGEMENT RECEIVED.</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
