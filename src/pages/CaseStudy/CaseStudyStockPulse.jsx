// src/pages/CaseStudies/CaseStudyStockPulse.jsx

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import stockpulseImg from '../../assets/Images/stockpulse-ai.png';

function CaseStudyStockPulse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = {
    name: 'StockPulse AI',

    tagline:
      'Smart Inventory & Supply Chain Management Platform with AI Assistant',

    heroImage: stockpulseImg,

    problem:
      'Businesses managing inventory and procurement operations often face challenges with manual workflows, inefficient stock tracking, delayed vendor communication, and lack of real-time support systems. Managing secure multi-user access and ensuring scalable backend performance across different operational modules was also a critical challenge.',

    solution:
      'Designed and developed a scalable inventory and supply chain platform with AI-powered chatbot integration using Groq API. Built secure REST APIs, implemented role-based access control, optimized backend workflows, and enabled intelligent support automation for multiple user roles.',

    features: [
      'Inventory tracking system',
      'Procurement workflow management',
      'Vendor management system',
      'AI-powered chatbot integration',
      'Role-Based Access Control (RBAC)',
      'Context-aware chatbot responses',
      'REST API development',
      'Secure multi-user access',
      'Dynamic permission handling',
      'Backend performance optimization',
    ],

    techStack: [
      'Python',
      'Flask',
      'MongoDB',
      'REST APIs',
      'Groq API',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Git',
    ],

    contributions: [
      'Designed and developed scalable REST APIs for inventory workflows.',
      'Implemented Role-Based Access Control (RBAC) for secure data access.',
      'Integrated AI-powered chatbot using Groq API across all modules.',
      'Built dynamic chatbot response handling based on user permissions.',
      'Optimized backend performance and reduced unnecessary database operations.',
      'Managed secure multi-user data access with permission layers.',
      'Improved system reliability and overall application stability.',
      'Supported debugging, deployment, and maintenance of production systems.',
    ],

    challenges: [
      'Maintaining chatbot performance without increasing system latency.',
      'Implementing secure multi-user role and permission management.',
      'Optimizing API performance for large-scale inventory operations.',
      'Designing scalable backend workflows for multiple business modules.',
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

export default CaseStudyStockPulse;