"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="bg-gray-900 text-white flex-col justify-center items-center flex m-auto h-screen">
      <h1 className="font-extrabold text-4xl">Restricted Page</h1>
      <p>Please login in order to access the requested page.</p>
      <button
        className="rounded-xl bg-[#235bdd] h-10 mt-2 w-40"
        onClick={() => signIn("discord")}
      >
        Login
      </button>
    </div>
  );
}
