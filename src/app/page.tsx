import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import SAE from "@/components/SAE";
import Education from "@/components/Education";
import CV from "@/components/CV";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <SAE />
        <Education />
        <CV />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
