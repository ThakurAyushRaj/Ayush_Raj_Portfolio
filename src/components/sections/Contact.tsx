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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E2E8F0]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-12"
      >
        <motion.div variants={fadeUp} className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D97706] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#0F172A]" />
            <span>06 // Contact & Transmission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Initiate direct communication.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div variants={fadeUp} className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0F172A] text-[#F9F6F0] border border-[#0F172A] space-y-6 shadow-xl">
            <h3 className="text-xl font-bold text-[#F9F6F0] tracking-tight">
              Direct Contact Details
            </h3>

            <div className="space-y-4 text-sm font-medium">
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#1E293B] border border-[#334155]">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 hover:text-[#D97706] transition-colors flex-1"
                >
                  <Mail size={18} className="text-[#D97706] shrink-0" />
                  <div>
                    <div className="text-[11px] text-[#94A3B8] uppercase font-semibold">Email</div>
                    <div className="text-[#F9F6F0] text-xs sm:text-sm font-semibold">{personalInfo.email}</div>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.email, "email")}
                  className="p-2 rounded-lg bg-[#334155] hover:bg-[#D97706] text-[#CBD5E1] hover:text-[#0F172A] transition-colors"
                  title="Copy Email"
                >
                  {copiedField === "email" ? <Check size={14} className="text-[#F9F6F0]" /> : <Copy size={14} />}
                </button>
              </div>

              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#1E293B] border border-[#334155]">
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 hover:text-[#D97706] transition-colors flex-1"
                >
                  <Phone size={18} className="text-[#38BDF8] shrink-0" />
                  <div>
                    <div className="text-[11px] text-[#94A3B8] uppercase font-semibold">Phone / WhatsApp</div>
                    <div className="text-[#F9F6F0] text-xs sm:text-sm font-semibold">{personalInfo.phone}</div>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.phone, "phone")}
                  className="p-2 rounded-lg bg-[#334155] hover:bg-[#38BDF8] text-[#CBD5E1] hover:text-[#0F172A] transition-colors"
                  title="Copy Phone"
                >
                  {copiedField === "phone" ? <Check size={14} className="text-[#F9F6F0]" /> : <Copy size={14} />}
                </button>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1E293B] border border-[#334155]">
                <MapPin size={18} className="text-[#D97706] shrink-0" />
                <div>
                  <div className="text-[11px] text-[#94A3B8] uppercase font-semibold">Location</div>
                  <div className="text-[#F9F6F0] text-xs sm:text-sm font-semibold">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            {copiedField && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-2.5 rounded-lg bg-[#D97706] text-[#0F172A] text-xs font-bold text-center shadow-lg"
              >
                Copied {copiedField} to clipboard!
              </motion.div>
            )}

            <div className="pt-2 flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#1E293B] hover:bg-[#F9F6F0] hover:text-[#0F172A] border border-[#334155] text-[#F9F6F0] text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-[#0F172A] text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#D97706]/20"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] text-[#0F172A] border border-[#E2E8F0] space-y-6 shadow-lg">
            <h3 className="text-xl font-bold text-[#0F172A] tracking-tight">
              Send a Direct Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#475569]">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    className="w-full bg-[#FAF8F5] border border-[#CBD5E1] rounded-xl px-4 py-3 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#0F172A] transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#475569]">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="w-full bg-[#FAF8F5] border border-[#CBD5E1] rounded-xl px-4 py-3 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#0F172A] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#475569]">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hi Ayush, I'd like to discuss a project..."
                  className="w-full bg-[#FAF8F5] border border-[#CBD5E1] rounded-xl px-4 py-3 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#0F172A] transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-[#F9F6F0] font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#0F172A]/15 transition-all hover:-translate-y-0.5"
              >
                <Send size={15} />
                <span>Send Message</span>
              </button>
            </form>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-[#166534] text-xs font-semibold flex items-center gap-2"
              >
                <CheckCircle2 size={16} className="shrink-0 text-[#15803D]" />
                <span>Thank you! Your message has been dispatched successfully.</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
