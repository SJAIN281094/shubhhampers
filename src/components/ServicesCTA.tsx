import Link from "next/link";
import { Button } from "@ui-kit/button";

export default function ServicesCTA() {
  return (
    <section className='py-20 bg-gradient-to-br from-brand-brown to-brand-dark text-white relative overflow-hidden'>
      <div className='absolute top-10 right-10 w-32 h-32 bg-brand-gold/15 rounded-full opacity-60' />
      <div className='absolute bottom-10 left-10 w-24 h-24 bg-brand-amber/20 rounded-full opacity-50' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center max-w-4xl mx-auto'>
          <h2 className='font-display text-4xl lg:text-5xl font-bold mb-6'>
            Ready to Strengthen Your Relationships?
          </h2>
          <p className='text-xl mb-8 leading-relaxed'>
            Let&apos;s work together to create service experiences that build lasting connections,
            strengthen business relationships, and achieve the meaningful impact you&apos;re
            seeking.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <Button className='bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200'>
                💬 Discuss Your Needs
              </Button>
            </Link>
            <Link href='/collections'>
              <Button className='bg-transparent text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-brand-gold hover:bg-brand-gold/20'>
                🎁 Explore Collections
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
