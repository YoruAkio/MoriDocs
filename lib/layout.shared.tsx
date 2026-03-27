import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"
import { MoriWordmark } from "@/components/site/mori-wordmark"
import { siteConfig } from "@/lib/site"

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: siteConfig.githubUrl,
    nav: {
      title: <MoriWordmark />,
      url: "/",
    },
    searchToggle: {
      enabled: true,
    },
    themeSwitch: {
      enabled: true,
    },
  }
}
