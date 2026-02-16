import { TrendingUp, TrendingDown, Minus, Wallet, HandCoins, AlertTriangle } from "lucide-react"

interface StatCardProps {
    label: string
    value: string
    change: string
    trend: "up" | "down" | "neutral"
    borderColor: string
    iconBg: string
    iconColor: string
    icon: React.ReactNode
}

function StatCard({ label, value, change, trend, borderColor, iconBg, iconColor, icon }: StatCardProps) {
    return (
        <div
            className="group rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            style={{ borderTopWidth: "4px", borderTopColor: borderColor }}
        >
            <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-[#64748B]">{label}</span>
                    <span className="text-3xl font-bold text-[#0F172A]">{value}</span>
                    <div className="mt-1 flex items-center gap-1">
                        {trend === "up" && <TrendingUp className="size-3.5 text-[#10B981]" />}
                        {trend === "down" && <TrendingDown className="size-3.5 text-[#EF4444]" />}
                        {trend === "neutral" && <Minus className="size-3.5 text-[#64748B]" />}
                        <span
                            className={
                                trend === "up"
                                    ? "text-xs font-medium text-[#10B981]"
                                    : trend === "down"
                                        ? "text-xs font-medium text-[#EF4444]"
                                        : "text-xs font-medium text-[#64748B]"
                            }
                        >
                            {change}
                        </span>
                    </div>
                </div>
                <div
                    className="flex size-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: iconBg, color: iconColor }}
                >
                    {icon}
                </div>
            </div>
        </div>
    )
}

export function StatsCards() {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <StatCard
                label="שווי כולל תלושים"
                value="3,000,000 ₪"
                change="+12% מהחודש שעבר"
                trend="up"
                borderColor="#8B5CF6"
                iconBg="#F5F3FF"
                iconColor="#8B5CF6"
                icon={<Wallet className="size-6" />}
            />
            <StatCard
                label="סבסוד שהתקבל"
                value="600,000 ₪"
                change="+8% מהחודש שעבר"
                trend="up"
                borderColor="#10B981"
                iconBg="#ECFDF5"
                iconColor="#10B981"
                icon={<HandCoins className="size-6" />}
            />
            <StatCard
                label="חובות פתוחים"
                value="450,000 ₪"
                change="-3% מהחודש שעבר"
                trend="down"
                borderColor="#EF4444"
                iconBg="#FEF2F2"
                iconColor="#EF4444"
                icon={<AlertTriangle className="size-6" />}
            />
        </div>
    )
}
