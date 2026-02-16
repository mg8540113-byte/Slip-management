import { cn } from "@/lib/utils"

type StatusVariant = "success" | "warning" | "danger" | "info"

const variantStyles: Record<StatusVariant, string> = {
  success: "bg-green-50 text-green-700 border-green-200",
  warning: "bg-yellow-50 text-yellow-700 border-yellow-200",
  danger: "bg-red-50 text-red-700 border-red-200",
  info: "bg-blue-50 text-blue-700 border-blue-200",
}

interface StatusBadgeProps {
  variant: StatusVariant
  children: React.ReactNode
  className?: string
}

export function StatusBadge({ variant, children, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-1 text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
