
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-portfolio-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-portfolio-accent/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-white/90 text-sm font-medium">👋 Hello, I'm</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Meet Solanki
              <span className="block text-2xl md:text-3xl font-medium text-white/90 mt-2">
                BCA Student & Aspiring Developer
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-lg">
              Passionate about technology and programming. Currently pursuing BCA at Shree Saraswati College, graduating in 2026.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </Button>
              <Button 
                onClick={() => scrollToSection('about')}
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white/30 rounded-full flex items-center justify-center">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg animate-float">
                <span className="text-portfolio-primary font-semibold">2026 Graduate</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-portfolio-accent rounded-full px-4 py-2 shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <span className="text-white font-semibold">BCA Student</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
