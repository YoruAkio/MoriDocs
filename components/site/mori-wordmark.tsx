import { cn } from "@/lib/utils"

type MoriWordmarkProps = {
  className?: string
}

export function MoriWordmark({ className }: MoriWordmarkProps) {
  return (
    <span className={cn("inline-flex items-center gap-3 font-medium text-foreground", className)}>
      <span className="inline-flex size-8 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-sm font-semibold text-primary">
        M
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-sm tracking-[0.22em] uppercase text-muted-foreground">Mori</span>
        <span className="text-base font-semibold tracking-tight">Docs</span>
      </span>
    </span>
  )
}
