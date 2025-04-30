"use client";

import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export const Hero = function Hero() {
  return (
    <div className="flex flex-col gap-4 items-center mt-10 bg-texture bg-repeat pb-8">
      <Image
        src="/img/blue-blur.svg"
        alt="blue blur"
        className="absolute w-[500px] -z-10 select-none"
        width={100}
        height={100}
        placeholder="empty"
        draggable={false}
      />
      <Image
        className="bg-[#1b212c] rounded-xl"
        src="/img/logo.png"
        alt="logo"
        width={75}
        height={75}
        draggable={false}
        placeholder="empty"
      />
      <h1 className="text-white font-bold text-xl text-center">
        HELLO, MY NAME IS MICHELE.
      </h1>
      <h2 className="text-primary font-extrabold text-4xl text-center min-h-[48px]">
        <Typewriter
          words={[
            "SYSTEM ADMIN",
            "WEB DEV",
            "WEB DESIGNER",
            "BOT DEV",
            "PLUGIN DEV",
          ]}
          loop={false}
        />
      </h2>
      <p className="text-gray-400 text-center">
        A student from Italy who loves developing fullstack <br /> websites,
        bots, plugins, designing and administrating systems.
      </p>
      <Link href="#about" className="mt-10 custom-button w-48 h-14">
        LEARN MORE
      </Link>
    </div>
  );
};
