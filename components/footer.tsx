import {
  faDiscord,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const Footer = function Footer() {
  return (
    <footer className="mt-auto border-t text-gray-500 border-t-gray-600 py-6 flex flex-col md:flex-row justify-center md:justify-between text-center gap-4 md:text-start items-center">
      <p>&copy; 2023 Michele Manna. All rights reserved.</p>
      <div className="flex gap-4 opacity-30 text-xl items-center">
        <Link
          href="https://discord.com/users/573539095452844052"
          aria-label="Discord"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </Link>
        <Link href="https://github.com/Michelo11" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link href="https://twitter.com/Michelo117" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link href="/">
          <Image
            src="/img/logo.png"
            className="rounded-xl"
            alt="logo"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </footer>
  );
};
