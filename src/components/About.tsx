
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
              I am a tech-enthusiastic BCA student with a deep interest in web development, problem-solving, and continuous learning. I enjoy collaborating on new ideas and growing as a developer.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
              <div className="flex items-start gap-4 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-portfolio-primary/10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-portfolio-primary/20">
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Goal-Oriented</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Focused on continuous learning and skill development</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-portfolio-accent/10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-portfolio-accent/20">
                  <span className="text-xl">💡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Innovative Thinking</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Creative problem-solving approach to challenges</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-600 max-w-2xl mx-auto transition-all duration-300 hover:shadow-lg hover:scale-105">
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
