"use client";
import React from "react";
import Title from "./utilities/Title";
import Image from "next/image";
import CustomButton from "./utilities/Button";
import Link from "next/link";
import { Instagram, Twitter } from "lucide-react";

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
    <div className="w-full p-10 flex flex-col lg:flex-row lg:justify-evenly items-center text-center">
      <div className="flex item">
        <Link href="/" className="text-[40px] font-primary">
          GAM
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-indigo-300 font-primary text-[18px] text-center self-center">
          Menu
        </h2>
        <div className="ml-10 flex flex-col items-center font-secondary">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white-300 hover:bg-gray-700 text-[16] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-indigo-300 font-primary text-[18px] text-center self-center">
          Services
        </h2>
        <div className="ml-10 flex flex-col items-center font-secondary">
          {services.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white-300 hover:bg-gray-700 text-[16] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="ml-10 flex gap-2 items-start font-secondary">
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
  );
};

export default Social;
