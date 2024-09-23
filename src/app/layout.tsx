import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { cn } from "@/libs/utils";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "GAM",
  description: "Your Gaming Platform",
};

// Setting up Barlow font for usage
const barlow = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

//Setting up Barlow Condensed Font for usage
const barlowCondensed = Barlow_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <Head>
        <title>GAM</title>
        <meta name="description" content="Gaming Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={cn(
          "min-h-screen antialiased flex flex-col bg-background text-white",
          barlow.variable,
          barlowCondensed.variable
        )}
      >
        <NavBar />
        <main className="flex-grow max-w-7xl px-6 sm:px-12 md:px-20 lg:px-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
