import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/site"
import { source } from "@/lib/source"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const docsEntries = source.generateParams().map((params) => {
    const slug = params.slug ?? []
    const pathname = slug.length > 0 ? `/docs/${slug.join("/")}` : "/docs"

    return {
      url: `${siteConfig.siteUrl}${pathname}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: slug.length === 0 ? 0.8 : 0.7,
    }
  })

  return [
    {
      url: siteConfig.siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...docsEntries,
  ]
}
