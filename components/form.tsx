import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Form() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center w-screen section mt-20 mb-20">
          <div className="container mx-auto my-4 px-4 lg:px-20">
            <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold uppercase text-5xl">
                  Send me a <br /> message
                </h1>
              </div>
              <div className="mt-5 w-full flex flex-col gap-4">
                <div className="flex gap-4 w-full">
                  <input
                    className="w-full bg-[#1d4ed840] text-white mt-2 p-3 rounded border-none focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="First Name*"
                  />
                  <input
                    className="w-full bg-[#1d4ed840] text-white mt-2 p-3 rounded border-none focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Last Name*"
                  />
                </div>
                <input
                  className="w-full bg-[#1d4ed840] text-white mt-2 p-3 rounded border-none focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email*"
                />
              </div>
              <div className="my-4">
                <textarea
                  placeholder="Message*"
                  className="w-full h-32 bg-[#1d4ed840] text-white mt-2 p-3 rounded border-none focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="my-2 w-1/2 lg:w-1/4">
                <button
                  className="uppercase text-sm font-bold tracking-wide bg-[#235bdd] text-gray-100 p-3 rounded w-full 
                      focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </div>

            <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-[#0f0b08]/75 rounded-2xl">
              <div className="flex flex-col text-white">
                <h1 className="font-bold uppercase text-4xl my-4">
                  GET IN TOUCH
                </h1>
                <p className="text-gray-300">
                  I always love to hear from people, so if you want to ask me
                  something or just say hi, feel free to drop me a line anytime.
                  I do my best to always respond to emails within 24 hours.
                </p>

                <div className="flex my-4 flex-col space-y-4">
                  <a
                    href="mailto:hello@michelemanna.me"
                    className="flex items-center gap-4"
                    draggable="false"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-2xl text-[#235bdd]"
                    />
                    <div className="flex flex-col">
                      <p className="text-2xl font-semibold">Email</p>
                      <p className="text-gray-300">hello@michelemanna.me</p>
                    </div>
                  </a>
                  <a
                    href="https://discord.gg/38VbuFPj2n"
                    className="flex items-center gap-3"
                    draggable="false"
                  >
                    <FontAwesomeIcon
                      icon={faDiscord}
                      className="text-2xl text-[#235bdd]"
                    />
                    <div className="flex flex-col">
                      <p className="text-2xl font-semibold">Discord</p>
                      <p className="text-gray-300">Michele Support</p>
                    </div>
                  </a>
                  <a
                    href="https://twitter.com/Michelo117"
                    className="flex items-center gap-3"
                    draggable="false"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-2xl text-[#235bdd]"
                    />
                    <div className="flex flex-col">
                      <p className="text-2xl font-semibold">Twitter</p>
                      <p className="text-gray-300">@Michelo117</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
