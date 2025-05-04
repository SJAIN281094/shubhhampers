"use client";
import Link from "next/link";
import Mobile from "./Mobile";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 z-50 bg-black backdrop-blur-xs">
      <header>
        <div className="mx-auto flex h-24 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link className="block text-teal-600" href="/">
            <span className="sr-only">Home</span>
            <Image
              height={140}
              width={140}
              src="/shubhhampers.png"
              alt=""
              className=""
            />
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between ">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className="text-white transition  " href="/">
                    Home
                  </Link>
                </li>

                <li>
                  <Link className="text-white transition  " href="/about">
                    About
                  </Link>
                </li>

                <li>
                  <Link className="text-white transition  " href="/products">
                    Products
                  </Link>
                </li>

                <li>
                  <Link className="text-white transition  " href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {isOpen && (
        <div
          className={`absolute left-0 top-0 w-52 md:hidden bg-white shadow-lg rounded-lg z-50`}
        >
          <Mobile setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
};

export default Header;
