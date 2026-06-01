const About = () => {
  const details = [
    { label: 'Name', value: 'Nondumiso Innocentia Sono' },
    { label: 'Email', value: 'nondumisoso2003@gmail.com' },
    { label: 'Phone', value: '072 157 3930' },
    { label: 'Focus', value: 'Front-End Development' },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">About Me</h2>
          <p className="text-gray-500">Get to know me a little better</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Software Development Learner</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I'm Nondumiso Innocentia Sono, an aspiring software developer with a passion for creating 
              clean, modern, and user-friendly web applications. Currently focused on mastering 
              front-end development technologies.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My journey in tech started with HTML, and I'm continuously expanding my skills to 
              include CSS, JavaScript, and modern frameworks. I believe in writing clean, 
              maintainable code and creating experiences that users love.
            </p>
          </div>
          
          {/* Right: Info Box */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            {details.map((item) => (
              <div key={item.label} className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-gray-200 last:border-0">
                <span className="font-medium text-gray-800">{item.label}:</span>
                <span className="text-gray-600 mt-1 sm:mt-0">{item.value}</span>
              </div>
            ))}
            <a
              href="#contact"
              className="mt-6 inline-block w-full text-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;