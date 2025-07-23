import dynamic from "next/dynamic";

// Dynamic import for the contact form component
const ContactForm = dynamic(() => import("./ContactForm"), {
  loading: () => (
    <div className='bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20'>
      <div className='space-y-6'>
        <div className='h-6 bg-brand-gold/20 rounded w-48 animate-pulse' />
        <div className='space-y-4'>
          <div className='h-12 bg-gray-100 rounded-lg animate-pulse' />
          <div className='h-12 bg-gray-100 rounded-lg animate-pulse' />
          <div className='h-12 bg-gray-100 rounded-lg animate-pulse' />
          <div className='h-24 bg-gray-100 rounded-lg animate-pulse' />
          <div className='h-12 bg-brand-amber/20 rounded-lg animate-pulse' />
        </div>
      </div>
    </div>
  )
});

export default function ContactFormSection() {
  return (
    <section className='py-20 bg-gradient-to-br from-brand-light/30 to-brand-gold/10'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          <div>
            <h2 className='font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6'>
              Send Us a Message
            </h2>
            <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
              {`Tell us about your hamper needs, and we'll get back to you
                with personalized solutions. We love hearing about your ideas
                and helping you create meaningful experiences.`}
            </p>
            <p className='text-lg text-gray-700 mb-8 leading-relaxed'>
              {`Whether it's for business events, personal celebrations, or
              special occasions, we're here to make your hamper journey
              special.`}
            </p>

            <div className='bg-white rounded-2xl p-6 shadow-lg border border-brand-gold/20'>
              <h3 className='text-xl font-bold text-brand-dark mb-4'>Why Choose Us?</h3>
              <div className='space-y-3'>
                <div className='flex items-center gap-3'>
                  <div className='w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center'>
                    <span className='text-white text-xs'>✓</span>
                  </div>
                  <span className='text-gray-700'>Personal attention to every client</span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center'>
                    <span className='text-white text-xs'>✓</span>
                  </div>
                  <span className='text-gray-700'>Custom solutions for your needs</span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center'>
                    <span className='text-white text-xs'>✓</span>
                  </div>
                  <span className='text-gray-700'>Quality products and service</span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center'>
                    <span className='text-white text-xs'>✓</span>
                  </div>
                  <span className='text-gray-700'>Ongoing support throughout</span>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
