import { QuoteForm } from "@/components/quote/form";
import Image from "next/image";

export default function QuotePage() {
  return (
    <div className="bg-texture bg-repeat p-4 justify-center items-center h-full gap-6 flex flex-col">
      <Image
        className="hidden md:block absolute top-0 left-10 w-[700px] -z-10 select-none"
        src="/img/pink-blur.svg"
        alt="blur"
        width={100}
        height={100}
        placeholder="empty"
        draggable={false}
      />
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
          Get an instant quote
        </h1>
        <h2 className="text-gray-400">
          Use the form below to get a rough quote for my services!
        </h2>
      </div>
      <QuoteForm />
      <Image
        className="hidden md:block absolute bottom-0 right-0 w-[700px] -z-10 select-none"
        src="/img/pink-blur.svg"
        alt="blur"
        width={100}
        height={100}
        placeholder="empty"
        draggable={false}
      />
    </div>
  );
}
