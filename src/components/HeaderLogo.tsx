import Link from "next/link";
import Image from "next/image";

export default function HeaderLogo() {
  return (
    <Link
      href='/'
      className='flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity duration-200 flex-shrink-0'
    >
      <div className='relative flex items-center'>
        <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-brand-light via-white to-brand-gold/20 rounded-lg overflow-hidden shadow-md border border-brand-gold/20 p-1'>
          {/* Logo Image - Optimized with Next.js Image */}
          <Image
            src='/logo-dark.png'
            alt='Shubhhampers Logo'
            width={48}
            height={48}
            className='w-full h-full object-contain'
            priority={true}
            quality={90}
            placeholder='blur'
            blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
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
    </Link>
  );
}
