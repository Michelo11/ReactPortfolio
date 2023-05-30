import { faUbuntu } from "@fortawesome/free-brands-svg-icons";
import { faFileCode, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Services() {
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
    <div className="mt-20 flex flex-col items-center section" id="services">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Services</h1>
        <p className="text-gray-300">
          Learn more about what I can offer to my clients.
        </p>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap justify-between mx-auto w-full mt-12 gap-y-11 p-4 xl:p-0">
        {services.map((service) => (
          <Link
            href={service.link}
            key={service.name}
            className="bg-black text-white bg-[#0f0b08]/75 flex flex-col items-center justify-center p-2 rounded h-60 md:w-72 xl:w-96 bg-gradient"
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
  );
}
