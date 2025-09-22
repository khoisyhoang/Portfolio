"use client"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { LucideCalendar, LucideMapPin, LucideBriefcase } from "lucide-react";

// Experience data type
export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

// Sample experience data (replace with your actual experience)
const experienceData: ExperienceItem[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "Jan 2023 - Present",
    description: [
      "Led the development of a React-based dashboard that improved user engagement by 40%",
      "Implemented responsive design principles resulting in a 25% increase in mobile user retention",
      "Mentored junior developers and conducted code reviews to maintain high code quality standards"
    ],
    skills: ["React", "TypeScript", "Next.js", "TailwindCSS", "GraphQL"]
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    location: "Boston, MA",
    period: "Mar 2020 - Dec 2022",
    description: [
      "Developed and maintained multiple client-facing web applications using React and TypeScript",
      "Collaborated with UX designers to implement pixel-perfect, accessible user interfaces",
      "Reduced application load time by 60% through code optimization and lazy loading techniques"
    ],
    skills: ["React", "JavaScript", "CSS3", "SCSS", "RESTful APIs"]
  },
  
];

export default function Experience() {


  return (
    <section className="py-12 relative" id="experience" aria-labelledby="experience-heading">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="mb-8 flex items-center">
          <h2 id="experience-heading" className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2 flex items-center">
            Experience
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative" >
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600 z-0"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <div 
                key={experience.id} 
                className={`timeline-item relative flex flex-col md:flex-row items-start gap-8 animate-fade-in-up transition-all duration-700 ease-out ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                aria-label={`${experience.title} at ${experience.company}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 z-10 shadow-lg flex items-center justify-center animate-pulse">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full pl-10 md:pl-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-4" : "md:pl-4"
                }`}>
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:translate-y-[-4px] rounded-xl" tabIndex={0}>
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-[2px] rounded-t-xl relative overflow-hidden">
                      {/* Subtle pattern overlay */}
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0,_rgba(255,255,255,0.2)_1px,_transparent_1px)] bg-[length:8px_8px]"></div>
                      <div className="bg-white/95 dark:bg-gray-900/95 rounded-t-lg px-5 pt-5 pb-4 relative z-10">
                        <CardTitle className="text-lg font-bold bg-gradient-to-r from-cyan-700 to-blue-700 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                          {experience.title}
                        </CardTitle>
                        <CardDescription className="text-gray-700 dark:text-gray-300 font-medium mt-1">
                          {experience.company}
                        </CardDescription>
                      </div>
                    </div>
                    <CardContent className="pt-4 px-5 pb-5">
                      <div className="flex flex-col space-y-4">
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <LucideCalendar className="h-4 w-4 mr-2 text-cyan-600 dark:text-cyan-400" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <LucideMapPin className="h-4 w-4 mr-2 text-cyan-600 dark:text-cyan-400" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                        
                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300" aria-label="Responsibilities and achievements">
                          {experience.description.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2 text-cyan-600 dark:text-cyan-400" aria-hidden="true">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-2 mt-2" aria-label="Skills used">
                          {experience.skills.map((skill, i) => (
                            <span 
                              key={i}
                              className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-800 dark:text-cyan-300 hover:from-cyan-500/30 hover:to-blue-600/30 transition-colors duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
