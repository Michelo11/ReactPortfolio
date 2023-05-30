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
        "bg-gray-900 text-white flex-col items-center flex m-auto" +
        inter.className
      }
    >
      <Head>
        <title>Michele | Portfolio</title>
      </Head>

      <Navbar />
      <Home />

      <div className="bg-gradient-to-r from-[#1d4ed8] to-[#70d9ff] w-full mt-[150px] xl:mt-[180px] h-64 px-4 xl:px-0">
        <div className="section mt-10 space-y-2">
          <p className="font-semibold text-2xl">
            Need a website that looks different, better and amazing?
          </p>
          <p className="text-xl">
            Get in touch with me to get your personal quote
          </p>
          <button
            className="bg-white text-black p-3 rounded-lg flex justify-center items-center font-semibold"
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
