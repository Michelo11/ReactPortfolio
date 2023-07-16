"use client";

import { PlaceQuoteForm } from "@/components/quote/place-form";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function PlaceQuotePage() {
  const params = useSearchParams();
  const service = params.get("service") as "frontend" | "backend" | "fullstack";
  const pages = Number(params.get("pages") as string);
  const timeframe = Number(params.get("timeframe") as string);

  return (
    <>
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
          Just a few more details
        </h1>
        <h2 className="text-gray-400 text-center">
          We need some other details and youc an place your order
        </h2>
      </div>
      <PlaceQuoteForm pages={pages} timeframe={timeframe} service={service} />
    </>
  );
}
