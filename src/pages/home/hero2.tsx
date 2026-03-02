import type { JSX } from "react";

export const Hero2 = (): JSX.Element => {
  const textLineOneWords = [
    { text: "Scale Your", type: "text" },
    { text: "Digital Infrastructure with", type: "text" },
  ];

  const textLineTwoContent = [
    { text: "Next-Gen Cloud Solutions. Our", type: "text" },
    {
      type: "image",
      src: "./image1.png",
      alt: "Cloud infrastructure decoration",
      position: "top-0 left-0",
    },
  ];

  const textLineThreeText = "Elite Engineering Teams Build Your";

  const textLineFourContent = [
    { text: "Product", type: "text" },
    {
      type: "image",
      src: "./image2.png",
      alt: "Code deployment decoration",
      position: "top-[calc(50.00%_-_33px)] left-[calc(50.00%_-_62px)]",
    },
    { text: "for the Future.", type: "text" },
  ];

  const textClassName =
    "relative mt-[-1.00px]  font-normal text-white text-[32px] md:text-[48px] lg:text-[62px] text-center tracking-[0] leading-[1.2] lg:leading-[69.2px]";

  const imageContainerClassName =
    "relative w-[90px] h-[45px] md:w-[125px] md:h-[66px] bg-white rounded-[57px] overflow-hidden shrink-0 mx-2";

  const imageClassName = "w-full h-full object-cover absolute top-0 left-0";

  return (
    <section
      className="flex flex-col w-full px-6 pt-16 items-center justify-center gap-2 md:gap-[15px] relative bg-[#0a0a0c] overflow-hidden"
      aria-label="Hero section"
    >
      <div className="flex flex-row flex-wrap items-center justify-center gap-2 md:gap-5 relative w-full">
        {textLineOneWords.map((item, index) => (
          <h1 key={index} className={textClassName}>
            {item.text}
          </h1>
        ))}
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-2 md:gap-5 relative w-full">
        {textLineTwoContent.map((item, index) =>
          item.type === "text" ? (
            <p key={index} className={textClassName}>
              {item.text}
            </p>
          ) : (
            <div key={index} className={imageContainerClassName}>
              <img className={imageClassName} alt={item.alt} src={item.src} />
            </div>
          )
        )}
      </div>

      <p className={`relative w-full text-center ${textClassName}`}>
        {textLineThreeText}
      </p>

      <div className="flex flex-row flex-wrap items-center justify-center gap-2 md:gap-5 relative w-full">
        {textLineFourContent.map((item, index) =>
          item.type === "text" ? (
            <div key={index} className={textClassName}>
              {item.text}
            </div>
          ) : (
            <div key={index} className={imageContainerClassName}>
              <img className={imageClassName} alt={item.alt} src={item.src} />
            </div>
          )
        )}
      </div>
    </section>
  );
};
