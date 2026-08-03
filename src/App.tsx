import { BrowserRouter, Routes, Route } from "react-router-dom";
import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import HomePage from "@/pages/HomePage";
import CaseFilePage from "@/pages/CaseFilePage";

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
