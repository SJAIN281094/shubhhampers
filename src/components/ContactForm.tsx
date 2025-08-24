"use client";

import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    contactMethod: "email"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours."
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          contactMethod: "email"
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again or contact us directly."
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='bg-white rounded-3xl p-8 shadow-lg border border-brand-gold/20'>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <div>
            <label htmlFor='name' className='block text-sm font-semibold text-brand-dark mb-2'>
              Full Name *
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              required
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors duration-200'
              placeholder='Your full name'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-semibold text-brand-dark mb-2'>
              Email Address *
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              required
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors duration-200'
              placeholder='your@email.com'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <div>
            <label htmlFor='phone' className='block text-sm font-semibold text-brand-dark mb-2'>
              Phone Number
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleInputChange}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors duration-200'
              placeholder='+91 96858 47274'
            />
          </div>
          <div>
            <label htmlFor='company' className='block text-sm font-semibold text-brand-dark mb-2'>
              Company (Optional)
            </label>
            <input
              type='text'
              id='company'
              name='company'
              value={formData.company}
              onChange={handleInputChange}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors duration-200'
              placeholder='Your company name'
            />
          </div>
        </div>

        <div>
          <label
            htmlFor='contactMethod'
            className='block text-sm font-semibold text-brand-dark mb-2'
          >
            Preferred Contact Method
          </label>
          <select
            id='contactMethod'
            name='contactMethod'
            value={formData.contactMethod}
            onChange={handleInputChange}
            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors duration-200'
          >
            <option value='email'>Email</option>
            <option value='whatsapp'>WhatsApp</option>
          </select>
        </div>

        <div>
          <label htmlFor='message' className='block text-sm font-semibold text-brand-dark mb-2'>
            Your Message *
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-colors duration-200 resize-none'
            placeholder='Tell us about your hamper needs, occasion, budget, or any questions you have...'
          />
        </div>

        {/* Success/Error Messages */}
        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg border-l-4 ${
              submitStatus.type === "success"
                ? "bg-green-50 border-green-400 text-green-700"
                : "bg-red-50 border-red-400 text-red-700"
            }`}
          >
            <div className='flex items-center'>
              <span className='mr-2'>{submitStatus.type === "success" ? "✅" : "❌"}</span>
              <p className='font-medium'>{submitStatus.message}</p>
            </div>
          </div>
        )}

        <PrimaryButton type='submit' disabled={isSubmitting} size='md' className='w-full'>
          {isSubmitting ? (
            <div className='flex items-center justify-center'>
              <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2' />
              Sending Message...
            </div>
          ) : (
            "💬 Send Message"
          )}
        </PrimaryButton>
      </form>
    </div>
  );
}
