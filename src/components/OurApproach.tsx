import Link from "next/link";
import { Button } from "@ui-kit/button";

export default function OurApproach() {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='order-2 lg:order-1'>
            <div className='bg-gradient-to-br from-brand-amber/20 to-brand-gold/20 rounded-3xl p-8 shadow-xl'>
              <h3 className='text-2xl font-bold text-brand-dark mb-6'>How We Work</h3>
              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <div className='w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm'>
                    1
                  </div>
                  <div>
                    <h4 className='font-semibold text-brand-dark mb-1'>Understanding Your Needs</h4>
                    <p className='text-gray-600 text-sm'>
                      {`We take time to understand your goals, values, and the
                      relationships you want to strengthen.`}
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm'>
                    2
                  </div>
                  <div>
                    <h4 className='font-semibold text-brand-dark mb-1'>Thoughtful Curation</h4>
                    <p className='text-gray-600 text-sm'>
                      {`We carefully select items that align with your values
                      and create meaningful experiences.`}
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm'>
                    3
                  </div>
                  <div>
                    <h4 className='font-semibold text-brand-dark mb-1'>Personal Touch</h4>
                    <p className='text-gray-600 text-sm'>
                      {`We add personal touches and ensure every detail
                      reflects your care and appreciation.`}
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm'>
                    4
                  </div>
                  <div>
                    <h4 className='font-semibold text-brand-dark mb-1'>Ongoing Support</h4>
                    <p className='text-gray-600 text-sm'>
                      {`We're here to support you throughout your hamper
                      journey and help you succeed.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='order-1 lg:order-2'>
            <h2 className='font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6'>
              Our Approach
            </h2>
            <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
              {`We don't believe in one-size-fits-all solutions. Every client
              is unique, and every relationship deserves personalized
              attention. That's why we work closely with you to understand
              your specific needs and create hamper experiences that truly
              matter.`}
            </p>
            <p className='text-lg text-gray-700 mb-8 leading-relaxed'>
              {`From the initial consultation to the final delivery, we're
              with you every step of the way, ensuring that every hamper
              reflects your values and strengthens your relationships.`}
            </p>

            <Link href='/contact'>
              <Button className='bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'>
                💬 {"Let's Start Your Journey"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
