import SectionHeader from "./ui/SectionHeader";
import PrimaryButton from "./PrimaryButton";

interface CatalogueHeroProps {
  onDownloadClick: () => void;
}

export default function CatalogueHero({ onDownloadClick }: CatalogueHeroProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-brand-gold/8" />
      <div className="absolute top-10 right-10 w-40 h-40 bg-brand-gold/15 rounded-full opacity-60" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-brand-amber/20 rounded-full opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          tag={{ emoji: "📋", text: "Our Collection" }}
          title="Explore Our Complete Hamper Catalogue"
          description="Browse through our curated collection of thoughtfully crafted hampers designed for every occasion and relationship. From corporate appreciation to wedding celebrations, discover the perfect hamper for your needs."
          variant="center"
          size="lg"
          showDecorations={false}
        >
          {/* Download CTA */}
          <div className="flex justify-center mt-8">
            <PrimaryButton onClick={onDownloadClick}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Catalogue
            </PrimaryButton>
          </div>
        </SectionHeader>
      </div>
    </section>
  );
}
