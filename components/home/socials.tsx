import { type IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Section } from "./section";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const SocialCard = function SocialCard({
  content,
  social,
  icon,
  link,
}: {
  content: string;
  social: string;
  icon: IconDefinition;
  link: string;
}) {
  return (
    <Link href={link} className="custom-card gap-2 w-full md:w-3/5 xl:w-1/4 p-4">
      <FontAwesomeIcon
        icon={icon}
        className="text-4xl text-primary my-auto"
        width={64}
      />
      <div className="flex flex-col text-start">
        <p>{content}</p>
        <p className="uppercase text-sm text-gray-500">{social}</p>
      </div>
    </Link>
  );
};

export const Socials = function Socials() {
  return (
    <Section code="contact" name="My Socials" id={5}>
      <div className="flex flex-col justify-center items-center w-full gap-4">
        <SocialCard
          icon={faEnvelope}
          content="hello@michelemanna.me"
          social="email"
          link="mailto:hello@michelemanna.me"
        />
        <SocialCard
          icon={faDiscord}
          content="michele0001"
          social="discord"
          link="https://discord.com/users/573539095452844052"
        />
        <SocialCard
          icon={faXTwitter}
          content="Michelo117"
          social="X"
          link="https://x.com/Michelo117"
        />
      </div>
    </Section>
  );
};
