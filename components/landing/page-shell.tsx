import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type PageShellProps = {
  children: ReactNode
  className?: string
}

export function PageShell({ children, className }: PageShellProps) {
  return (
    <div className="min-h-svh bg-background">
      <div className={cn("mx-auto flex w-full max-w-6xl flex-col px-6 pb-16 pt-6 sm:px-8 lg:px-10", className)}>
        {children}
      </div>
    </div>
  )
}
