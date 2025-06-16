
import { Button } from "@/components/ui/button";
import { ChevronDown, FileText, Mail } from "lucide-react";

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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Hi, I'm Meet Solanki
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-white/90 mb-6">
              BCA Student | Aspiring Full Stack Developer
            </h2>
            
            <p className="text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
              I'm a student at Shree Saraswati College of Commerce BBA & IT, Dhoraji, pursuing BCA (Batch 2026). I'm passionate about building web apps, improving my communication skills, and constantly learning new technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <FileText className="w-5 h-5 mr-2" />
                📄 View Resume
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                📧 Contact Me
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center p-4">
                <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                  <img 
                    src="https://i.postimg.cc/zXtBVMFP/IMG-20250613-WA0000.jpg" 
                    alt="Meet Solanki - Profile Picture"
                    className="w-full h-full object-cover"
                  />
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
