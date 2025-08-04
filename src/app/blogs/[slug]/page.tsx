import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogDetailsClient from "@/components/BlogDetailsClient";
import { getBlogPostBySlug, generateBlogsSlugs } from "@/lib/blogs-data";

export async function generateStaticParams() {
  const slugs = generateBlogsSlugs();
  return slugs.map(slug => ({
    slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    alternates: {
      canonical: `https://www.shubhhampers.com/blogs/${resolvedParams.slug}`
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://www.shubhhampers.com/blogs/${resolvedParams.slug}`,
      siteName: "Shubhhampers",
      locale: "en_US",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
      creator: "@shubhhampers",
      site: "@shubhhampers"
    },
    other: {
      "article:author": post.author,
      "article:published_time": post.publishedAt,
      "article:modified_time": post.updatedAt || post.publishedAt,
      "article:section": post.category,
      "article:tag": post.tags.join(",")
    }
  };
}

export default async function BlogsPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className='min-h-screen'>
      <Header />
      <BlogDetailsClient post={post} />
      <Footer />
    </main>
  );
}
