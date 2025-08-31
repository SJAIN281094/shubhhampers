import { NextRequest, NextResponse } from "next/server";
import { fetchBlogPosts } from "@/lib/blog-api";
import { fetchHampers } from "@/lib/hamper-api";

export async function GET(_request: NextRequest) {
  try {
    // Fetch all blog posts and hampers
    const [blogResponse, hamperResponse] = await Promise.all([fetchBlogPosts(), fetchHampers()]);

    // Generate sitemap XML
    const sitemap = generateSitemapXML(blogResponse.posts, hamperResponse.data);

    // Return XML response
    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600" // Cache for 1 hour
      }
    });
  } catch {
    // Return a basic sitemap on error
    const fallbackSitemap = generateFallbackSitemap();

    return new NextResponse(fallbackSitemap, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600"
      }
    });
  }
}

function generateSitemapXML(blogPosts: unknown[], hampers: unknown[]) {
  const baseUrl = "https://www.shubhhampers.com";
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "daily" },
    { url: "/about", priority: "0.8", changefreq: "monthly" },
    { url: "/business", priority: "0.8", changefreq: "monthly" },
    { url: "/catalogue", priority: "0.9", changefreq: "weekly" },
    { url: "/contact", priority: "0.7", changefreq: "monthly" },
    { url: "/gallery", priority: "0.8", changefreq: "weekly" },
    { url: "/blogs", priority: "0.9", changefreq: "daily" }
  ];

  // Blog posts
  const blogUrls = blogPosts.map((post: any) => ({
    url: `/blogs/${post.slug}`,
    priority: "0.8",
    changefreq: "monthly",
    lastmod: post.updatedAt || post.publishedAt || currentDate
  }));

  // Hamper categories
  const hamperUrls = hampers.map((hamper: any) => ({
    url: `/hampers/${hamper.category?.name || "general"}/${hamper.subCategory?.name || "general"}/${hamper.slug}`,
    priority: "0.9",
    changefreq: "weekly",
    lastmod: hamper.updatedAt || currentDate
  }));

  // Generate XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  staticPages.forEach(page => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}${page.url}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += "  </url>\n";
  });

  // Add blog posts
  blogUrls.forEach(blog => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}${blog.url}</loc>\n`;
    xml += `    <lastmod>${blog.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${blog.changefreq}</changefreq>\n`;
    xml += `    <priority>${blog.priority}</priority>\n`;
    xml += "  </url>\n";
  });

  // Add hampers
  hamperUrls.forEach(hamper => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}${hamper.url}</loc>\n`;
    xml += `    <lastmod>${hamper.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${hamper.changefreq}</changefreq>\n`;
    xml += `    <priority>${hamper.priority}</priority>\n`;
    xml += "  </url>\n";
  });

  xml += "</urlset>";

  return xml;
}

function generateFallbackSitemap() {
  const baseUrl = "https://www.shubhhampers.com";
  const currentDate = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/blogs</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/hampers</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;
}
