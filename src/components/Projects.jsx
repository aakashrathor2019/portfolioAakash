import React from 'react';
import ProjectCard from './ProjectCard';

import ikanoImg from '../assets/Images/ikano-bank.png';
import decathlonImg from '../assets/Images/decathlon-store.png';
import stockpulseImg from '../assets/Images/stockpulse-ai.png';
import smartcartImg from '../assets/Images/smartcart.png';

const Projects = () => {
  const projects = [
    {
      title: 'Ikano Bank Platform',
      description:
        'Developed secure backend services for a Europe-based digital banking platform and IKEA financial partner. Built REST APIs for customer onboarding, loan management, transaction processing, authentication, authorization, and role-based access control with optimized PostgreSQL queries and AWS deployment.',
      image: ikanoImg,
      link: '/projects/ikano-bank',
      techStack: [
        'Python',
        'Django',
        'Django REST Framework',
        'AWS',
        'PostgreSQL',
        'Git',
        'REST API',
      ],
    },

    {
      title: 'Decathlon Online Store',
      description:
        'Built scalable e-commerce modules including product catalog, shopping cart, checkout, payment integration, and order management. Implemented CI/CD pipelines using Jenkins and deployed applications on AWS infrastructure with secure authentication systems.',
      image: decathlonImg,
      link: '/projects/decathlon-store',
      techStack: [
        'Python',
        'Django',
        'HTML5',
        'CSS3',
        'JavaScript',
        'AWS',
        'Jenkins',
        'PostgreSQL',
      ],
    },

    {
      title: 'StockPulse AI',
      description:
        'Designed and developed a smart inventory and supply chain management platform with AI-powered chatbot integration using Groq API. Implemented scalable REST APIs, RBAC security, dynamic permission handling, and optimized backend performance for multi-user workflows.',
      image: stockpulseImg,
      link: '/projects/stockpulse-ai',
      techStack: [
        'Python',
        'Flask',
        'MongoDB',
        'REST API',
        'Groq API',
        'JavaScript',
        'Git',
      ],
    },

    {
      title: 'SmartCart E-Commerce',
      description:
        'Developed a full-stack e-commerce web application with dynamic product management, real-time inventory updates, Stripe payment gateway integration, advanced filtering, responsive UI, and admin management functionalities for orders and customer support.',
      image: smartcartImg,
      link: '/projects/smartcart',
      techStack: [
        'Python',
        'Django',
        'SQLite',
        'Stripe',
        'Bootstrap',
        'JavaScript',
        'HTML5',
        'CSS3',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-indigo-500">Projects</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of the real-world projects I’ve worked on,
            showcasing my expertise in Python backend development,
            scalable REST APIs, cloud deployment, AI integration,
            and full-stack web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;