import { AboutMe } from "@/components/home/about";
import { Hero } from "@/components/home/hero";
import { InstantQuote } from "@/components/home/quote";
import { Reviews } from "@/components/home/reviews";
import { Services } from "@/components/home/services";
import { Skills } from "@/components/home/skills";
import { Socials } from "@/components/home/socials";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <Services />
      <Reviews />
      <InstantQuote />
      <Socials />
    </div>
  );
}
