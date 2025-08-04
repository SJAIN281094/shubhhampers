import Link from "next/link";
import { Button } from "@ui-kit/button";

export default function AboutCTA() {
  return (
    <section className='py-20 bg-gradient-to-br from-brand-brown to-brand-dark text-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-4xl mx-auto'>
          <h2 className='font-display text-4xl lg:text-5xl font-bold mb-6'>
            Ready to Create Something Special?
          </h2>
          <p className='text-xl mb-8 leading-relaxed'>
            {`Let's work together to create magical hamper experiences that
            celebrate your special moments and make every occasion unforgettable.`}
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <Button className='bg-brand-gold text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200'>
                💬 Get in Touch
              </Button>
            </Link>
            <Link href='/hampers'>
              <Button className='bg-transparent text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-brand-gold hover:bg-brand-gold/20'>
                🎁 Explore Hampers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
