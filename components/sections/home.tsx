import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex flex-col-reverse md:flex-row text-center content-center w-full mt-[150px] md:mt-[180px] section"
      id="home"
    >
      <div
        className="flex flex-col space-y-6 content-center items-center md:text-left md:items-start max-w-[100vw]"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <p className="bg-clip-text text-transparent text-[35px] font-extrabold max-w-[100vw] w-[500px] justify-start bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 mb-0">
          Hello, my name is Michele.
          <br />
          I&apos;m a{" "}
          <Typewriter words={["Web dev.", "Designer.", "System Admin."]} />
        </p>

        <h1 className="text-gray-300 w-[350px] text-[18px] max-w-full leading-6">
          A student from Italy who loves developing fullstack websites,
          designing and administrating systems.
        </h1>

        <button
          className="bg-[#235bdd] p-3 rounded-lg w-1/3 flex justify-center items-center h-[3rem]"
          type="button"
        >
          Learn More
        </button>
      </div>

      <Image
        draggable="false"
        src="/img/logo.png"
        alt="logo"
        className="rounded-full my-auto ml-auto mr-auto md:mr-0 md:absolute md:right-[15%] 2md:relative 2md:right-0"
        width={300}
        height={300}
        style={{ animation: "float 6s ease-in-out infinite" }}
      />
    </div>
  );
}
