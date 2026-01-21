// Force dynamic rendering - prevent static generation
export const dynamic = "force-dynamic";
export const revalidate = false;

// Transform sitemap URLs from API domain to canonical domain
function transformSitemapUrls(sitemapContent: string, apiBaseUrl: string): string {
  const canonicalDomain = "https://www.shubhhampers.com";

  // Replace API URLs with canonical URLs for blog posts
  // Pattern: {API_BASE_URL}/t/{TENANT_ID}/d/{DOMAIN_ID}/blogs/{slug} -> https://www.shubhhampers.com/blogs/{slug}
  const apiUrlPattern = new RegExp(
    `${apiBaseUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/t/[^/]+/d/[^/]+/blogs/([^<]+)`,
    "g"
  );

  return sitemapContent.replace(apiUrlPattern, `${canonicalDomain}/blogs/$1`);
}

export async function GET() {
  const BLOGS_API_BASE_URL = process.env.NEXT_PUBLIC_BLOGS_BASE_URL;
  const BLOGS_TENANT_ID = process.env.NEXT_PUBLIC_BLOGS_TENANT_ID;
  const BLOGS_DOMAIN_ID = process.env.NEXT_PUBLIC_BLOGS_DOMAIN_ID;

  // Check if environment variables are available
  if (!BLOGS_API_BASE_URL || !BLOGS_TENANT_ID || !BLOGS_DOMAIN_ID) {
    // Missing required environment variables for sitemap.xml
    return new Response("Service Unavailable", {
      status: 503,
      headers: {
        "Content-Type": "text/plain"
      }
    });
  }

  try {
    // Build the sitemap.xml URL using environment variables
    const sitemapUrl = `${BLOGS_API_BASE_URL}/t/${BLOGS_TENANT_ID}/d/${BLOGS_DOMAIN_ID}/sitemap.xml`;

    // Fetch sitemap.xml content from blogify (no caching - always fresh)
    const response = await fetch(sitemapUrl, {
      headers: {
        "User-Agent": "Shubhhampers-Web/1.0"
      },
      cache: "no-store" // Always fetch fresh data
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch sitemap.xml: ${response.status}`);
    }

    const sitemapContent = await response.text();

    // Transform the sitemap to use canonical URLs
    const transformedSitemap = transformSitemapUrls(sitemapContent, BLOGS_API_BASE_URL);

    // Return the transformed sitemap.xml content with proper content type (no caching)
    return new Response(transformedSitemap, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "no-cache, no-store, must-revalidate"
      }
    });
  } catch {
    // Error fetching sitemap.xml

    return new Response("Internal Server Error", {
      status: 500,
      headers: {
        "Content-Type": "text/plain"
      }
    });
  }
}
