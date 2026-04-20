import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import useIsMobile from "@/src/hooks/useIsMobile";
import {SimBashProvider} from "@/src/providers/SimBashProvider";
import {SimBash} from "@/components/SimBash";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Matthew Marquez's Web Portfolio",
  description: "Bruh Momentum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <SimBashProvider username="mmarquez" hostname="resume">
        {children}
      </SimBashProvider>
      </body>
    </html>
  );
}
