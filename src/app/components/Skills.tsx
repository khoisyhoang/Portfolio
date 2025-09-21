import Image from "next/image";
import { useMemo } from "react";

// Define types for our skills data
type SkillLevel = "Extremely Familiar" | "Familiar" | "Learning";

interface Skill {
  name: string;
  level: SkillLevel;
  path: string;
  category: string;
}

export default function Skills() {
  // Flatten the skills data structure for easier rendering
  const skills = useMemo<Skill[]>(() => [
    // Frontend
    { name: "React", level: "Extremely Familiar", path: "/images/skills/react.svg", category: "Frontend" },
    { name: "Next.js", level: "Extremely Familiar", path: "/images/skills/nextjs.svg", category: "Frontend" },
    { name: "Tailwind", level: "Extremely Familiar", path: "/images/skills/tailwind.svg", category: "Frontend" },
    { name: "HTML", level: "Extremely Familiar", path: "/images/skills/html.svg", category: "Frontend" },
    { name: "CSS", level: "Extremely Familiar", path: "/images/skills/css.svg", category: "Frontend" },
    
    // Languages
    { name: "JavaScript", level: "Extremely Familiar", path: "/images/skills/javascript.svg", category: "Languages" },
    { name: "TypeScript", level: "Familiar", path: "/images/skills/typescript.svg", category: "Languages" },
    { name: "Python", level: "Familiar", path: "/images/skills/python.svg", category: "Languages" },
    { name: "C++", level: "Familiar", path: "/images/skills/cpp.svg", category: "Languages" },
    { name: "SQL", level: "Familiar", path: "/images/skills/sql.svg", category: "Languages" },
    
    // Backend
    { name: "Node.js", level: "Familiar", path: "/images/skills/nodejs.svg", category: "Backend" },
    { name: "Express.js", level: "Familiar", path: "/images/skills/expressjs.svg", category: "Backend" },
    
    // Database
    { name: "MongoDB", level: "Familiar", path: "/images/skills/mongodb.svg", category: "Database" },
    { name: "MySQL", level: "Familiar", path: "/images/skills/mysql.svg", category: "Database" },
    { name: "Supabase", level: "Familiar", path: "/images/skills/supabase.svg", category: "Database" },
    
    // Tools
    { name: "Git", level: "Familiar", path: "/images/skills/git.svg", category: "Tools" },
    { name: "GitHub", level: "Familiar", path: "/images/skills/github.svg", category: "Tools" },
  ], []);

  // Group skills by category
  const skillsByCategory = useMemo(() => {
    const categories = Array.from(new Set(skills.map(skill => skill.category)));
    return categories.map(category => ({
      name: category,
      skills: skills.filter(skill => skill.category === category)
    }));
  }, [skills]);

  // Get badge color based on skill level
  const getBadgeStyle = (level: SkillLevel) => {
    switch (level) {
      case "Extremely Familiar":
        return "bg-gradient-to-r from-cyan-500 to-blue-600 text-white";
      case "Familiar":
        return "bg-gradient-to-r from-blue-400 to-blue-500 text-white";
      default:
        return "bg-gradient-to-r from-gray-400 to-gray-500 text-white";
    }
  };

  return (
    <section className="py-8 px-4 relative overflow-visible" id="skills">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"></div> */}
        {/* <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"></div> */}
      </div>

      <div className="mx-auto overflow-visible">
        {/* Compact Header with CTA */}
        <div className="flex flex-wrap items-center justify-between mb-4 animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 via-cyan-600 to-blue-600 dark:from-white dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            Skills
          </h2>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-200 dark:border-cyan-800">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300">
              Exploring AI/ML
            </span>
          </div>
        </div>

        {/* All Skills in a single compact layout with no scrolling */}
        <div className="space-y-3 overflow-visible">
          {skillsByCategory.map((category, categoryIndex) => (
            <div 
              key={category.name}
              className="animate-fade-in-up overflow-visible"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Category with inline skills */}
              <div className="flex flex-wrap items-center gap-2 overflow-visible">
                {/* Category Label */}
                <div className="flex items-center mr-1">
                  <h3 className="text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-2 py-1 rounded-md shadow-sm">
                    {category.name}
                  </h3>
                </div>
                
                {/* Skills as inline pills */}
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group"
                    style={{ animationDelay: `${(categoryIndex * 100) + (skillIndex * 30)}ms` }}
                  >
                    <div 
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-2 py-1 border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center gap-1.5"
                      title={skill.level}
                    >
                      {/* Skill Icon */}
                      <div className="w-4 h-4 relative flex-shrink-0">
                        <Image
                          src={skill.path}
                          alt={`${skill.name} icon`}
                          fill
                          className="object-contain"
                          sizes="16px"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Skill Name */}
                      <span className="text-xs font-medium text-gray-800 dark:text-white whitespace-nowrap">
                        {skill.name}
                      </span>
                      
                      {/* Skill Level - Tiny dot */}
                      <div 
                        className={`w-1.5 h-1.5 rounded-full ${getBadgeStyle(skill.level).replace('text-white', '').replace('bg-gradient-to-r', '')} flex-shrink-0`} 
                        aria-label={`Skill level: ${skill.level}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
