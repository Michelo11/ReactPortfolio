import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "@/types/supabase";

const protectedRoutes = ["/quote/place"];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });
  const { data } = await supabase.auth.getSession();

  if (!data.session && protectedRoutes.includes(req.nextUrl.pathname)) {
    const url = new URL("/login", req.nextUrl.origin);
    url.searchParams.set("next", encodeURIComponent(req.nextUrl.href));

    return NextResponse.redirect(url);
  }

  return res;
}
