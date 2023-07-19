"use client";

import type { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LogoutPage() {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  useEffect(() => {
    supabase.auth.signOut().then(() => router.push("/"));
  }, [supabase, router]);

  return null;
}
