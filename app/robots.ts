import type { MetadataRoute } from "next";
import { content } from "@/content";

export default function robots(): MetadataRoute.Robots {
  const base = content.url.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
