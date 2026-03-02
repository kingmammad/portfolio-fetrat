import { Cta } from "./cta";
import { Frame } from "./hero";
import { Hero2 } from "./hero2";
import { Projects } from "./projects";
import { ServicesSection } from "./services2";
import { TechStack } from "./tech";

function Home() {
  return (
    <div className="">
      <Frame />
      <div className="flex justify-center items-center flex-col gap-[160px]">
        <Hero2 />
        <TechStack />
        <ServicesSection />
        <Projects />
        <Cta />
      </div>
    </div>
  );
}

export default Home;
