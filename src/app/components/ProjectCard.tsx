"use client";

import Image from "next/image";
import Link from "next/link";

// Define project data type
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

// ProjectCard component with a clean, professional design and visual interest
const ProjectCard = ({ project, index = 0 }: { project: Project; index?: number }) => {
  return (
    <div 
      className={`group relative opacity-0 animate-fade-in`}
      style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
    >
      {/* Card container with refined border */}
      <div className="relative p-5 border-l-2 border-t border-b border-r border-gray-200/80 dark:border-gray-700/50 hover:border-l-cyan-500 dark:hover:border-l-cyan-400 bg-white/50 dark:bg-gray-800/50 backdrop-blur-[2px] rounded-md transition-all duration-300 hover:translate-x-0.5 shadow-sm hover:shadow">
        <div className="flex items-center gap-4">
          {/* Project thumbnail with subtle hover effect */}
          <div className="relative aspect-[16/9] h-32 flex-shrink-0 rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:shadow-md transition-all duration-300">
            <Image
              src={project.imageUrl}
              alt={`${project.title} project`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110" // Reduced transition duration
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // More specific sizes
              loading="eager" // Load eagerly for first visible projects
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdwI2QOQviwAAAABJRU5ErkJggg==" // Simple blur placeholder
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Project info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            
            {/* Technologies with subtle styling */}
            <div className="flex flex-wrap gap-2 mt-1.5">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={`${project.id}-tech-${index}`}
                  className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-1.5 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs text-gray-500 dark:text-gray-500 self-center">+{project.technologies.length - 3}</span>
              )}
            </div>
            
            {/* Description - one line only */}
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
              {project.description}
            </p>
          </div>
          
          {/* Links with improved hover effects */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {project.liveUrl && (
              <Link 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                aria-label={`View live demo of ${project.title}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            )}
            
            {project.githubUrl && (
              <Link 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                aria-label={`View source code of ${project.title} on GitHub`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
