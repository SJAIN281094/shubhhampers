export default function QuickContact() {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='font-display text-3xl lg:text-4xl font-bold text-brand-dark mb-6'>
            Need Immediate Help?
          </h2>
          <p className='text-lg text-gray-700 mb-8 max-w-2xl mx-auto'>
            For urgent inquiries or immediate assistance, reach out to us directly.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='tel:+919685847274'
              className='inline-flex items-center gap-2 bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200'
            >
              📞 Call Now: +91 96858 47274
            </a>
            <a
              href='mailto:connect@shubhhampers.com'
              className='inline-flex items-center gap-2 bg-gradient-to-r from-brand-brown to-brand-dark hover:from-brand-dark hover:to-brand-brown text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200'
            >
              ✉️ Email: connect@shubhhampers.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
