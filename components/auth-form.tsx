"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../types/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthForm() {
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
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          setError(error.message);
          return;
        }

        router.push("/");
      }}
      className="custom-card flex-col items-center gap-4 justify-center p-4"
    >
      <h1 className="font-extrabold text-3xl">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        className="input bg-[#313a4e] appearance-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="input bg-[#313a4e] appearance-none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="custom-button py-2 w-full">
        Login
      </button>
    </form>
  );
}
