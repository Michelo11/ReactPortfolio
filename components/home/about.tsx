import Image from "next/image";
import {Section} from "./section";

export const AboutMe = function AboutMe() {
  return (
    <Section id={1} name="About Me">
      <div className="card flex-col md:flex-row justify-between md:w-2/5 md:h-80">
        <Image
          src="/img/coding.jpg"
          alt="coding"
          width={500}
          height={500}
          className="md:w-1/2 block h-full rounded-l-xl opacity-40"
        />
        <div className="py-12 md:py-0 px-12 md:w-1/2 h-full text-left text-gray-400 flex flex-col gap-4 justify-center items-center">
          <p>
            I&apos;m a developer, designer and system administrator from Italy.
            I can design and create everything for you and your company.
          </p>
          <p>
            You can learn more about my skills and the languages I know below.
            I&apos;m also the CEO at RocketCreations.
          </p>
          <p className="text-white w-full">- Michele</p>
        </div>
      </div>
      <Image
        className="absolute right-20 -bottom-60 w-[700px] -z-10 select-none"
        src="/img/pink-blur.svg"
        alt="blur"
        width={100}
        height={100}
        placeholder="empty"
        draggable={false}
      />
    </Section>
  );
};
