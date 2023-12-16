"use client";

import type { Database } from "@/types/supabase";
import {
  faArrowRightFromBracket,
  faGear,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = function Navbar() {
  const supabase = createClientComponentClient<Database>();

  const [user, setUser] = useState<
    | null
    | (Database["public"]["Tables"]["profiles"]["Row"] & {
        admins: any;
      })
  >(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      if (!session || !session.user) {
        setUser(null);
        return;
      }

      supabase
        .from("profiles")
        .select("*, admins (user_id)")
        .eq("id", session.user.id)
        .single()
        .then(({ data }) => {
          setUser(data);
        });
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [supabase]);

  return (
    <nav className="relative bg-slate-700/30 mt-12 p-6 flex justify-center items-center md:justify-between rounded-xl z-10 h-20">
      <Link className="text-white uppercase" href="/">
        Michele
      </Link>
      <div className="hidden md:flex gap-4 text-gray-400 items-center">
        <Link scroll className="uppercase" href="/#about">
          About
        </Link>
        <Link className="uppercase" href="/#skills">
          Skills
        </Link>
        <Link className="uppercase" href="/#services">
          Services
        </Link>
        <Link className="uppercase" href="/#contact">
          Contact
        </Link>
        {user ? (
          <button
            onClick={() => {
              setMenuOpen((prev) => !prev);
            }}
          >
            <Image
              src={
                user.avatar_url ||
                `https://ui-avatars.com/api/?background=000000&color=fff&name=${
                  user.full_name || "Unknown"
                }`
              }
              alt="avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <ul
              style={{
                display: menuOpen ? "block" : "none",
              }}
              className="menu absolute mt-2 right-0 bg-base-200 w-56 rounded-box border-2 border-[#141414]"
            >
              {user.admins?.user_id != null && (
                <li>
                  <Link href="/admin">
                    <FontAwesomeIcon icon={faUser} size="xl" /> Admin
                  </Link>
                </li>
              )}
              <li>
                <Link href="/logout">
                  <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" />{" "}
                  Logout
                </Link>
              </li>
            </ul>
          </button>
        ) : (
          <Link className="uppercase" href="/login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};
