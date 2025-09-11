import Image from "next/image";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: "Extremely Familiar", path: "/images/skills/react.svg" },
        { name: "Next.js", level: "Extremely Familiar", path: "/images/skills/nextjs.svg" },
        { name: "Tailwind", level: "Extremely Familiar", path: "/images/skills/tailwind.svg" },
        { name: "HTML", level: "Extremely Familiar", path: "/images/skills/html.svg" },
        { name: "CSS", level: "Extremely Familiar", path: "/images/skills/css.svg" }
      ]
    },
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", level: "Extremely Familiar", path: "/images/skills/javascript.svg" },
        { name: "TypeScript", level: "Familiar", path: "/images/skills/typescript.svg" },
        { name: "Python", level: "Familiar", path: "/images/skills/python.svg" },
        { name: "C++", level: "Familiar", path: "/images/skills/cpp.svg" },
        { name: "SQL", level: "Familiar", path: "/images/skills/sql.svg" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: "Familiar", path: "/images/skills/nodejs.svg" },
        { name: "Express.js", level: "Familiar", path: "/images/skills/expressjs.svg" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", level: "Familiar", path: "/images/skills/mongodb.svg" },
        { name: "MySQL", level: "Familiar", path: "/images/skills/mysql.svg" },
        { name: "Supabase", level: "Familiar", path: "/images/skills/supabase.svg" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: "Familiar", path: "/images/skills/git.svg" },
        { name: "GitHub", level: "Familiar", path: "/images/skills/github.svg" },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Extremely Familiar":
        return "from-emerald-500 to-teal-600";
      case "Familiar":
        return "from-blue-500 to-cyan-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case "Extremely Familiar":
        return "w-full";
      case "Familiar":
        return "w-4/5";
      default:
        return "w-2/5";
    }
  };

  return (
    <section className="py-20 px-4 relative" id="skills">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-cyan-600 to-blue-600 dark:from-white dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            An overview of the technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              {/* Category Card */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/90 dark:hover:bg-gray-800/90 h-full">
                {/* Category Header */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group/skill"
                    >
                      {/* Skill Icon and Name */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 relative flex-shrink-0">
                          <Image
                            src={skill.path}
                            alt={`${skill.name} icon`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors duration-200 truncate">
                              {skill.name}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium ml-2 flex-shrink-0">
                             {skill.level}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)} rounded-full transition-all duration-1000 ease-out transform origin-left group-hover/skill:scale-x-105`}
                          style={{ animationDelay: `${(categoryIndex * 150) + (skillIndex * 100)}ms` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Card Footer Decoration */}
                <div className="mt-8 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex justify-center">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-300">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Always learning and exploring new technologies
          </p>
          <div className="flex justify-center">
            <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-200 dark:border-cyan-800">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
                Currently exploring AI/ML technologies
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
