/**
 * Reusable Social Media Button Component
 * Eliminates repeated social button patterns
 */

import React from "react";
import { Button } from "@ui-kit/button";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { cn } from "@lib/utils";

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
    defaultHref: "https://www.linkedin.com/company/shubhhampers",
    color: "hover:bg-blue-600"
  },
  instagram: {
    icon: FaInstagram,
    label: "Instagram",
    defaultHref: "https://www.instagram.com/shubhhampers_",
    color: "hover:bg-pink-600"
  },
  facebook: {
    icon: FaFacebook,
    label: "Facebook",
    defaultHref: "https://www.facebook.com/shubhhampers",
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

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href || config.defaultHref) {
      window.open(href || config.defaultHref, "_blank");
    }
  };

  // Map custom size prop to Button component sizes
  const buttonSize = size === "md" ? "default" : size;

  return (
    <Button
      variant={variant}
      size={buttonSize}
      onClick={handleClick}
      className={cn(
        "bg-brand-gold/20 border-2 border-brand-gold text-brand-light hover:bg-brand-gold hover:text-brand-dark cursor-pointer transition-all duration-300 hover:scale-105 font-semibold",
        config.color,
        className
      )}
    >
      <IconComponent
        className={cn("mr-2", size === "sm" ? "w-4 h-4" : size === "md" ? "w-5 h-5" : "w-6 h-6")}
      />
      {config.label}
    </Button>
  );
}
