import Link from "next/link";

interface MarkdownRendererProps {
  content: string;
  title: string;
}

export default function MarkdownRenderer({ content, title }: MarkdownRendererProps) {
  // Simple markdown to HTML conversion
  const convertMarkdownToHTML = (markdown: string) => {
    return (
      markdown
        // Headers
        .replace(/^### (.*$)/gim, "<h3 class=text-xl font-bold text-brand-brown mb-4 mt-8>$1</h3>")
        .replace(/^## (.*$)/gim, "<h2 class=text-2xl font-bold text-brand-brown mb-6 mt-12>$1</h2>")
        .replace(/^# (.*$)/gim, "<h1 class=text-3xl font-bold text-brand-brown mb-8>$1</h1>")
        // Bold text
        .replace(/\*\*(.*?)\*\*/g, "<strong class=font-bold text-brand-dark>$1</strong>")
        // Lists
        .replace(/^- (.*$)/gim, "<li class=text-brand-dark mb-2 ml-4>$1</li>")
        .replace(/(<li.*<\/li>)/gim, "<ul class=list-disc mb-6>$1</ul>")
        // Paragraphs
        .replace(/^(?!<[h|u|li])(.*$)/gim, "<p class=text-brand-dark mb-4 leading-relaxed>$1</p>")
        // Clean up empty paragraphs
        .replace(/<p class="text-brand-dark mb-4 leading-relaxed"><\/p>/g, "")
        // Clean up list formatting
        .replace(/<ul class="list-disc mb-6">\s*<li/g, "<ul class=list-disc mb-6 ml-6><li")
        .replace(/<\/li>\s*<\/ul>/g, "</li></ul>")
    );
  };

  const htmlContent = convertMarkdownToHTML(content);

  return (
    <div className='min-h-screen bg-gradient-to-br from-brand-light via-brand-gold/10 to-brand-amber/5'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 bg-brand-gold/20 px-6 py-2 rounded-full mb-6'>
            <span className='text-brand-brown font-semibold'>📋 Legal & Policy</span>
          </div>
          <h1 className='font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-brown mb-6 tracking-wide'>
            {title}
          </h1>
        </div>

        {/* Content */}
        <div className='max-w-4xl mx-auto'>
          <div className='bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-brand-gold/20'>
            <div
              className='prose prose-lg max-w-none'
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Back to Home Button */}
            <div className='mt-12 text-center'>
              <Link
                href='/'
                className='inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
