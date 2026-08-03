import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "AYUSH RAJ // SWISS INTERNATIONAL PORTFOLIO",
  description:
    "Swiss International Style portfolio of Ayush Raj, Full Stack Developer building scalable web and mobile applications using React, Next.js, Node.js, Express, MongoDB, and React Native.",
  keywords: ["Ayush Raj", "Full Stack Developer", "Swiss Style", "International Typographic Style", "React.js", "Next.js", "Node.js"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-black font-sans selection:bg-[#FF3000] selection:text-white relative overflow-x-hidden min-h-screen flex flex-col antialiased">
        <Navbar />
        <main id="main-content" role="main" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


