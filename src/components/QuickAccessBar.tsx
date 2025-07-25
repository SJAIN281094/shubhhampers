"use client";

import { useRouter } from "next/navigation";
import { handleWhatsApp, handleEmail } from "../lib/contact-utils";

export default function QuickAccessBar() {
  const router = useRouter();

  const handleQuickQuote = () => {
    router.push("/contact?type=quick-quote");
  };

  return (
    <>
      {/* Desktop Quick Access Bar */}
      <div className='bg-gradient-to-r from-brand-brown to-brand-dark text-white py-2 px-4 hidden lg:block'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between text-sm'>
            {/* Left Side - Contact Info */}
            <div className='flex items-center space-x-6'>
              <div className='flex items-center space-x-2'>
                <svg
                  className='w-4 h-4 text-brand-gold'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                <button
                  onClick={() => handleWhatsApp()}
                  className='hover:text-brand-gold transition-colors duration-200 font-medium'
                >
                  +91 96858 47274
                </button>
              </div>

              <div className='w-px h-4 bg-brand-gold/30' />

              <div className='flex items-center space-x-2'>
                <svg
                  className='w-4 h-4 text-brand-gold'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <button
                  onClick={handleEmail}
                  className='hover:text-brand-gold transition-colors duration-200'
                >
                  connect@shubhhampers.com
                </button>
              </div>

              <div className='w-px h-4 bg-brand-gold/30' />

              <div className='flex items-center space-x-2'>
                <svg
                  className='w-4 h-4 text-brand-gold'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <span className='text-brand-light/90'>Mon-Sat: 9AM-7PM IST</span>
              </div>
            </div>

            {/* Right Side - Quick Actions */}
            <div className='flex items-center space-x-4'>
              <button
                onClick={handleQuickQuote}
                className='flex items-center space-x-1 bg-brand-gold/20 hover:bg-brand-gold/30 px-3 py-1 rounded-full transition-all duration-200 hover:scale-105'
              >
                <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
                <span className='text-xs font-medium'>Quick Quote</span>
              </button>

              <button
                onClick={() => handleWhatsApp()}
                className='flex items-center space-x-1 bg-green-600/20 hover:bg-green-600/30 px-3 py-1 rounded-full transition-all duration-200 hover:scale-105'
              >
                <svg className='w-3 h-3' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.587z' />
                </svg>
                <span className='text-xs font-medium'>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Quick Access Bar */}
      <div className='bg-gradient-to-r from-brand-brown to-brand-dark text-white py-2 px-4 lg:hidden'>
        <div className='flex items-center justify-between text-xs'>
          <div className='flex items-center space-x-3'>
            <button
              onClick={() => handleWhatsApp()}
              className='flex items-center space-x-1 hover:text-green-400 transition-colors'
            >
              <svg className='w-3 h-3' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.587z' />
              </svg>
              <span>WhatsApp Now</span>
            </button>
          </div>

          <div className='flex items-center space-x-2'>
            <button
              onClick={handleQuickQuote}
              className='bg-brand-gold/20 px-2 py-1 rounded text-xs font-medium hover:bg-brand-gold/30 transition-colors'
            >
              Quote
            </button>
            <div className='flex items-center space-x-1'>
              <div className='w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse' />
              <span className='text-brand-light/90'>Online</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
