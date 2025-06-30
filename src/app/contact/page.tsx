"use client";

import { useState } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Button } from "@ui-kit/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    contactMethod: "email",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  return (
    <main className="min-h-screen">
      <Header />

      <div className="bg-gradient-to-br from-brand-light via-white to-brand-gold/5">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-amber/5"></div>
          <div className="absolute top-10 right-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-brand-amber/30 rounded-full blur-xl animate-bounce"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-brand-gold/20 px-6 py-2 rounded-full mb-6">
                <span className="text-brand-brown font-semibold">💬 Let's Connect</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 tracking-wide">
                Contact Us
              </h1>

              <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                We'd love to hear from you! Whether you have questions, need a quote, or want to
                discuss your gifting needs, we're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Choose the way that works best for you. We're here to help you create meaningful
                gifting experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-brand-gold/10 to-brand-amber/10 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-brand-gold/20">
                <div className="w-16 h-16 bg-brand-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our team</p>
                <div className="text-lg font-semibold text-brand-brown">+91 98765 43210</div>
                <div className="text-sm text-gray-500 mt-2">Mon-Fri: 9AM-6PM</div>
              </div>

              <div className="bg-gradient-to-br from-brand-amber/10 to-brand-brown/10 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-brand-amber/20">
                <div className="w-16 h-16 bg-brand-amber rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us a detailed message</p>
                <div className="text-lg font-semibold text-brand-brown">hello@shubhampers.com</div>
                <div className="text-sm text-gray-500 mt-2">We reply within 24 hours</div>
              </div>

              <div className="bg-gradient-to-br from-brand-brown/10 to-brand-gold/10 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-brand-brown/20">
                <div className="w-16 h-16 bg-brand-brown rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Live Chat</h3>
                <p className="text-gray-600 mb-4">Instant support and answers</p>
                <div className="text-lg font-semibold text-brand-brown">Available Now</div>
                <div className="text-sm text-gray-500 mt-2">24/7 customer support</div>
              </div>

              <div className="bg-gradient-to-br from-brand-gold/10 to-brand-amber/10 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-brand-gold/20">
                <div className="w-16 h-16 bg-brand-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Visit Us</h3>
                <p className="text-gray-600 mb-4">Meet us in person</p>
                <div className="text-lg font-semibold text-brand-brown">Mumbai, India</div>
                <div className="text-sm text-gray-500 mt-2">By appointment only</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gradient-to-br from-brand-light/30 to-brand-gold/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
                  Send Us a Message
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Tell us about your gifting needs, and we'll get back to you with personalized
                  solutions. We love hearing about your ideas and helping you create meaningful
                  experiences.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Whether it's for corporate events, personal celebrations, or special occasions,
                  we're here to make your gifting journey special.
                </p>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-brand-gold/20">
                  <h3 className="text-xl font-bold text-brand-dark mb-4">Why Choose Us?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">Personal attention to every client</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">Custom solutions for your needs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">Quality products and service</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">Ongoing support throughout</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-brand-gold/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-brand-dark mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-brand-dark mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-brand-dark mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold text-brand-dark mb-2"
                      >
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contactMethod"
                      className="block text-sm font-semibold text-brand-dark mb-2"
                    >
                      Preferred Contact Method
                    </label>
                    <select
                      id="contactMethod"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone Call</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-brand-dark mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your gifting needs, occasion, budget, or any questions you have..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-amber to-brand-gold hover:from-brand-gold hover:to-brand-amber text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    💬 Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Quick answers to common questions about our services and process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-brand-gold/5 to-brand-amber/5 rounded-2xl p-6 border border-brand-gold/20">
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  How quickly can you deliver?
                </h3>
                <p className="text-gray-600">
                  We offer flexible delivery options from same-day to scheduled delivery. Standard
                  delivery takes 3-5 business days across India.
                </p>
              </div>

              <div className="bg-gradient-to-br from-brand-amber/5 to-brand-brown/5 rounded-2xl p-6 border border-brand-amber/20">
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  Do you offer custom branding?
                </h3>
                <p className="text-gray-600">
                  Yes! We can add your company logo, custom messages, and personalized packaging to
                  make your gifts truly special.
                </p>
              </div>

              <div className="bg-gradient-to-br from-brand-brown/5 to-brand-gold/5 rounded-2xl p-6 border border-brand-brown/20">
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  What's your minimum order?
                </h3>
                <p className="text-gray-600">
                  We work with orders of all sizes. For corporate clients, we offer special pricing
                  on bulk orders starting from 10 pieces.
                </p>
              </div>

              <div className="bg-gradient-to-br from-brand-gold/5 to-brand-amber/5 rounded-2xl p-6 border border-brand-gold/20">
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  Can you help with gifting strategy?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We love helping clients develop gifting strategies that align with
                  their goals and strengthen relationships.
                </p>
              </div>

              <div className="bg-gradient-to-br from-brand-amber/5 to-brand-brown/5 rounded-2xl p-6 border border-brand-amber/20">
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  What's included in your pricing?
                </h3>
                <p className="text-gray-600">
                  Our pricing includes the gift items, premium packaging, delivery, and basic
                  customization. Additional services like custom branding may have extra charges.
                </p>
              </div>

              <div className="bg-gradient-to-br from-brand-brown/5 to-brand-gold/5 rounded-2xl p-6 border border-brand-brown/20">
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  Do you ship internationally?
                </h3>
                <p className="text-gray-600">
                  Currently, we focus on domestic delivery across India. We're working on expanding
                  our international shipping capabilities.
                </p>
              </div>

              <div className="bg-gradient-to-br from-brand-gold/5 to-brand-amber/5 rounded-2xl p-6 border border-brand-gold/20">
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  What's your return policy?
                </h3>
                <p className="text-gray-600">
                  We offer a 30-day return policy for unused items in original packaging. Custom or
                  personalized items may have different return terms.
                </p>
              </div>

              <div className="bg-gradient-to-br from-brand-amber/5 to-brand-brown/5 rounded-2xl p-6 border border-brand-amber/20">
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  Can I schedule delivery for a specific date?
                </h3>
                <p className="text-gray-600">
                  Yes! We offer scheduled delivery for special occasions. Just let us know your
                  preferred delivery date when placing your order.
                </p>
              </div>

              <div className="bg-gradient-to-br from-brand-brown/5 to-brand-gold/5 rounded-2xl p-6 border border-brand-brown/20">
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  Do you offer corporate accounts?
                </h3>
                <p className="text-gray-600">
                  Yes! We provide dedicated corporate accounts with special pricing, bulk order
                  management, and dedicated support for business clients.
                </p>
              </div>

              <div className="bg-gradient-to-br from-brand-gold/5 to-brand-amber/5 rounded-2xl p-6 border border-brand-gold/20">
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept all major credit cards, UPI, net banking, and digital wallets. Corporate
                  clients can also opt for invoice-based payments.
                </p>
              </div>

              <div className="bg-gradient-to-br from-brand-amber/5 to-brand-brown/5 rounded-2xl p-6 border border-brand-amber/20">
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  Can you create custom gift hampers?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We love creating custom hampers tailored to your specific needs,
                  budget, and occasion. Just share your requirements with us.
                </p>
              </div>

              <div className="bg-gradient-to-br from-brand-brown/5 to-brand-gold/5 rounded-2xl p-6 border border-brand-brown/20">
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  How do you ensure gift quality?
                </h3>
                <p className="text-gray-600">
                  We carefully select each item from trusted suppliers and conduct quality checks
                  before packaging. We only work with premium brands and products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-brand-brown to-brand-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
                Ready to Start Your Gifting Journey?
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Let's work together to create meaningful gifting experiences that strengthen your
                relationships and make every moment special.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-brand-gold text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  📞 Call Now
                </Button>
                <Button className="bg-transparent text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-brand-gold hover:bg-brand-gold hover:text-brand-dark">
                  🎁 Explore Collections
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
