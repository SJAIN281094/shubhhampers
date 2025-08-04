import { MetadataRoute } from "next";
import { generateBlogsSlugs } from "@/lib/blogs-data";
import { generateAllHamperPaths } from "@/lib/hamper-url-utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.shubhhampers.com";
  const blogsSlugs = generateBlogsSlugs();
  const hamperPaths = generateAllHamperPaths();

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/business`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/hampers`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6
    }
  ];

  // Dynamic blogs routes
  const blogsRoutes = blogsSlugs.map(slug => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  // Dynamic hamper routes (categories, subcategories, and relationships)
  const hamperRoutes = hamperPaths.map(path => {
    const url = `${baseUrl}/hampers/${path.params.join("/")}`;
    return {
      url,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8
    };
  });

  return [...staticRoutes, ...blogsRoutes, ...hamperRoutes];
}
