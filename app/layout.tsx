import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { getLocale } from "next-intl/server";
import { meta } from "@/lib/dictionary";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cerne.pro"),
  title: meta.home.title.en,
  description: meta.home.description.en,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@latest/index.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fontsource/geist-mono@latest/index.css"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
