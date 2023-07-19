import {
  type IconDefinition,
  faCode,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { faUbuntu } from "@fortawesome/free-brands-svg-icons";
import { Section } from "./section";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Service = {
  id: string;
  name: string;
  description: string;
  icon: IconDefinition;
};

const services: Service[] = [
  {
    id: "web",
    name: "Web Development",
    description:
      "I can create a modern and responsive fullstack website with Vue.js, HTML, CSS and Tailwind.",
    icon: faCode,
  },
  {
    id: "uix",
    name: "UI/UX Design",
    description:
      "I can create a modern graphic design for your app or website.",
    icon: faPalette,
  },
  {
    id: "sysadmin",
    name: "System Administration",
    description:
      "I can manage your system, install any program you need and maintain it.",
    icon: faUbuntu,
  },
];

const ServiceCard = function ServiceCard(
  props: Service & {
    alt: boolean;
  },
) {
  return (
    <div
      className={
        "custom-card px-10 py-6 w-full gap-8 xl:h-52 " +
        (props.alt ? "md:ml-20" : "")
      }
    >
      <FontAwesomeIcon
        icon={props.icon}
        className="text-5xl text-primary my-auto"
      />
      <div className="flex flex-col gap-2 text-left">
        <h1 className="text-xl text-gray-400">{props.name}</h1>
        <p className="text-gray-500">{props.description}</p>
        <button className="custom-button font-bold text-sm mt-auto w-44 h-10 shadow-lg shadow-primary/30">
          VIEW PORTFOLIO
        </button>
      </div>
    </div>
  );
};

export const Services = function Services() {
  return (
    <Section name="My Services" id={3}>
      <Image
        className="absolute -left-20 w-[1000px] -z-10 select-none"
        src="/img/pink-blur.svg"
        alt="blur"
        width={100}
        height={100}
        placeholder="empty"
        draggable={false}
      />

      <div className="flex flex-col gap-8 mx-2 md:mx-0 md:w-3/5 2xl:w-2/5">
        {services.map((service, index) => (
          <ServiceCard key={service.id} {...service} alt={index % 2 !== 0} />
        ))}
      </div>
    </Section>
  );
};
