import type { MetadataRoute } from "next";
import { content } from "@/content";
import { companies } from "@/getin";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = content.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = ["", "/board", "/skills", "/getin", "/pilot"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const getinRoutes = companies.map((c) => ({
    url: `${base}/getin/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const legalRoutes = ["/terms", "/privacy"].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...staticRoutes, ...getinRoutes, ...legalRoutes];
}
