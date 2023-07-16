import Image from "next/image";

export default function SuccessPage() {
  return (
    <div className="mt-40">
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
        ORDER PLACED!
      </h1>
      <h2 className="text-gray-400 text-center text-xl">
        You have successfully placed your order.
      </h2>
    </div>
  );
}
