import Image from "next/image";

export default function About() {
  return (
    <div className="mt-20" id="about">
      <div className="section">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold">About Me</h1>
          <p className="text-gray-300">
            Learn more about my life and experiences.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 px-4 md:px-0">
          <Image
            src="/img/illustrationAbout.svg"
            alt="illustration"
            draggable="false"
            width={400}
            height={400}
          />
          <div
            className="space-y-6 md:w-[585px]"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <p className="text-gray-300 text-[18px]">
              I&apos;m a developer, designer and system administrator from
              Italy. I can design and create everything for you and your
              company.
            </p>

            <p className="text-gray-300 text-[18px]">
              You can learn more about my skills and the languages I know below.
              I&apos;m also the CEO at
              <a
                href="https://discord.gg/rocketcreations"
                className="font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 bg-clip-text text-transparent"
              >
                {" "}
                RocketCreations{" "}
              </a>
              and I cover a management position in a lot of Services Teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
