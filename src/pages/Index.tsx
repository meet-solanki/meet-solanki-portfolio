
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
