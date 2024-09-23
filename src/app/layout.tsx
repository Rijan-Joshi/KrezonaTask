import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { cn } from "@/libs/utils";
import NavBar from "@/components/NavBar";

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
      <body
        className={cn(
          "min-h-screen antialiased",
          barlow.variable,
          barlowCondensed.variable
        )}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
