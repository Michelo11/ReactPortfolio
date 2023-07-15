import { Metadata } from "next";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter } from "next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
