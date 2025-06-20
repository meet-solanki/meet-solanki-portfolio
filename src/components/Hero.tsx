
import { Button } from "@/components/ui/button";
import { ChevronDown, FileText, Mail, Github, Linkedin } from "lucide-react";

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
            {/* Welcome Button */}
            <div className="mb-8">
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
                👋 Welcome to My Portfolio
              </Button>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Hi, I'm Meet Solanki
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-white/90 mb-6">
              BCA Student | Aspiring Full Stack Developer
            </h2>
            
            <p className="text-xl text-white/80 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-auto text-center">
              I'm passionate about building web apps, improving my communication skills, and constantly learning new technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <FileText className="w-5 h-5 mr-2" />
                📄 View Resume
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                📧 Contact Me
              </Button>
            </div>

            {/* Social Icons Below Buttons */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://github.com/meet-solanki"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-white/30"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/meet-solanki-71403b36b"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-white/30"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-xl mx-auto">
                <img 
                  src="https://i.postimg.cc/zXtBVMFP/IMG-20250613-WA0000.jpg" 
                  alt="Meet Solanki - Profile Picture"
                  className="w-full h-full object-cover"
                />
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
