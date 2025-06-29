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
            <span className="text-portfolio-primary text-sm font-medium font-poppins">MY PROJECTS</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-poppins">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-poppins leading-relaxed">
            Here are some of the projects I've worked on, showcasing my skills and passion for web development.
          </p>
        </div>

        {/* Projects Grid - Currently empty but ready for future projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 border border-gray-100 dark:border-gray-600">
                <div className="w-16 h-16 bg-portfolio-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 font-poppins">
                  More Projects Coming Soon!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-poppins">
                  I'm constantly working on new projects. Check back soon to see my latest work!
                </p>
              </div>
            </div>
          ) : (
            projects.map((project, index) => (
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
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
