import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      skills: [
        'Python',
        'Django',
        'Django REST Framework',
        'Flask',
        'FastAPI',
        'REST APIs',
        'Authentication',
        'RBAC',
        'Third-party API Integration',
      ],
      color: 'from-purple-500 to-pink-500',
    },

    {
      title: 'Frontend & Scripting',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Bootstrap',
        'Responsive Design',
        'Bash/Shell Scripting',
      ],
      color: 'from-blue-500 to-cyan-500',
    },

    {
      title: 'Database & Cloud',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      skills: [
        'PostgreSQL',
        'MongoDB',
        'SQLite',
        'AWS EC2',
        'AWS S3',
        'AWS RDS',
        'AWS Lambda',
        'Jenkins CI/CD',
        'Git',
        'GitHub',
        'Linux CLI',
      ],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-indigo-500">Skills</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A strong technical skill set focused on Python backend development,
            REST API architecture, cloud deployment, database management,
            debugging, and scalable web application development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card card-hover group">
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-white">
                  {category.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;