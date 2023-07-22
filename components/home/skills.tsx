"use client";

import {
  type IconDefinition,
  faCode,
  faServer,
  faTerminal,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { Section } from "./section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Skill = {
  id: string;
  name: string;
  years: string;
  icon: IconDefinition;
  skills: {
    [key: string]: string;
  };
};

const skills: Skill[] = [
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

const SkillButton = function SkillButton(
  props: Skill & {
    set: (id: number) => void;
    selected: boolean;
  },
) {
  return (
    <button
      key={props.id}
      onClick={() => {
        props.set(skills.findIndex((skill) => skill.id === props.id));
      }}
      className={"custom-mini-card " + (props.selected ? "custom-card" : "")}
    >
      <FontAwesomeIcon
        icon={props.icon}
        className="text-4xl text-primary"
        width={80}
      />
      <div className="flex flex-col text-start justify-center">
        <span className="text-gray-400">{props.name}</span>
        <span className="text-gray-500">{props.years}</span>
      </div>
    </button>
  );
};

export const SkillItem = function SkillItem(props: Skill) {
  return (
    <div className="flex flex-col gap-4 w-full md:w-3/6 xl:w-2/6 mt-4 xl:mt-0">
      {Object.keys(props.skills).map((skill) => (
        <div key={skill}>
          <span className="text-gray-400">{skill}</span>
          <div className="relative w-full h-2 bg-[#272e3f] rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-primary rounded-full"
              style={{
                width: props.skills[skill],
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Skills = function Skills() {
  const [selected, setSelected] = useState(0);

  return (
    <Section code="skills" name="My Skills" id={2}>
      <div className="flex flex-col md:flex-row justify-between items-center md:w-3/4 2xl:w-2/5">
        <div className="flex flex-col gap-4">
          {skills.map((skill) => (
            <SkillButton
              key={skill.id}
              {...skill}
              set={setSelected}
              selected={selected === skills.findIndex((s) => s.id === skill.id)}
            />
          ))}
        </div>
        <SkillItem {...skills[selected]} />
      </div>
    </Section>
  );
};
