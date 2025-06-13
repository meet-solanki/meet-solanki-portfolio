
const Skills = () => {
  const technicalSkills = [
    { name: "C Programming", level: 85, icon: "💻" },
    { name: "C++", level: 80, icon: "⚡" },
    { name: "Java", level: 75, icon: "☕" },
    { name: "JavaScript", level: 70, icon: "🌐" },
    { name: "PHP", level: 65, icon: "🐘" },
    { name: "HTML/CSS", level: 90, icon: "🎨" },
    { name: "ASP.NET", level: 60, icon: "🔧" },
    { name: "WordPress", level: 75, icon: "📝" },
    { name: "Oracle Database", level: 70, icon: "🗄️" },
  ];

  const softSkills = [
    { name: "Communication", description: "Clear written and verbal communication", icon: "💬" },
    { name: "Teamwork", description: "Cooperative mindset and openness to feedback", icon: "🤝" },
    { name: "Time Management", description: "Ability to prioritize tasks and meet deadlines", icon: "⏰" },
    { name: "Problem Solving", description: "Logical thinking and debugging capabilities", icon: "🧩" },
    { name: "Self-Learning", description: "Adaptable and eager to learn new technologies", icon: "📚" },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-portfolio-primary/10 rounded-full px-4 py-2 mb-6">
            <span className="text-portfolio-primary text-sm font-medium">MY SKILLS</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Expertise Service! Let's check it out
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's a overview of my current programming skills and soft skills that I've developed through my studies and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="animate-fade-in">
            <div className="bg-portfolio-gradient-light rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-portfolio-gradient rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Technical Skills</h3>
                  <p className="text-gray-600">Programming languages and technologies</p>
                </div>
              </div>

              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium text-gray-800">{skill.name}</span>
                      </div>
                      <span className="text-portfolio-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-portfolio-gradient rounded-full transition-all duration-1000 ease-out group-hover:scale-105"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="animate-fade-in">
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-portfolio-accent rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Soft Skills</h3>
                  <p className="text-gray-600">Personal and professional abilities</p>
                </div>
              </div>

              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-portfolio-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-portfolio-primary/20 transition-colors">
                        <span className="text-xl">{skill.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{skill.name}</h4>
                        <p className="text-gray-600 text-sm">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
