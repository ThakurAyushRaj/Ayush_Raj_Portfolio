import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InvestigativeIntro from "@/components/ui/InvestigativeIntro";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayush Raj — The Personal Record of a Web Developer",
  description:
    "Ayush Raj is a Greater Noida web developer building full-stack applications with Next.js, React, Node.js, Tailwind, MongoDB, AWS, and Vercel.",
  keywords: ["Ayush Raj", "Greater Noida Web Developer", "Full Stack Developer", "Next.js", "React", "Node.js", "MERN", "React Native", "Flutter"],
  authors: [{ name: "Ayush Raj", url: "https://github.com/ThakurAyushRaj" }],
  openGraph: {
    title: "Ayush Raj — The Personal Record of a Web Developer",
    description: "The Personal Record of a Web Developer. The Investigation Edition.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Libre+Caslon+Display&family=Space+Grotesk:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: "#F5F2EB", color: "#1A1918" }}>
        {/* SVG Displacement Filter for organic ink bleed */}
        <svg className="hidden" aria-hidden="true">
          <filter id="fm-rough" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.035 0.06" numOctaves="2" seed="7" result="t" />
            <feDisplacementMap in="SourceGraphic" in2="t" scale="7" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>

        <div className="grain-overlay" aria-hidden="true" />
        
        {/* Interactive Spotlight / Magnifying Glass Intro Screen */}
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
