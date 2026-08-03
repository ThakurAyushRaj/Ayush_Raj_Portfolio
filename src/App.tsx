import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LenisProvider } from "@/components/providers";
import { Navbar, Footer } from "@/components/layout";
import { CustomCursor } from "@/components/ui";
import { HomePage, CaseFilePage } from "@/pages";

export default function App() {
  return (
    <BrowserRouter>
      <LenisProvider>
        <div className="bg-[#F9F6F0] text-[#0F172A] font-sans selection:bg-[#0F172A] selection:text-[#F9F6F0] relative overflow-x-hidden min-h-screen flex flex-col antialiased">
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
        </div>
      </LenisProvider>
    </BrowserRouter>
  );
}
