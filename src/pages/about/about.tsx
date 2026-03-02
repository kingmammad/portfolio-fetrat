import type { JSX } from "react";

export const AboutPage = (): JSX.Element => {
  const values = [
    {
      id: "01",
      title: "Performance First",
      desc: "We optimize for the 99th percentile. If it's not fast, it's not finished.",
      color: "border-[#ebff57]/30"
    },
    {
      id: "02",
      title: "Secure by Default",
      desc: "Security isn't a feature; it's the foundation of every line of code we ship.",
      color: "border-blue-500/30"
    },
    {
      id: "03",
      title: "Scale Boundless",
      desc: "Architecting systems that thrive under 100x load spikes without blinking.",
      color: "border-purple-500/30"
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0c] text-white font-sans selection:bg-[#ebff57] selection:text-black">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ebff57]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      {/* 1. Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto pt-32 pb-20 px-6">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-[#ebff57] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">Established 2026</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-8xl font-medium tracking-tight leading-[0.9]">
            We build the <br />
            <span className="text-white/30 italic">Logic</span> of the future.
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-white/50 leading-relaxed font-light">
            Nexus is an engineering-first studio based in Rajkot. We specialize in 
            distributed systems, cloud-native architecture, and high-performance 
            digital products for global enterprises.
          </p>
        </div>
      </section>

      {/* 2. The Bento Grid (Story & Stats) */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Large Story Card */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-[40px] bg-[#111113] border border-white/10 p-10 flex flex-col justify-between min-h-[400px] hover:border-[#ebff57]/40 transition-all duration-500">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-30 transition-opacity">
              <svg width="200" height="200" viewBox="0 0 100 100" className="rotate-12">
                <circle cx="50" cy="50" r="40" stroke="#ebff57" strokeWidth="0.5" fill="none" />
                <path d="M50 10 L50 90 M10 50 L90 50" stroke="#ebff57" strokeWidth="0.5" />
              </svg>
            </div>
            <div>
              <span className="font-mono text-[#ebff57] text-xs uppercase mb-4 block tracking-widest">// THE ORIGIN</span>
              <h3 className="text-3xl md:text-4xl font-display font-medium max-w-md">
                From a small desk in Rajkot to global infrastructure.
              </h3>
            </div>
            <p className="text-white/40 max-w-lg">
              We started with a single mission: to prove that world-class software 
              doesn't just come from Silicon Valley. It comes from deep curiosity 
              and a relentless obsession with clean code.
            </p>
          </div>

          {/* Stat Card: Speed */}
          <div className="md:col-span-4 rounded-[40px] bg-[#ebff57] p-10 flex flex-col justify-between text-[#0a0a0c]">
            <div className="flex flex-col">
              <span className="text-5xl md:text-7xl font-display font-bold tracking-tighter">99.9%</span>
              <span className="text-sm font-bold uppercase tracking-wider opacity-60">Uptime Reliability</span>
            </div>
            <p className="font-medium text-lg leading-tight">
              Our systems are engineered for zero-failure environments.
            </p>
          </div>

          {/* Value Cards */}
          {values.map((v) => (
            <div key={v.id} className={`md:col-span-4 rounded-[40px] bg-[#111113] border border-white/10 ${v.color} p-8 hover:bg-white/[0.02] transition-colors`}>
              <span className="font-mono text-white/20 text-4xl block mb-6">{v.id}</span>
              <h4 className="text-xl font-display font-medium mb-3">{v.title}</h4>
              <p className="text-sm text-white/50 leading-relaxed">{v.desc}</p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="md:col-span-12 mt-4 rounded-[50px] bg-gradient-to-r from-[#111113] to-transparent border border-white/10 p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-3xl md:text-5xl font-display font-medium text-center md:text-left">
              Want to see our <span className="text-[#ebff57]">Engine</span> in action?
            </h2>
            <button className="px-10 py-5 bg-white text-black rounded-full font-display font-bold hover:bg-[#ebff57] hover:scale-105 transition-all whitespace-nowrap">
              VIEW CASE STUDIES
            </button>
          </div>

        </div>
      </section>

      {/* 3. Global Reach / Location */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center border-t border-white/5">
        <span className="font-mono text-white/30 text-xs tracking-[0.5em] uppercase block mb-10">Global Operations</span>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           <span className="text-2xl font-display">RAJKOT, IN</span>
           <span className="text-2xl font-display">LONDON, UK</span>
           <span className="text-2xl font-display">NEW YORK, US</span>
           <span className="text-2xl font-display">SINGAPORE, SG</span>
        </div>
      </section>

    </div>
  );
};