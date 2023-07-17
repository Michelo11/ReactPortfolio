"use client";

import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Database } from "../types/supabase";

export default function AuthForm({ mode }: { mode: "login" | "register" }) {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");

  return (
    <form
      onSubmit={async (e) => {
        setError("");

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
          setError(error.message);
          return;
        }

        router.push("/");
      }}
      className="custom-card flex-col items-center gap-4 justify-center p-4 mt-10 w-1/3"
    >
      <h1 className="font-extrabold text-3xl">
        {mode === "login" ? "Login" : "Register"}
      </h1>
      {error && <p className="text-red-500">{error}</p>}
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
            supabase.auth.signInWithOAuth({ provider: "github" });
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
        Login
      </button>
    </form>
  );
}
