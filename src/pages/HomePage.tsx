import { Hero, About, Projects, Skills, Experience, Education, Contact } from "@/components/sections";
import { ReactiveNodeBackground } from "@/components/ui";

export default function HomePage() {
  return (
    <ReactiveNodeBackground>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </ReactiveNodeBackground>
  );
}
