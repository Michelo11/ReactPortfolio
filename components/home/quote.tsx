import Link from "next/link";

export const InstantQuote = function InstantQuote() {
  return (
    <div className="w-full md:h-32 from-[#1d3977] p-3 to-[#554a71] bg-gradient-to-r rounded-xl">
      <div className="bg-black/30 py-2 px-6 items-center flex flex-col md:flex-row justify-center md:justify-between gap-4 w-full h-full rounded-xl">
        <h1 className="uppercase font-extrabold text-3xl">
          Get a quote!
        </h1>
        <p className="text-gray-400 text-lg md:text-sm xl:text-lg">
          Interested in working together on your project?
          <br />
          Get a rough quote instantly contacting me on Discord!
        </p>
        <Link
          href="https://discord.gg/Z8kYbnbnf6"
          className="uppercase from-[#42426f] to-[#514770] bg-gradient-to-r p-4 px-8 font-bold text-center rounded-xl"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};
