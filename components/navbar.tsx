"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-700/30 p-6 flex justify-between rounded-xl">
      <Link className="text-white uppercase" href="/">
        Michele
      </Link>
      <div className="flex gap-4 text-gray-500">
        <Link className="uppercase" href="/about">
          About
        </Link>
        <Link className="uppercase" href="/about">
          Skills
        </Link>
        <Link className="uppercase" href="/about">
          Services
        </Link>
        <Link className="uppercase" href="/about">
          Contact
        </Link>
      </div>
    </nav>
  );
}
