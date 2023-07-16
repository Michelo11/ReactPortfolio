import { QuoteForm } from "@/components/quote/form";
import Image from "next/image";

export default function QuotePage() {
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
          Get an instant quote
        </h1>
        <h2 className="text-gray-400 text-center">
          Use the form below to get a rough quote for my services!
        </h2>
      </div>
      <QuoteForm />
    </>
  );
}
