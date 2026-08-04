import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LenisProvider } from "@/components/providers";
import { Navbar, Footer } from "@/components/layout";
import {
  CustomCursor,
  MinimalBroadsheetBackground,
  ScrollProgress,
  CommandPalette,
  QuickNav,
} from "@/components/ui";
import { HomePage, CaseFilePage } from "@/pages";

export default function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <BrowserRouter>
      <LenisProvider>
        <MinimalBroadsheetBackground className="bg-[#f4f1ea] text-[#181410] font-serif selection:bg-[#181410] selection:text-[#f4f1ea] relative overflow-x-hidden min-h-screen flex flex-col antialiased">
          <ScrollProgress />
          <CustomCursor />
          <CommandPalette
            isOpen={isCommandPaletteOpen}
            onClose={() => setIsCommandPaletteOpen(false)}
          />
          <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
          <main id="main-content" role="main" className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/case-files/:slug" element={<CaseFilePage />} />
              <Route path="/maker" element={<HomePage />} />
            </Routes>
          </main>
          <QuickNav onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
          <Footer />
        </MinimalBroadsheetBackground>
      </LenisProvider>
    </BrowserRouter>
  );
}
