import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { IBM_Plex_Mono, Newsreader, Public_Sans } from "next/font/google";
import "./globals.css";
import { content } from "@/content";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(content.url),
  title: "Company University · Every company gets a school",
  description: content.description,
  openGraph: {
    title: "Company University",
    description: content.description,
    url: content.url,
    siteName: content.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Company University",
    description: content.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#191918",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${publicSans.variable} ${plexMono.variable}`}
    >
      <body className="bg-ink font-sans text-paper">
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}.rise{animation:none;opacity:1}`}</style>
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
