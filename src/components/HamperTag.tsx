interface HamperTagProps {
  title: string;
  className?: string;
}

export default function HamperTag({ title, className = "" }: HamperTagProps) {
  return (
    <div className={`relative group h-full ${className}`}>
      <div className='relative bg-gradient-to-r from-white via-brand-light/95 to-white backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-brand-gold/30 shadow-xl min-w-fit h-full min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center'>
        {/* Golden accent line */}
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent rounded-full' />

        {/* Tag Title */}
        <span className='text-brand-dark font-bold text-[10px] xs:text-xs sm:text-sm md:text-base text-center tracking-wide leading-tight whitespace-nowrap'>
          {title}
        </span>

        {/* Bottom golden accent line */}
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-0.5 bg-gradient-to-r from-transparent via-brand-amber to-transparent rounded-full' />
      </div>
    </div>
  );
}
