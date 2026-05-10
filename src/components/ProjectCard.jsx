import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, image, techStack, link }) => {
  return (
    <div className="card card-hover group">
      <div className="relative h-64 mb-4 rounded-xl overflow-hidden bg-white/5">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={link}
          className="block w-full py-2.5 text-center border border-indigo-500/50 text-indigo-400 rounded-xl font-medium hover:bg-indigo-500/20 transition-all duration-300"
        >
          View Case Study
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;