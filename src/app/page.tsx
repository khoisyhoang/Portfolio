import HiAnimation from "./animations/HiAnimation";
import TypedAnimation from "./animations/Typed";
import Skills from "./components/Skills";
import dynamic from 'next/dynamic';

// Dynamically import Projects component with loading state
const Projects = dynamic(() => import('./components/Projects'), {
  loading: () => (
    <div className="py-12 px-4 relative flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center space-y-4">
        <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-40 bg-gray-100 dark:bg-gray-800 rounded-md"></div>
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: true
});

export const metadata = {
  title: "Khoi Hoang",
  description: "Khoi Hoang - Full Stack Developer",
};

export default function Home() {
  return (
    <>
      <Projects/>
      <Skills/>
    </>
  );
}
