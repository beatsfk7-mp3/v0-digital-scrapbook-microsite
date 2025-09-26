import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

const geistSans = localFont({
  src: "../public/fonts/Geist-Regular.woff2",
  variable: "--font-geist-sans",
  weight: "400",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMono-Regular.woff2",
  variable: "--font-geist-mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
