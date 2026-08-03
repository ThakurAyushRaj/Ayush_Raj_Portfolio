"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Copy, Check } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-b-4 border-white/20 swiss-grid-pattern">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-white/30 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-[#FF3000] font-black text-sm">06.</span>
            <span className="text-xs font-black uppercase tracking-widest text-white">
              TRANSMISSION PROTOCOL // DIRECT INQUIRY
            </span>
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-white/60">
            DISPATCH CHANNEL
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight max-w-4xl">
          INITIATE DIRECT COMMUNICATION.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Info Box */}
          <motion.div variants={fadeUp} className="lg:col-span-5 border-2 border-white/30 bg-[#0D131D]/80 backdrop-blur-md p-6 sm:p-8 space-y-6 swiss-dots text-white">
            <h3 className="text-lg font-black uppercase text-white border-b-2 border-white/20 pb-3">
              DIRECT CHANNELS
            </h3>

            <div className="space-y-4 font-sans text-xs font-black uppercase text-white">
              {/* Email Card with Copy Button */}
              <div className="flex items-center justify-between gap-3 p-3 bg-black/60 border border-white/30">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 hover:text-[#FF3000] transition-colors flex-1"
                >
                  <Mail size={18} className="text-[#FF3000] shrink-0" />
                  <div>
                    <div className="text-[10px] opacity-70">EMAIL ADDRESS</div>
                    <div className="font-black text-sm lowercase text-white">{personalInfo.email}</div>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.email, "email")}
                  className="p-2 bg-white text-black hover:bg-[#FF3000] hover:text-white transition-colors border border-white"
                  title="Copy Email"
                >
                  {copiedField === "email" ? <Check size={14} className="text-[#FF3000]" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone Card with Copy Button */}
              <div className="flex items-center justify-between gap-3 p-3 bg-black/60 border border-white/30">
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 hover:text-[#FF3000] transition-colors flex-1"
                >
                  <Phone size={18} className="text-[#FF3000] shrink-0" />
                  <div>
                    <div className="text-[10px] opacity-70">PHONE / WHATSAPP</div>
                    <div className="font-black text-sm text-white">{personalInfo.phone}</div>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.phone, "phone")}
                  className="p-2 bg-white text-black hover:bg-[#FF3000] hover:text-white transition-colors border border-white"
                  title="Copy Phone"
                >
                  {copiedField === "phone" ? <Check size={14} className="text-[#FF3000]" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-3 bg-black/60 border border-white/30">
                <MapPin size={18} className="text-[#FF3000] shrink-0" />
                <div>
                  <div className="text-[10px] opacity-70">LOCATION BASE</div>
                  <div className="font-black text-sm text-white">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Copy Feedback Banner */}
            {copiedField && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-2 bg-[#FF3000] text-white text-[10px] font-black uppercase tracking-widest text-center border border-white"
              >
                [✓] COPIED {copiedField.toUpperCase()} TO CLIPBOARD!
              </motion.div>
            )}

            {/* Social Buttons */}
            <div className="pt-4 border-t-2 border-white/20 flex items-center gap-3">
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
          <motion.div variants={fadeUp} className="lg:col-span-7 border-2 border-white/30 bg-[#0D131D]/80 backdrop-blur-md p-6 sm:p-8 space-y-6 text-white">
            <h3 className="text-lg font-black uppercase text-white border-b-2 border-white/20 pb-3">
              DISPATCH MESSAGE FORM
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-wider text-white">YOUR NAME / IDENTITY</label>
                  <input
                    type="text"
                    required
                    placeholder="E.G. ALEX MORGAN"
                    className="w-full bg-black/60 border border-white/30 px-4 py-3 text-xs font-black uppercase text-white focus:outline-none focus:border-[#FF3000] transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-wider text-white">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    placeholder="NAME@COMPANY.COM"
                    className="w-full bg-black/60 border border-white/30 px-4 py-3 text-xs font-black uppercase text-white focus:outline-none focus:border-[#FF3000] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-white">SUBJECT / INQUIRY CATEGORY</label>
                <input
                  type="text"
                  required
                  placeholder="PROJECT INQUIRY / FULL-TIME OPPORTUNITY"
                  className="w-full bg-black/60 border border-white/30 px-4 py-3 text-xs font-black uppercase text-white focus:outline-none focus:border-[#FF3000] transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-white">TRANSMISSION MESSAGE BODY</label>
                <textarea
                  rows={4}
                  required
                  placeholder="ENTER DETAILED SPECIFICATIONS..."
                  className="w-full bg-black/60 border border-white/30 px-4 py-3 text-xs font-black uppercase text-white focus:outline-none focus:border-[#FF3000] transition-colors"
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
                className="p-4 bg-[#FF3000] text-white border-2 border-white text-xs font-black uppercase flex items-center gap-2"
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


