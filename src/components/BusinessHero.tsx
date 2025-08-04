import Link from "next/link";
import { Button } from "@ui-kit/button";

export default function BusinessHero() {
  return (
    <section className='relative py-20 overflow-hidden'>
      <div className='absolute inset-0 bg-brand-gold/10' />
      <div className='absolute top-10 right-10 w-40 h-40 bg-brand-gold/20 rounded-full opacity-60' />
      <div className='absolute bottom-20 left-10 w-32 h-32 bg-brand-amber/25 rounded-full opacity-50' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center max-w-4xl mx-auto'>
          <div className='inline-flex items-center gap-2 bg-brand-gold/20 px-6 py-2 rounded-full mb-6 border border-brand-gold/20 shadow-md'>
            <span className='text-brand-brown font-bold text-base md:text-lg'>🏢 For Business</span>
          </div>

          <h1 className='font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 tracking-wide'>
            Corporate Gift Hampers & Business Relationships
          </h1>

          <p className='text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed'>
            Transform your business relationships through thoughtful hampers that show genuine
            appreciation, build lasting partnerships, and create the kind of workplace culture where
            people thrive and businesses grow.
          </p>

          <div className='bg-white/40 rounded-xl p-6 border border-brand-gold/20 shadow-md'>
            <p className='text-lg text-brand-brown font-medium italic mb-4'>
              &ldquo;Every hamper is an investment in relationships that drive business
              success&rdquo;
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact?service=business'>
                <Button className='bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200'>
                  🏢 Start Your Business Journey
                </Button>
              </Link>
              <Link href='/hampers/business-gift-hampers'>
                <Button className='bg-white/90 text-brand-brown font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-brand-gold/30 hover:bg-brand-gold/10'>
                  💼 View Business Hampers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
