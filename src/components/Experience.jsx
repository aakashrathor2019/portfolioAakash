import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Gammaedge Technologies – Indore, MP',
      duration: 'June 2025 – Present',
      description:
        'Working on Ikano Bank, a Europe-based digital banking platform and IKEA financial partner. Built secure RESTful APIs for customer onboarding, loan management, and transaction processing using Python, Django, REST API, AWS, PostgreSQL, and Git. Implemented authentication, authorization, role-based access control, optimized database performance, conducted debugging and testing, and collaborated with European stakeholders, QA teams, and product owners in Agile environments.',
    },
    {
      title: 'Junior Software Engineer',
      company: 'BestPeers Infosystems – Indore, MP',
      duration: 'July 2024 – June 2025',
      description:
        'Worked on Decathlon Online Store, a global sports retail e-commerce platform. Developed full-stack e-commerce modules including product catalog, shopping cart, checkout, and order management using Django, HTML, CSS, JavaScript, AWS, Jenkins, and Git. Integrated secure payment gateways, implemented RBAC, managed AWS deployments, handled production debugging, and built CI/CD pipelines for faster and reliable deployments.',
    },
    {
      title: 'Associate Software Engineer',
      company: 'Trumen Technologies Pvt. Ltd. – Indore, MP',
      duration: 'June 2023 – June 2024',
      description:
        'Contributed to StockPulse AI, a smart inventory and supply chain platform with AI Assistant. Designed scalable REST APIs using Python and Flask for inventory tracking, procurement workflows, and vendor management. Developed and integrated AI chatbot features using Groq API with role-based access control, optimized backend performance, improved system reliability, and supported deployment, debugging, and maintenance of production systems.',
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
            My professional journey in Python backend and full-stack development
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

                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
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