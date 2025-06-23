import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const sectionRef = useScrollAnimation();

  const featuredProject = {
    title: "Personal Portfolio Website",
    description: "A responsive and modern personal website to showcase my skills, projects, and contact information.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    liveLink: "https://meet-solanki-portfolio.lovable.app",
    githubLink: "https://github.com/meet-solanki",
    featured: true
  };

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive personal website built to showcase my skills, projects, and contact information.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://meet-solanki-portfolio.lovable.app",
      githubLink: "https://github.com/meet-solanki",
      type: "live"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800 fade-in-on-scroll"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-portfolio-primary/10 dark:bg-portfolio-primary/20 rounded-full px-4 py-2 mb-6 transition-all duration-300 hover:scale-105">
            <span className="text-portfolio-primary text-sm font-medium">MY PROJECTS</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and passion for web development.
          </p>
        </div>

        {/* Featured Project */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group animate-fade-in border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/5 to-portfolio-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* GitHub Icon */}
            <div className="absolute top-6 right-6 z-10">
              <a
                href={featuredProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
            </div>

            <div className="relative z-10">
              {/* Featured Badge */}
              <div className="inline-block bg-portfolio-gradient text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                Featured Project
              </div>

              {/* Project Icon */}
              <div className="w-20 h-20 bg-portfolio-gradient rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🌐</span>
              </div>
              
              {/* Title */}
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 pr-16">
                {featuredProject.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed max-w-2xl">
                {featuredProject.description}
              </p>
              
              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-3">
                  {featuredProject.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-4 py-2 bg-portfolio-primary/10 text-portfolio-primary text-sm font-medium rounded-full transition-all duration-300 hover:bg-portfolio-primary/20 hover:scale-105 border border-portfolio-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={featuredProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-portfolio-gradient hover:opacity-90 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 font-medium btn-hover-effect group/btn"
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                  View Live
                </a>
                <a
                  href={featuredProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 hover:border-portfolio-primary dark:hover:border-portfolio-primary text-gray-700 dark:text-gray-300 hover:text-portfolio-primary dark:hover:text-portfolio-primary px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 font-medium btn-hover-effect group/btn"
                >
                  <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group animate-fade-in border border-gray-100 dark:border-gray-700 btn-hover-effect relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* GitHub Icon in top-right corner */}
              <div className="absolute top-4 right-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </a>
              </div>

              <div className="mb-4">
                <div className="w-16 h-16 bg-portfolio-gradient rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🌐</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 transition-colors duration-300 pr-8">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary text-xs font-medium rounded-full transition-all duration-300 hover:bg-portfolio-primary/20 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-portfolio-gradient hover:opacity-90 text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 text-sm font-medium btn-hover-effect"
                >
                  View Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
