import ProjectCard, { Project } from "./ProjectCard";

// Sample project data (replace with your actual projects)
const projectsData: Project[] = [
    {
        id: "1",
        title: "Portfolio Website",
        description: "A modern portfolio website built with Next.js and TailwindCSS featuring smooth animations and responsive design.",
        technologies: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
        imageUrl: "/images/projects/portfolio.jpg",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/portfolio",
        category: "Web Development",
    },
    {
        id: "2",
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        imageUrl: "/images/projects/ecommerce.jpg",
        liveUrl: "https://example.com/ecommerce",
        githubUrl: "https://github.com/example/ecommerce",
        category: "Web Development",
    },
    {
        id: "3",
        title: "Task Management App",
        description: "A productivity app for managing tasks with drag-and-drop functionality and real-time updates.",
        technologies: ["React", "Firebase", "TailwindCSS"],
        imageUrl: "/images/projects/taskapp.jpg",
        liveUrl: "https://example.com/taskapp",
        githubUrl: "https://github.com/example/taskapp",
        category: "Web Application",
    },
    {
        id: "4",
        title: "Weather Dashboard",
        description: "A weather dashboard that displays current and forecasted weather data using a third-party API.",
        technologies: ["JavaScript", "HTML", "CSS", "WeatherAPI"],
        imageUrl: "/images/projects/weather.jpg",
        liveUrl: "https://example.com/weather",
        githubUrl: "https://github.com/example/weather",
        category: "Web Application",
    },
    {
        id: "5",
        title: "Mobile Fitness App",
        description: "A mobile app for tracking workouts and nutrition with personalized recommendations.",
        technologies: ["React Native", "Node.js", "MongoDB"],
        imageUrl: "/images/projects/fitness.jpg",
        liveUrl: "https://example.com/fitness",
        githubUrl: "https://github.com/example/fitness",
        category: "Mobile App",
    },
];

// Project categories are still used for organization but not for filtering

// Main Projects component
export default function Projects() {
    // Use all projects directly without animations or progressive loading
    const projects = projectsData;

    return (
        <section className="py-12 px-4 relative" id="projects">
            {/* Removed decorative elements for better performance */}

            <div className="mx-auto">
                {/* Section Header with animated code brackets */}
                <div className="mb-8 flex items-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                        Projects
                    </h2>
                </div>

                {/* Projects grid with two cards per row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project: Project, index: number) => (
                        <ProjectCard 
                            project={project} 
                            key={project.id}
                            index={index} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
