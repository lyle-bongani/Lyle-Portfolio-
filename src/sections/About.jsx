import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="text-lg font-semibold text-white sm:text-xl headtext">Hi, I'm Lyle Chadya</p>
            <p className="text-sm leading-relaxed text-neutral-200 sm:text-base subtext">
              I'm a Software Developer with a passion for crafting innovative digital experiences. After joining Uncommon.org's bootcamp in Bulawayo, I embarked on an exciting journey into Software Development. As I continue to grow in the development space, I'm eager to build impactful digital experiences, explore new technologies, and contribute to innovative projects.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-3xl text-gray-500 sm:text-5xl">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Clean Code"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="TDD"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[80%] sm:w-[50%]">
            <p className="text-lg font-semibold text-white sm:text-xl headtext">Time Zone</p>
            <p className="text-sm leading-relaxed text-neutral-200 sm:text-base subtext">
              I'm based in Bulawayo, Zimbabwe, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-lg font-semibold text-center text-white sm:text-xl headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5 relative !h-auto min-h-[25.3rem] md:min-h-[18rem] pb-0 flex flex-col md:block overflow-hidden">
          <div className="z-10 w-full md:w-[50%]">
            <p className="text-lg font-semibold text-white sm:text-xl headtext">Tech Stack</p>
            <p className="text-sm leading-relaxed text-neutral-200 sm:text-base subtext">
              I specialize in modern web development with expertise in React, Next.js, and TypeScript. My skills include frontend frameworks, backend development with Node.js and Express, and cloud services like Firebase. I'm also proficient in UI/UX with Tailwind CSS, Material UI, and Framer Motion for creating engaging user experiences.
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 translate-y-1/2 md:translate-y-0 md:top-0 w-full md:start-[50%] md:-top-10 md:scale-125">
            <div className="relative w-full h-[20.3rem] md:h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <Frameworks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
