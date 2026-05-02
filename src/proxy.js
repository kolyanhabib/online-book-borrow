import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: request.headers, // ✅ MUST use this (NOT headers())
  });

  if (!session) {
    const redirectUrl = new URL("/signin", request.url);

    // 🔥 save previous page
    redirectUrl.searchParams.set("redirect", request.nextUrl.pathname);

    return NextResponse.redirect(redirectUrl);
  }

  // ✅ IMPORTANT (you missed this before)
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile",
    "/all-books",
    "/all-books/:path*",
    "/books/:path*",
  ],
};
