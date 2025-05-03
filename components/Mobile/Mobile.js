"use client";
import Link from "next/link";

const Mobile = ({ setIsOpen }) => {
  return (
    <div className="p-4">
      <div className="flex justify-end">
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-700"
          aria-label="Close Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <ul className="mt-4 space-y-3">
        <li>
          <Link
            href="/about"
            className="block text-gray-800 transition hover:text-gray-800/75"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="block text-gray-800 transition hover:text-gray-800/75"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="block text-gray-800 transition hover:text-gray-800/75"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Mobile;
