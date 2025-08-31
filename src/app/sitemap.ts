import type { MetadataRoute } from "next";

// Force dynamic rendering for this route
export const dynamic = "force-dynamic";

async function fetchAllBlogSlugs() {
  try {
    const apiUrl = process.env.CMS_API_URL || "https://admin.shubhhampers.com/api";
    const res = await fetch(`${apiUrl}/blog-posts?fields=slug,updatedAt`, {
      cache: "no-store"
    });
    return res.ok ? res.json() : [];
  } catch (error) {
    console.error("Error fetching blog slugs:", error);
    return [];
  }
}

async function fetchAllHamperSlugs() {
  try {
    const apiUrl = process.env.CMS_API_URL || "https://admin.shubhhampers.com/api";
    const res = await fetch(`${apiUrl}/hampers?fields=slug,updatedAt`, {
      cache: "no-store"
    });
    return res.ok ? res.json() : [];
  } catch (error) {
    console.error("Error fetching hamper slugs:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.shubhhampers.com";

  // Fetch data dynamically
  const [posts, hampers] = await Promise.all([fetchAllBlogSlugs(), fetchAllHamperSlugs()]);

  const currentDate = new Date();

  // Static pages
  const staticPages = [
    { url: base, lastModified: currentDate, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/about`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${base}/business`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${base}/catalogue`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${base}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7
    },
    { url: `${base}/gallery`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blogs`, lastModified: currentDate, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/hampers`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 }
  ];

  // Blog posts - API returns { data: [{ slug, updatedAt }] }
  const blogPages =
    posts.data?.map((post: { slug: string; updatedAt?: string }) => ({
      url: `${base}/blogs/${post.slug}`,
      lastModified: new Date(post.updatedAt || currentDate),
      changeFrequency: "monthly" as const,
      priority: 0.8
    })) || [];

  // Hamper pages - API returns { data: [{ slug, updatedAt }] }
  const hamperPages =
    hampers.data?.map(
      (hamper: {
        slug: string;
        updatedAt?: string;
        category?: { name: string };
        subCategory?: { name: string };
      }) => ({
        url: `${base}/hampers/${(hamper.category?.name || "general").toLowerCase()}/${(hamper.subCategory?.name || "general").toLowerCase()}/${hamper.slug}`,
        lastModified: new Date(hamper.updatedAt || currentDate),
        changeFrequency: "weekly" as const,
        priority: 0.9
      })
    ) || [];

  return [...staticPages, ...blogPages, ...hamperPages];
}
