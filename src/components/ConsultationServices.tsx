import Link from "next/link";
import { Button } from "@ui-kit/button";

export default function ConsultationServices() {
  return (
    <section className='py-20 bg-gradient-to-br from-brand-light/30 to-brand-gold/10'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6'>
            Strategic Consultation
          </h2>
          <p className='text-xl text-gray-700 max-w-3xl mx-auto'>
            Sometimes the most powerful hampers come from understanding exactly what you want to
            achieve. Our consultation services help you develop strategies that create meaningful
            emotional impact.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
          <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-shadow duration-200'>
            <div className='text-4xl mb-4'>💡</div>
            <h3 className='text-xl font-bold text-brand-dark mb-3'>Strategy Development</h3>
            <p className='text-gray-600'>
              Expert guidance to align your hamper initiatives with relationship goals and business
              objectives.
            </p>
          </div>

          <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-shadow duration-200'>
            <div className='text-4xl mb-4'>🗺️</div>
            <h3 className='text-xl font-bold text-brand-dark mb-3'>Relationship Mapping</h3>
            <p className='text-gray-600'>
              Understand your connection goals and create hamper experiences that deepen
              relationships.
            </p>
          </div>

          <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-shadow duration-200'>
            <div className='text-4xl mb-4'>🎨</div>
            <h3 className='text-xl font-bold text-brand-dark mb-3'>Culture Alignment</h3>
            <p className='text-gray-600'>
              Ensure every hamper reflects your organization's culture and communicates your values
              effectively.
            </p>
          </div>
        </div>

        <div className='text-center'>
          <p className='text-lg text-gray-700 mb-6 max-w-2xl mx-auto'>
            Our consultation process helps you create hamper programs that strengthen company
            culture, build lasting partnerships, and achieve the emotional impact you're seeking.
          </p>
          <Link href='/contact?service=consultation'>
            <Button className='bg-gradient-to-r from-brand-brown to-brand-gold hover:from-brand-gold hover:to-brand-brown text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200'>
              💬 Schedule Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
