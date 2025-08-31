interface HamperTagProps {
  title: string;
  className?: string;
  variant?: "default" | "compact";
}

export default function HamperTag({ title, className = "", variant = "default" }: HamperTagProps) {
  const isCompact = variant === "compact";

  // Compact variant styles - maintains theme but smaller
  if (isCompact) {
    return (
      <div className={`relative group ${className}`}>
        <div className="relative bg-gradient-to-r from-white via-brand-light/95 to-white backdrop-blur-sm px-3.5 py-2 rounded-full border border-brand-gold/30 shadow-lg min-w-fit flex items-center justify-center">
          {/* Smaller golden accent line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent rounded-full" />

          {/* Tag Title */}
          <span className="text-brand-dark font-bold text-base group-hover:text-lg text-center tracking-wide leading-tight whitespace-nowrap transition-all duration-300 ease-out">
            {title}
          </span>

          {/* Bottom golden accent line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-transparent via-brand-amber to-transparent rounded-full" />
        </div>
      </div>
    );
  }

  // Default variant styles
  return (
    <div className={`relative group h-full ${className}`}>
      <div className="relative bg-gradient-to-r from-white via-brand-light/95 to-white backdrop-blur-sm px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full border border-brand-gold/30 shadow-xl min-w-fit h-full min-h-[3rem] sm:min-h-[3.5rem] flex items-center justify-center">
        {/* Golden accent line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent rounded-full" />

        {/* Tag Title */}
        <span className="text-brand-dark font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl group-hover:text-base group-hover:xs:text-lg group-hover:sm:text-xl group-hover:md:text-2xl group-hover:lg:text-xl group-hover:xl:text-2xl text-center tracking-wide leading-tight whitespace-nowrap transition-all duration-300 ease-out">
          {title}
        </span>

        {/* Bottom golden accent line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-0.5 bg-gradient-to-r from-transparent via-brand-amber to-transparent rounded-full" />
      </div>
    </div>
  );
}
