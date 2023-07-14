"use client";

import {
  faAngleDown,
  faCode,
  faServer,
  faTerminal,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { openDiv } from "@/utils/animations";

export default function Skills() {
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

  return (
    <div className="mt-20 flex flex-col items-center section" id="skills">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">My Skills</h1>
        <p className="text-gray-300">Read what I&apos;m able to do.</p>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-12 mt-[50px] w-fit xl:w-fit"
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
                  <p className="text-gray-300 text-[18px]">{skill.years}</p>
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
                        <span className="percent ml-auto text-gray-300">
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
    </div>
  );
}
