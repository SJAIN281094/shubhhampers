"use client";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link className="block text-teal-600" href="/">
      <Image
        height={300}
        width={300}
        src="shubhhampers-mini.png"
        alt=""
        className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
      />
      <span className="sr-only">Home</span>
    </Link>
  );
};

export default Logo;
