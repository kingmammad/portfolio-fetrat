import type { JSX } from "react";

const portfolioItems = [
  {
    id: 1,
    image: "./image5.png",
    category: "CLOUD INFRASTRUCTURE",
    title: "Migrating Legacy Systems to Distributed Microservices",
  },
  {
    id: 2,
    image: "./image6.png",
    category: "DATA ENGINEERING",
    title: "Real-Time Processing Pipeline for Global FinTech",
  },
  {
    id: 3,
    image: "./image7.png",
    category: "CYBERSECURITY",
    title: "Implementing Zero-Trust Architecture in Healthcare",
  },
  {
    id: 4,
    image: "./image8.png",
    category: "AI INTEGRATION",
    title: "Automating Enterprise Workflows with Custom LLMs",
  },
];

export const Projects = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1720px] mx-auto items-center gap-10 md:gap-[60px] relative px-6 md:px-10 py-16 md:py-24">
      {/* Header Section */}
      <header className="flex flex-col w-full max-w-[750px] items-center gap-4 md:gap-5 relative">
        <div className="inline-flex items-center gap-2.5 relative">
          <img
            className="relative w-[17px] h-[17px]"
            alt=""
            src={"./starwhite.svg"}
          />
          <h2 className="relative w-fit mt-[-1.00px]  font-normal text-white text-xl md:text-2xl text-center tracking-[0] leading-[1.1] whitespace-nowrap">
            Featured Case Studies
          </h2>
        </div>

        <h1 className="relative self-stretch  font-normal text-white text-[36px] md:text-[50px] lg:text-[62px] text-center tracking-[0] leading-[1.1] lg:leading-[69.2px]">
          Delivering Scalable Solutions for the Modern Enterprise
        </h1>
      </header>

      {/* Grid of Portfolio Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full relative">
        {portfolioItems.map((item) => (
          <article
            key={item.id}
            className="flex flex-col w-full items-start pb-8 md:pb-10 relative bg-[#1919194c] rounded-[30px] border border-solid border-[#ffffff33] backdrop-blur-[60.9px] backdrop-brightness-[100%] overflow-hidden group cursor-pointer hover:border-white/50 transition-colors"
          >
            {/* Responsive Image Wrapper */}
            <div className="w-full aspect-[4/3] md:aspect-[1.44] relative overflow-hidden mb-6 md:mb-10">
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={`${item.category} project preview`}
                src={item.image}
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col w-full items-start gap-3 px-6 md:px-10 relative">
              <p className="relative self-stretch mt-[-1.00px]  font-light text-white/70 text-sm md:text-lg tracking-[0] leading-[20.1px] uppercase">
                {item.category}
              </p>

              <h3 className="relative self-stretch font-medium text-white text-[24px] md:text-[32px] tracking-[0] leading-[1.2] md:leading-[35.7px]">
                {item.title}
              </h3>
            </div>
          </article>
        ))}
      </div>

      {/* See More Button */}
      <div className="mt-4 md:mt-8">
        <button
          className="inline-flex items-center justify-center px-[30px] py-[15px] bg-[#ebff57] rounded-[62px] cursor-pointer hover:bg-[#d4e64c] transition-colors"
          aria-label="View All Case Studies"
        >
          <span className=" font-medium text-[#0a0a0c] text-xl md:text-2xl text-center leading-none">
            View All Case Studies
          </span>
        </button>
      </div>
    </section>
  );
};
