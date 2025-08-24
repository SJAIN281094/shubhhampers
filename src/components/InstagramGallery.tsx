"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaPlay, FaExternalLinkAlt } from "react-icons/fa";
import { IoRefresh } from "react-icons/io5";

import SectionHeader from "./ui/SectionHeader";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

// Mock data structure - replace with real Instagram API data
interface InstagramPost {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

// Mock data for demonstration - replace with real API call
const MOCK_INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "1",
    media_type: "VIDEO",
    media_url: "https://placehold.co/600x800/E6B17A/FFFFFF?text=Reel+1",
    thumbnail_url: "https://placehold.co/600x800/E6B17A/FFFFFF?text=Reel+1",
    permalink: "https://instagram.com/p/example1",
    caption: "Beautiful Diwali hamper creation process ✨🎁 #hampers #diwali #gifts",
    timestamp: "2024-01-15T10:30:00Z",
    like_count: 245,
    comments_count: 12
  },
  {
    id: "2",
    media_type: "IMAGE",
    media_url: "https://placehold.co/400x600/D4AF37/FFFFFF?text=Photo+1",
    permalink: "https://instagram.com/p/example2",
    caption: "Wedding welcome hampers ready for delivery 💒 #wedding #hampers",
    timestamp: "2024-01-14T15:45:00Z",
    like_count: 189,
    comments_count: 8
  },
  {
    id: "3",
    media_type: "VIDEO",
    media_url: "https://placehold.co/600x900/8B4513/FFFFFF?text=Reel+2",
    thumbnail_url: "https://placehold.co/600x900/8B4513/FFFFFF?text=Reel+2",
    permalink: "https://instagram.com/p/example3",
    caption: "Behind the scenes: Packaging with love ❤️ #bts #packaging",
    timestamp: "2024-01-13T12:20:00Z",
    like_count: 312,
    comments_count: 18
  },
  {
    id: "4",
    media_type: "IMAGE",
    media_url: "https://placehold.co/500x700/F4A460/FFFFFF?text=Photo+2",
    permalink: "https://instagram.com/p/example4",
    caption: "Corporate hampers for client appreciation 🏢 #corporate #business",
    timestamp: "2024-01-12T09:15:00Z",
    like_count: 156,
    comments_count: 5
  },
  {
    id: "5",
    media_type: "VIDEO",
    media_url: "https://placehold.co/600x1000/DAA520/FFFFFF?text=Reel+3",
    thumbnail_url: "https://placehold.co/600x1000/DAA520/FFFFFF?text=Reel+3",
    permalink: "https://instagram.com/p/example5",
    caption: "Festival hamper unboxing experience 🎊 #festival #unboxing",
    timestamp: "2024-01-11T18:30:00Z",
    like_count: 427,
    comments_count: 23
  },
  {
    id: "6",
    media_type: "IMAGE",
    media_url: "https://placehold.co/450x650/CD853F/FFFFFF?text=Photo+3",
    permalink: "https://instagram.com/p/example6",
    caption: "Custom birthday hamper with personalized touches 🎂 #birthday #custom",
    timestamp: "2024-01-10T14:25:00Z",
    like_count: 203,
    comments_count: 9
  }
];

