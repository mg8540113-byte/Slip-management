import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-lg border border-[#CBD5E1] bg-[#FFFFFF] px-3 py-2 text-sm text-[#0F172A] transition-all duration-150 placeholder:text-[#94A3B8] focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/20 disabled:cursor-not-allowed disabled:border-[#E2E8F0] disabled:bg-[#F8FAFC] disabled:text-[#94A3B8]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
