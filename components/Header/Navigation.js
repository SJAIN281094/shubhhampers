"use client";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "@/Context/Context";

const Navigation = () => {
  const { user } = useContext(Context);

  return (
    <nav aria-label="Global" className="hidden md:block">
      <ul className="flex items-center gap-6 text-sm">
        <li>
          <Link
            className="text-gray-800 transition hover:text-gray-800/75 "
            href="/about"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            className="text-gray-800 transition hover:text-gray-800/75 "
            href="/products"
          >
            Products
          </Link>
        </li>

        <li>
          <Link
            className="text-gray-800 transition hover:text-gray-800/75 "
            href="/contact"
          >
            Contact
          </Link>
        </li>
        {user?.data?.isAdmin && (
          <li>
            <Link
              className="text-gray-800 transition hover:text-gray-800/75 "
              href="/dashboard"
            >
              Admin
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
