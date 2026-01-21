// Force dynamic rendering - prevent static generation
export const dynamic = "force-dynamic";
export const revalidate = false;

export async function GET() {
  const BLOGS_API_BASE_URL = process.env.NEXT_PUBLIC_BLOGS_BASE_URL;
  const BLOGS_TENANT_ID = process.env.NEXT_PUBLIC_BLOGS_TENANT_ID;
  const BLOGS_DOMAIN_ID = process.env.NEXT_PUBLIC_BLOGS_DOMAIN_ID;

  // Check if environment variables are available
  if (!BLOGS_API_BASE_URL || !BLOGS_TENANT_ID || !BLOGS_DOMAIN_ID) {
    // Missing required environment variables for robots.txt
    return new Response("Service Unavailable", {
      status: 503,
      headers: {
        "Content-Type": "text/plain"
      }
    });
  }

  try {
    // Build the robots.txt URL using environment variables
    const robotsUrl = `${BLOGS_API_BASE_URL}/t/${BLOGS_TENANT_ID}/d/${BLOGS_DOMAIN_ID}/robots.txt`;

    // Fetch robots.txt content from blogify (no caching - always fresh)
    const response = await fetch(robotsUrl, {
      headers: {
        "User-Agent": "Shubhhampers-Web/1.0"
      },
      cache: "no-store" // Always fetch fresh data
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch robots.txt: ${response.status}`);
    }

    const robotsContent = await response.text();

    // Return the robots.txt content with proper content type (no caching)
    return new Response(robotsContent, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "no-cache, no-store, must-revalidate"
      }
    });
  } catch {
    // Error fetching robots.txt

    return new Response("Internal Server Error", {
      status: 500,
      headers: {
        "Content-Type": "text/plain"
      }
    });
  }
}
