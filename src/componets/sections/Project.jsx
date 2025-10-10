import React from "react";
import { RevealOnScroll } from "../RevealOnScorll";
import { ExternalLink } from "lucide-react";    

export const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-black/90 text-white"
    >
        <RevealOnScroll>
      {/* Title */}
      <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent text-center">
        Featured Projects
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-center max-w-2xl mb-12">
        Here are some of my favorite projects that showcase creativity,
        performance, and functionality.
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-6">
        {/* Single Project Card */}
        <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
          <h3 className="text-2xl font-semibold text-red-400 mb-2">
            Humble Wears
          </h3>
          <p className="text-gray-400 mb-4">
            A modern e-commerce website for fashion enthusiasts.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "JavaScript", "JSON", "Github"].map((tech, key) => (
              <span
                key={key}
                className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] 
                  transition-all duration-300 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <a href="https://humblewears.netlify.app/shop" className="text-red-400 hover:text-blue-300 transistion-colors mt-4" >
            View Project{<ExternalLink className="inline-block w-4 h-4 ml-1" />}
            
            </a>
          </div>
        </div>


         {/* Single Project Card */}
        <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
          <h3 className="text-2xl font-semibold text-red-400 mb-2">
            Furr-Ever Care
          </h3>
          <p className="text-gray-400 mb-4">
            A pet care website for pet lovers.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {["react", "tawindcss","lucide-React "].map((tech, key) => (
              <span
                key={key}
                className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] 
                  transition-all duration-300 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <a href="https://furr-ever-care-z38u.vercel.app/" className="text-red-400 hover:text-blue-300 transistion-colors mt-4" >
            View Project {<ExternalLink className="inline-block w-4 h-4 ml-1" />}
            
            </a>
          </div>
        </div>
        {/* end of second card */}
         {/* Single Project Card */}
        <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
          <h3 className="text-2xl font-semibold text-red-400 mb-2">
         Humble Estate
          </h3>
          <p className="text-gray-400 mb-4">
          A real estate website 
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {["react", "tawindcss","lucide-React "].map((tech, key) => (
              <span
                key={key}
                className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] 
                  transition-all duration-300 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <a href="https://humbleestate.netlify.app/" className="text-red-400 hover:text-blue-300 transistion-colors mt-4" >
            View Project {<ExternalLink className="inline-block w-4 h-4 ml-1" />}
            
            </a>
          </div>
        </div>
        {/* end of second card */}
         
      </div>
        </RevealOnScroll>
    </section>
  );
};  