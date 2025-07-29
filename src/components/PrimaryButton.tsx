import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
}

export default function PrimaryButton({
  children,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  size = "md"
}: PrimaryButtonProps) {
  const sizeClasses = {
    sm: "py-1.5 px-4 text-sm",
    md: "py-2 px-5 text-base",
    lg: "py-3 px-6 text-lg"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-gradient-to-r from-brand-amber to-brand-brown 
        hover:from-brand-brown hover:to-brand-amber 
        text-white font-semibold rounded-lg shadow-lg hover:shadow-xl 
        transition-all duration-200 transform hover:scale-105 hover:-translate-y-1
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
