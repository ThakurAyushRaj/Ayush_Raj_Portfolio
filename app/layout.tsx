import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Ayush Raj — Full Stack Developer Portfolio",
  description:
    "Portfolio of Ayush Raj, Full Stack Developer building scalable web and mobile applications using React, Next.js, Node.js, Express, MongoDB, and React Native.",
  keywords: ["Ayush Raj", "Full Stack Developer", "Software Engineer", "React.js", "Next.js", "Node.js", "MongoDB", "React Native", "Portfolio"],
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0B0F17] text-gray-100 font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden min-h-screen flex flex-col">
        <Navbar />
        <main id="main-content" role="main" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

