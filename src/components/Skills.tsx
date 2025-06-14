
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML/CSS", level: 90, icon: "🎨" },
    { name: "C Programming", level: 85, icon: "💻" },
    { name: "C++", level: 80, icon: "⚡" },
    { name: "Java", level: 75, icon: "☕" },
    { name: "JavaScript", level: 70, icon: "🌐" },
    { name: "WordPress", level: 75, icon: "📝" },
    { name: "Oracle Database", level: 70, icon: "🗄️" },
    { name: "PHP", level: 65, icon: "🐘" },
    { name: "ASP.NET", level: 60, icon: "🔧" },
  ];

  const softSkills = [
    { 
      name: "Communication", 
      description: "Clear written and verbal communication skills with ability to explain technical concepts", 
      icon: "🗣️" 
    },
    { 
      name: "Teamwork & Collaboration", 
      description: "Cooperative mindset with openness to feedback and collaborative problem-solving", 
      icon: "🤝" 
    },
    { 
      name: "Time Management", 
      description: "Strong ability to prioritize tasks, meet deadlines, and manage multiple projects", 
      icon: "⏱️" 
    },
    { 
      name: "Problem Solving", 
      description: "Logical thinking approach with strong debugging and analytical capabilities", 
      icon: "🧩" 
    },
    { 
      name: "Self-Learning", 
      description: "Adaptable mindset with eagerness to learn new technologies and frameworks", 
      icon: "📚" 
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-portfolio-primary/10 dark:bg-portfolio-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-portfolio-primary text-sm font-medium">MY SKILLS</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Skills & Tools
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical programming skills and soft skills developed through 
            continuous learning and academic pursuits.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills Section */}
          <div className="animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-portfolio-gradient rounded-2xl flex items-center justify-center animate-float">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Technical Skills</h3>
                  <p className="text-gray-600 dark:text-gray-300">Programming languages & technologies</p>
                </div>
              </div>

              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <span className="font-medium text-gray-800 dark:text-gray-100">{skill.name}</span>
                      </div>
                      <span className="text-portfolio-primary font-semibold bg-portfolio-primary/10 dark:bg-portfolio-primary/20 px-2 py-1 rounded-full text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-3 bg-gray-200 dark:bg-gray-700 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div 
                        className="absolute top-0 left-0 h-3 bg-portfolio-gradient rounded-full transition-all duration-1000 ease-out opacity-80"
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `skillBarAnimation 1.5s ease-out ${index * 0.2}s both`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills Section */}
          <div className="animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-portfolio-accent rounded-2xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Soft Skills</h3>
                  <p className="text-gray-600 dark:text-gray-300">Personal & professional abilities</p>
                </div>
              </div>

              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 hover:bg-portfolio-primary/5 dark:hover:bg-portfolio-primary/10 hover:shadow-md hover:scale-105 transition-all duration-300 group cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-portfolio-primary/10 dark:bg-portfolio-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-portfolio-primary/20 dark:group-hover:bg-portfolio-primary/30 group-hover:scale-110 transition-all duration-300">
                        <span className="text-xl">{skill.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-portfolio-primary transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg inline-block hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-primary mb-1">9+</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">Technologies</div>
              </div>
              <div className="w-px h-12 bg-gray-200 dark:bg-gray-600 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-primary mb-1">5+</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">Core Skills</div>
              </div>
              <div className="w-px h-12 bg-gray-200 dark:bg-gray-600 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-primary mb-1">2026</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">Graduate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
