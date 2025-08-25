/**
 * Reusable Social Media Button Component
 * Eliminates repeated social button patterns
 */

import React from "react";
import { Button } from "@ui-kit/button";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { cn } from "@lib/utils";
import { CONTACT_INFO } from "@lib/contact-utils";

interface SocialButtonProps {
  platform: "linkedin" | "instagram" | "facebook" | "twitter" | "youtube";
  href?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const platformConfig = {
  linkedin: {
    icon: FaLinkedin,
    label: "LinkedIn",
    defaultHref: CONTACT_INFO.social.linkedin,
    color: "hover:bg-blue-600"
  },
  instagram: {
    icon: FaInstagram,
    label: "Instagram",
    defaultHref: CONTACT_INFO.social.instagram,
    color: "hover:bg-pink-600"
  },
  facebook: {
    icon: FaFacebook,
    label: "Facebook",
    defaultHref: CONTACT_INFO.social.facebook,
    color: "hover:bg-blue-700"
  },
  twitter: {
    icon: FaTwitter,
    label: "Twitter",
    defaultHref: "https://www.twitter.com/shubhhampers",
    color: "hover:bg-blue-500"
  },
  youtube: {
    icon: FaYoutube,
    label: "YouTube",
    defaultHref: "https://www.youtube.com/shubhhampers",
    color: "hover:bg-red-600"
  }
};

export default function SocialButton({
  platform,
  href,
  variant = "outline",
  size = "sm",
  className = "",
  onClick
}: SocialButtonProps) {
  const config = platformConfig[platform];
  const IconComponent = config.icon;

  // Map custom size prop to Button component sizes - prevent hydration issues
  const buttonSize = size === "md" ? "default" : size;

  // Pre-define icon classes to avoid conditional rendering during hydration
  const iconSizeClasses = {
    sm: "mr-2 w-4 h-4",
    md: "mr-2 w-5 h-5",
    lg: "mr-2 w-6 h-6"
  };

  // If there's a custom onClick, use button behavior, otherwise use link behavior
  if (onClick) {
    return (
      <Button
        variant={variant}
        size={buttonSize}
        onClick={onClick}
        className={cn(
          "bg-brand-gold/20 border-2 border-brand-gold text-brand-light hover:bg-brand-gold hover:text-white cursor-pointer transition-all duration-300 hover:scale-105 font-semibold",
          config.color,
          className
        )}
      >
        <IconComponent className={iconSizeClasses[size]} />
        {config.label}
      </Button>
    );
  }

  // Use proper link behavior for better SSR compatibility and accessibility
  return (
    <Button
      variant={variant}
      size={buttonSize}
      asChild
      className={cn(
        "bg-brand-gold/20 border-2 border-brand-gold text-brand-light hover:bg-brand-gold hover:text-white cursor-pointer transition-all duration-300 hover:scale-105 font-semibold",
        config.color,
        className
      )}
    >
      <a
        href={href || config.defaultHref}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={`Visit our ${config.label} page`}
      >
        <IconComponent className={iconSizeClasses[size]} />
        {config.label}
      </a>
    </Button>
  );
}
