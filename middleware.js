// middleware.js - Next.js middleware
import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Pages that need to be protected
  const protectedRoutes = ["/profile", "/wishlist", "/api/orders"];
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (isProtected) {
    // Get the user ID from Cookies
    const userId = request.cookies.get("authUserId");

    // Forward to login page if user is not authenticated
    if (!userId) {
      const loginUrl = new URL("/login", request.url);
      // Preserve the original path for redirect after login
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/wishlist/:path*", "/api/orders/:path*"],
};
