import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
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
      {children}
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
