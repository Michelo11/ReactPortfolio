import Navbar from "@/components/navbar";

import Footer from "@/components/footer";
import Form from "@/components/form";
import Reviews from "@/components/reviews";
import About from "@/components/sections/about";
import Home from "@/components/sections/home";
import Services from "@/components/sections/services";
import Skills from "@/components/sections/skills";

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-white flex-col items-center flex m-auto">
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
