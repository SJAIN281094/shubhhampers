import Link from "next/link";
import Image from "next/image";
import { IMAGES, IMAGE_ALT } from "@lib/image-constants";

export default function HeaderLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity duration-200 flex-shrink-0"
    >
      <div className="relative flex items-center">
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-brand-light via-white to-brand-gold/20 rounded-lg overflow-hidden shadow-md border border-brand-gold/20 p-1">
          {/* Logo Image - Simple Next.js Image */}
          <Image
            src={IMAGES.LOGO_DARK}
            alt={IMAGE_ALT.LOGO}
            width={48}
            height={48}
            className="w-full h-full object-contain"
            priority={true}
            quality={90}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-brand-brown to-brand-amber bg-clip-text text-transparent tracking-tight drop-shadow-sm leading-none">
          Shubhhampers
        </div>
      </div>
    </Link>
  );
}
