import Link from "next/link";
import { Button } from "../ui-kit/button";

export default function OurApproachSection() {
  return (
    <section
      id='our-approach-section'
      className='py-20 bg-gradient-to-br from-brand-light via-brand-gold/20 to-brand-amber/10'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-12 md:mb-16'>
          <div className='inline-flex items-center gap-2 bg-brand-gold/20 px-4 py-2 md:px-6 md:py-2 rounded-full mb-4 md:mb-6'>
            <span className='text-brand-brown font-semibold text-sm md:text-base'>
              ✨ Our Fresh Approach
            </span>
          </div>
          <h2 className='font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-brown mb-4 md:mb-6 tracking-wide'>
            Hampers with Heart & Purpose
          </h2>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-brand-dark max-w-4xl mx-auto leading-relaxed px-4 md:px-0'>
            We believe every hamper should tell a story. Our approach combines thoughtful curation,
            personal consultation, and genuine care to create experiences that strengthen
            relationships and create lasting memories.
          </p>
        </div>

        {/* Approach Values Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16'>
          <div className='bg-white/60 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300'>
            <div className='text-3xl md:text-4xl mb-4'>💝</div>
            <h3 className='text-lg md:text-xl font-bold text-brand-dark mb-3'>
              Relationship-Focused
            </h3>
            <p className='text-brand-dark'>
              Every hamper is designed to strengthen connections and create meaningful moments
              between people.
            </p>
          </div>

          <div className='bg-white/60 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300'>
            <div className='text-3xl md:text-4xl mb-4'>🤝</div>
            <h3 className='text-lg md:text-xl font-bold text-brand-dark mb-3'>Personal Touch</h3>
            <p className='text-brand-dark'>
              We take time to understand your needs and customize every aspect to make it uniquely
              yours.
            </p>
          </div>

          <div className='bg-white/60 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300'>
            <div className='text-3xl md:text-4xl mb-4'>✨</div>
            <h3 className='text-lg md:text-xl font-bold text-brand-dark mb-3'>Quality First</h3>
            <p className='text-brand-dark'>
              Premium products, beautiful presentation, and attention to detail in everything we do.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className='bg-white/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-brand-gold/20'>
          <div className='text-center mb-8 md:mb-12'>
            <h3 className='font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6'>
              Why Choose Shubhhampers?
            </h3>
            <p className='text-sm sm:text-base md:text-lg text-brand-dark max-w-3xl mx-auto'>
              {`We're not just about beautiful hampers – we're about creating experiences that bring
              people closer together and make every moment special.`}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12'>
            <div className='text-left'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-8 h-8 bg-brand-brown rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm'>✓</span>
                </div>
                <h4 className='text-lg font-semibold text-brand-dark'>Direct Communication</h4>
              </div>
              <p className='text-brand-dark ml-11'>
                No middlemen or call centers. You talk directly with us, ensuring your vision
                becomes reality.
              </p>
            </div>

            <div className='text-left'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-8 h-8 bg-brand-brown rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm'>✓</span>
                </div>
                <h4 className='text-lg font-semibold text-brand-dark'>Transparent Pricing</h4>
              </div>
              <p className='text-brand-dark ml-11'>
                Clear, upfront pricing with no hidden costs. You know exactly what you&apos;re
                getting and what it costs.
              </p>
            </div>

            <div className='text-left'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-8 h-8 bg-brand-brown rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm'>✓</span>
                </div>
                <h4 className='text-lg font-semibold text-brand-dark'>Quick Turnaround</h4>
              </div>
              <p className='text-brand-dark ml-11'>
                Fast, efficient service without compromising on quality. We understand your
                timelines matter.
              </p>
            </div>

            <div className='text-left'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-8 h-8 bg-brand-brown rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm'>✓</span>
                </div>
                <h4 className='text-lg font-semibold text-brand-dark'>Cultural Sensitivity</h4>
              </div>
              <p className='text-brand-dark ml-11'>
                We understand and honor traditions while adding modern touches that make each moment
                special.
              </p>
            </div>

            <div className='text-left'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-8 h-8 bg-brand-brown rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm'>✓</span>
                </div>
                <h4 className='text-lg font-semibold text-brand-dark'>Flexible & Responsive</h4>
              </div>
              <p className='text-brand-dark ml-11'>
                Last-minute changes? Special requests? We adapt to your needs with grace and
                efficiency.
              </p>
            </div>
          </div>

          <Link href='/about'>
            <Button className='bg-brand-brown text-brand-light font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base'>
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
