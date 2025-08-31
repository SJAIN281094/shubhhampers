"use client";

import { useState } from "react";
import { Button } from "@ui-kit/button";
import CatalogueModal from "./CatalogueModal";
import CatalogueHero from "./CatalogueHero";
import CTASection from "./CTASection";

interface CatalogueViewPageProps {
  catalogueUrl?: string;
}

export default function CatalogueViewPage({ catalogueUrl }: CatalogueViewPageProps) {
  const [isCatalogueModalOpen, setIsCatalogueModalOpen] = useState(false);

  return (
    <>
      {/* Header Section */}
      <CatalogueHero onDownloadClick={() => setIsCatalogueModalOpen(true)} />

      {/* PDF Viewer Section - Only show if catalogue URL is available */}
      {catalogueUrl && (
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* PDF Viewer */}
              <div className="bg-white rounded-2xl shadow-2xl border border-brand-gold/20 overflow-hidden">
                <div className="bg-gradient-to-r from-brand-gold/10 to-brand-amber/10 px-6 py-4 border-b border-brand-gold/20">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-brand-dark flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-brand-brown"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Shubhhampers Catalogue
                    </h2>
                    <Button
                      onClick={() => setIsCatalogueModalOpen(true)}
                      className="px-4 py-2 bg-brand-brown text-white font-medium rounded-lg hover:bg-brand-dark transition-colors"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download
                    </Button>
                  </div>
                </div>

                {/* PDF Embed */}
                <div className="relative w-full h-[800px] lg:h-[1000px]">
                  <iframe
                    src={`${catalogueUrl}#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH`}
                    className="w-full h-full border-0"
                    title="Shubhhampers Catalogue PDF"
                    loading="lazy"
                  />

                  {/* Fallback for browsers that don't support PDF embed */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-600 hidden [&:has(iframe:not([src]))]:flex">
                    <div className="text-center">
                      <svg
                        className="w-16 h-16 mx-auto mb-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <h3 className="text-lg font-semibold mb-2">PDF Viewer Not Available</h3>
                      <p className="mb-4">Your browser doesn&apos;t support embedded PDFs.</p>
                      <Button
                        onClick={() => setIsCatalogueModalOpen(true)}
                        className="px-6 py-3 bg-brand-brown text-white font-medium rounded-lg hover:bg-brand-dark transition-colors"
                      >
                        Download Catalogue Instead
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info Section */}
              <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-brand-gold/20">
                  <div className="text-3xl mb-4">🏢</div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Corporate Hampers</h3>
                  <p className="text-gray-600 text-sm">
                    Professional hampers designed to strengthen business relationships and show
                    appreciation to clients and employees.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-brand-gold/20">
                  <div className="text-3xl mb-4">💒</div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">
                    Wedding Collections
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Elegant hampers for wedding celebrations, from bridal gifts to guest
                    appreciation hampers.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-brand-gold/20">
                  <div className="text-3xl mb-4">🎆</div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Festival Specials</h3>
                  <p className="text-gray-600 text-sm">
                    Traditional and modern hampers for Diwali, Holi, Raksha Bandhan, and other
                    festive occasions.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12">
                <CTASection
                  title="Ready to Create Something Special?"
                  description="Let's work together to create magical hamper experiences that celebrate your special moments and make every occasion unforgettable."
                  primaryButtonText="Download Full Catalogue"
                  primaryButtonAction={() => setIsCatalogueModalOpen(true)}
                  secondaryButtonText="Get Custom Quote"
                  secondaryButtonHref="/contact"
                  theme="light"
                  className="rounded-2xl border border-brand-gold/20"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Additional Info Section - Always show */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-brand-gold/20">
                <div className="text-3xl mb-4">🏢</div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">Corporate Hampers</h3>
                <p className="text-gray-600 text-sm">
                  Professional hampers designed to strengthen business relationships and show
                  appreciation to clients and employees.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-brand-gold/20">
                <div className="text-3xl mb-4">💒</div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">Wedding Collections</h3>
                <p className="text-gray-600 text-sm">
                  Elegant hampers for wedding celebrations, from bridal gifts to guest appreciation
                  hampers.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-brand-gold/20">
                <div className="text-3xl mb-4">🎆</div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">Festival Specials</h3>
                <p className="text-gray-600 text-sm">
                  Traditional and modern hampers for Diwali, Holi, Raksha Bandhan, and other festive
                  occasions.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12">
              <CTASection
                title="Ready to Create Something Special?"
                description="Let's work together to create magical hamper experiences that celebrate your special moments and make every occasion unforgettable."
                primaryButtonText="Download Full Catalogue"
                primaryButtonAction={() => setIsCatalogueModalOpen(true)}
                secondaryButtonText="Get Custom Quote"
                secondaryButtonHref="/contact"
                theme="light"
                className="rounded-2xl border border-brand-gold/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue Modal */}
      <CatalogueModal
        isOpen={isCatalogueModalOpen}
        onClose={() => setIsCatalogueModalOpen(false)}
      />
    </>
  );
}
