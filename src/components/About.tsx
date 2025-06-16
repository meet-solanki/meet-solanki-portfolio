
const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-portfolio-gradient-light dark:bg-gray-700 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-16 h-16 bg-portfolio-primary/10 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-portfolio-accent/10 rounded-full"></div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-portfolio-primary/20 shadow-xl mx-auto mb-4">
                  <img 
                    src="https://i.postimg.cc/zXtBVMFP/IMG-20250613-WA0000.jpg" 
                    alt="Meet Solanki - About Picture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Education Journey</h3>
                <p className="text-gray-600 dark:text-gray-300">Passionate learner & tech enthusiast</p>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="inline-block bg-portfolio-primary/10 rounded-full px-4 py-2 mb-6">
              <span className="text-portfolio-primary text-sm font-medium">ABOUT ME</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              About Me
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
              I am a tech-enthusiastic BCA student with a deep interest in web development, problem-solving, and continuous learning. I enjoy collaborating on new ideas and growing as a developer.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-portfolio-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Goal-Oriented</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Focused on continuous learning and skill development</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-portfolio-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Innovative Thinking</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Creative problem-solving approach to challenges</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-600">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Education</h4>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-portfolio-gradient rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MS</span>
                </div>
                <div>
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
