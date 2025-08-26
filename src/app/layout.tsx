import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Survey Form",
  description: "",
};

if (!process.env.NEXT_PUBLIC_PRIMARY_COLOR) {
  throw new Error("NEXT_THEME_COLOR_TOTAL is not set");
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      style={{
        "--primary": process.env.NEXT_PUBLIC_PRIMARY_COLOR,
      } as React.CSSProperties}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
