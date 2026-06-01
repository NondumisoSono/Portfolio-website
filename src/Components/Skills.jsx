const Skills = () => {
  const skills = [
    { name: 'HTML5', desc: 'Building semantic, accessible, and well-structured web pages with modern HTML5 elements and best practices.' },
    { name: 'CSS3', desc: 'Creating responsive layouts, animations, and beautiful designs using modern CSS techniques including Flexbox and Grid.' },
    { name: 'JavaScript', desc: 'Learning to add interactivity and dynamic functionality to web applications with vanilla JavaScript.' },
    { name: 'Responsive Design', desc: 'Ensuring websites look and work great on all devices, from mobile phones to large desktop screens.' },
    { name: 'Git & GitHub', desc: 'Version control and collaboration using Git for tracking changes and GitHub for project management.' },
    { name: 'UI/UX Design', desc: 'Understanding design principles to create intuitive, user-centered interfaces that delight users.' },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">My Skills</h2>
          <p className="text-gray-500">Technologies and tools I work with</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;