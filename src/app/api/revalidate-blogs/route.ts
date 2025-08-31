import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

// Webhook endpoint for CMS to trigger revalidation when blog content changes
export async function POST(request: NextRequest) {
  try {
    // Verify the revalidation secret for security
    const revalidateSecret = process.env.REVALIDATE_SECRET;
    const authHeader = request.headers.get("authorization");

    if (!revalidateSecret) {
      console.error("REVALIDATE_SECRET not configured");
      return NextResponse.json({ error: "Revalidation secret not configured" }, { status: 500 });
    }

    if (!authHeader || authHeader !== `Bearer ${revalidateSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse the webhook payload
    const body = await request.json();
    const { action, model, entry } = body;

    // Only handle blog-related models
    const blogModels = ["blog-post", "blog-category", "blog-tag", "author"];
    if (!model || !blogModels.includes(model)) {
      return NextResponse.json({ message: "Model not handled by this webhook" }, { status: 200 });
    }

    console.log(`Blog revalidation triggered: ${action} on ${model}`, {
      entryId: entry?.id,
      entrySlug: entry?.slug,
      timestamp: new Date().toISOString()
    });

    // Revalidate based on the action and model
    switch (action) {
      case "create":
      case "update":
      case "delete":
        // Revalidate all blog-related cache tags
        revalidateTag("blog-posts");
        revalidateTag("blog-categories");
        revalidateTag("blog-slugs");

        // If it's a specific blog post, also revalidate its individual cache
        if (model === "blog-post" && entry?.id) {
          revalidateTag(`blog-post-${entry.id}`);
          if (entry.slug) {
            revalidateTag(`blog-post-${entry.slug}`);
          }
        }

        // Revalidate blog pages
        revalidatePath("/blogs");
        revalidatePath("/sitemap.xml");

        // If we have the slug, revalidate the specific blog post page
        if (model === "blog-post" && entry?.slug) {
          revalidatePath(`/blogs/${entry.slug}`);
        }

        break;

      case "publish":
      case "unpublish":
        // Handle publish/unpublish actions
        revalidateTag("blog-posts");
        revalidateTag("blog-slugs");
        revalidatePath("/blogs");
        revalidatePath("/sitemap.xml");

        if (entry?.slug) {
          revalidatePath(`/blogs/${entry.slug}`);
        }

        break;

      default:
        console.log(`Unhandled action: ${action}`);
    }

    // Return success response
    return NextResponse.json({
      message: "Revalidation completed successfully",
      revalidated: {
        action,
        model,
        entryId: entry?.id,
        entrySlug: entry?.slug,
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error("Blog revalidation webhook error:", error);

    return NextResponse.json(
      {
        error: "Internal server error during revalidation",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: "healthy",
    service: "Blog Revalidation Webhook",
    timestamp: new Date().toISOString()
  });
}
