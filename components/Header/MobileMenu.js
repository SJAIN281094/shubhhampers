"use client";
import Mobile from "../Mobile/Mobile";
import { useState } from "react";

const MobileMenu = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block md:hidden text-gray-700"
        aria-label="Toggle Mobile Menu"
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-0 w-52 md:hidden bg-white shadow-lg rounded-lg z-50">
          <Mobile setIsOpen={setIsOpen} categories={categories} />
        </div>
      )}
    </>
  );
};

export default MobileMenu;
