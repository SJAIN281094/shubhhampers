import { ReactNode } from "react";

interface SecondaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export default function SecondaryButton({
  children,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  size = "md",
  fullWidth = false
}: SecondaryButtonProps) {
  const sizeClasses = {
    sm: "py-1 px-4 text-sm",
    md: "py-1.5 px-5 text-base",
    lg: "py-2.5 px-6 text-lg"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-white/90 backdrop-blur-sm text-brand-brown 
        border-2 border-brand-gold font-semibold rounded-lg 
        shadow-lg hover:shadow-xl transition-all duration-200 
        transform hover:scale-105 hover:-translate-y-1
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : "w-auto"}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
