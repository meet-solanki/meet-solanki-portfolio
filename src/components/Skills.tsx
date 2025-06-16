
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", level: 90, icon: "🎨" },
    { name: "CSS", level: 85, icon: "💅" },
    { name: "JavaScript", level: 80, icon: "🌐" },
    { name: "C", level: 85, icon: "💻" },
    { name: "C++", level: 80, icon: "⚡" },
    { name: "PHP", level: 70, icon: "🐘" },
    { name: "MySQL", level: 75, icon: "🗄️" },
    { name: "C#", level: 65, icon: "🔧" },
    { name: "Git", level: 70, icon: "📝" },
  ];

  const softSkills = [
    { name: "Critical Thinking", level: 90, icon: "🧠" },
    { name: "Problem Solving", level: 85, icon: "🔍" },
    { name: "Time Management", level: 80, icon: "⏰" },
    { name: "Team Collaboration", level: 88, icon: "🤝" },
    { name: "Effective Communication", level: 85, icon: "🗣️" },
    { name: "Adaptability", level: 82, icon: "🔄" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-portfolio-primary/10 dark:bg-portfolio-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-portfolio-primary text-sm font-medium">MY SKILLS</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            My Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical and soft skills developed through 
            continuous learning and academic pursuits.
          </p>
        </div>

        {/* Technical Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
            Programming & Web Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-portfolio-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{skill.icon}</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">{skill.name}</h3>
                  
                  <div className="relative mb-2">
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-gray-200 dark:bg-gray-700"
                    />
                    <div 
                      className="absolute top-0 left-0 h-2 bg-portfolio-gradient rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `skillBarAnimation 1.5s ease-out ${index * 0.2}s both`
                      }}
                    ></div>
                  </div>
                  
                  <span className="text-portfolio-primary font-semibold text-sm">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
            Soft Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${(index + technicalSkills.length) * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-portfolio-accent to-portfolio-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{skill.icon}</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">{skill.name}</h3>
                  
                  <div className="relative mb-2">
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-gray-200 dark:bg-gray-700"
                    />
                    <div 
                      className="absolute top-0 left-0 h-2 bg-gradient-to-r from-portfolio-accent to-portfolio-secondary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `skillBarAnimation 1.5s ease-out ${(index + technicalSkills.length) * 0.2}s both`
                      }}
                    ></div>
                  </div>
                  
                  <span className="text-portfolio-accent font-semibold text-sm">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="text-center animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg inline-block hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-primary mb-1">15+</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">Skills</div>
              </div>
              <div className="w-px h-12 bg-gray-200 dark:bg-gray-600 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-primary mb-1">2026</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">Graduate</div>
              </div>
              <div className="w-px h-12 bg-gray-200 dark:bg-gray-600 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-primary mb-1">BCA</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">Student</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
