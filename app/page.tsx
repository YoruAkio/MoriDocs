import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FaGithub } from "react-icons/fa6"

import { SiteHeader } from "@/components/landing/site-header"
import { Overview } from "@/components/landing/overview"
import { buttonVariants } from "@/lib/button-variants"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-6 sm:px-6">
        <section className="flex w-full flex-col items-center text-center">
          <div className="relative mb-4 flex items-center justify-center">
            <Image 
              src="/mori-logo.png" 
              alt="Mori Logo" 
              width={240} 
              height={140}
              className="drop-shadow-lg object-contain w-auto h-[120px] sm:h-[140px]"
            />
          </div>

          <div className="space-y-3 px-4">
            <h1 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Simple docs for Mori&apos;s HTTP API and WebSocket events.
            </h1>
          </div>

          <div className="mt-5 mb-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={siteConfig.docsUrl}
              className={cn(
                buttonVariants({ size: "default" }),
                "rounded-xl bg-primary px-6 text-primary-foreground hover:bg-primary/90 font-semibold h-10"
              )}
            >
              Read Docs
              <ArrowRight className="ml-2 size-4" />
            </Link>
            <Link
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ size: "default", variant: "outline" }),
                "rounded-xl bg-card border-border px-6 text-foreground hover:bg-muted font-semibold h-10"
              )}
            >
              View on GitHub
            </Link>
          </div>
        </section>

        <Overview />
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-border bg-card py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row md:px-8">
          <p className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase text-center sm:text-left">
            SOURCE CODE — GROWTOPIA IS TRADEMARK OF UBISOFT ENT. MORI IS NOT AFFILIATED WITH OR ENDORSED BY UBISOFT ENT.
          </p>
          <div className="flex items-center text-muted-foreground">
            <Link href={siteConfig.githubUrl} className="transition-colors hover:text-foreground">
              <FaGithub className="size-4" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
