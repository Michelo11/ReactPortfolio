import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Head from "next/head";

import Reviews from "@/components/reviews";
import Footer from "@/components/footer";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Home from "@/components/sections/home";
import Form from "@/components/form";
import Services from "@/components/sections/services";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <div
      className={
        "bg-gray-900 text-white flex-col items-center flex m-auto " +
        inter.className
      }
    >
      <Head>
        <title>Michele | Portfolio</title>
      </Head>

      <Navbar />
      <Home />

      <div className="bg-gradient-to-r from-[#1d4ed8] to-[#70d9ff] md:h-64 mt-[150px] w-full p-4 xl:mt-[180px] xl:p-0">
        <div className="space-y-2 md:mt-10 section">
          <p className="font-semibold text-2xl">
            Need a website that looks different, better and amazing?
          </p>
          <p className="text-xl">
            Get in touch with me to get your personal quote
          </p>
          <button
            className="bg-white rounded-lg flex font-semibold text-black p-3 justify-center items-center"
            type="button"
          >
            Contact Me
          </button>
        </div>
      </div>

      <About />
      <Skills />
      <Services />
      <Reviews />
      <Form />
      <Footer />
    </div>
  );
}
