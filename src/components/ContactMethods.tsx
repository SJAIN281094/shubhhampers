import SectionHeader from "./ui/SectionHeader";

export default function ContactMethods() {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeader
          title='Get in Touch'
          description="Choose the way that works best for you. We're here to help you create meaningful hamper experiences."
          variant='center'
          size='lg'
          className='mb-16'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='bg-gradient-to-br from-brand-gold/10 to-brand-amber/10 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-200 border border-brand-gold/20'>
            <div className='w-16 h-16 bg-brand-gold rounded-full mx-auto mb-6 flex items-center justify-center'>
              <span className='text-2xl'>📞</span>
            </div>
            <h3 className='text-xl font-bold text-brand-dark mb-3'>Call Us</h3>
            <p className='text-gray-600 mb-4'>Speak directly with our team</p>
            <div className='text-lg font-semibold text-brand-brown'>+91 96858 47274</div>
            <div className='text-sm text-gray-500 mt-2'>Mon-Fri: 9AM-6PM</div>
          </div>

          <div className='bg-gradient-to-br from-brand-amber/10 to-brand-brown/10 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-200 border border-brand-amber/20'>
            <div className='w-16 h-16 bg-brand-amber rounded-full mx-auto mb-6 flex items-center justify-center'>
              <span className='text-2xl'>✉️</span>
            </div>
            <h3 className='text-xl font-bold text-brand-dark mb-3'>Email Us</h3>
            <p className='text-gray-600 mb-4'>Send us a detailed message</p>
            <div className='text-lg font-semibold text-brand-brown'>connect@shubhhampers.com</div>
            <div className='text-sm text-gray-500 mt-2'>We reply within 24 hours</div>
          </div>

          <div className='bg-gradient-to-br from-brand-brown/10 to-brand-gold/10 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-200 border border-brand-brown/20'>
            <div className='w-16 h-16 bg-brand-brown rounded-full mx-auto mb-6 flex items-center justify-center'>
              <span className='text-2xl'>💬</span>
            </div>
            <h3 className='text-xl font-bold text-brand-dark mb-3'>Live Chat</h3>
            <p className='text-gray-600 mb-4'>Instant support and answers</p>
            <div className='text-sm text-gray-500 mt-2'>24/7 customer support</div>
          </div>

          <div className='bg-gradient-to-br from-brand-gold/10 to-brand-amber/10 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-200 border border-brand-gold/20'>
            <div className='w-16 h-16 bg-brand-gold rounded-full mx-auto mb-6 flex items-center justify-center'>
              <span className='text-2xl'>📍</span>
            </div>
            <h3 className='text-xl font-bold text-brand-dark mb-3'>Visit Us</h3>
            <p className='text-gray-600 mb-4'>Meet us in person</p>
            <div className='text-lg font-semibold text-brand-brown'>Faridabad, India</div>
            <div className='text-sm text-gray-500 mt-2'>By appointment only</div>
          </div>
        </div>
      </div>
    </section>
  );
}
