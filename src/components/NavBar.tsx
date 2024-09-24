"use client";
import React from "react";
import Link from "next/link";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Button from "./utilities/Button";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Games", href: "/games" },
  { name: "Services", href: "/services" },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
];

const NavBar: React.FC = () => {
  return (
    <Disclosure as="nav" className="py-4">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32">
            <div className="flex items-center justify-between h-16 gap-36">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="text-[40px] font-primary">
                  GAM
                </Link>
              </div>

              {/* Navigation */}
              <div className="hidden md:block flex-1">
                <div className="ml-10 flex justify-between space-x-5 ">
                  <div className="ml-10 flex space-x-4 items-center font-secondary">
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

                  {/* Contact Button */}
                  <Button>CONTACT US</Button>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                <DisclosureButton as="div">
                  <span className="sr-only">Open main menu</span>
                  <Button>
                    {open ? (
                      <X className="block h-10 w-10" aria-hidden="true" />
                    ) : (
                      <Menu className="block h-10 w-10" aria-hidden="true" />
                    )}
                  </Button>
                </DisclosureButton>
              </div>
            </div>
          </div>
          <DisclosurePanel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white-300 hover:bg-gray-700 text-[16] hover:text-white px-3 py-2 rounded-md text-sm font-medium block"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
