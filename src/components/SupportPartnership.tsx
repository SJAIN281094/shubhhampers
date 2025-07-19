import Link from "next/link";
import { Button } from "@ui-kit/button";

export default function SupportPartnership() {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6'>
              Ongoing Support & Partnership
            </h2>
            <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
              Great hamper programs evolve and improve over time. Our ongoing support ensures your
              hamper initiatives continue to create meaningful impact, adapt to changing needs, and
              maintain the quality that makes them special.
            </p>
            <p className='text-lg text-gray-700 mb-8 leading-relaxed'>
              We're invested in your success and the strength of your relationships. Whether you
              need program management, success tracking, or dedicated account support, we're here as
              your long-term partner.
            </p>

            <div className='space-y-4 mb-8'>
              <div className='flex items-center gap-4 p-4 bg-brand-gold/5 rounded-lg border border-brand-gold/20'>
                <div className='text-2xl'>📈</div>
                <div>
                  <h4 className='font-semibold text-brand-dark'>Program Management</h4>
                  <p className='text-sm text-gray-600'>
                    Continuous improvement and quality assurance
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-4 p-4 bg-brand-amber/5 rounded-lg border border-brand-amber/20'>
                <div className='text-2xl'>💪</div>
                <div>
                  <h4 className='font-semibold text-brand-dark'>Success Support</h4>
                  <p className='text-sm text-gray-600'>
                    Impact tracking and relationship optimization
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-4 p-4 bg-brand-brown/5 rounded-lg border border-brand-brown/20'>
                <div className='text-2xl'>🤗</div>
                <div>
                  <h4 className='font-semibold text-brand-dark'>Dedicated Support</h4>
                  <p className='text-sm text-gray-600'>
                    Personal specialist for ongoing partnership
                  </p>
                </div>
              </div>
            </div>

            <Link href='/contact?service=support'>
              <Button className='bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200'>
                🤝 Explore Partnership Options
              </Button>
            </Link>
          </div>

          <div className='relative'>
            <div className='bg-gradient-to-br from-brand-gold/20 to-brand-amber/20 rounded-3xl p-8 shadow-xl'>
              <div className='text-6xl mb-6 text-center'>🌟</div>
              <h3 className='text-2xl font-bold text-brand-dark mb-4 text-center'>
                Why Partner With Us?
              </h3>
              <p className='text-gray-700 leading-relaxed mb-6'>
                We believe in building lasting partnerships that grow stronger over time. Our
                ongoing support helps you maximize the impact of your hamper programs while
                continuously strengthening the relationships that matter most to your business.
              </p>
              <div className='bg-white/30 rounded-lg p-4 border border-brand-gold/20'>
                <p className='text-sm text-brand-brown font-medium italic text-center'>
                  "Your success in building meaningful relationships is our ultimate measure of
                  success"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
