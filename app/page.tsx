import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import { ParallaxStarsBackground } from "@/components/ui/ParallaxStarsBackground";

export default function Home() {
  return (
    <ParallaxStarsBackground speed={1.2}>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </ParallaxStarsBackground>
  );
}

