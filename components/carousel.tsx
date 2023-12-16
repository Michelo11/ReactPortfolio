import type { Database } from "@/types/supabase";
import Image from "next/image";
import { useRef } from "react";
import Carousel from "nuka-carousel";

export default function CarouselComponent({
  project,
  close,
}: {
  project: Database["public"]["Tables"]["projects"]["Row"];
  close: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      onClick={(e) => {
        const item = ref.current;
        if (!item) return;
        if (item.contains(e.target as Node)) return;

        e.preventDefault();
        close();
      }}
      className="left-0 top-0 z-20 fixed w-screen h-screen flex flex-col items-center justify-center bg-black/70"
    >
      <div ref={ref} className="md:w-[600px] md:h-[400px] m-auto">
        <Carousel
          
          defaultControlsConfig={{
            pagingDotsStyle: {
              fill: "white",
              margin: "0 0.25rem",
            },
            prevButtonText: "<",
            nextButtonText: ">",
          }}
        >
          {project.images.map((image, i) => (
            <div key={"slide-" + i} className="relative w-full">
              <Image
                src={image}
                width={800}
                height={500}
                alt="image"
                className="w-[600px] h-[400px] m-auto"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
