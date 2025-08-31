/**
 * Reusable Logo Component
 * Eliminates repeated logo patterns across Header, Footer, Mobile Navigation
 */

import Image from "next/image";
import { IMAGES, IMAGE_ALT } from "@lib/image-constants";
import { cn } from "@lib/utils";

interface LogoImageProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
}

// const sizeStyles = {
//   sm: "w-8 h-8",
//   md: "w-10 h-10",
//   lg: "w-12 h-12"
// }; // Not used, using containerSizeStyles and direct sizing

const containerSizeStyles = {
  sm: "w-8 h-8 rounded-lg shadow-md border-brand-gold/20",
  md: "w-10 h-10 rounded-lg shadow-md border-brand-gold/20",
  lg: "w-12 h-12 rounded-xl shadow-lg border-brand-gold/30"
};

export default function LogoImage({
  size = "md",
  className = "",
  priority = false
}: LogoImageProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-brand-light via-white to-brand-gold/20 overflow-hidden border p-1 flex items-center justify-center",
        containerSizeStyles[size],
        className
      )}
    >
      <Image
        src={IMAGES.LOGO_DARK}
        alt={IMAGE_ALT.LOGO}
        width={size === "lg" ? 48 : size === "md" ? 40 : 32}
        height={size === "lg" ? 48 : size === "md" ? 40 : 32}
        className="object-contain"
        style={{
          width: size === "lg" ? 40 : size === "md" ? 32 : 24,
          height: size === "lg" ? 40 : size === "md" ? 32 : 24
        }}
        priority={priority}
        quality={90}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAMF/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAACEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
    </div>
  );
}
