import { Activity, Boxes, GitBranch, TerminalSquare } from "lucide-react"

import { productHighlights } from "@/lib/site"

const icons = [TerminalSquare, Boxes, Activity, GitBranch]

export function Overview() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 md:px-6">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {productHighlights.map((highlight, index) => {
          const Icon = icons[index]

          return (
            <div
              key={highlight.title}
              className="flex flex-col gap-2 rounded-2xl bg-card border border-border p-4 shadow-sm transition-colors hover:bg-muted/50"
            >
              <div className="mb-1 flex size-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-4" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{highlight.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {highlight.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