export default function InstagramGallery() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch Instagram posts
  const fetchInstagramPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      // Try to fetch from Instagram API
      const response = await fetch("/api/instagram", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();

      if (data.success && data.posts) {
        setPosts(data.posts);
      } else {
        // Fallback to mock data if API fails
        setPosts(MOCK_INSTAGRAM_POSTS);
      }
    } catch {
      // Fallback to mock data on error
      setPosts(MOCK_INSTAGRAM_POSTS);
      setError("Using demo content. Configure Instagram API for live posts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstagramPosts();
  }, []);

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  const truncateCaption = (caption: string, maxLength: number = 100) => {
    if (caption.length <= maxLength) return caption;
    return caption.substring(0, maxLength) + "...";
  };

  return (
    <section className='py-20 bg-gradient-to-br from-brand-light via-white to-brand-gold/5'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-8'>
          <SectionHeader
            tag={{ emoji: "📸", text: "Instagram Gallery" }}
            title='Behind the Scenes & Hamper Showcases'
            description='Discover our latest hamper creations, packaging processes, and happy customer moments. Follow our journey on Instagram for daily inspiration and exclusive behind-the-scenes content.'
            variant='center'
            size='lg'
            showDecorations={false}
          />
        </div>

        {/* Social Links */}
        <div className='text-center mb-12'>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link
              href='https://instagram.com/shubhhampers_'
              target='_blank'
              rel='noopener noreferrer'
            >
              <PrimaryButton
                size='sm'
                className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600'
              >
                <FaInstagram className='w-4 h-4' />
                Follow @shubhhampers_
                <FaExternalLinkAlt className='w-3 h-3' />
              </PrimaryButton>
            </Link>

            <SecondaryButton onClick={fetchInstagramPosts} disabled={loading} size='sm'>
              <IoRefresh className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              Refresh Feed
            </SecondaryButton>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className='text-center py-16'>
            <div className='inline-flex items-center gap-3 text-brand-dark'>
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-brand-gold' />
              <span className='text-lg font-medium'>Loading Instagram posts...</span>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className='text-center py-16'>
            <div className='bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto'>
              <div className='text-red-600 text-xl mb-4'>📱</div>
              <h3 className='text-red-800 font-bold text-lg mb-2'>Unable to Load Posts</h3>
              <p className='text-red-600 mb-4'>{error}</p>
              <button
                onClick={fetchInstagramPosts}
                className='bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors'
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Instagram Gallery - Masonry Layout */}
        {!loading && !error && posts.length > 0 && (
          <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6'>
            {posts.map((post, index) => (
              <div
                key={post.id}
                className='break-inside-avoid bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden group'
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Media Content */}
                <div className='relative overflow-hidden'>
                  <Link
                    href={post.permalink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block'
                  >
                    <Image
                      src={
                        post.media_type === "VIDEO"
                          ? post.thumbnail_url || post.media_url
                          : post.media_url
                      }
                      alt={post.caption?.substring(0, 100) || "Instagram post"}
                      width={600}
                      height={400}
                      className='w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110'
                      loading='lazy'
                    />

                    {/* Video Play Icon */}
                    {post.media_type === "VIDEO" && (
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='bg-black/50 backdrop-blur-sm rounded-full p-4 transition-all duration-200 group-hover:bg-black/70 group-hover:scale-110'>
                          <FaPlay className='w-6 h-6 text-white ml-1' />
                        </div>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                    {/* External Link Icon */}
                    <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <div className='bg-white/90 backdrop-blur-sm rounded-full p-2'>
                        <FaExternalLinkAlt className='w-3 h-3 text-brand-dark' />
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Post Details */}
                <div className='p-4'>
                  {/* Caption */}
                  {post.caption && (
                    <p className='text-gray-700 text-sm leading-relaxed mb-3'>
                      {truncateCaption(post.caption)}
                    </p>
                  )}

                  {/* Meta Information */}
                  <div className='flex items-center justify-between text-xs text-gray-500'>
                    <span className='font-medium'>{formatDate(post.timestamp)}</span>

                    <div className='flex items-center gap-3'>
                      {post.like_count && (
                        <span className='flex items-center gap-1'>❤️ {post.like_count}</span>
                      )}
                      {post.comments_count && (
                        <span className='flex items-center gap-1'>💬 {post.comments_count}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && posts.length === 0 && (
          <div className='text-center py-16'>
            <div className='text-6xl mb-4'>📸</div>
            <h3 className='text-2xl font-bold text-brand-dark mb-4'>No Posts Found</h3>
            <p className='text-gray-600 mb-6'>
              We&apos;re working on loading our Instagram content. Please check back soon!
            </p>
            <Link
              href='https://instagram.com/shubhhampers_'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105'
            >
              <FaInstagram className='w-5 h-5' />
              Visit Our Instagram
            </Link>
          </div>
        )}

        {/* CTA Section */}
        <div className='text-center mt-20 bg-gradient-to-r from-brand-gold/20 to-brand-amber/20 rounded-3xl p-8 md:p-12'>
          <h2 className='font-display text-2xl md:text-3xl font-bold text-brand-dark mb-4'>
            Love What You See?
          </h2>
          <p className='text-gray-700 text-lg mb-6 max-w-2xl mx-auto'>
            Get inspired by our hamper creations and let us design something special for your next
            celebration. Follow us for daily updates and exclusive content!
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <PrimaryButton size='sm'>Create Custom Hamper</PrimaryButton>
            </Link>
            <Link
              href='https://instagram.com/shubhhampers_'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SecondaryButton size='sm'>
                <FaInstagram className='w-4 h-4' />
                Follow Us
              </SecondaryButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
