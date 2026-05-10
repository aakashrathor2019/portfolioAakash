import React from 'react';
import aboutImg from '../assets/Images/About.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-indigo-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative w-72 h-100 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <img
                  src={aboutImg}
                  alt="About Me"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Python Web Developer Focused on Scalable Backend Solutions
            </h3>

            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Detail-oriented Python Web Developer with strong hands-on experience
              in building and testing scalable web applications. Skilled in Django,
              Django REST Framework, Flask, FastAPI, HTML, CSS, and JavaScript,
              with practical experience in REST API development, AWS deployment,
              database optimization, Git version control, and Agile methodologies.
            </p>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Experienced in developing secure backend systems, implementing
              authentication and role-based access control, integrating third-party
              APIs, and optimizing application performance. Passionate about
              debugging, clean code practices, technical documentation, and
              delivering reliable business-aligned solutions across banking,
              e-commerce, and inventory management platforms.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="card text-center">
                <h4 className="text-3xl font-bold text-indigo-500">3+</h4>
                <p className="text-gray-400 mt-2">Years Experience</p>
              </div>

              <div className="card text-center">
                <h4 className="text-3xl font-bold text-purple-500">15+</h4>
                <p className="text-gray-400 mt-2">Projects & Modules Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;