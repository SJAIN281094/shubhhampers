"use client";

import { useState } from "react";
import { Button } from "@ui-kit/button";

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CatalogueModal({ isOpen, onClose }: CatalogueModalProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState<"email" | "phone">("email");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (contactMethod === "email" && !email.trim()) return;
    if (contactMethod === "phone" && !phone.trim()) return;

    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setEmail("");
    setPhone("");
    setContactMethod("email");
    setIsSubmitted(false);
    setIsLoading(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-2xl max-w-md w-full mx-4 shadow-2xl border border-brand-gold/20 relative overflow-hidden'>
        {/* Golden accent gradient */}
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold via-brand-amber to-brand-brown' />

        <div className='p-8'>
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className='text-center mb-6'>
                <div className='text-4xl mb-4'>📋</div>
                <h2 className='text-2xl font-bold text-brand-dark mb-2'>Access Our Catalogue</h2>
                <p className='text-gray-600'>
                  Enter your contact details to receive our complete hamper catalogue with pricing
                  and availability.
                </p>
              </div>

              {/* Contact Method Toggle */}
              <div className='flex bg-brand-light/20 rounded-lg p-1 mb-6'>
                <button
                  type='button'
                  onClick={() => setContactMethod("email")}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                    contactMethod === "email"
                      ? "bg-gradient-to-r from-brand-gold to-brand-amber text-white shadow-md"
                      : "text-brand-brown hover:text-brand-dark"
                  }`}
                >
                  📧 Email
                </button>
                <button
                  type='button'
                  onClick={() => setContactMethod("phone")}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                    contactMethod === "phone"
                      ? "bg-gradient-to-r from-brand-gold to-brand-amber text-white shadow-md"
                      : "text-brand-brown hover:text-brand-dark"
                  }`}
                >
                  💬 WhatsApp
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className='space-y-4'>
                {contactMethod === "email" ? (
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-brand-dark mb-2'
                    >
                      Email Address
                    </label>
                    <input
                      type='email'
                      id='email'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder='your.email@company.com'
                      className='w-full px-4 py-3 border border-brand-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all duration-200'
                      required
                    />
                  </div>
                ) : (
                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium text-brand-dark mb-2'
                    >
                      WhatsApp Number
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder='+91 98765 43210'
                      className='w-full px-4 py-3 border border-brand-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all duration-200'
                      required
                    />
                  </div>
                )}

                {/* Buttons */}
                <div className='flex gap-3 mt-6'>
                  <Button
                    type='button'
                    onClick={handleClose}
                    className='flex-1 bg-white text-brand-brown border border-brand-gold/30 hover:bg-brand-light/20 px-4 py-3 rounded-lg font-medium transition-all duration-200'
                  >
                    Cancel
                  </Button>
                  <Button
                    type='submit'
                    disabled={isLoading}
                    className='flex-1 bg-gradient-to-r from-brand-gold to-brand-amber text-white hover:from-brand-amber hover:to-brand-gold px-4 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50'
                  >
                    {isLoading ? (
                      <div className='flex items-center justify-center gap-2'>
                        <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                        Sending...
                      </div>
                    ) : (
                      "Send Catalogue"
                    )}
                  </Button>
                </div>
              </form>

              {/* Trust indicators */}
              <div className='mt-6 pt-4 border-t border-brand-gold/20'>
                <div className='flex items-center justify-center gap-4 text-xs text-gray-500'>
                  <div className='flex items-center gap-1'>
                    <span>🔒</span>
                    <span>Secure</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <span>📧</span>
                    <span>No Spam</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <span>⚡</span>
                    <span>Instant Access</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className='text-center'>
                <div className='text-5xl mb-4'>✅</div>
                <h2 className='text-2xl font-bold text-brand-dark mb-4'>
                  Catalogue Sent Successfully!
                </h2>
                <div className='bg-gradient-to-br from-brand-gold/10 to-brand-amber/10 rounded-xl p-6 border border-brand-gold/20 mb-6'>
                  <p className='text-gray-700 mb-3'>
                    We&apos;ve sent our complete hamper catalogue to:
                  </p>
                  <div className='bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-brand-gold/20'>
                    <p className='font-semibold text-brand-brown'>
                      {contactMethod === "email" ? <>📧 {email}</> : <>💬 {phone}</>}
                    </p>
                  </div>
                  <p className='text-sm text-gray-600 mt-3'>
                    Please check your{" "}
                    {contactMethod === "email" ? "inbox (and spam folder)" : "WhatsApp messages"}{" "}
                    for the catalogue with our latest hampers and pricing.
                  </p>
                </div>

                <div className='space-y-3'>
                  <Button
                    onClick={handleClose}
                    className='w-full bg-gradient-to-r from-brand-gold to-brand-amber text-white hover:from-brand-amber hover:to-brand-gold px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200'
                  >
                    Continue Browsing
                  </Button>

                  <div className='text-center'>
                    <p className='text-sm text-gray-600 mb-2'>Need immediate assistance?</p>
                    <button
                      onClick={() => window.open("https://wa.me/919685847274", "_blank")}
                      className='text-brand-brown hover:text-brand-dark font-medium text-sm border-b border-brand-gold/30 hover:border-brand-gold transition-colors'
                    >
                      💬 WhatsApp us at +91 96858 47274
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className='absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center text-gray-500 hover:text-gray-700'
        >
          ✕
        </button>
      </div>
    </div>
  );
}
