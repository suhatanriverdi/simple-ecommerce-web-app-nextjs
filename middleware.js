// middleware.js - Next.js middleware
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Pages that needs to be protected
  const protectedRoutes = ['/profile', '/wishlist'];
  const isProtected = protectedRoutes.some(route =>
    pathname.startsWith(route)
  );

  if (isProtected) {
    // Get the token from Cookies
    const token = request.cookies.get('auth-token');

    // Forward to login page if token is not present
    if (!token) {
      const loginUrl = new URL('/login', request.url);
      // Preserve the original path
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*', '/wishlist/:path*']
};