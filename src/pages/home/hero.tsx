import type { JSX } from "react";

export const Frame = (): JSX.Element => {
  const colorIndicators = [
    { color: "bg-[#ebff57]", opacity: "opacity-100" },
    { color: "bg-[#57ffc7]", opacity: "opacity-0" },
    { color: "bg-[#5767ff]", opacity: "opacity-0" },
    { color: "bg-[#81ff57]", opacity: "opacity-0" },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0c] overflow-hidden flex flex-col">
      {/* Background Image / Mask */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60 pointer-events-none"
        alt="Mask group"
        src={"./mask-group.png"}
      />


      {/* Main Content Centered */}
      <main className="relative z-20 flex-1 w-full max-w-[1117px] mx-auto flex flex-col items-center justify-center gap-10 px-6 py-32 md:py-20 text-center">
        <div className="flex flex-col items-center gap-5 w-full">
          <h1 className="w-full font-medium text-white text-[48px] md:text-[80px] lg:text-[102px] tracking-[0] leading-[1.1] md:leading-[92.5px] z-10">
            Engineering Scalable Software Solutions.
          </h1>

          <p className="w-full max-w-[806px] font-normal text-white/80 text-lg md:text-2xl tracking-[0] leading-relaxed z-10">
            We architect high-performance applications and robust cloud infrastructure to empower your business in the digital-first era.
          </p>
        </div>

        <button
          className="inline-flex items-center justify-center gap-2.5 px-[30px] py-[15px] bg-[#ebff57] rounded-[62px] cursor-pointer transition-transform hover:scale-105 z-10"
          aria-label="Start Building"
        >
          <span className="relative w-fit mt-[-1.00px] font-medium text-[#0a0a0c] text-xl md:text-2xl text-center tracking-[0] leading-[normal]">
            Start Building
          </span>
        </button>
      </main>

      {/* ==================================================
        FLOATING DECORATIVE ELEMENTS
        ================================================== */}

      <div className="hidden md:flex absolute top-[55%] left-[5%] w-[325px] h-[413px] items-center justify-center z-0 pointer-events-none">
        <div className="w-[280px] h-[350px] flex bg-white rounded-[30px] overflow-hidden border-[10px] border-solid rotate-[-8.99deg] shadow-2xl">
          <img
            className="mt-[-20.2px] w-[350px] h-[400px] ml-[-21.5px] rotate-[8.99deg] object-cover max-w-none"
            alt="Dashboard Preview"
            src={"./image4.png"}
          />
        </div>
      </div>

      <div className="hidden md:flex absolute top-[60%] right-[1%] w-[304px] h-[388px] items-center justify-center z-0 pointer-events-none">
        <div className="w-[260px] h-[340px] flex bg-white rounded-[30px] overflow-hidden border-[10px] border-solid rotate-[5.08deg] shadow-2xl">
          <img
            className="mt-[-11.8px] w-[320px] h-[380px] ml-[-12.5px] rotate-[-5.08deg] object-cover max-w-none"
            alt="Code Snippet"
            src={"./image3.png"}
          />
        </div>
      </div>

      <div className="hidden md:block absolute top-[25%] left-[5%] xl:left-[12%] w-[218px] h-[127px] rotate-[-17.67deg] z-10 pointer-events-none">
        <div className="relative w-full h-full">
          <img
            className="absolute top-[-60px] -left-[40px] w-[200px] h-[150px] rotate-[17.67deg] max-w-none object-contain"
            alt="Vector Background"
            src={"./vector1.svg"}
          />
          <div className="absolute top-[-30px] left-[0px] w-[113px] h-[61px] flex items-center justify-center">
            <div className="font-normal text-white text-[49.2px] text-center tracking-[0] leading-[normal]">
              Code.
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute top-[25%] right-[8%] xl:right-[15%] w-[275px] h-[127px] rotate-[10.79deg] z-10 pointer-events-none">
        <div className="relative w-full h-full">
          <img
            className="absolute -top-[60px] left-[80px] w-[200px] h-[150px] rotate-[-10.79deg] max-w-none object-contain"
            alt="Vector Background"
            src={"./image.svg"}
          />
          <div className="absolute top-[-20px] left-[100px] font-normal text-white text-[42px] text-center tracking-[0] leading-[normal]">
            Cloud
          </div>
        </div>
      </div>

      <div className="hidden md:inline-flex absolute top-[20%] right-[30%] items-center gap-2.5 p-2 bg-[#0a0a0c] rounded-[72px] border border-solid border-[#ffffff26] z-10 pointer-events-none">
        {colorIndicators.map((indicator, index) => (
          <div
            key={index}
            className={`relative w-[26px] h-[26px] ${indicator.color} rounded-[13px] ${indicator.opacity}`}
          />
        ))}
      </div>
    </div>
  );
};