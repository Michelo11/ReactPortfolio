import { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/screen.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter } from "next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { NextAuthProvider } from "./providers";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Michele | Portfolio",
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
          "flex flex-col mt-12 mx-24 bg-background text-white " +
          inter.className
        }
      >
        <NextAuthProvider>
          <Navbar />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
