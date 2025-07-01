
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
            <div className="inline-block bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full px-4 py-2 mb-6 transition-all duration-300 hover:scale-105">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-sm font-medium font-poppins">ABOUT ME</span>
            </div>
            
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-6 font-poppins">
              About Me
            </h2>
            
            <p className="text-gray-700 dark:text-gray-200 text-lg mb-12 leading-relaxed max-w-3xl mx-auto font-poppins">
              I'm Meet Solanki, a BCA student at Shree Saraswati College of Commerce BBA & IT, Dhoraji. I'm passionate about programming, learning new technologies, and building clean, user-focused websites. My journey as a developer is driven by curiosity, self-learning, and hands-on experimentation.
            </p>

            {/* Personal Traits */}
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-[20px] p-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <h4 className="font-semibold text-[16px] bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 font-poppins">Goal-Oriented</h4>
                <p className="text-gray-600 dark:text-gray-300 text-[14px] leading-relaxed font-poppins">I set clear objectives and stay focused until they're achieved, turning vision into action.</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-[20px] p-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <h4 className="font-semibold text-[16px] bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 font-poppins">Problem Solver</h4>
                <p className="text-gray-600 dark:text-gray-300 text-[14px] leading-relaxed font-poppins">I enjoy analyzing challenges and creating logical, efficient solutions — especially through code.</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-600 max-w-2xl mx-auto transition-all duration-300 hover:shadow-lg hover:scale-105">
              <h4 className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 font-poppins">Education</h4>
              <div className="flex items-center gap-4 justify-center">
                <div className="w-12 h-12 bg-portfolio-gradient rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-white font-bold font-poppins">MS</span>
                </div>
                <div className="text-center sm:text-left">
                  <h5 className="font-medium text-gray-800 dark:text-gray-100 font-poppins">Bachelor of Computer Applications</h5>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-poppins">Shree Saraswati College of Commerce BBA & IT, Dhoraji</p>
                  <p className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-sm font-medium font-poppins">Expected Graduation: 2026</p>
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
