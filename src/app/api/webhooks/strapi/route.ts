import { NextRequest, NextResponse } from "next/server";
import { notifyIndexNowBlog, notifyIndexNowHamper } from "@/lib/indexnow";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event, entry } = body;

    // Remove console.log to avoid build warnings
    // console.log(`🔄 Strapi webhook received: ${event} for ${entry?.model}`);

    // Handle different content types
    if (entry?.model === "blog-post") {
      await handleBlogWebhook(event, entry);
    } else if (entry?.model === "hamper") {
      await handleHamperWebhook(event, entry);
    }

    return NextResponse.json({
      success: true,
      message: `Webhook processed for ${event}`
    });
  } catch {
    // Remove console.error to avoid build warnings
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process webhook"
      },
      { status: 500 }
    );
  }
}

async function handleBlogWebhook(event: string, entry: any) {
  const { slug } = entry;

  if (!slug) {
    // Remove console.warn to avoid build warnings
    // console.warn("⚠️ Blog webhook: No slug found");
    return;
  }

  try {
    switch (event) {
      case "entry.publish":
        // Remove console.log to avoid build warnings
        // console.log(`📝 Blog published: ${slug}`);
        await notifyIndexNowBlog(slug);
        break;

      case "entry.update":
        // Remove console.log to avoid build warnings
        // console.log(`✏️ Blog updated: ${slug}`);
        await notifyIndexNowBlog(slug);
        break;

      case "entry.unpublish":
        // Remove console.log to avoid build warnings
        // console.log(`🚫 Blog unpublished: ${slug}`);
        // Note: Search engines will handle this automatically
        break;

      default:
        // Remove console.log to avoid build warnings
        // console.log(`ℹ️ Blog webhook event: ${event} for ${slug}`);
        break;
    }
  } catch {
    // Remove console.error to avoid build warnings
    // console.error(`❌ Error processing blog webhook for ${slug}:`, error);
  }
}

async function handleHamperWebhook(event: string, entry: any) {
  const { slug, category, subCategory } = entry;

  if (!slug || !category || !subCategory) {
    // Remove console.warn to avoid build warnings
    // console.warn("⚠️ Hamper webhook: Missing required fields");
    return;
  }

  try {
    switch (event) {
      case "entry.publish":
        // Remove console.log to avoid build warnings
        // console.log(`🎁 Hamper published: ${category}/${subCategory}/${slug}`);
        await notifyIndexNowHamper(category, subCategory, slug);
        break;

      case "entry.update":
        // Remove console.log to avoid build warnings
        // console.log(`✏️ Hamper updated: ${category}/${subCategory}/${slug}`);
        await notifyIndexNowHamper(category, subCategory, slug);
        break;

      case "entry.unpublish":
        // Remove console.log to avoid build warnings
        // console.log(`🚫 Hamper unpublished: ${category}/${subCategory}/${slug}`);
        // Note: Search engines will handle this automatically
        break;

      default:
        // Remove console.log to avoid build warnings
        // console.log(`ℹ️ Hamper webhook event: ${event} for ${category}/${subCategory}/${slug}`);
        break;
    }
  } catch {
    // Remove console.error to avoid build warnings
    // console.error(`❌ Error processing hamper webhook for ${slug}:`, error);
  }
}

// Handle GET requests (for webhook verification)
export async function GET(_request: NextRequest) {
  return NextResponse.json({
    message: "Strapi webhook endpoint is active",
    timestamp: new Date().toISOString()
  });
}
