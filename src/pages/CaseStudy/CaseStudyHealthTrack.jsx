import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import healthtrackImg from '../../assets/Images/healthtrack.png';

function CaseStudyHealthTrack() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = {
    name: 'HealthTrack',
    tagline: 'Comprehensive health and wellness tracking application for fitness goals',
    heroImage: healthtrackImg,
    problem: 'Users struggle to track their fitness goals, nutrition, and daily activities effectively. Existing solutions are either too complex for casual users or lack intuitive visualizations to help people understand their health progress and maintain motivation.',
    solution: 'Built a comprehensive health and wellness tracking application that helps users monitor their fitness goals, nutrition, and daily activities with intuitive visualizations and an easy-to-use interface. The app makes health tracking simple and engaging.',
    features: [
      'Fitness goal tracking and progress monitoring',
      'Nutrition and calorie tracking',
      'Daily activity logging',
      'Interactive progress visualizations and charts',
      'Workout planning and logging',
      'Water intake monitoring',
      'Sleep quality tracking',
      'Achievement badges and milestones',
      'Personalized health insights',
      'Data export and sharing'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Chart.js', 'LocalStorage API'],
    contributions: [
      'Built the complete frontend application from scratch using React',
      'Designed intuitive data visualization dashboards with Chart.js',
      'Created fully responsive layouts for mobile, tablet, and desktop devices',
      'Implemented comprehensive fitness tracking features with real-time updates',
      'Built progress tracking and achievement system to boost user motivation',
      'Optimized performance for smooth user experience and fast loading',
      'Implemented local storage for offline data persistence',
      'Created reusable component library for consistent UI'
    ],
    challenges: [
      'Creating engaging and meaningful data visualizations that are easy to understand',
      'Managing large amounts of health data efficiently in the browser',
      'Building an intuitive UX that makes daily activity tracking feel effortless',
      'Designing motivating achievement systems that encourage consistent use'
    ]
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
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.name}</h1>
                <p className="text-xl text-gray-300 mb-6">{project.tagline}</p>
                
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="px-3 py-1.5 bg-indigo-500/20 text-indigo-400 text-sm rounded-lg border border-indigo-500/30">
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
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Problem Statement</h2>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <p className="text-gray-300 text-lg leading-relaxed">{project.problem}</p>
              </div>
            </section>

            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Solution</h2>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <p className="text-gray-300 text-lg leading-relaxed">{project.solution}</p>
              </div>
            </section>

            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Key Features</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-indigo-500/30 transition-colors">
                    <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Tech Stack</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="px-5 py-2.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-400 rounded-xl border border-indigo-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">My Contribution</h2>
              </div>
              <div className="space-y-4">
                {project.contributions.map((contribution, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-300 pt-2">{contribution}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Challenges & Learnings</h2>
              </div>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-4 bg-purple-500/10 backdrop-blur-sm rounded-xl p-5 border border-purple-500/20">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-300 pt-2">{challenge}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="text-center">
              <Link 
                to="/#projects" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium hover:opacity-85 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CaseStudyHealthTrack;
