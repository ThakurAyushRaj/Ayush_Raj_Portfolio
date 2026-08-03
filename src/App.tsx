import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LenisProvider } from "@/components/providers";
import { Navbar, Footer } from "@/components/layout";
import { CustomCursor, MinimalBroadsheetBackground } from "@/components/ui";
import { HomePage, CaseFilePage } from "@/pages";

export default function App() {
  return (
    <BrowserRouter>
      <LenisProvider>
        <MinimalBroadsheetBackground className="bg-[#f4f1ea] text-[#181410] font-serif selection:bg-[#181410] selection:text-[#f4f1ea] relative overflow-x-hidden min-h-screen flex flex-col antialiased">
          <CustomCursor />
          <Navbar />
          <main id="main-content" role="main" className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/case-files/:slug" element={<CaseFilePage />} />
              <Route path="/maker" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </MinimalBroadsheetBackground>
      </LenisProvider>
    </BrowserRouter>
  );
}
