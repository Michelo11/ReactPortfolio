import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "@/types/supabase";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    if (
      req.nextUrl.pathname === "/quote/place" ||
      req.nextUrl.pathname.startsWith("/app") ||
      req.nextUrl.pathname === "/admin"
    ) {
      const url = new URL("/login", req.nextUrl.origin);
      url.searchParams.set("next", encodeURIComponent(req.nextUrl.href));

      return NextResponse.redirect(url);
    }
  } else {
    if (
      req.nextUrl.pathname === "/login" ||
      req.nextUrl.pathname === "/register"
    ) {
      return NextResponse.redirect("/app");
    }

    if (req.nextUrl.pathname === "/admin") {
      const { data: user } = await supabase
        .from("admins")
        .select("user_id")
        .eq("user_id", data.session.user.id)
        .single();

      if (!user) {
        const url = req.nextUrl.clone();
        url.pathname = "/app";
        return NextResponse.redirect(url);
      }
    }
  }

  return res;
}
