import Link from "next/link"

import { buttonVariants } from "@/lib/button-variants"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

export function FooterCta() {
  return (
    <section className="flex flex-col gap-6 py-14 sm:flex-row sm:items-end sm:justify-between">
      <div className="space-y-3">
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">keep it current</p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance">
          The reference page is sourced from Mori&apos;s upstream `DOCS.md`, so refreshing docs is a small sync step.
        </h2>
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
          Use the overview page for orientation, then jump into the generated API reference for the full HTTP and
          WebSocket details.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href={siteConfig.docsSourceUrl}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-6")}
        >
          Upstream DOCS.md
        </Link>
        <Link href={siteConfig.docsUrl} className={cn(buttonVariants(), "rounded-full px-6")}>
          Browse docs
        </Link>
      </div>
    </section>
  )
}
