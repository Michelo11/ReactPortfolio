import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col gap-4 items-center mt-10">
      <Image
        className="bg-[#1b212c] rounded-xl"
        src="/img/logo.png"
        alt="logo"
        width={75}
        height={75}
      />
      <h1 className="text-white font-bold text-xl">
        HELLO, MY NAME IS MICHELE.
      </h1>
      <h2 className="text-primary font-extrabold text-4xl">
        SYSTEM ADMINISTRATION
      </h2>
      <p className="text-gray-500 text-center">
        A student from Italy who loves developing fullstack <br /> websites,
        designing and administrating systems.
      </p>
      <button className="mt-6 font-bold rounded-xl bg-primary shadow-xl px-6 py-2">
        LEARN MORE
      </button>
    </div>
  );
}
