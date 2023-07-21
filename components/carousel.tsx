import Image from "next/image";
import { useRef } from "react";

export default function Carousel({ close }: { close: () => void }) {
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
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            src="/img/placeholder.png"
            width={100}
            height={100}
            alt="placeholder"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            src="/img/placeholder.png"
            width={100}
            height={100}
            alt="placeholder"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image
            src="/img/placeholder.png"
            width={100}
            height={100}
            alt="placeholder"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image
            src="/img/placeholder.png"
            width={100}
            height={100}
            alt="placeholder"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
