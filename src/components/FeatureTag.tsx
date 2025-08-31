interface FeatureTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function FeatureTag({ children, className = "" }: FeatureTagProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 bg-brand-gold/20 px-4 py-2 md:px-5 md:py-2.5 rounded-full mb-4 md:mb-6 relative z-10 ${className}`}
    >
      <span className="text-brand-brown font-bold text-sm md:text-base drop-shadow-sm">
        {children}
      </span>
    </div>
  );
}
