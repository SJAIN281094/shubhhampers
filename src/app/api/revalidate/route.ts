import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, error: "Invalid secret" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));

  // Extract content type and slug from Strapi webhook
  const contentType = body?.model || body?.entry?.__component;
  const slug = body?.slug ?? body?.entry?.slug;
  const category = body?.category?.name ?? body?.entry?.category?.name;
  const subCategory = body?.entry?.subCategory?.name;

  const paths = ["/sitemap"];

  // Determine paths to revalidate based on content type
  if (contentType === "blog" || contentType === "blog-post") {
    paths.push("/blogs");
    if (slug) paths.push(`/blogs/${slug}`);
  } else if (contentType === "hamper" || contentType === "gift-hamper") {
    paths.push("/hampers");
    if (category && subCategory && slug) {
      paths.push(`/hampers/${category}/${subCategory}/${slug}`);
    } else if (category && slug) {
      paths.push(`/hampers/${category}/${slug}`);
    }
  }

  // Revalidate all relevant paths
  for (const path of paths) {
    revalidatePath(path);
  }

  // Fire IndexNow for participating search engines
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.shubhampers.com";

    if (contentType === "blog" || contentType === "blog-post") {
      await fetch(`${baseUrl}/api/test-indexnow`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "blog",
          slug: slug || "general"
        })
      });
    } else if (contentType === "hamper" || contentType === "gift-hamper") {
      await fetch(`${baseUrl}/api/test-indexnow`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "hamper",
          slug: slug || "general",
          category: category || "general",
          subCategory: subCategory || "general"
        })
      });
    }
  } catch (error) {
    console.error("IndexNow notification failed:", error);
  }

  return NextResponse.json({
    ok: true,
    revalidated: paths,
    contentType,
    slug,
    category,
    subCategory
  });
}
