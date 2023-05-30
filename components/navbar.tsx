import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Navbar() {
  const collapse = useRef(null);

  return (
    <nav className="bg-[#111827] w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center" draggable="false">
          <Image
            src="/img/logo.png"
            className="h-8 mr-3 rounded-full"
            alt="Michele Logo"
            draggable="false"
            width={32}
            height={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Michele
          </span>
        </Link>
        <div className="flex md:order-2">
          <Link
            href="#contact"
            type="button"
            className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          >
            Contact
          </Link>
          <button
          onClick={() => {
            (collapse.current as any).classList.toggle("hidden");
          }}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          ref={collapse}
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-white bg-transparent border-gray-700">
            {" "}
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                Skill
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
