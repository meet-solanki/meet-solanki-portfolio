
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800 fade-in-on-scroll"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-portfolio-primary/10 rounded-full px-4 py-2 mb-6 transition-all duration-300 hover:scale-105">
              <span className="text-portfolio-primary text-sm font-medium">ABOUT ME</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              About Me
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              I'm Meet Solanki, a BCA student at Shree Saraswati College of Commerce BBA & IT, Dhoraji. I'm passionate about programming, learning new technologies, and building responsive websites.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              My Motivation
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
              What drives me is the excitement of turning ideas into real, functional experiences through code. I'm motivated by continuous learning, solving problems creatively, and building things that make a difference. Every project is a step forward in becoming a better developer and a more thoughtful creator.
            </p>
            
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-600 transition-all duration-300 hover:shadow-lg hover:scale-105 fade-in-on-scroll">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-portfolio-primary/10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-portfolio-primary/20">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Goal-Oriented</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">I always set clear objectives and focus on consistent growth through hands-on projects and continuous learning.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-600 transition-all duration-300 hover:shadow-lg hover:scale-105 fade-in-on-scroll">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-portfolio-accent/10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-portfolio-accent/20">
                    <span className="text-xl">💡</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Innovative Thinking</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">I enjoy approaching problems with creativity and exploring unique, efficient solutions using technology.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-600 max-w-2xl mx-auto mt-8 transition-all duration-300 hover:shadow-lg hover:scale-105">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Education</h4>
              <div className="flex items-center gap-4 justify-center">
                <div className="w-12 h-12 bg-portfolio-gradient rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-white font-bold">MS</span>
                </div>
                <div className="text-center sm:text-left">
                  <h5 className="font-medium text-gray-800 dark:text-gray-100">Bachelor of Computer Applications</h5>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Shree Saraswati College of Commerce BBA & IT, Dhoraji</p>
                  <p className="text-portfolio-primary text-sm font-medium">Expected Graduation: 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
