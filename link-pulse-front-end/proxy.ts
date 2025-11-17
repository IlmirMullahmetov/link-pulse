import { NextRequest, NextResponse } from 'next/server';
import { EnumTokens } from './services/auth-token.service';
import { PAGES } from './config/page-url.config';

export function proxy(request: NextRequest) {
  const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value;
  const pathname = request.nextUrl.pathname;

  const isAuthPage = pathname.startsWith('/auth');

  if (isAuthPage && refreshToken) {
    return NextResponse.redirect(new URL(PAGES.HOME, request.url));
  }

  if (isAuthPage) {
    return NextResponse.next();
  }

  if (!refreshToken) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/i/:path*', '/auth/:path*'],
};
