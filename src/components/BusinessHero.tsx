import Link from "next/link";
import { Button } from "@ui-kit/button";

export default function BusinessHero() {
  return (
    <section className='relative py-20 overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-brand-gold/15 via-transparent to-brand-amber/10' />
      <div className='absolute top-10 right-10 w-40 h-40 bg-brand-gold/25 rounded-full blur-2xl animate-pulse' />
      <div className='absolute bottom-20 left-10 w-32 h-32 bg-brand-amber/30 rounded-full blur-xl animate-bounce' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center max-w-4xl mx-auto'>
          <div className='inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold/20 via-brand-light/30 to-brand-amber/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-brand-gold/20 shadow-lg'>
            <span className='text-brand-brown font-bold text-base md:text-lg'>🏢 For Business</span>
          </div>

          <h1 className='font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 tracking-wide'>
            Strengthen Business Relationships
          </h1>

          <p className='text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed'>
            Transform your business relationships through thoughtful hampers that show genuine
            appreciation, build lasting partnerships, and create the kind of workplace culture where
            people thrive and businesses grow.
          </p>

          <div className='bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-brand-gold/20 shadow-lg'>
            <p className='text-lg text-brand-brown font-medium italic mb-4'>
              "Every hamper is an investment in relationships that drive business success"
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact?service=business'>
                <Button className='bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
                  🏢 Start Your Business Journey
                </Button>
              </Link>
              <Link href='/collections?category=business'>
                <Button className='bg-white/90 backdrop-blur-sm text-brand-brown font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-gold/30 hover:bg-gradient-to-r hover:from-brand-gold hover:to-brand-amber hover:text-white transform hover:scale-105'>
                  💼 View Business Collections
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
