import Image from "next/image";

export const Hero = function Hero() {
  return (
    <div className="flex flex-col gap-4 items-center mt-10 bg-texture bg-repeat pb-8">
      <Image
        className="absolute -left-64 -top-32 w-[700px] -z-10 select-none"
        src="/img/pink-blur.svg"
        alt="blur"
        width={100}
        height={100}
        placeholder="empty"
        draggable={false}
      />
      <Image
        src="/img/blue-blur.svg"
        alt="blue blur"
        className="absolute w-[500px] -z-10 select-none"
        width={100}
        height={100}
        placeholder="empty"
        draggable={false}
      />
      <Image
        className="bg-[#1b212c] rounded-xl"
        src="/img/logo.png"
        alt="logo"
        width={75}
        height={75}
        placeholder="empty"
      />
      <h1 className="text-white font-bold text-xl text-center">
        HELLO, MY NAME IS MICHELE.
      </h1>
      <h2 className="text-primary font-extrabold text-4xl text-center">
        SYSTEM ADMINISTRATION
      </h2>
      <p className="text-gray-400 text-center">
        A student from Italy who loves developing fullstack <br /> websites,
        designing and administrating systems.
      </p>
      <button className="mt-10 button w-48 h-14">LEARN MORE</button>
      <div className="animate-bounce">
        <Image
          placeholder="empty"
          src="/img/angle.svg"
          className="select-none opacity-10 mt-14"
          alt="angle"
          width={120}
          height={200}
        />
        <Image
          placeholder="empty"
          src="/img/angle.svg"
          className="select-none opacity-50"
          alt="angle"
          width={120}
          height={200}
        />
        <Image
          placeholder="empty"
          src="/img/angle.svg"
          className="select-none"
          alt="angle"
          width={120}
          height={200}
        />
      </div>
    </div>
  );
};
