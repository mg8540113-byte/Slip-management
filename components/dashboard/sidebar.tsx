"use client"

import {
    LayoutDashboard,
    Building2,
    Users,
    FileText,
    CreditCard,
    QrCode,
    Printer,
    BarChart3,
    Settings,
    ChevronLeft,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
    { icon: LayoutDashboard, label: "דשבורד ראשי", active: true },
    { icon: Building2, label: "ניהול מוסדות" },
    { icon: Users, label: "ניהול קבוצות" },
    { icon: FileText, label: "הזמנות" },
    { icon: CreditCard, label: "תשלומים" },
    { icon: QrCode, label: "ברקודים" },
    { icon: Printer, label: "הדפסות" },
    { icon: BarChart3, label: "דוחות" },
    { icon: Settings, label: "הגדרות" },
]

export function Sidebar() {
    return (
        <aside
            className={cn(
                "group fixed top-16 right-0 z-40 flex h-[calc(100vh-4rem)] w-16 flex-col border-s border-[#E2E8F0] bg-white shadow-lg transition-all duration-200 ease-in-out hover:w-60"
            )}
        >
            <div className="flex h-12 items-center border-b border-[#E2E8F0] px-3">
                <ChevronLeft
                    className={cn(
                        "size-5 text-[#64748B] transition-transform duration-200 group-hover:rotate-0 rotate-180"
                    )}
                />
                <span className="me-2 text-sm font-semibold text-[#334155] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    תפריט ראשי
                </span>
            </div>

            <nav className="flex flex-1 flex-col gap-1 px-2 py-3">
                {navItems.map((item) => {
                    const Icon = item.icon
                    return (
                        <div
                            key={item.label}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-150 cursor-pointer",
                                item.active
                                    ? "border-e-[3px] border-[#8B5CF6] bg-[#EDE9FE] text-[#8B5CF6]"
                                    : "text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#334155]"
                            )}
                        >
                            <Icon className="size-5 shrink-0" />
                            <span className="whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                {item.label}
                            </span>
                        </div>
                    )
                })}
            </nav>
        </aside>
    )
}
