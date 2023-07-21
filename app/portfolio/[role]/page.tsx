"use client";

import Carousel from "@/components/carousel";
import Image from "next/image";
import { useState } from "react";

export default function PortfolioPage() {
  const [project, setProject] = useState<string | null>(null);

  return (
    <div className="w-full">
      <div className="mt-20">
        <Image
          className="hidden md:block absolute left-1/4 -top-10 w-[800px] -z-10 select-none"
          src="/img/blue-blur.svg"
          alt="blur"
          width={100}
          height={100}
          placeholder="empty"
          draggable={false}
        />
        <h1 className="text-primary font-extrabold text-4xl uppercase text-center">
          View my past works
        </h1>
        <h2 className="text-gray-400 text-center">
          Get inspired and don&apos;t believe just to my words, see what I already
          did for other clients!
        </h2>
      </div>
      <button className="mt-6" onClick={() => setProject("1")}>
        <Image
          src="/img/placeholder.png"
          width={300}
          height={300}
          alt="Placeholder"
          className="rounded-lg"
          draggable={false}
        />
      </button>
      {project !== null && <Carousel close={() => setProject(null)} />}
    </div>
  );
}
