import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Typewriter } from 'react-simple-typewriter'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <div
      className={
        "bg-gray-900 text-white flex-col items-center flex m-auto h-screen " +
        inter.className
      }
    >
      <Navbar />
      <div
        className="flex flex-col-reverse xl:flex-row text-center content-center w-full mt-[150px] xl:mt-[180px] section"
        id="home"
      >
        <div
          className="flex flex-col space-y-6 content-center items-center xl:text-left xl:items-start max-w-[100vw]"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <p className="bg-clip-text text-transparent text-[35px] font-extrabold max-w-[100vw] w-[500px] justify-start bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 mb-0">
            Hello, my name is Michele.
            <br />
            I'm a <Typewriter words={["Web dev.", "Designer.", "System Admin."]} />
          </p>

          <h1 className="text-[#bcbac4] w-[350px] text-[18px] max-w-full leading-6">
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

        <img
          draggable="false"
          src="/img/logo.png"
          alt="logo"
          className="rounded-full my-auto ml-auto xl:mr-0 xl:absolute xl:right-[15%] 2xl:relative 2xl:right-0"
          width="300"
          style={{ animation: "float 6s ease-in-out infinite" }}
        />
      </div>
    </div>
  );
}
