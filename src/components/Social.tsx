"use client";
import React from "react";
import Link from "next/link";
import { Instagram, Twitter } from "lucide-react";
import Container from "./utilities/Container";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Games", href: "/games" },
  { name: "Services", href: "/services" },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
];

const services = [
  { name: "Marekt Research", href: "/mareketResearch" },
  { name: "Branding", href: "/Branding" },
  { name: "Concepting", href: "/Concepting" },
  { name: "Strategy", href: "/Strategy" },
  { name: "Development", href: "/Development" },
];

const Social = () => {
  return (
    <footer>
      <Container>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-8 text-center items-center">
          <div className="flex items-center justify-center text-center">
            <Link href="/" className="text-[40px] font-primary text-center">
              GAM
            </Link>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center">
            <h2 className="text-indigo-300 font-primary text-lg mb-4">Menu</h2>
            <nav className="flex flex-col items-center lg:items-start space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center">
            <h2 className="text-indigo-300 font-primary text-lg mb-4">
              Services
            </h2>
            <nav className="flex flex-col items-center lg:items-start space-y-2">
              {services.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex gap-2 items-center justify-center lg:items-start font-secondary text-center">
            <Link
              href="/"
              className="text-white-300 w-10 h-10 flex place-items-center rounded-full bg-card text-[16] hover:text-white px-3 py-2 text-sm font-medium"
            >
              <Instagram />
            </Link>
            <Link
              href="/"
              className="text-white-300 w-10 h-10 flex place-items-center rounded-full bg-card text-[16] hover:text-white px-3 py-2 text-sm font-medium"
            >
              <Twitter />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Social;
