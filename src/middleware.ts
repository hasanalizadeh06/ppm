// middleware.ts
import {NextRequest, NextResponse} from 'next/server';
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

const nextIntlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    const { pathname } = new URL(request.url);

    if (pathname === '/') {
        return NextResponse.redirect(new URL(`/${routing.defaultLocale}`, request.url));
    }

    return nextIntlMiddleware(request);
}

export const config = {
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
