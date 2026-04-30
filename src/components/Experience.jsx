import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'JUST MIND WORK Private Limited',
      duration: '2024 - Present',
      description: 'Building scalable web applications using React and Ruby on Rails. Leading frontend architecture decisions and implementing modern UI/UX practices.',
    },
    {
      title: 'Software Developer',
      company: 'JUST MIND WORK Private Limited',
      duration: '2023 - 2024',
      description: 'Developed custom web solutions for clients across various industries. Collaborated with design teams to implement responsive and accessible interfaces.',
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Hub',
      duration: '2022 - 2023',
      description: 'Started my professional journey building MVPs and learning modern web technologies. Gained hands-on experience with HTML, CSS, JavaScript and databases.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Work <span className="text-indigo-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional journey in the tech industry
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transform -translate-x-1/2 z-10 shadow-lg shadow-indigo-500/50"></div>

                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <div className="card card-hover">
                    <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-400 text-sm rounded-full mb-3">
                      {exp.duration}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                    <h4 className="text-purple-400 font-medium mb-3">
                      {exp.company}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;