import { useState } from "react";
import type { JSX } from "react";

export const Portfolio = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filters = ["ALL", "FULL-STACK", "AI & VISION", "ENTERPRISE"];

  const projects = [
    {
      id: 1,
      featured: true, // This makes it span larger in the grid
      title: "Mobile Store Management System",
      category: "ENTERPRISE",
      description: "A comprehensive, end-to-end management architecture for retail mobile stores. Features real-time inventory tracking, seamless POS integration, and automated restocking pipelines.",
      techStack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
      image: "./image5.png", // Replace with your actual image
    },
    {
      id: 2,
      featured: false,
      title: "Anime-Style Image Transformer",
      category: "AI & VISION",
      description: "A high-fidelity image processing engine that transforms standard photographs into broadcast-quality Japanese anime styles using advanced diffusion models.",
      techStack: ["Python", "React", "Node.js"],
      image: "./image6.png",
    },
    {
      id: 3,
      featured: false,
      title: "Freelance Services Marketplace",
      category: "FULL-STACK",
      description: "A scalable gig-economy platform connecting independent professionals with enterprise clients, featuring secure escrow payments and real-time chat.",
      techStack: ["React", "Node.js", "PostgreSQL"],
      image: "./image7.png",
    },
    {
      id: 4,
      featured: false,
      title: "Global Cloud Infrastructure",
      category: "ENTERPRISE",
      description: "Distributed microservices architecture handling millions of requests per minute with 99.99% uptime guarantees.",
      techStack: ["TypeScript", "Docker", "AWS"],
      image: "./image8.png",
    },
  ];

  const filteredProjects = activeFilter === "ALL" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0c] text-white font-sans overflow-hidden pt-32 pb-24">
      
      {/* Background Glow */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#ebff57]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
              <div className="w-2 h-2 rounded-full bg-[#ebff57] animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">
                Live Deployments
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1]">
              Work that <br />
              <span className="text-white/40">scales.</span>
            </h1>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full font-mono text-xs tracking-widest transition-all duration-300 ${
                  activeFilter === filter 
                    ? "bg-[#ebff57] text-[#0a0a0c] font-bold" 
                    : "bg-[#111113] border border-white/10 text-white/50 hover:text-white hover:border-white/30"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 relative z-10">
          {filteredProjects.map((project, index) => (
            <article
              key={index}
              className={`group relative flex flex-col overflow-hidden rounded-[32px] bg-[#111113] border border-white/10 hover:border-[#ebff57]/40 transition-all duration-500 ${
                project.featured ? "lg:col-span-8 md:row-span-2" : "lg:col-span-4"
              }`}
            >
              {/* Image Container */}
              <div className={`relative w-full overflow-hidden bg-white/5 ${project.featured ? "h-[300px] lg:h-[450px]" : "h-[250px]"}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                {/* Overlay gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#111113]/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative flex flex-col flex-1 p-8 -mt-16 z-10">
                <p className="font-mono text-[#ebff57] text-xs uppercase tracking-widest mb-3">
                  // {project.category}
                </p>
                <h3 className={`font-display font-medium text-white mb-4 ${project.featured ? "text-3xl md:text-5xl" : "text-2xl"}`}>
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full font-mono text-[10px] md:text-xs text-white/70 tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex justify-center">
          <button className="group flex items-center gap-4 px-8 py-4 bg-transparent border border-white/20 rounded-full hover:border-[#ebff57] transition-colors">
            <span className="font-display text-white group-hover:text-[#ebff57] transition-colors">
              View Open Source Contributions
            </span>
            <svg className="w-4 h-4 text-white group-hover:text-[#ebff57] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};