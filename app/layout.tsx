import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Michele Manna",
  description: "A developer, designer and system administrator",
  metadataBase: new URL("https://michelemanna.me"),
  openGraph: {
    type: "website",
    url: "https://michelemanna.me",
    title: "Michele Manna",
    description: "A developer, designer and system administrator",
    images: ["/img/logo.png"],
  },
  themeColor: "#225bdd",
  viewport: "width=device-width, initial-scale=1",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          "flex flex-col mx-10 md:mx-24 bg-background text-white " +
          inter.className
        }
      >
        <Navbar />
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
        <Footer />
      </body>
    </html>
  );
}
