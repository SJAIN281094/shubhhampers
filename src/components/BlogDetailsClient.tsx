"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  FaCalendarAlt,
  FaClock,
  FaTag,
  FaUser,
  FaShare,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaArrowLeft,
  FaHeart
} from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import FeatureTag from "./FeatureTag";
import { BlogPost, getRelatedPosts, BLOG_CATEGORIES } from "@/lib/blogs-data";

interface BlogDetailsClientProps {
  post: BlogPost;
}

export default function BlogDetailsClient({ post }: BlogDetailsClientProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [shareDropdownOpen, setShareDropdownOpen] = useState(false);

  const relatedPosts = getRelatedPosts(post.slug);
  const categoryInfo = BLOG_CATEGORIES.find(cat => cat.id === post.category);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const handleShare = (platform: string) => {
    const url = `${window.location.origin}/blogs/${post.slug}`;
    const text = `${post.title} - ${post.excerpt}`;

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`
    };

    if (shareUrls[platform as keyof typeof shareUrls]) {
      window.open(shareUrls[platform as keyof typeof shareUrls], "_blank", "width=600,height=400");
    }

    setShareDropdownOpen(false);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    // Here you could add analytics tracking or API call
  };

  return (
    <div className='bg-gradient-to-br from-brand-light/30 to-white'>
      {/* Back Navigation */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-8'>
        <Link
          href='/blogs'
          className='inline-flex items-center gap-2 text-brand-brown hover:text-brand-dark transition-colors duration-200 mb-8'
        >
          <FaArrowLeft className='w-4 h-4' />
          <span>Back to Blogs</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className='relative overflow-hidden'>
        {/* Featured Image */}
        <div className='relative h-64 md:h-96 lg:h-[500px]'>
          <Image src={post.featuredImage} alt={post.title} fill className='object-cover' priority />
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />

          {/* Content Overlay */}
          <div className='absolute inset-0 flex items-end'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 pb-12'>
              <div className='max-w-4xl'>
                {/* Category Badge */}
                {categoryInfo && (
                  <div className='mb-4'>
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${categoryInfo.color} bg-white/90 backdrop-blur-sm`}
                    >
                      {categoryInfo.name}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h1 className='font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight'>
                  {post.title}
                </h1>

                {/* Meta Information */}
                <div className='flex flex-wrap items-center gap-6 text-white/90 text-sm'>
                  <div className='flex items-center gap-2'>
                    <FaUser className='w-4 h-4' />
                    <span>{post.author}</span>
                  </div>

                  <div className='flex items-center gap-2'>
                    <FaCalendarAlt className='w-4 h-4' />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>

                  <div className='flex items-center gap-2'>
                    <FaClock className='w-4 h-4' />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='max-w-4xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
            {/* Main Content */}
            <div className='lg:col-span-3'>
              {/* Excerpt */}
              <div className='bg-brand-gold/10 border-l-4 border-brand-gold p-6 rounded-r-lg mb-8'>
                <p className='text-lg text-brand-dark leading-relaxed font-medium'>
                  {post.excerpt}
                </p>
              </div>

              {/* Article Content - Markdown */}
              <div className='prose prose-lg max-w-none'>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <h1 className='font-display text-3xl md:text-4xl font-bold text-brand-brown mb-6 leading-tight border-b-2 border-brand-gold/30 pb-4'>
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className='font-display text-2xl md:text-3xl font-bold text-brand-brown mb-4 mt-8 leading-tight'>
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className='font-display text-xl md:text-2xl font-semibold text-brand-brown mb-3 mt-6'>
                        {children}
                      </h3>
                    ),
                    h4: ({ children }) => (
                      <h4 className='font-semibold text-lg text-brand-brown mb-2 mt-4'>
                        {children}
                      </h4>
                    ),
                    p: ({ children }) => (
                      <p className='text-gray-700 leading-relaxed mb-4 text-base'>{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className='list-disc list-inside text-gray-700 mb-4 space-y-2'>
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className='list-decimal list-inside text-gray-700 mb-4 space-y-2'>
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className='text-gray-700 leading-relaxed'>{children}</li>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className='border-l-4 border-brand-gold bg-brand-gold/5 pl-6 py-4 my-6 italic text-brand-brown'>
                        {children}
                      </blockquote>
                    ),
                    strong: ({ children }) => (
                      <strong className='font-semibold text-brand-dark'>{children}</strong>
                    ),
                    a: ({ children, href }) => (
                      <a
                        href={href}
                        className='text-brand-brown hover:text-brand-dark font-medium underline decoration-brand-gold/50 hover:decoration-brand-gold transition-colors duration-200'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {children}
                      </a>
                    ),
                    code: ({ children }) => (
                      <code className='bg-gray-100 text-brand-dark px-2 py-1 rounded text-sm font-mono'>
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre className='bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4'>
                        {children}
                      </pre>
                    )
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Tags */}
              <div className='mt-12 pt-8 border-t border-brand-gold/20'>
                <h4 className='font-semibold text-brand-dark mb-4'>Tags:</h4>
                <div className='flex flex-wrap gap-3'>
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className='inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 text-brand-brown rounded-full text-sm hover:bg-brand-gold/20 transition-colors duration-200'
                    >
                      <FaTag className='w-3 h-3' />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author CTA */}
              <div className='mt-12 bg-gradient-to-r from-brand-gold/20 to-brand-amber/20 rounded-2xl p-8'>
                <h3 className='font-display text-2xl font-bold text-brand-dark mb-4'>
                  Ready to Create Your Perfect Hamper?
                </h3>
                <p className='text-gray-700 mb-6'>
                  Let our experts help you curate a thoughtful hamper that creates lasting memories
                  and strengthens relationships. Get started with a free consultation today.
                </p>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Link
                    href='/contact'
                    className='inline-flex items-center justify-center bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105'
                  >
                    Start Your Custom Hamper
                  </Link>
                  <Link
                    href='/hampers'
                    className='inline-flex items-center justify-center gap-2 bg-white/80 text-brand-dark font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 border border-brand-gold/30'
                  >
                    Browse Collections
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className='lg:col-span-1'>
              <div className='sticky top-8 space-y-8'>
                {/* Share & Like */}
                <div className='bg-white rounded-2xl p-6 shadow-lg border border-brand-gold/20'>
                  <h4 className='font-semibold text-brand-dark mb-4'>Share This Article</h4>

                  <div className='flex items-center gap-3 mb-4'>
                    <button
                      onClick={handleLike}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                        isLiked
                          ? "bg-red-100 text-red-600"
                          : "bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600"
                      }`}
                    >
                      <FaHeart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                      <span className='text-sm'>Like</span>
                    </button>

                    <div className='relative'>
                      <button
                        onClick={() => setShareDropdownOpen(!shareDropdownOpen)}
                        className='flex items-center gap-2 px-4 py-2 bg-brand-gold/10 text-brand-brown rounded-full hover:bg-brand-gold/20 transition-colors duration-200'
                      >
                        <FaShare className='w-4 h-4' />
                        <span className='text-sm'>Share</span>
                      </button>

                      {shareDropdownOpen && (
                        <div className='absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-brand-gold/20 p-2 z-10 min-w-[160px]'>
                          <button
                            onClick={() => handleShare("twitter")}
                            className='flex items-center gap-3 w-full px-3 py-2 text-left hover:bg-blue-50 rounded-lg transition-colors duration-200'
                          >
                            <FaTwitter className='w-4 h-4 text-blue-500' />
                            <span className='text-sm'>Twitter</span>
                          </button>
                          <button
                            onClick={() => handleShare("facebook")}
                            className='flex items-center gap-3 w-full px-3 py-2 text-left hover:bg-blue-50 rounded-lg transition-colors duration-200'
                          >
                            <FaFacebook className='w-4 h-4 text-blue-600' />
                            <span className='text-sm'>Facebook</span>
                          </button>
                          <button
                            onClick={() => handleShare("linkedin")}
                            className='flex items-center gap-3 w-full px-3 py-2 text-left hover:bg-blue-50 rounded-lg transition-colors duration-200'
                          >
                            <FaLinkedin className='w-4 h-4 text-blue-700' />
                            <span className='text-sm'>LinkedIn</span>
                          </button>
                          <button
                            onClick={() => handleShare("whatsapp")}
                            className='flex items-center gap-3 w-full px-3 py-2 text-left hover:bg-green-50 rounded-lg transition-colors duration-200'
                          >
                            <FaWhatsapp className='w-4 h-4 text-green-600' />
                            <span className='text-sm'>WhatsApp</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Table of Contents */}
                <div className='bg-white rounded-2xl p-6 shadow-lg border border-brand-gold/20'>
                  <h4 className='font-semibold text-brand-dark mb-4'>In This Article</h4>
                  <div className='space-y-2 text-sm'>
                    <p className='text-gray-600'>
                      This article covers essential insights for thoughtful hamper curation and
                      gifting strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className='bg-gradient-to-r from-brand-gold/10 to-brand-amber/10 py-16'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <FeatureTag>Related Articles</FeatureTag>
              <h2 className='font-display text-3xl font-bold text-brand-brown mt-4 mb-4'>
                Continue Reading
              </h2>
              <p className='text-gray-700'>
                Discover more insights and inspiration for thoughtful gifting
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {relatedPosts.map(relatedPost => {
                const relatedCategoryInfo = BLOG_CATEGORIES.find(
                  cat => cat.id === relatedPost.category
                );

                return (
                  <article
                    key={relatedPost.id}
                    className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden group'
                  >
                    <div className='relative h-48 overflow-hidden'>
                      <Link href={`/blogs/${relatedPost.slug}`}>
                        <Image
                          src={relatedPost.featuredImage}
                          alt={relatedPost.title}
                          fill
                          className='object-cover transition-transform duration-300 group-hover:scale-110'
                        />

                        {relatedCategoryInfo && (
                          <div className='absolute top-4 left-4'>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${relatedCategoryInfo.color}`}
                            >
                              {relatedCategoryInfo.name}
                            </span>
                          </div>
                        )}
                      </Link>
                    </div>

                    <div className='p-6'>
                      <div className='flex items-center gap-4 text-xs text-gray-500 mb-3'>
                        <span>{formatDate(relatedPost.publishedAt)}</span>
                        <span>{relatedPost.readTime} min</span>
                      </div>

                      <Link href={`/blogs/${relatedPost.slug}`}>
                        <h3 className='font-bold text-lg text-brand-dark mb-2 line-clamp-2 group-hover:text-brand-brown transition-colors duration-200'>
                          {relatedPost.title}
                        </h3>
                      </Link>

                      <p className='text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2'>
                        {relatedPost.excerpt}
                      </p>

                      <Link
                        href={`/blogs/${relatedPost.slug}`}
                        className='inline-flex items-center gap-2 text-brand-brown hover:text-brand-dark font-medium text-sm transition-colors duration-200 group'
                      >
                        <span>Read More</span>
                        <IoArrowForward className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
