"use client";

import { useRouter } from "next/navigation";

export default function HeaderLogo() {
  const router = useRouter();

  return (
    <div
      className='flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity duration-200 flex-shrink-0'
      onClick={() => router.push("/")}
    >
      <div className='relative flex items-center'>
        <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-brand-light via-white to-brand-gold/20 rounded-lg overflow-hidden shadow-md border border-brand-gold/20 p-1'>
          {/* Logo Image */}
          <img
            src='/logo-dark.png'
            alt='Shubhhampers Logo'
            className='w-full h-full object-contain'
          />
        </div>
      </div>
      <div className='flex flex-col justify-center'>
        <h1 className='font-display text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-brand-brown to-brand-amber bg-clip-text text-transparent tracking-tight drop-shadow-sm leading-none'>
          Shubhhampers
        </h1>
        <p className='text-xs sm:text-sm text-brand-brown font-semibold tracking-wide opacity-90 mt-0.5'>
          Hampers that build relationships.
        </p>
      </div>
    </div>
  );
}
