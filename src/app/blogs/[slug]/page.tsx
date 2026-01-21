import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogDetailsClient from "@/components/BlogDetailsClient";
import { fetchBlogPost, generateBlogSlugs } from "@/lib/blog-api";

export async function generateStaticParams() {
  try {
    const slugs = await generateBlogSlugs();
    return slugs.map(slug => ({
      slug
    }));
  } catch {
    // Error generating blog slugs
    return [];
  }
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await fetchBlogPost(resolvedParams.slug);

  if (!post) {
    return {};
  }

  const postUrl = `https://www.shubhhampers.com/blogs/${resolvedParams.slug}`;
  const imageUrl = post.featuredImage;
  const authorName = post.author?.name || "Shubhhampers Team";
  const categoryName = post.category?.name || "Gift Hampers";

  return {
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt,
    keywords: post.seo?.keywords || post.tags.map(tag => tag.name).join(", "),
    alternates: {
      canonical: postUrl
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: "Shubhhampers - Premium Gift Hampers",
      locale: "en_US",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [authorName],
      tags: post.tags.map(tag => tag.name),
      section: categoryName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
          type: "image/jpeg"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
      creator: "@shubhhampers",
      site: "@shubhhampers"
    },
    other: {
      "article:author": authorName,
      "article:published_time": post.publishedAt,
      "article:modified_time": post.updatedAt || post.publishedAt,
      "article:section": categoryName,
      "article:tag": post.tags.map(tag => tag.name).join(","),
      "og:image:width": "1200",
      "og:image:height": "630",
      "og:image:type": "image/jpeg",
      "og:image:alt": post.title,
      "twitter:image:alt": post.title,
      "twitter:image:width": "1200",
      "twitter:image:height": "630"
    }
  };
}

export default async function BlogsPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await fetchBlogPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />
      <BlogDetailsClient post={post} />
      <Footer />
    </main>
  );
}
