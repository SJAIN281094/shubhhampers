"use client";
import { BsBag } from "react-icons/bs";
import { useState } from "react";
import SideCart from "../SideCart";

const CartButton = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="block text-gray-700"
        aria-label="Cart"
      >
        <BsBag size={20} />
      </button>

      {isCartOpen && (
        <SideCart setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen} />
      )}
    </>
  );
};

export default CartButton;
