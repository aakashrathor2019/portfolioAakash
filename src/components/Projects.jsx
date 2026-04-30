import React from 'react';
import ProjectCard from './ProjectCard';
import billingImg from '../assets/Images/billing.png';
import jambarImg from '../assets/Images/jambarApp.png';
import healthtrackImg from '../assets/Images/healthtrack.png';
import taskflowImg from '../assets/Images/taskflow.png';

const Projects = () => {
  const projects = [
    {
      title: 'Billeasy',
      description: 'A comprehensive billing and invoicing platform that streamlines financial management for businesses. Features include invoice generation, payment tracking, and financial reporting.',
      image: billingImg,
      link: '/projects/billeasy',
      techStack: ['React', 'React Native', 'Ruby on Rails', 'Tailwind CSS', 'Material UI', 'PostgreSQL', 'Stripe'],
    },
    {
      title: 'JambarApp',
      description: 'A modern e-commerce platform with advanced product management, shopping cart functionality, and secure payment processing. Built with scalability in mind.',
      image: jambarImg,
      link: '/projects/jambar-app',
      techStack: ['React', 'React Native', 'Ruby on Rails', 'Tailwind CSS', 'PostgreSQL', 'Firebase', 'Twilio'],
    },
    {
      title: 'TaskFlow',
      description: 'A project management application with real-time collaboration, task tracking, and team communication features. Helps teams stay organized and productive.',
      image: taskflowImg,
      link: '/projects/taskflow',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    },
    {
      title: 'HealthTrack',
      description: 'A health and wellness tracking application that helps users monitor their fitness goals, nutrition, and daily activities with intuitive visualizations.',
      image: healthtrackImg,
      link: '/projects/healthtrack',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'React'],
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
            Here are some of the projects I've worked on, showcasing my expertise in building modern web applications
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