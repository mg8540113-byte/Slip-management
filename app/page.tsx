import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { InstitutionsTable } from "@/components/dashboard/institutions-table"

export default function Page() {
    return (
        <div dir="rtl" className="min-h-screen bg-[#F8FAFC]">
            <Header />
            <Sidebar />
            <main className="mr-16 mt-16 min-h-[calc(100vh-4rem)] p-6 transition-all duration-200">
                <div className="flex flex-col gap-6">
                    {/* Page Title */}
                    <div>
                        <h1 className="text-2xl font-bold text-[#0F172A]">
                            {"דשבורד ראשי"}
                        </h1>
                        <p className="mt-1 text-sm text-[#64748B]">
                            {"סקירה כללית של מערכת התלושים"}
                        </p>
                    </div>

                    {/* Stats */}
                    <StatsCards />

                    {/* Institutions Table */}
                    <InstitutionsTable />
                </div>
            </main>
        </div>
    )
}
