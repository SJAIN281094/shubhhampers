export default function ContactHero() {
  return (
    <section className='relative py-20 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-brand-gold/8' />
      <div className='absolute top-10 right-10 w-40 h-40 bg-brand-gold/15 rounded-full opacity-60' />
      <div className='absolute bottom-20 left-10 w-32 h-32 bg-brand-amber/20 rounded-full opacity-50' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center max-w-4xl mx-auto'>
          <div className='inline-flex items-center gap-2 bg-brand-gold/20 px-6 py-2 rounded-full mb-6'>
            <span className='text-brand-brown font-semibold'>{"💬 Let's Connect"}</span>
          </div>

          <h1 className='font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 tracking-wide'>
            Contact Us
          </h1>

          <p className='text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed'>
            {`We'd love to hear from you! Whether you have questions, need a
            quote, or want to discuss your hamper needs, we're here to
            help.`}
          </p>
        </div>
      </div>
    </section>
  );
}
