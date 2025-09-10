// Force dynamic rendering - prevent static generation
export const dynamic = "force-dynamic";
export const revalidate = false;

export async function GET() {
  const BLOGS_API_BASE_URL = process.env.NEXT_PUBLIC_BLOGS_BASE_URL;
  const BLOGS_TENANT_ID = process.env.NEXT_PUBLIC_BLOGS_TENANT_ID;
  const BLOGS_DOMAIN_ID = process.env.NEXT_PUBLIC_BLOGS_DOMAIN_ID;

  // Check if environment variables are available
  if (!BLOGS_API_BASE_URL || !BLOGS_TENANT_ID || !BLOGS_DOMAIN_ID) {
    console.error("Missing required environment variables for sitemap.xml");
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

    // Fetch sitemap.xml content from blogify
    const response = await fetch(sitemapUrl, {
      headers: {
        "User-Agent": "Shubhhampers-Web/1.0"
      },
      next: {
        revalidate: 1800 // Cache for 30 minutes
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch sitemap.xml: ${response.status}`);
    }

    const sitemapContent = await response.text();

    // Return the sitemap.xml content with proper content type
    return new Response(sitemapContent, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=1800"
      }
    });
  } catch (error) {
    console.error("Error fetching sitemap.xml:", error);

    return new Response("Internal Server Error", {
      status: 500,
      headers: {
        "Content-Type": "text/plain"
      }
    });
  }
}
