import { NextRequest, NextResponse } from "next/server";
import { notifyIndexNow, notifyIndexNowBlog, notifyIndexNowHamper } from "@/lib/indexnow";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, slug, category, subCategory, customUrls } = body;

    let result;

    switch (type) {
      case "blog":
        if (!slug) {
          return NextResponse.json(
            { success: false, error: "Blog slug is required" },
            { status: 400 }
          );
        }
        result = await notifyIndexNowBlog(slug);
        break;

      case "hamper":
        if (!slug || !category || !subCategory) {
          return NextResponse.json(
            { success: false, error: "Hamper slug, category, and subCategory are required" },
            { status: 400 }
          );
        }
        result = await notifyIndexNowHamper(category, subCategory, slug);
        break;

      case "custom":
        if (!customUrls || !Array.isArray(customUrls)) {
          return NextResponse.json(
            { success: false, error: "Custom URLs array is required" },
            { status: 400 }
          );
        }
        result = await notifyIndexNow(customUrls);
        break;

      default:
        return NextResponse.json(
          { success: false, error: "Invalid type. Use: blog, hamper, or custom" },
          { status: 400 }
        );
    }

    return NextResponse.json({
      success: true,
      result,
      timestamp: new Date().toISOString()
    });
  } catch {
    // Remove console.error to avoid build warnings
    return NextResponse.json(
      {
        success: false,
        error: "Failed to test IndexNow notification"
      },
      { status: 500 }
    );
  }
}

export async function GET(_request: NextRequest) {
  return NextResponse.json({
    message: "IndexNow Test Endpoint",
    description: "Test IndexNow notifications for Bing, Yandex, and other search engines",
    usage: {
      POST: {
        blog: { type: "blog", slug: "your-blog-slug" },
        hamper: { type: "hamper", slug: "slug", category: "category", subCategory: "subcategory" },
        custom: {
          type: "custom",
          customUrls: ["https://example.com/url1", "https://example.com/url2"]
        }
      }
    },
    note: "IndexNow helps with Bing/Yandex indexing. Google indexing is optimized through our dynamic sitemap and metadata.",
    timestamp: new Date().toISOString()
  });
}
