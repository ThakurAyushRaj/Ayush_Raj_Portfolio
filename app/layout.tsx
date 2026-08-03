import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayush Raj — Full Stack Developer | Portfolio",
  description:
    "Full-stack developer experienced in building and shipping production features across MERN and MEAN stacks, React Native, and Flutter. Software Development Engineer at aNquest Media.",
  keywords: [
    "Ayush Raj",
    "Full Stack Developer",
    "Software Development Engineer",
    "aNquest Media",
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "React Native",
    "Flutter",
    "MongoDB",
    "MySQL",
    "AWS"
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#F9F6F0] text-[#0F172A] font-sans selection:bg-[#0F172A] selection:text-[#F9F6F0] relative overflow-x-hidden min-h-screen flex flex-col antialiased">
        <CustomCursor />
        <Navbar />
        <main id="main-content" role="main" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}






