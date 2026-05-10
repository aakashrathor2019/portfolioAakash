import React from 'react';
import { Link } from 'react-scroll';
import myPhoto from '../assets/Images/myPhoto.png';

const Hero = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Aakash_Resume.pdf";
    link.download = "Aakash_Resume.pdf";
    link.click();
  };

  return (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
  >
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-lg text-indigo-400 font-medium mb-4">
            Hello, I'm
          </h2>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Aakash Rathor
          </h1>

          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-300 mb-6">
            Software Engineer | Python Backend Developer
          </h2>

          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I specialize in building scalable backend systems, REST APIs,
            and full-stack web applications using Python, Django, Flask,
            FastAPI, and AWS. Passionate about solving real-world problems
            through clean architecture, optimized performance, secure
            authentication systems, and reliable cloud-based solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="gradient-btn text-center cursor-pointer text-lg"
            >
              View Projects
            </Link>

            <button
              onClick={handleDownload}
              className="px-6 py-3 border border-white/20 rounded-xl text-white font-medium hover:bg-white/10 transition-all duration-300"
            >
              <a href="/Aakash_Resume.pdf" download>
                Download Resume
              </a>
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-30"></div>

            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center mx-auto lg:mx-0">
              <div className="w-52 h-52 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-2xl bg-dark-bg border border-white/10 flex items-center justify-center overflow-hidden">
                <img
                  src={myPhoto}
                  alt="Aakash Rathor"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default Hero;