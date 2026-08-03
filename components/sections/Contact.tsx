"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, Copy, Check } from "lucide-react";
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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#342D45]/60">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={fadeUp} className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#F2A65A] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#4FD1C5]" />
            <span>06 // Contact & Transmission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F6F3EE] tracking-tight">
            Initiate direct communication.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels Box (5 cols) */}
          <motion.div variants={fadeUp} className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#272138]/80 border border-[#342D45] backdrop-blur-sm space-y-6 shadow-xl">
            <h3 className="text-xl font-bold text-[#F6F3EE] tracking-tight">
              Direct Contact Details
            </h3>

            <div className="space-y-4 text-sm font-medium">
              {/* Email */}
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#1A1725]/80 border border-[#342D45]">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 hover:text-[#4FD1C5] transition-colors flex-1"
                >
                  <Mail size={18} className="text-[#F2A65A] shrink-0" />
                  <div>
                    <div className="text-[11px] text-[#B3ABCF] uppercase font-semibold">Email</div>
                    <div className="text-[#F6F3EE] text-xs sm:text-sm font-semibold">{personalInfo.email}</div>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.email, "email")}
                  className="p-2 rounded-lg bg-[#342D45] hover:bg-[#F2A65A] text-[#B3ABCF] hover:text-[#1A1725] transition-colors"
                  title="Copy Email"
                >
                  {copiedField === "email" ? <Check size={14} className="text-[#4FD1C5]" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#1A1725]/80 border border-[#342D45]">
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 hover:text-[#4FD1C5] transition-colors flex-1"
                >
                  <Phone size={18} className="text-[#4FD1C5] shrink-0" />
                  <div>
                    <div className="text-[11px] text-[#B3ABCF] uppercase font-semibold">Phone / WhatsApp</div>
                    <div className="text-[#F6F3EE] text-xs sm:text-sm font-semibold">{personalInfo.phone}</div>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.phone, "phone")}
                  className="p-2 rounded-lg bg-[#342D45] hover:bg-[#4FD1C5] text-[#B3ABCF] hover:text-[#1A1725] transition-colors"
                  title="Copy Phone"
                >
                  {copiedField === "phone" ? <Check size={14} className="text-[#F2A65A]" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1A1725]/80 border border-[#342D45]">
                <MapPin size={18} className="text-[#F2A65A] shrink-0" />
                <div>
                  <div className="text-[11px] text-[#B3ABCF] uppercase font-semibold">Location</div>
                  <div className="text-[#F6F3EE] text-xs sm:text-sm font-semibold">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Toast feedback */}
            {copiedField && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-2.5 rounded-lg bg-[#F2A65A] text-[#1A1725] text-xs font-bold text-center shadow-lg"
              >
                Copied {copiedField} to clipboard!
              </motion.div>
            )}

            {/* Social Buttons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#342D45] hover:bg-[#4FD1C5] hover:text-[#1A1725] border border-[#342D45] text-[#F6F3EE] text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#F2A65A] hover:bg-[#E08A3E] text-[#1A1725] text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#F2A65A]/20"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form (7 cols) */}
          <motion.div variants={fadeUp} className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#272138]/80 border border-[#342D45] backdrop-blur-sm space-y-6 shadow-xl">
            <h3 className="text-xl font-bold text-[#F6F3EE] tracking-tight">
              Send a Direct Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#B3ABCF]">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    className="w-full bg-[#1A1725] border border-[#342D45] rounded-xl px-4 py-3 text-xs text-[#F6F3EE] placeholder:text-[#B3ABCF]/40 focus:outline-none focus:border-[#4FD1C5] transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#B3ABCF]">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="w-full bg-[#1A1725] border border-[#342D45] rounded-xl px-4 py-3 text-xs text-[#F6F3EE] placeholder:text-[#B3ABCF]/40 focus:outline-none focus:border-[#4FD1C5] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#B3ABCF]">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hi Ayush, I'd like to discuss a project..."
                  className="w-full bg-[#1A1725] border border-[#342D45] rounded-xl px-4 py-3 text-xs text-[#F6F3EE] placeholder:text-[#B3ABCF]/40 focus:outline-none focus:border-[#4FD1C5] transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#F2A65A] hover:bg-[#E08A3E] text-[#1A1725] font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#F2A65A]/20 transition-all hover:-translate-y-0.5"
              >
                <Send size={15} />
                <span>Send Message</span>
              </button>
            </form>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-[#4FD1C5]/15 border border-[#4FD1C5]/30 text-[#4FD1C5] text-xs font-semibold flex items-center gap-2"
              >
                <CheckCircle2 size={16} className="shrink-0 text-[#F2A65A]" />
                <span>Thank you! Your message has been dispatched successfully.</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
