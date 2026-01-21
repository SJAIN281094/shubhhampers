import { NextResponse } from "next/server";

// Instagram Basic Display API configuration
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;

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

export async function GET() {
  try {
    // Check if environment variables are set
    if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
      return NextResponse.json(
        {
          error: "Instagram API not configured",
          message:
            "Please set INSTAGRAM_ACCESS_TOKEN and INSTAGRAM_USER_ID in environment variables"
        },
        { status: 500 }
      );
    }

    // Fetch user's media from Instagram Basic Display API
    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=20`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        // Cache for 10 minutes to avoid rate limits
        next: { revalidate: 600 }
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        {
          error: "Failed to fetch Instagram data",
          message: errorData.error?.message || "Instagram API request failed"
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Transform and filter the data
    const posts: InstagramPost[] = data.data
      .filter(
        (post: { media_type: string }) => post.media_type === "VIDEO" || post.media_type === "IMAGE"
      )
      .map(
        (post: {
          id: string;
          media_type: string;
          media_url: string;
          thumbnail_url?: string;
          permalink: string;
          caption?: string;
          timestamp: string;
        }) => ({
          id: post.id,
          media_type: post.media_type,
          media_url: post.media_url,
          thumbnail_url: post.thumbnail_url,
          permalink: post.permalink,
          caption: post.caption || "",
          timestamp: post.timestamp
          // Note: like_count and comments_count require additional API calls
          // and are not available in Basic Display API
        })
      );

    return NextResponse.json({
      success: true,
      posts,
      total: posts.length,
      fetched_at: new Date().toISOString()
    });
  } catch {
    // Instagram API Error

    return NextResponse.json(
      {
        error: "Internal server error",
        message: "Failed to process Instagram data"
      },
      { status: 500 }
    );
  }
}

// Optional: Add a health check endpoint
export async function HEAD() {
  return new Response(null, {
    status: INSTAGRAM_ACCESS_TOKEN ? 200 : 503,
    headers: {
      "Cache-Control": "no-cache"
    }
  });
}
