"use client";

import { useState, FormEvent } from "react";
import { personalInfo } from "@/lib/data";
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-6xl mx-auto border-t border-[#232E42]">
      <div className="space-y-12">
        {/* Section Heading */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Mail size={14} />
            <span>Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Whether you have an upcoming full-stack opportunity, product consultation, or just want to connect, feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="clean-card p-6 space-y-4">
              <h3 className="text-lg font-bold text-white border-b border-[#232E42] pb-3">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm text-gray-300">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 p-3 rounded bg-[#131B2A] hover:bg-[#1C263B] border border-[#232E42] transition-colors group"
                >
                  <Mail size={18} className="text-blue-400 shrink-0" />
                  <div>
                    <div className="text-xs text-gray-400">Email Address</div>
                    <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 p-3 rounded bg-[#131B2A] hover:bg-[#1C263B] border border-[#232E42] transition-colors group"
                >
                  <Phone size={18} className="text-blue-400 shrink-0" />
                  <div>
                    <div className="text-xs text-gray-400">Phone / WhatsApp</div>
                    <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded bg-[#131B2A] border border-[#232E42]">
                  <MapPin size={18} className="text-blue-400 shrink-0" />
                  <div>
                    <div className="text-xs text-gray-400">Location</div>
                    <div className="font-semibold text-white">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-4 border-t border-[#232E42] flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-2.5 rounded bg-[#131B2A] hover:bg-blue-600 border border-[#232E42] text-xs font-semibold text-gray-300 hover:text-white transition-all"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-2.5 rounded bg-[#131B2A] hover:bg-blue-600 border border-[#232E42] text-xs font-semibold text-gray-300 hover:text-white transition-all"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 clean-card p-6 md:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-[#232E42] pb-3">
              Send a Direct Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-[#0B0F17] border border-[#232E42] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full bg-[#0B0F17] border border-[#232E42] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-300">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Project Inquiry / Job Opportunity"
                  className="w-full bg-[#0B0F17] border border-[#232E42] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-300">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your message details..."
                  className="w-full bg-[#0B0F17] border border-[#232E42] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/20"
              >
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>

            {submitted && (
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm flex items-center gap-2">
                <CheckCircle size={18} className="shrink-0" />
                <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

