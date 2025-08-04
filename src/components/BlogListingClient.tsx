"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaTag, FaUser, FaSearch } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import FeatureTag from "./FeatureTag";
import { getAllPublishedPosts, BLOG_CATEGORIES } from "@/lib/blogs-data";

export default function BlogListingClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const allPosts = getAllPublishedPosts();

  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    // Filter by category
    if (selectedCategory !== "all") {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        post =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return posts;
  }, [allPosts, selectedCategory, searchQuery]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const getCategoryInfo = (categoryId: string) => {
    return BLOG_CATEGORIES.find(cat => cat.id === categoryId);
  };

  return (
    <section className='py-16 bg-gradient-to-br from-brand-light/30 to-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <FeatureTag>📝 Our Blogs</FeatureTag>

          <h1 className='font-display text-4xl sm:text-5xl md:text-6xl font-bold text-brand-brown mb-6 leading-tight'>
            Insights & Inspiration
          </h1>

          <p className='text-lg text-gray-700 max-w-3xl mx-auto mb-8'>
            Discover expert tips for thoughtful gifting, creative hamper ideas, celebration guides,
            and insights into building meaningful relationships through the art of giving.
          </p>
        </div>

        {/* Search & Filters */}
        <div className='mb-12'>
          <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>
            {/* Search Bar */}
            <div className='relative w-full lg:w-96'>
              <input
                type='text'
                placeholder='Search articles...'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className='w-full pl-12 pr-4 py-3 border border-brand-gold/30 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent bg-white/80 backdrop-blur-sm'
              />
              <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-brown/50 w-4 h-4' />
            </div>

            {/* Category Filters */}
            <div className='flex flex-wrap gap-3'>
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === "all"
                    ? "bg-brand-gold text-brand-dark shadow-md"
                    : "bg-white/80 text-brand-brown hover:bg-brand-gold/20 border border-brand-gold/20"
                }`}
              >
                All Posts
              </button>

              {BLOG_CATEGORIES.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-brand-gold text-brand-dark shadow-md"
                      : "bg-white/80 text-brand-brown hover:bg-brand-gold/20 border border-brand-gold/20"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className='mt-6 text-center'>
            <p className='text-brand-brown'>
              {filteredPosts.length === 0
                ? "No articles found matching your criteria"
                : `${filteredPosts.length} article${filteredPosts.length !== 1 ? "s" : ""} found`}
            </p>
          </div>
        </div>

        {/* Blogs Grid */}
        {filteredPosts.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredPosts.map((post, index) => {
              const categoryInfo = getCategoryInfo(post.category);

              return (
                <article
                  key={post.id}
                  className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden group'
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Featured Image */}
                  <div className='relative h-48 overflow-hidden'>
                    <Link href={`/blogs/${post.slug}`}>
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className='object-cover transition-transform duration-300 group-hover:scale-110'
                      />

                      {/* Category Badge */}
                      {categoryInfo && (
                        <div className='absolute top-4 left-4'>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${categoryInfo.color}`}
                          >
                            {categoryInfo.name}
                          </span>
                        </div>
                      )}

                      {/* Overlay */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                    </Link>
                  </div>

                  {/* Content */}
                  <div className='p-6'>
                    {/* Meta Information */}
                    <div className='flex items-center gap-4 text-xs text-gray-500 mb-3'>
                      <div className='flex items-center gap-1'>
                        <FaUser className='w-3 h-3' />
                        <span>{post.author}</span>
                      </div>

                      <div className='flex items-center gap-1'>
                        <FaCalendarAlt className='w-3 h-3' />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>

                      <div className='flex items-center gap-1'>
                        <FaClock className='w-3 h-3' />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>

                    {/* Title */}
                    <Link href={`/blogs/${post.slug}`}>
                      <h2 className='font-bold text-lg text-brand-dark mb-3 line-clamp-2 group-hover:text-brand-brown transition-colors duration-200'>
                        {post.title}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    <p className='text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3'>
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {post.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className='inline-flex items-center gap-1 px-2 py-1 bg-brand-gold/10 text-brand-brown rounded-full text-xs'
                        >
                          <FaTag className='w-2 h-2' />
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className='text-xs text-gray-500'>+{post.tags.length - 3} more</span>
                      )}
                    </div>

                    {/* Read More Button */}
                    <Link
                      href={`/blogs/${post.slug}`}
                      className='inline-flex items-center gap-2 text-brand-brown hover:text-brand-dark font-medium text-sm transition-colors duration-200 group'
                    >
                      <span>Read Article</span>
                      <IoArrowForward className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className='text-center py-16'>
            <div className='text-6xl mb-6'>📝</div>
            <h3 className='text-2xl font-bold text-brand-dark mb-4'>No Articles Found</h3>
            <p className='text-gray-600 mb-8 max-w-md mx-auto'>
              We couldn't find any articles matching your search criteria. Try adjusting your
              filters or search terms.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className='bg-brand-gold text-brand-dark font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105'
            >
              View All Articles
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className='mt-20 text-center bg-gradient-to-r from-brand-gold/20 to-brand-amber/20 rounded-3xl p-8 md:p-12'>
          <h2 className='font-display text-2xl md:text-3xl font-bold text-brand-dark mb-4'>
            Get Inspired for Your Next Celebration
          </h2>
          <p className='text-gray-700 text-lg mb-6 max-w-2xl mx-auto'>
            Ready to create meaningful connections through thoughtful gifting? Let our experts help
            you curate the perfect hamper for any occasion.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='inline-flex items-center justify-center bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105'
            >
              Start Your Custom Hamper
            </Link>
            <Link
              href='/hampers'
              className='inline-flex items-center justify-center gap-2 bg-white/80 text-brand-dark font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 border border-brand-gold/30'
            >
              Browse Our Collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
