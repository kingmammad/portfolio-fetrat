import type { JSX } from "react";

export const TechStack = (): JSX.Element => {
  const tech = [
    "aws", "digitalocean", "django", "docker", "express", "figma", 
    "firebase", "flutter", "go", "kotlin", "laravel", "mongo", 
    "mysql", "nextjs", "node", "postgresql", "swift", 
    "tailwindcss", "typescript", "vue",
  ];

  // Split the array in half for the two mobile rows
  const topRow = tech.slice(0, 10);
  const bottomRow = tech.slice(10);

  // Helper function to render a single badge so we don't repeat ourselves
  const renderTechItem = (name: string, index: number) => (
    <div
      key={`${name}-${index}`}
      className="flex items-center justify-center gap-3 px-6 py-3 rounded-[60px] border border-[#afafaf] hover:bg-[#ffffff1a] transition-all cursor-pointer flex-shrink-0 group"
    >
      <div className="w-6 h-6 flex items-center justify-center">
        <img
          src={`/tech/${name}.svg`}
          alt={`${name} icon`}
          className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <span className="font-semibold text-white text-lg md:text-[22px] tracking-wide capitalize">
        {name}
      </span>
    </div>
  );

  return (
    <section className="w-full py-14 overflow-hidden bg-[#171717]">
      <style>
        {`
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>
      
      {/* Reduced mask size to 64px on mobile so the screen doesn't look empty */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        
        {/* =========================================
            DESKTOP VIEW: Single Row
            ========================================= */}
        <div 
          className="hidden md:flex w-max whitespace-nowrap gap-6 py-4"
          style={{
            animation: 'infinite-scroll 40s linear infinite'
          }}
        >
          {[...tech, ...tech].map((name, index) => renderTechItem(name, index))}
        </div>

        {/* =========================================
            MOBILE VIEW: Two Rows
            ========================================= */}
        <div className="flex md:hidden flex-col gap-4 py-2">
          {/* Row 1 */}
          <div 
            className="flex w-max whitespace-nowrap gap-4"
            style={{
              animation: 'infinite-scroll 20s linear infinite'
            }}
          >
            {[...topRow, ...topRow].map((name, index) => renderTechItem(name, index))}
          </div>
          
          {/* Row 2 (Scrolling in reverse!) */}
          <div 
            className="flex w-max whitespace-nowrap gap-4"
            style={{
              animation: 'infinite-scroll 20s linear infinite reverse'
            }}
          >
            {[...bottomRow, ...bottomRow].map((name, index) => renderTechItem(name, index))}
          </div>
        </div>

      </div>
    </section>
  );
};