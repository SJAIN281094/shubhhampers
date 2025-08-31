import { redirect } from "next/navigation";

export default async function sitemap() {
  // Redirect to our dynamic sitemap endpoint
  redirect("/api/sitemap.xml");
}
