"use client"

import { Search, Bell, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-[#E2E8F0] bg-white px-6 shadow-sm">
      {/* Right: Logo */}
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-lg bg-[#8B5CF6]">
          <span className="text-sm font-bold text-white">{"ת"}</span>
        </div>
        <span className="text-lg font-bold text-[#1E293B]">
          {"מערכת תלושים"}
        </span>
      </div>

      {/* Center: Search */}
      <div className="relative hidden max-w-[400px] flex-1 px-12 md:block">
        <Search className="pointer-events-none absolute start-14 top-1/2 size-4 -translate-y-1/2 text-[#94A3B8]" />
        <Input
          placeholder="חיפוש מוסד, אברך, הזמנה..."
          className="h-9 border-[#E2E8F0] bg-[#F8FAFC] ps-9 text-sm placeholder:text-[#94A3B8] focus:border-[#8B5CF6] focus:bg-white"
        />
      </div>

      {/* Left: Notifications + User */}
      <div className="flex items-center gap-4">
        <button className="relative rounded-lg p-2 text-[#64748B] transition-colors hover:bg-[#F1F5F9] hover:text-[#334155]">
          <Bell className="size-5" />
          <span className="absolute end-1.5 top-1.5 size-2 rounded-full bg-[#EF4444]" />
        </button>
        <div className="h-6 w-px bg-[#E2E8F0]" />
        <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-[#F1F5F9]">
          <Avatar className="size-8">
            <AvatarFallback className="bg-[#8B5CF6] text-xs font-semibold text-white">
              {"מנ"}
            </AvatarFallback>
          </Avatar>
          <div className="hidden text-start md:block">
            <p className="text-sm font-medium text-[#1E293B]">{"יוסי כהן"}</p>
            <p className="text-xs text-[#64748B]">{"מנהל מערכת"}</p>
          </div>
          <ChevronDown className="size-4 text-[#94A3B8]" />
        </button>
      </div>
    </header>
  )
}
