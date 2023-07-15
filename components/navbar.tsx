import Link from "next/link";

export const Navbar = function Navbar() {
  return (
    <nav className="bg-slate-700/30 mt-12 p-6 flex justify-center md:justify-between rounded-xl z-10">
      <Link className="text-white uppercase" href="/">
        Michele
      </Link>
      <div className="hidden md:flex gap-4 text-gray-400">
        <Link className="uppercase" href="/">
          About
        </Link>
        <Link className="uppercase" href="/">
          Skills
        </Link>
        <Link className="uppercase" href="/">
          Services
        </Link>
        <Link className="uppercase" href="/">
          Contact
        </Link>
      </div>
    </nav>
  );
};
