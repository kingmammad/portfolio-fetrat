import type { JSX } from "react";

interface ServiceCard {
  title: string;
  description: string;
  icon: string;
}

export const ServicesSection = (): JSX.Element => {
  const servicesData: ServiceCard[] = [
    {
      title: "Full-Stack Web Apps",
      description:
        "End-to-end web applications built with modern, high-performance frameworks like React and Next.js to scale your business.",
      icon: "/1.svg",
    },
    {
      title: "Custom Management Systems",
      description:
        "Tailored enterprise software and internal dashboards designed to streamline your complex operations and business workflows.",
      icon: "/2.svg",
    },
    {
      title: "API & Backend Architecture",
      description:
        "Robust, secure, and scalable server-side systems powered by Node.js, NestJS, and Python to handle your data efficiently.",
      icon: "/3.svg",
    },
    {
      title: "UI/UX & Digital Product Design",
      description:
        "User-centric interface design that turns complex processes into intuitive, visually striking digital journeys for your clients.",
      icon: "/4.svg",
    },
  ];

  return (
    <section className="flex flex-col xl:flex-row w-full max-w-[1920px] text-white mx-auto px-6 py-16 xl:px-[5vw] xl:py-[8vh] gap-10 xl:gap-[4vw] items-start">
      <div className="flex flex-col w-full xl:w-[30vw] gap-8">
        <header className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2.5">
            <img src="/starwhite.svg" alt="Star icon" className="w-4 h-4" />
            <h2 className=" font-normal text-xl xl:text-[1.5vw] tracking-[0] whitespace-nowrap ">
              Our Services
            </h2>
          </div>

          <h1 className=" font-medium text-[32px] md:text-[48px] xl:text-[3.5vw] tracking-tight leading-[1.1]">
            Engineering Scalable Software & Digital Experiences
          </h1>
        </header>

        <div className="hidden xl:block relative w-[15vw] h-[15vw] rounded-[2vw] overflow-hidden">
          <img
            src="/services.svg"
            alt="Development services visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-[1.5vw] w-full xl:w-[60vw] items-stretch">
        {servicesData.map((service, index) => (
          <article
            key={index}
            className="flex flex-col gap-12 h-auto xl:h-[40vh] min-h-[320px] items-start p-6 xl:p-[2.5vw] rounded-[30px] border border-solid border-[#ffffff33] bg-[#1919194c] backdrop-blur-[60.9px] [background:radial-gradient(170%_300%_at_100%_20%,rgba(26,26,26,0.3)_10%,rgba(197,197,197,0.3)_27%,rgba(26,26,26,0.3)_57%,rgba(0,0,0,0.3)_100%)] hover:border-[#ffffff80] transition-all duration-300"
          >
            <img
              src={service.icon}
              alt={`${service.title} icon`}
              className="w-8 h-8 xl:w-[3vw] xl:h-[3vw]  object-contain shrink-0"
            />

            <div className="flex flex-col items-start gap-[1vh] w-full">
              <h3 className=" font-medium text-[20px] xl:text-[1.8vw] leading-[1.2] text-white">
                {service.title}
              </h3>
              <p className=" font-light text-[#c0c0c0] text-sm xl:text-[1.1vw] leading-[1.5]">
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
