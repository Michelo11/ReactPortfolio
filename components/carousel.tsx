import type { Database } from "@/types/supabase";
import Image from "next/image";
import { useRef } from "react";

export default function Carousel({
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
      <div ref={ref} className="carousel w-1/2 h-1/2 m-auto">
        {project.images.map((image, i) => (
          <div
            key={"slide" + i}
            id={"slide" + i}
            className="carousel-item relative w-full"
          >
            <Image
              src={image}
              width={100}
              height={100}
              alt="image"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={"#slide" + (i === 0 ? project.images.length - 1 : i - 1)}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={"#slide" + (i === project.images.length - 1 ? 0 : i + 1)}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
