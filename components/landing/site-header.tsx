import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          {/* Logo next to wordmark, similar to image layout */}
          <div className="relative size-10">
            <Image
              src="/mori-logo.png"
              alt="Mori Logo"
              width={40}
              height={40}
              className="object-contain w-full h-full"
            />
          </div>
          <span className="font-semibold text-foreground tracking-tight text-xl">
            MoriDocs
          </span>
        </Link>

        {/* Keeping original links but styled like the image nav */}
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href={siteConfig.docsUrl} className="transition-colors hover:text-foreground">
            Docs
          </Link>
          <Link
            href={siteConfig.docsSourceUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            API
          </Link>
          <Link
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  )
}
