import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import CVDownload from "@/components/CVDownload";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <CVDownload />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
