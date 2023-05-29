import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Typewriter } from "react-simple-typewriter";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faServer,
  faTerminal,
  faWandMagicSparkles,
  faAngleDown,
  faFileCode,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { faUbuntu } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Reviews from "@/components/reviews";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const openDiv = (name: string) => {
    const div = document.getElementById(name)!!;
    const arrow = document.getElementById(name + "-arrow")!!;
    arrow.style.transform =
      arrow.style.transform == "rotate(180deg)"
        ? "rotate(0deg)"
        : "rotate(180deg)";
    setTimeout(() => {
      div.style.display = div.style.display == "block" ? "none" : "block";
    }, 100);
  };
  const skills = [
    {
      id: "frontend",
      name: "Front-End Developer",
      years: "2+ Years",
      icon: faCode,
      skills: {
        HTML: "100%",
        CSS: "85%",
        JavaScript: "75%",
        Vue: "75%",
        React: "80%",
        ReactNative: "50%",
        Astro: "90%",
      },
    },
    {
      id: "backend",
      name: "Back-End Developer",
      years: "2+ Years",
      icon: faServer,
      skills: {
        NodeJS: "80%",
        TypeScript: "90%",
        Databases: "85%",
      },
    },
    {
      id: "sysadmin",
      name: "System Administration",
      years: "1+ Years",
      icon: faTerminal,
      skills: {
        Linux: "90%",
        Windows: "80%",
      },
    },
    {
      id: "uix",
      name: "UI/UX Designer",
      years: "2+ Years",
      icon: faWandMagicSparkles,
      skills: {
        Figma: "90%",
        "Adobe XD": "60%",
      },
    },
  ];
  const services = [
    {
      name: "Web Development",
      icon: faFileCode,
      link: "/projects",
      description:
        "I can create a modern and responsive fullstack website with Vue.js, HTML, CSS and Tailwind.",
    },
    {
      name: "UI/UX Design",
      icon: faPalette,
      link: "/projects",
      description:
        "I can create a modern graphic design for your app or website.",
    },
    {
      name: "System Administrator",
      icon: faUbuntu,
      link: "/projects",
      description:
        "I can manage your system, install any program you need and maintain it.",
    },
  ];

  return (
    <div
      className={
        "bg-gray-900 text-white flex-col items-center flex m-auto" +
        inter.className
      }
    >
      <Head>
        <title>Michele | Portfolio</title>
      </Head>
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
            I'm a{" "}
            <Typewriter words={["Web dev.", "Designer.", "System Admin."]} />
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
      <div className="bg-gradient-to-r from-[#1d4ed8] to-[#70d9ff] w-full mt-[150px] xl:mt-[180px] h-64">
        <div className="section mt-10 space-y-2">
          <p className="font-semibold text-2xl">
            Need a website that looks different, better and amazing?
          </p>
          <p className="text-xl">
            Get in touch with me to get your personal quote
          </p>
          <button
            className="bg-white text-black p-3 rounded-lg flex justify-center items-center font-semibold"
            type="button"
          >
            Contact Me
          </button>
        </div>
      </div>
      <div className="mt-20" id="about">
        <div className="section">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold">About Me</h1>
            <p className="text-gray-300">
              Learn more about my life and experiences.
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <img
              src="/img/illustrationAbout.svg"
              alt="illustration"
              draggable="false"
            />
            <div
              className="space-y-6 w-[585px]"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <p className="text-[#bcbac4] text-[18px]">
                I'm a developer, designer and system administrator from Italy. I
                can design and create everything for you and your company.
              </p>

              <p className="text-[#bcbac4] text-[18px]">
                You can learn more about my skills and the languages I know
                below. I'm also the CEO at
                <a
                  href="https://discord.gg/rocketcreations"
                  className="font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 bg-clip-text text-transparent"
                >
                  {" "}
                  RocketCreations{" "}
                </a>
                and I cover a management position in a lot of Services Teams.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center section" id="skills">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold">About Me</h1>
            <p className="text-gray-300">
              Learn more about my life and experiences.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-12 mt-[50px] w-fit md:w-fit"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            {skills.map((skill) => {
              return (
                <div key={skill.id} className="w-fit">
                  <div
                    className="flex space-x-4 w-[320px] items-center cursor-pointer"
                    onClick={() => openDiv(skill.id)}
                  >
                    <FontAwesomeIcon
                      icon={skill.icon as any}
                      className="text-[#235bdd] text-[20px] flex items-center"
                    />

                    <div className="text-left cursor-pointer">
                      <p className="text-[20px] font-semibold">{skill.name}</p>
                      <p className="text-[#bcbac4] text-[18px]">
                        {skill.years}
                      </p>
                    </div>

                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="transition ease-in delay-100"
                      style={{ marginLeft: "auto" }}
                      id={skill.id + "-arrow"}
                    />
                  </div>

                  <div style={{ display: "none" }} id={skill.id}>
                    {Object.keys(skill.skills).map((s) => {
                      return (
                        <div key={s} className="mt-5 w-fit">
                          <div className="flex">
                            <span className="font-semibold">{s}</span>
                            <span className="percent ml-auto text-[#bcbac4]">
                              {(skill.skills as any)[s] as any}
                            </span>
                          </div>

                          <div className="skillbar">
                            <div
                              className="filled"
                              style={{ width: (skill.skills as any)[s] as any }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="mt-20 flex flex-col items-center section"
            id="services"
          >
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold">Services</h1>
              <p className="text-gray-300">
                Learn more about what I can offer to my clients.
              </p>
            </div>

            <div className="flex flex-wrap justify-between mx-auto w-full mt-12 gap-y-11">
              {services.map((service) => (
                <Link
                  href={service.link}
                  key={service.name}
                  className="bg-black text-white dark:bg-[#0f0b08]/75 flex flex-col items-center justify-center p-2 rounded h-60 w-96 bg-gradient"
                >
                  <div className="icon transition-all ease-in-out delay-150 duration-300 w-16 flex flex-col justify-center items-center h-16 bg-white p-2 rounded-full">
                    <FontAwesomeIcon
                      size="2xl"
                      color="black"
                      icon={service.icon as any}
                    />
                  </div>
                  <p className="text-2xl font-semibold mt-6">{service.name}</p>
                  <p className="text-center">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
          <Reviews />
        </div>
      </div>
    </div>
  );
}
