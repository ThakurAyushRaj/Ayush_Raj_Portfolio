import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InvestigativeIntro from "@/components/ui/InvestigativeIntro";

export const metadata: Metadata = {
  title: "SERGIO AYALA // ART DIRECTOR & CREATIVE DEVELOPER — 80s Anime Cyberpunk",
  description:
    "80s/90s retro-anime and industrial cyberpunk portfolio inspired by Sergio Ayala's award-winning design. Full-stack development with Next.js, React, GSAP, and Tailwind CSS.",
  keywords: ["Sergio Ayala", "Ayush Raj", "Retro Anime Portfolio", "Cyberpunk GUI", "Full Stack Developer", "Next.js", "GSAP"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=JetBrains+Mono:wght@300;400;500;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#070709] text-white font-mono selection:bg-[#E4002B] selection:text-white relative overflow-x-hidden crt-flicker">
        {/* CRT Scanline Overlay */}
        <div className="scanlines" aria-hidden="true" />
        
        {/* Interactive Glitch Preloader */}
        <InvestigativeIntro />

        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
