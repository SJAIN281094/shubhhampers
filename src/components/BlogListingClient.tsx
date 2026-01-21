"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaSearch, FaTag } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

import SectionHeader from "./ui/SectionHeader";
import EmptyState, { EmptyStateVariants } from "./ui/EmptyState";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { fetchBlogPosts } from "@/lib/blog-api";
import { BlogPost } from "@/lib/blog-api-types";

export default function BlogListingClient() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const result = await fetchBlogPosts();
        setPosts(result.posts);
        setError(null);
      } catch (err) {
        console.error("Failed to load blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        post =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          (post.tags &&
            Array.isArray(post.tags) &&
            post.tags.some(tag => tag.name.toLowerCase().includes(query)))
      );
    }

    return filtered;
  }, [posts, searchQuery]);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return "";
      }
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    } catch {
      return "";
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-brand-light/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag={{ emoji: "📝", text: "Our Blogs" }}
            title="Insights & Inspiration"
            description="Discover expert tips for thoughtful gifting, creative hamper ideas, celebration guides,
              and insights into building meaningful relationships through the art of giving."
            variant="center"
            size="lg"
            className="mb-16"
          />
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-gold mx-auto" />
            <p className="mt-4 text-gray-600">Loading blog posts...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gradient-to-br from-brand-light/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag={{ emoji: "📝", text: "Our Blogs" }}
            title="Insights & Inspiration"
            description="Discover expert tips for thoughtful gifting, creative hamper ideas, celebration guides,
              and insights into building meaningful relationships through the art of giving."
            variant="center"
            size="lg"
            className="mb-16"
          />
          <div className="text-center py-20">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-brand-gold text-white rounded-lg hover:bg-brand-brown transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-brand-light/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          tag={{ emoji: "📝", text: "Our Blogs" }}
          title="Insights & Inspiration"
          description="Discover expert tips for thoughtful gifting, creative hamper ideas, celebration guides,
            and insights into building meaningful relationships through the art of giving."
          variant="center"
          size="lg"
          className="mb-16"
        />

        {/* Search & Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-brand-gold/30 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent bg-white/80 backdrop-blur-sm"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-brown/50 w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Blogs Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden group"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Featured Image */}
                <div className="relative h-48 overflow-hidden">
                  <Link href={`/blogs/${post.slug}`}>
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="w-3 h-3" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <FaClock className="w-3 h-3" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>

                  {/* Title */}
                  <Link href={`/blogs/${post.slug}`}>
                    <h2 className="font-bold text-lg text-brand-dark mb-3 line-clamp-2 group-hover:text-brand-brown transition-colors duration-200">
                      {post.title}
                    </h2>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  {post.tags && Array.isArray(post.tags) && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {post.tags.slice(0, 4).map((tag, index) => (
                        <span
                          key={`tag-${tag.slug}-${index}`}
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-gold/10 text-brand-brown rounded-full text-xs hover:bg-brand-gold/20 transition-colors duration-200"
                        >
                          <FaTag className="w-3 h-3" />
                          {tag.name}
                        </span>
                      ))}
                      {post.tags.length > 4 && (
                        <span className="text-brand-brown text-xs px-2 py-1.5">
                          +{post.tags.length - 4} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Read More Button */}
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-2 text-brand-brown hover:text-brand-dark font-medium text-sm transition-colors duration-200 group mt-4"
                  >
                    <span>Read Article</span>
                    <IoArrowForward className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <EmptyState
            icon={EmptyStateVariants.noArticles.icon}
            title={EmptyStateVariants.noArticles.title}
            description="We couldn't find any articles matching your search criteria. Try adjusting your filters or search terms."
            actions={[
              {
                label: "View All Articles",
                onClick: () => {
                  setSearchQuery("");
                },
                variant: "custom"
              }
            ]}
            className="py-16"
          />
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-brand-gold/20 to-brand-amber/20 rounded-3xl p-8 md:p-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Get Inspired for Your Next Celebration
          </h2>
          <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
            Ready to create meaningful connections through thoughtful gifting? Let our experts help
            you curate the perfect hamper for any occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <PrimaryButton size="sm">Start Your Custom Hamper</PrimaryButton>
            </Link>
            <Link href="/hampers">
              <SecondaryButton size="sm">Browse Our Collections</SecondaryButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
