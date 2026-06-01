const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Get In Touch</h2>
          <p className="text-gray-500">Let's connect and discuss opportunities</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Let's Talk</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be 
              part of your vision. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-gray-500 font-medium w-20">Email</span>
                <a href="mailto:nondumisoso2003@gmail.com" className="text-blue-600 hover:underline">nondumisoso2003@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 font-medium w-20">Phone</span>
                <a href="tel:0721573930" className="text-blue-600 hover:underline">072 157 3930</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 font-medium w-20">Location</span>
                <span className="text-gray-800">South Africa</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <input type="text" placeholder="Subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Message" rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
            <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;