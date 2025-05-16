export default async function sitemap() {
  const baseUrl = "https://www.shubhhampers.com";
  const routes = ["", "products", "contact", "about"];

  const urls = routes.map((route) => {
    const path = route ? `/${route}` : "";
    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });

  return urls;
}
