"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui-kit/button";

export default function CTASection() {
  const router = useRouter();

  return (
    <section className='py-20 bg-gradient-to-br from-brand-brown via-brand-dark to-brand-brown relative overflow-hidden'>
      {/* Enhanced Decorative Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-br from-brand-dark/30 via-brand-brown/20 to-brand-dark/30' />

      {/* Authentic Floating Elements */}
      <div className='absolute top-10 left-10 w-40 h-40 bg-brand-gold/30 rounded-full blur-2xl animate-pulse' />
      <div className='absolute bottom-20 right-20 w-32 h-32 bg-brand-amber/40 rounded-full blur-xl animate-bounce' />
      <div className='absolute top-1/3 right-1/4 w-24 h-24 bg-brand-light/30 rounded-full blur-lg animate-pulse delay-300' />
      <div className='absolute bottom-1/3 left-1/4 w-20 h-20 bg-brand-gold/25 rounded-full blur-md animate-bounce delay-500' />

      {/* Modern Geometric Decorations */}
      <div className='absolute top-0 left-0 w-48 h-48'>
        <svg viewBox='0 0 192 192' className='w-full h-full'>
          <polygon
            points='96,16 128,64 176,64 144,96 176,128 128,128 96,176 64,128 16,128 48,96 16,64 64,64'
            fill='#F1DEA8'
            opacity='0.15'
            className='animate-spin'
            style={{ animationDuration: "30s" }}
          />
        </svg>
      </div>
      <div className='absolute bottom-0 right-0 w-40 h-40'>
        <svg viewBox='0 0 160 160' className='w-full h-full'>
          <circle
            cx='80'
            cy='80'
            r='60'
            fill='none'
            stroke='#E9C579'
            strokeWidth='3'
            opacity='0.2'
            className='animate-ping'
          />
          <circle cx='80' cy='80' r='40' fill='#E9C579' opacity='0.15' />
        </svg>
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center max-w-5xl mx-auto'>
          {/* Fresh Business Badge */}
          <div className='inline-flex items-center gap-2 bg-brand-gold/20 px-6 py-2 rounded-full mb-6'>
            <span className='text-brand-light font-semibold'>✨ Fresh Perspective on Gifting</span>
          </div>

          {/* Authentic Main Heading */}
          <h2 className='font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-light mb-6 tracking-wide'>
            Ready to Create Meaningful Connections?
          </h2>

          {/* Honest Description */}
          <p className='text-xl lg:text-2xl text-brand-gold mb-8 leading-relaxed max-w-4xl mx-auto'>
            {`We're passionate about helping you strengthen relationships through
            thoughtful gifting. Whether it's appreciating your team, celebrating
            with clients, or honoring traditions, we're here to make every gift
            moment special and meaningful.`}
          </p>

          {/* Authentic CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
            <Button
              size='lg'
              onClick={() => router.push("/collections")}
              className='bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber text-brand-dark font-bold px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105'
            >
              🎁 Explore Our Collections
            </Button>
            <Button
              size='lg'
              onClick={() => router.push("/contact")}
              className='bg-brand-dark hover:bg-brand-brown text-brand-light font-semibold px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-brand-gold/50 hover:scale-105'
            >
              💬 {"Let's Chat"}
            </Button>
            <Button
              size='lg'
              onClick={() => router.push("/collections")}
              className='bg-white/10 backdrop-blur-sm text-brand-light font-semibold px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-brand-gold/30 hover:bg-white/20 hover:scale-105'
            >
              🛒 Start Shopping
            </Button>
          </div>

          {/* Genuine Value Propositions */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-brand-gold/20 hover:bg-white/15 transition-all duration-300'>
              <div className='text-4xl mb-4'>💝</div>
              <h3 className='text-xl font-bold text-brand-light mb-2'>Thoughtful Curation</h3>
              <p className='text-brand-gold text-sm'>
                Every item is carefully selected to create meaningful, memorable experiences
              </p>
            </div>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-brand-gold/20 hover:bg-white/15 transition-all duration-300'>
              <div className='text-4xl mb-4'>🤝</div>
              <h3 className='text-xl font-bold text-brand-light mb-2'>Personal Touch</h3>
              <p className='text-brand-gold text-sm'>
                We work closely with you to understand your needs and create perfect solutions
              </p>
            </div>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-brand-gold/20 hover:bg-white/15 transition-all duration-300'>
              <div className='text-4xl mb-4'>✨</div>
              <h3 className='text-xl font-bold text-brand-light mb-2'>Quality Focus</h3>
              <p className='text-brand-gold text-sm'>
                Premium products that reflect your values and strengthen your relationships
              </p>
            </div>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-brand-gold/20 hover:bg-white/15 transition-all duration-300'>
              <div className='text-4xl mb-4'>🚀</div>
              <h3 className='text-xl font-bold text-brand-light mb-2'>Flexible Solutions</h3>
              <p className='text-brand-gold text-sm'>
                From small gestures to large celebrations, we adapt to your needs
              </p>
            </div>
          </div>

          {/* What Makes Us Different */}
          <div className='bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-brand-gold/20'>
            <h3 className='text-2xl font-bold text-brand-light mb-6'>Why Choose Shubhampers?</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='text-5xl mb-4'>🎯</div>
                <h4 className='text-lg font-semibold text-brand-light mb-2'>Fresh Approach</h4>
                <p className='text-brand-gold text-sm'>
                  We bring new perspectives to traditional gifting, making every moment special
                </p>
              </div>
              <div className='text-center'>
                <div className='text-5xl mb-4'>💫</div>
                <h4 className='text-lg font-semibold text-brand-light mb-2'>Personal Attention</h4>
                <p className='text-brand-gold text-sm'>
                  Direct communication and dedicated support for every client
                </p>
              </div>
              <div className='text-center'>
                <div className='text-5xl mb-4'>🌟</div>
                <h4 className='text-lg font-semibold text-brand-light mb-2'>Growing Together</h4>
                <p className='text-brand-gold text-sm'>
                  {`We're building lasting partnerships and learning from every
                  interaction`}
                </p>
              </div>
            </div>
          </div>

          {/* Final Authentic CTA */}
          <div className='mt-12'>
            <p className='text-lg text-brand-gold mb-6'>
              {`Ready to start your gifting journey? We'd love to hear from you
              and help create something special together.`}
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <Button
                onClick={() => router.push("/contact")}
                className='bg-brand-gold text-brand-dark font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
              >
                📧 Get in Touch
              </Button>
              <Button
                onClick={() => window.open("tel:+919876543210", "_self")}
                className='bg-transparent text-brand-light font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-brand-gold hover:bg-brand-gold hover:text-brand-dark hover:scale-105'
              >
                📞 Call Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
