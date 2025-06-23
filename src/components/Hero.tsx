
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

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight font-poppins">
              Hi, I'm Meet Solanki
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-white/90 mb-6 font-poppins">
              BCA Student
            </h2>
            
            {/* Styled Paragraph Box */}
            <div className="mb-6 max-w-lg mx-auto lg:mx-0">
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <p className="text-xl text-white/90 leading-relaxed font-poppins">
                  I'm passionate about building web apps, improving my communication skills, and constantly learning new technologies.
                </p>
              </div>
            </div>

            {/* Personal Reflection Block */}
            <div className="mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <blockquote className="text-white/80 text-base font-light italic leading-relaxed font-poppins border-l-2 border-white/30 pl-4">
                "This portfolio represents more than just my work — it reflects my growth, curiosity, and commitment to learning. Every section is a small piece of who I am as a student and a developer."
              </blockquote>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <Button 
                className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg font-poppins"
              >
                <FileText className="w-5 h-5 mr-2" />
                📄 View Resume
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 font-poppins"
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
