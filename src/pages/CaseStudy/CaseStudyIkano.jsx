import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import ikanoImg from '../../assets/Images/ikano-bank.png';

function CaseStudyIkano() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = {
    name: 'Ikano Bank Platform',

    tagline:
      'Europe-Based Digital Banking Platform & IKEA Financial Partner',

    heroImage: ikanoImg,

    problem:
      'Modern digital banking platforms require secure, scalable, and high-performance backend systems capable of handling customer onboarding, loan processing, secure transactions, and role-based access management. Maintaining reliability, security, and optimized database performance while supporting large-scale banking operations was one of the key challenges.',

    solution:
      'Developed secure and scalable backend modules and REST APIs using Django and Django REST Framework for customer onboarding, loan management, transaction processing, authentication, and authorization. Improved backend performance through optimized PostgreSQL queries and AWS-based deployment strategies.',

    features: [
      'Customer onboarding APIs',
      'Loan management system',
      'Transaction processing workflows',
      'Authentication & authorization',
      'Role-Based Access Control (RBAC)',
      'Secure backend architecture',
      'Optimized PostgreSQL queries',
      'AWS cloud deployment support',
      'RESTful API development',
      'Technical documentation & API specifications',
    ],

    techStack: [
      'Python',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'AWS',
      'Git',
      'REST APIs',
    ],

    contributions: [
      'Built scalable REST APIs for banking workflows and financial services.',
      'Developed secure backend modules for onboarding and loan processing.',
      'Implemented authentication, authorization, and role-based access control.',
      'Optimized backend performance and database queries for improved reliability.',
      'Collaborated with European stakeholders, QA teams, and product owners.',
      'Conducted debugging, testing, and backend performance optimization.',
      'Created and maintained technical documentation and API specifications.',
      'Participated in Agile ceremonies including sprint planning, Scrum calls, and retrospectives.',
    ],

    challenges: [
      'Ensuring secure handling of sensitive banking transactions and user data.',
      'Optimizing database performance for high-volume financial operations.',
      'Maintaining scalable backend architecture for reliable system performance.',
      'Implementing secure authentication and role-based access systems.',
    ],
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-dark-bg pt-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="pt-24 pb-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>

              Back to Projects
            </Link>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">

              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10">
                <img
                  src={project.heroImage}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/50 to-transparent"></div>
              </div>

              <div className="flex flex-col justify-center">

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {project.name}
                </h1>

                <p className="text-xl text-gray-300 mb-6">
                  {project.tagline}
                </p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Tech Stack
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-indigo-500/20 text-indigo-400 text-sm rounded-lg border border-indigo-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            <section className="mb-16">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <h2 className="text-3xl font-bold text-white">
                  Problem Statement
                </h2>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.problem}
                </p>
              </div>

            </section>

            <section className="mb-16">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>

                <h2 className="text-3xl font-bold text-white">
                  Solution
                </h2>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.solution}
                </p>
              </div>

            </section>

            <section className="mb-16">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <h2 className="text-3xl font-bold text-white">
                  Key Features
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-indigo-500/30 transition-colors"
                  >
                    <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-indigo-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <span className="text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

            </section>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CaseStudyIkano;