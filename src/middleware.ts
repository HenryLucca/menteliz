import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    // return NextResponse.redirect("/");
    return NextResponse.rewrite(new URL("/login", req.url));
  }

  return res;
}

export const config = {
  // this regex will match any url that does not contain:
  //_next/static, _next/image, favicon.ico, or is the root or login page
  matcher: ["/((?!_next/static|_next/image|favicon.ico|^$|login|register).*)"],
};
