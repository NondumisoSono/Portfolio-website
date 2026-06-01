const Projects = () => {
  const projects = [
    { 
      title: 'Portfolio Website', 
      desc: 'My personal portfolio showcasing my skills, projects, and journey as a software developer.', 
      tags: ['HTML', 'CSS', 'Responsive'] 
    },
    { 
      title: 'Calculator App', 
      desc: 'A functional calculator application with a clean interface and smooth user experience.', 
      tags: ['HTML', 'CSS', 'JavaScript'] 
    },
    { 
      title: 'To-Do List App', 
      desc: 'A simple yet effective task management application to organize daily activities.', 
      tags: ['HTML', 'CSS', 'JavaScript'] 
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">My Projects</h2>
          <p className="text-gray-500">Some of my recent work and learning projects</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Live Demo</a>
                <a href="#" className="text-gray-600 hover:underline text-sm font-medium">Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;