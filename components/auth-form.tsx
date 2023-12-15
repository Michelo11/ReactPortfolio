"use client";

import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import type { Database } from "../types/supabase";
import Link from "next/link";

export default function AuthForm({ mode }: { mode: "login" | "register" }) {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();
  const query = useSearchParams();

  const next = query.get("next") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        let error;

        if (mode === "login") {
          error = (
            await supabase.auth.signInWithPassword({
              email,
              password,
            })
          ).error;
        } else {
          error = (
            await supabase.auth.signUp({
              email,
              password,
              options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
              },
            })
          ).error;
        }

        if (error) {
          router.push("?error=" + error.message);
          return;
        }

        router.push(decodeURIComponent(next));
      }}
      className="custom-card flex-col items-center gap-4 justify-center p-4 mt-10 md:w-1/3 w-full"
    >
      <h1 className="font-extrabold text-3xl">
        {mode === "login" ? "Login" : "Register"}
      </h1>

      <div className="w-full flex gap-2">
        <button
          type="button"
          onClick={() => {
            supabase.auth.signInWithOAuth({ provider: "discord" });
          }}
          className="custom-button py-2 w-full gap-2"
        >
          <FontAwesomeIcon icon={faDiscord} />
          Discord
        </button>
        <button
          type="button"
          onClick={() => {
            supabase.auth.signInWithOAuth({
              provider: "github",
              options: {
                redirectTo: decodeURIComponent(next),
              },
            });
          }}
          className="custom-button py-2 w-full gap-2"
        >
          <FontAwesomeIcon icon={faGithub} />
          GitHub
        </button>
      </div>
      <hr className="horizontal-rule" />
      <input
        type="email"
        placeholder="Email"
        className="input bg-[#313a4e] appearance-none w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="input bg-[#313a4e] appearance-none w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="custom-button py-2 w-full">
        {mode === "login" ? "Login" : "Register"}
      </button>
      <p className="text-gray-400">
        {mode === "login"
          ? "Don't have an account?"
          : "Already have an account?"}{" "}
        <Link
          href={mode === "login" ? "/register" : "/login"}
          className="text-blue-500"
        >
          {mode === "login" ? "Register" : "Login"}
        </Link>
      </p>
    </form>
  );
}
