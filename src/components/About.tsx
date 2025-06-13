
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-portfolio-gradient-light rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-16 h-16 bg-portfolio-primary/10 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-portfolio-accent/10 rounded-full"></div>
              
              <div className="text-center">
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Education Journey</h3>
                <p className="text-gray-600">Passionate learner & tech enthusiast</p>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="inline-block bg-portfolio-primary/10 rounded-full px-4 py-2 mb-6">
              <span className="text-portfolio-primary text-sm font-medium">ABOUT ME</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Designing Solutions, Not Just Visuals
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              I'm currently pursuing my BCA at Shree Saraswati College of Commerce BBA & IT in Dhoraji, 
              expected to graduate in 2026. I'm enthusiastic about programming and technology, and I enjoy 
              learning new skills every day.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-portfolio-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Goal-Oriented</h4>
                  <p className="text-gray-600 text-sm">Focused on continuous learning and skill development</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-portfolio-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Innovative Thinking</h4>
                  <p className="text-gray-600 text-sm">Creative problem-solving approach to challenges</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-800 mb-4">Education</h4>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-portfolio-gradient rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MS</span>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Bachelor of Computer Applications</h5>
                  <p className="text-gray-600 text-sm">Shree Saraswati College of Commerce BBA & IT, Dhoraji</p>
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
