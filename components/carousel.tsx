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
      <div ref={ref} className="m-auto">
        <Carousel
          adaptiveHeight
          className="!h-fit *:items-center"
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
            <div
              key={"slide-" + i}
              className="relative w-full m-auto max-h-[600px] overflow-y-auto"
            >
              <Image
                src={image}
                width={600}
                height={600}
                alt="image"
                className="m-auto"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABKklEQVRIS+2Uz0oDQRSGv9F"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
