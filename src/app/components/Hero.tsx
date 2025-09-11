import Image from "next/image";
import TypedAnimation from "../animations/Typed";

const words = ["things", "experiences", "solutions", "dreams"];

export default function Hero() {

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-20 relative mx-auto"
      id="about"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in-up">
          {/* Greeting */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl animate-wave">👋</span>
              <h1 className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400">
                Hi, I'm
              </h1>
            </div>

            {/* Name with pronunciation */}
            <div className="space-y-2">
              <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-cyan-600 to-blue-600 dark:from-white dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent leading-tight">
                Khoi
              </h2>
              <div className="flex items-center gap-3 text-lg md:text-xl text-gray-500 dark:text-gray-400">
                <span className="font-mono bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                  /kɔɪ/
                </span>
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span className="italic">like "koi", the fish</span>
              </div>
            </div>
          </div>

          {/* Dynamic tagline */}
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed container-snap">
              I love building{" "}
              <span className="relative inline-block">
                <span
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent font-semibold animate-fade-in no-scrollbar"
                >
                  <TypedAnimation strings={words}/>
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 animate-expand"></span>
              </span>
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
              Full-stack developer who love building that make a difference in
              people's lives.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 overflow-hidden">
              <span className="relative z-10">Resume / CV</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold transition-all duration-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:shadow-lg hover:scale-105">
              View My Work
            </button>
          </div>
        </div>

        {/* Avatar Section */}
        <div className="flex justify-center lg:justify-end animate-fade-in-up animation-delay-300">
          <div className="relative group">
            {/* Animated rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-spin-slow opacity-75 blur-sm scale-110"></div>
            {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 animate-spin-reverse opacity-50 blur-sm scale-125"></div> */}

            {/* Avatar container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl group-hover:scale-105 transition-transform duration-500">
              {/* Profile Image */}
              {/* <Image
                src="/images/profilepicture.JPG"
                alt="Khoi Hoang - Full Stack Developer"
                fill
                className="object-cover object-top-right"
                priority
              /> */}

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-2 w-14 h-14 rounded-full animate-float delay-500">
              <Image
                src="/images/skills/react.svg"
                alt="React"
                fill
                className=""
                priority
              />
            </div>
            <div className="absolute top-1/4 -left-8 w-16 h-16 rounded-full animate-float delay-1000">
              <Image
                src="/images/skills/nextjs.svg"
                alt="Nextjs"
                fill
                className=""
                priority
              />
            </div>
            <div className="absolute -bottom-8   left-1/2 w-12 h-12 rounded-full animate-float delay-2000">
              <Image
                src="/images/skills/nodejs.svg"
                alt="Nodejs"
                fill
                className=""
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
