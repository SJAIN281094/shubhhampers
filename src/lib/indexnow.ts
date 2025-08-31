/**
 * IndexNow API Integration + Google SEO Optimization
 *
 * IndexNow: Instantly notifies Bing, Yandex, and other search engines
 * Google: Optimized through dynamic sitemap and comprehensive metadata
 */

export interface IndexNowRequest {
  host: string;
  key?: string;
  keyLocation?: string;
  urlList: string[];
}

export interface IndexNowResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Notify IndexNow about new/updated URLs
 * This instantly notifies Bing, Yandex, and other search engines
 *
 * Note: Google doesn't use IndexNow, but this helps with:
 * - Faster indexing on other search engines
 * - Overall site authority and visibility
 * - Indirect Google benefits through improved site discovery
 */
export async function notifyIndexNow(urls: string[]): Promise<IndexNowResponse> {
  try {
    // Ensure we have URLs to notify about
    if (!urls || urls.length === 0) {
      return {
        success: false,
        error: "No URLs provided"
      };
    }

    // Validate URLs
    const validUrls = urls.filter(url => {
      try {
        new URL(url);
        return true;
      } catch {
        return false;
      }
    });

    if (validUrls.length === 0) {
      return {
        success: false,
        error: "No valid URLs provided"
      };
    }

    // For development/testing, we'll use a simple approach
    const isDevelopment = process.env.NODE_ENV === "development";

    if (isDevelopment) {
      return {
        success: true,
        message: `Development mode: ${validUrls.length} URLs would be notified to IndexNow`,
        error:
          "Note: In production, this will instantly notify Bing, Yandex, and other search engines. Google indexing is optimized through our dynamic sitemap."
      };
    }

    // Production implementation - notify IndexNow
    const request: IndexNowRequest = {
      host: "www.shubhhampers.com",
      urlList: validUrls
    };

    // Send notification to IndexNow
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Shubhhampers-IndexNow/1.0"
      },
      body: JSON.stringify(request)
    });

    if (response.ok) {
      return {
        success: true,
        message: `Successfully notified IndexNow about ${validUrls.length} URLs. This helps Bing, Yandex, and other search engines index your content faster.`
      };
    } else {
      const errorText = await response.text();

      // Handle specific error cases
      if (response.status === 400 && errorText.includes("key field is required")) {
        return {
          success: false,
          error:
            "IndexNow key setup required. Please create a key file at your domain root for production use."
        };
      }

      return {
        success: false,
        error: `HTTP ${response.status}: ${errorText}`
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    };
  }
}

/**
 * Notify IndexNow about a single URL
 */
export async function notifyIndexNowSingle(url: string): Promise<IndexNowResponse> {
  return notifyIndexNow([url]);
}

/**
 * Notify IndexNow about new blog post
 */
export async function notifyIndexNowBlog(slug: string): Promise<IndexNowResponse> {
  const url = `https://www.shubhhampers.com/blogs/${slug}`;
  return notifyIndexNowSingle(url);
}

/**
 * Notify IndexNow about new/updated hamper
 */
export async function notifyIndexNowHamper(
  category: string,
  subCategory: string,
  slug: string
): Promise<IndexNowResponse> {
  const url = `https://www.shubhhampers.com/hampers/${category}/${subCategory}/${slug}`;
  return notifyIndexNowSingle(url);
}

/**
 * Notify IndexNow about multiple content updates
 * Useful for bulk operations or when multiple items are updated
 */
export async function notifyIndexNowBulk(
  blogSlugs: string[] = [],
  hamperUrls: string[] = []
): Promise<IndexNowResponse[]> {
  const notifications: Promise<IndexNowResponse>[] = [];

  // Add blog notifications
  blogSlugs.forEach(slug => {
    notifications.push(notifyIndexNowBlog(slug));
  });

  // Add hamper notifications
  hamperUrls.forEach(url => {
    notifications.push(notifyIndexNowSingle(url));
  });

  // Execute all notifications in parallel
  const results = await Promise.allSettled(notifications);

  // Convert to IndexNowResponse format
  return results.map(result => {
    if (result.status === "fulfilled") {
      return result.value;
    } else {
      return {
        success: false,
        error: result.reason?.message || "Promise rejected"
      };
    }
  });
}

/**
 * Get IndexNow statistics for monitoring
 */
export function getIndexNowStats(results: IndexNowResponse[]): {
  total: number;
  successful: number;
  failed: number;
  successRate: number;
} {
  const total = results.length;
  const successful = results.filter(r => r.success).length;
  const failed = total - successful;
  const successRate = total > 0 ? (successful / total) * 100 : 0;

  return {
    total,
    successful,
    failed,
    successRate: Math.round(successRate * 100) / 100
  };
}

/**
 * Setup instructions for IndexNow key
 */
export function getIndexNowSetupInstructions(): string {
  return `
To use IndexNow in production for faster Bing/Yandex indexing:

1. Generate a random key (32+ characters)
2. Create a file at: https://www.shubhhampers.com/YOUR_KEY.txt
3. The file should contain your key
4. This will enable instant notifications to Bing, Yandex, and other search engines

Note: Google doesn't use IndexNow, but our dynamic sitemap and comprehensive metadata
optimize Google indexing. IndexNow provides additional benefits for other search engines.

Example key: 1234567890abcdef1234567890abcdef
Example file: https://www.shubhhampers.com/1234567890abcdef1234567890abcdef.txt

Benefits:
✅ Instant Bing indexing
✅ Faster Yandex discovery  
✅ Better overall search engine presence
✅ Indirect Google benefits through improved site authority
  `.trim();
}
