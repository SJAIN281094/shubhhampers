"use client";

import { useRouter } from "next/navigation";

export default function HeaderLogo() {
  const router = useRouter();

  return (
    <div
      className='flex items-center space-x-3 cursor-pointer hover:opacity-90 transition-opacity duration-200 flex-shrink-0'
      onClick={() => router.push("/")}
    >
      <div className='relative'>
        <div className='w-10 h-10 bg-gradient-to-br from-brand-amber to-brand-brown rounded-xl flex items-center justify-center shadow-lg'>
          {/* Gift Icon */}
          <svg
            className='w-7 h-7 text-white'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            viewBox='0 0 24 24'
          >
            <rect
              x='3'
              y='8'
              width='18'
              height='13'
              rx='2'
              fill='currentColor'
              className='text-brand-gold'
            />
            <path d='M12 8V21' stroke='white' strokeWidth='2' />
            <path d='M3 12H21' stroke='white' strokeWidth='2' />
            <path
              d='M7.5 8C6.119 8 5 6.881 5 5.5S6.119 3 7.5 3C9.5 3 10 5.5 12 5.5C14 5.5 14.5 3 16.5 3C17.881 3 19 4.119 19 5.5S17.881 8 16.5 8H7.5Z'
              stroke='white'
              strokeWidth='2'
            />
          </svg>
        </div>
      </div>
      <div>
        <h1 className='font-display text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-brand-brown to-brand-amber bg-clip-text text-transparent tracking-tight drop-shadow-sm'>
          Shubhhampers
        </h1>
        <p className='text-xs sm:text-xs text-brand-brown font-semibold tracking-wide hidden sm:block'>
          Hampers that build relationships.
        </p>
      </div>
    </div>
  );
}
