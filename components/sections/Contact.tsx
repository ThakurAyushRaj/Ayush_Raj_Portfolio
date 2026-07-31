"use client";

import { useState } from "react";
import { Copy, Check, Send, CheckCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", story: "" });
  const [submitted, setSubmit] = useState(false);
  const [copiedEmail, setCE] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      setCE(true);
      setTimeout(() => setCE(false), 2000);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmit(true);
    setForm({ name: "", email: "", subject: "", story: "" });
    setTimeout(() => setSubmit(false), 5000);
  };

  return (
    <section id="contact" className="bg-paper text-ink py-16 border-b-2 border-ink overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex justify-between items-center py-3 font-grotesk text-xs tracking-widest uppercase text-ink-muted border-y-2 border-ink mb-12">
          <div>SUBMIT A TIP</div>
          <div>Letters & Commissions / Put it in writing</div>
        </div>

        {/* Section Headline */}
        <div className="mb-12 max-w-3xl">
          <span className="font-mono text-xs tracking-widest text-stamp font-bold uppercase block mb-2">
            CORRESPONDENCE DESK
          </span>
          <h2 className="font-caslon text-4xl sm:text-5xl md:text-6xl font-normal leading-tight">
            Letters & Commissions / Put it in writing.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards & Side Box */}
          <div className="flex flex-col gap-6">
            
            {/* Direct Email Link Card */}
            <div className="border-2 border-ink p-6 bg-paper-bright">
              <span className="font-grotesk text-xs font-bold tracking-widest uppercase text-ink-muted block mb-2">
                DIRECT LINE
              </span>
              <div className="flex items-center justify-between gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-caslon text-2xl sm:text-3xl font-normal text-ink hover:text-stamp link-pencil"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="font-mono text-xs border border-ink px-3 py-1.5 hover:bg-paper-warm transition-colors flex items-center gap-1.5"
                >
                  {copiedEmail ? <Check size={14} className="text-stamp" /> : <Copy size={14} />}
                  {copiedEmail ? "COPIED" : "COPY"}
                </button>
              </div>
              <p className="font-serif italic text-xs text-ink-muted mt-3">
                For commissions, contracts, and the occasional good argument about CSS.
              </p>
            </div>

            {/* Availability & Location Side Box */}
            <div className="border-2 border-ink p-6 bg-paper-bright grid sm:grid-cols-2 gap-6">
              <div>
                <span className="font-grotesk text-xs font-bold tracking-widest uppercase text-ink-muted block mb-1">
                  THE DESK
                </span>
                <p className="font-caslon text-xl font-normal text-ink">
                  {personalInfo.location}
                </p>
                <p className="font-mono text-xs text-ink-muted mt-1">
                  IST · Remote-first
                </p>
              </div>

              <div>
                <span className="font-grotesk text-xs font-bold tracking-widest uppercase text-ink-muted block mb-1">
                  AVAILABILITY
                </span>
                <span className="inline-block font-mono text-[10px] font-bold tracking-widest border border-stamp text-stamp px-2.5 py-1 bg-paper/80 uppercase mt-1">
                  Freelance & contract only
                </span>
                <p className="font-serif italic text-xs text-ink-muted mt-2">
                  Working full-time at aNquest Media, taking select projects on the side.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Submit a Tip Form */}
          <div className="border-2 border-ink p-6 md:p-8 bg-paper-bright">
            <span className="font-grotesk text-xs font-bold tracking-widest uppercase text-ink-muted block mb-6 border-b border-ink/20 pb-3">
              TRANSMIT CORRESPONDENCE
            </span>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <CheckCircle size={40} className="text-stamp mb-3" />
                <h3 className="font-caslon text-2xl font-normal">Letter Transmitted</h3>
                <p className="font-serif italic text-sm text-ink-muted mt-2">
                  Thank you. Your message has been safely filed into the desk queue.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="font-grotesk text-xs tracking-wider uppercase text-ink-muted block mb-1">
                      YOUR NAME
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-paper border border-ink p-3 font-serif text-base text-ink outline-none focus:border-stamp"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="font-grotesk text-xs tracking-wider uppercase text-ink-muted block mb-1">
                      EMAIL
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-paper border border-ink p-3 font-serif text-base text-ink outline-none focus:border-stamp"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="font-grotesk text-xs tracking-wider uppercase text-ink-muted block mb-1">
                    SUBJECT
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-paper border border-ink p-3 font-serif text-base text-ink outline-none focus:border-stamp"
                    placeholder="Project Inquiry / Application Build"
                  />
                </div>

                <div>
                  <label htmlFor="story" className="font-grotesk text-xs tracking-wider uppercase text-ink-muted block mb-1">
                    THE STORY
                  </label>
                  <textarea
                    id="story"
                    rows={4}
                    required
                    value={form.story}
                    onChange={(e) => setForm({ ...form, story: e.target.value })}
                    className="w-full bg-paper border border-ink p-3 font-serif text-base text-ink outline-none focus:border-stamp resize-none"
                    placeholder="Details about your project brief or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="font-grotesk text-xs font-bold tracking-widest uppercase py-4 bg-ink text-paper hover:bg-stamp transition-colors duration-200 flex items-center justify-center gap-2 mt-2 shadow-sm"
                >
                  <Send size={14} /> Send the letter →
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
