import type { MetadataRoute } from "next";
import { SITEMAP_ROUTES } from "@/content/seo";
import { SITE } from "@/content/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_ROUTES.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
