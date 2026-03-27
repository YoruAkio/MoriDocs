import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/lib/button-variants"
import { landingMetrics, siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section className="flex flex-col items-center border-b border-border/60 py-20 text-center sm:py-24">
      <div className="space-y-8">
        <div className="mx-auto inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-primary uppercase">
          Fumadocs powered reference
        </div>

        <div className="space-y-5">
          <div className="mx-auto inline-flex items-center rounded-[2rem] border border-border/70 bg-card px-6 py-4 shadow-sm">
            <div className="text-left">
              <p className="text-xs tracking-[0.28em] text-muted-foreground uppercase">Mori</p>
              <p className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">Docs</p>
            </div>
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Simple docs for Mori&apos;s HTTP API and WebSocket events.
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href={siteConfig.docsUrl} className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6")}>
            Read Docs
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full px-6")}
          >
            View on GitHub
          </Link>
        </div>

        <dl className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {landingMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-full border border-border/70 bg-card px-4 py-2 text-left shadow-sm"
            >
              <dt className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">{metric.label}</dt>
              <dd className="text-sm font-semibold tracking-tight text-foreground">{metric.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
