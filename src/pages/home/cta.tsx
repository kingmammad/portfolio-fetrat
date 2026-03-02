import { useState, type JSX } from "react";

export const Cta = (): JSX.Element => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  

  return (
    <section className="w-full px-4 md:px-8 lg:px-10 py-10 pb-0">
      <div className="bg-neutral-900 rounded-[40px] md:rounded-[60px] p-6 sm:p-10 lg:p-16 flex flex-col w-full max-w-[1860px] mx-auto overflow-hidden relative">
        {/* Main Content Area (Text Left / Form Right) */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20 justify-between items-start mb-16 lg:mb-20 z-10 w-full">
          {/* Header Left (Let's Get In Touch) */}
          <div className="flex flex-col w-full lg:w-1/2 xl:w-auto items-start gap-4 md:gap-8">
            {/* "LET'S" + Star Image */}
            <div className="flex flex-row items-center gap-4 md:gap-[30px]">
              <h1 className=" font-normal text-white text-[50px] sm:text-[80px] lg:text-[100px] xl:text-[130px] leading-[0.9] tracking-tight uppercase m-0">
                Let's
              </h1>

              {/* Star Decoration 1 */}
              <div
                className="relative w-[70px] h-[65px] sm:w-[100px] sm:h-[90px] xl:w-[168px] xl:h-[151px] shrink-0"
                aria-hidden="true"
              >
                <img
                  className="absolute bottom-0 left-0 w-full h-[75%] object-contain"
                  alt=""
                  src={"./Ellipse1.svg"}
                />
                <div className="absolute top-0 right-0 xl:top-0 xl:left-[26px] w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] xl:w-[60px] xl:h-[60px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#ebff57] rounded-full" />
                  <img
                    className="relative w-1/2 h-1/2 z-10 object-contain"
                    alt=""
                    src={"./star.svg"}
                  />
                </div>
              </div>
            </div>

            {/* "GET IN" + Star Image + "TOUCH" */}
            <div className="flex flex-row flex-wrap items-center gap-3 sm:gap-4 md:gap-[30px] w-full">
              {/* Star Decoration 2 */}
              <div
                className="relative w-[70px] h-[65px] sm:w-[100px] sm:h-[90px] xl:w-[151px] xl:h-[140px] shrink-0 hidden sm:block"
                aria-hidden="true"
              >
                <img
                  className="absolute bottom-0 left-0 w-full h-[80%] object-contain"
                  alt=""
                  src={"./Ellipse2.svg"}
                />
                <div className="absolute top-1/2 right-0 xl:top-0 xl:left-[50px] w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] xl:w-[60px] xl:h-[60px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#ebff57] rounded-full" />
                  <img
                    className="relative w-1/2 h-1/2 z-18 object-contain"
                    alt=""
                    src={"./earth.svg"}
                  />
                </div>
              </div>

              <h1 className="flex flex-col  items-baseline gap-x-3 sm:gap-x-4 md:gap-x-6  font-normal text-[50px] sm:text-[80px] lg:text-[100px] xl:text-[130px] leading-[0.9] tracking-tight uppercase m-0">
                <span className="text-white">Get IN</span>
                <span className="text-[#ebff57]">Touch</span>
              </h1>
            </div>
          </div>

          {/* Form Right (Now fluid with flex-1 and no rigid pixel widths) */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start gap-5 w-full lg:flex-1 mt-6 lg:mt-0"
            aria-label="Contact form"
          >
            {/* Input Row: Name & Email */}
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
              <div className="flex w-full items-center px-6 py-4 md:py-5 bg-[#242424] rounded-[30px]">
                <label htmlFor="fullName" className="sr-only">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                  className="w-full  font-normal text-white text-base leading-5 bg-transparent outline-none placeholder:text-gray-400"
                />
              </div>

              <div className="flex w-full items-center px-6 py-4 md:py-5 bg-[#242424] rounded-[30px]">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="w-full  font-normal text-white text-base leading-5 bg-transparent outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="flex w-full items-start px-6 py-5 bg-[#242424] rounded-[30px]">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                required
                className="w-full min-h-[120px] md:min-h-[190px]  font-normal text-white text-base leading-5 bg-transparent outline-none resize-y placeholder:text-gray-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="inline-flex items-center justify-center px-8 md:px-[30px] py-3.5 md:py-[15px] bg-[#ebff57] rounded-[62px] cursor-pointer hover:bg-[#d4e64c] transition-colors self-start lg:self-auto"
              aria-label="Submit contact form"
            >
              <span className=" font-medium text-[#0a0a0c] text-xl md:text-2xl text-center leading-none">
                Submit
              </span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
