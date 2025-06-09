import "@/styles/index.scss"
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import React from "react";
import {setRequestLocale} from 'next-intl/server';
import {locales} from "@/constants/locale";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";

export default async function LocaleLayout({children, params}: Readonly<{
    children: React.ReactNode;
    params: Promise<{locale: string}>;
}>) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const isAuthenticated = false; // Burayı kendi auth kontrolünüzle değiştirin

    setRequestLocale(locale);

    return (
        <html lang={locale}>
            <head>
                <meta name="description" content="PPM - Home" />
                <link rel="icon" href="/3.png" sizes="any" />
                <link rel="stylesheet" href="" />
            </head>
            <body>
            <div className="appContainer">
                <NextIntlClientProvider>
                    <HeaderOne />
                    <div className="pageContent">
                        {children}
                    </div>
                    <FooterOne/>
                </NextIntlClientProvider>
            </div>
            </body>
        </html>
    );
}


export function generateStaticParams() {
    return locales.map(locale => ({ locale }));
}
