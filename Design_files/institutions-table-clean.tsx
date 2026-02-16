"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  MoreHorizontal,
  Plus,
  Search,
  Eye,
  Pencil,
  Trash2,
  ArrowUpDown,
  Download,
} from "lucide-react"

interface Institution {
  id: number
  name: string
  code: string
  participants: number
  totalVouchers: string
  debts: string
  status: "active" | "warning" | "inactive"
  statusLabel: string
}

// נתונים הרדקודדים - ללא state!
const institutions: Institution[] = [
  {
    id: 1,
    name: "תורת חיים",
    code: "001",
    participants: 150,
    totalVouchers: "500,000 ₪",
    debts: "45,000 ₪",
    status: "active",
    statusLabel: "פעיל",
  },
  {
    id: 2,
    name: "בית יוסף",
    code: "002",
    participants: 200,
    totalVouchers: "750,000 ₪",
    debts: "120,000 ₪",
    status: "warning",
    statusLabel: "חוב גבוה",
  },
  {
    id: 3,
    name: "אור החיים",
    code: "003",
    participants: 180,
    totalVouchers: "650,000 ₪",
    debts: "30,000 ₪",
    status: "active",
    statusLabel: "פעיל",
  },
  {
    id: 4,
    name: "חזון איש",
    code: "004",
    participants: 120,
    totalVouchers: "400,000 ₪",
    debts: "85,000 ₪",
    status: "warning",
    statusLabel: "חוב גבוה",
  },
  {
    id: 5,
    name: "מרכז התורה",
    code: "005",
    participants: 220,
    totalVouchers: "800,000 ₪",
    debts: "0 ₪",
    status: "active",
    statusLabel: "פעיל",
  },
  {
    id: 6,
    name: "עטרת ישראל",
    code: "006",
    participants: 95,
    totalVouchers: "300,000 ₪",
    debts: "170,000 ₪",
    status: "inactive",
    statusLabel: "מושהה",
  },
]

const statusStyles: Record<string, string> = {
  active:
    "inline-flex items-center rounded-full bg-[#ECFDF5] px-2.5 py-0.5 text-xs font-medium text-[#059669]",
  warning:
    "inline-flex items-center rounded-full bg-[#FFF7ED] px-2.5 py-0.5 text-xs font-medium text-[#D97706]",
  inactive:
    "inline-flex items-center rounded-full bg-[#FEF2F2] px-2.5 py-0.5 text-xs font-medium text-[#DC2626]",
}

const statusDot: Record<string, string> = {
  active: "bg-[#10B981]",
  warning: "bg-[#F59E0B]",
  inactive: "bg-[#EF4444]",
}

export function InstitutionsTable() {
  return (
    <div className="rounded-xl border border-[#E2E8F0] bg-white shadow-sm">
      {/* Table Header */}
      <div className="flex flex-col gap-4 border-b border-[#E2E8F0] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-[#0F172A]">
            רשימת מוסדות
          </h2>
          <p className="mt-0.5 text-sm text-[#64748B]">
            {institutions.length} מוסדות רשומים במערכת
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-[#94A3B8]" />
            <Input
              placeholder="חיפוש..."
              className="h-9 w-52 border-[#E2E8F0] bg-[#F8FAFC] ps-9 text-sm"
              disabled
            />
          </div>
          <Button variant="ghost" className="h-9 gap-1.5 text-[#64748B]">
            <Download className="size-4" />
            <span className="hidden sm:inline">ייצוא</span>
          </Button>
          <Button className="h-9 gap-1.5 bg-[#8B5CF6] text-white hover:bg-[#7C3AED]">
            <Plus className="size-4" />
            צור מוסד חדש
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="max-h-[600px] overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>
                <div className="flex items-center gap-1.5 font-medium">
                  שם מוסד
                  <ArrowUpDown className="size-3.5 text-[#94A3B8]" />
                </div>
              </TableHead>
              <TableHead>קוד</TableHead>
              <TableHead>
                <div className="flex items-center gap-1.5 font-medium">
                  משתתפים
                  <ArrowUpDown className="size-3.5 text-[#94A3B8]" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1.5 font-medium">
                  סך תלושים
                  <ArrowUpDown className="size-3.5 text-[#94A3B8]" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1.5 font-medium">
                  חובות
                  <ArrowUpDown className="size-3.5 text-[#94A3B8]" />
                </div>
              </TableHead>
              <TableHead>סטטוס</TableHead>
              <TableHead className="text-center">פעולות</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {institutions.map((inst) => (
              <TableRow key={inst.id}>
                <TableCell className="font-medium text-[#0F172A]">
                  {inst.name}
                </TableCell>
                <TableCell className="font-mono text-[#64748B]">
                  {inst.code}
                </TableCell>
                <TableCell>{inst.participants.toLocaleString("he-IL")}</TableCell>
                <TableCell className="font-medium">{inst.totalVouchers}</TableCell>
                <TableCell
                  className={
                    inst.debts === "0 ₪"
                      ? "font-medium text-[#10B981]"
                      : inst.status === "warning"
                      ? "font-medium text-[#D97706]"
                      : "font-medium text-[#EF4444]"
                  }
                >
                  {inst.debts}
                </TableCell>
                <TableCell>
                  <span className={statusStyles[inst.status]}>
                    <span
                      className={`me-1.5 inline-block size-1.5 rounded-full ${statusDot[inst.status]}`}
                    />
                    {inst.statusLabel}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <button className="flex size-8 items-center justify-center rounded-lg text-[#64748B] transition-colors hover:bg-[#F1F5F9] hover:text-[#334155]">
                      <Eye className="size-4" />
                    </button>
                    <button className="flex size-8 items-center justify-center rounded-lg text-[#64748B] transition-colors hover:bg-[#F1F5F9] hover:text-[#334155]">
                      <Pencil className="size-4" />
                    </button>
                    <button className="flex size-8 items-center justify-center rounded-lg text-[#EF4444] transition-colors hover:bg-[#FEF2F2]">
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Table Footer */}
      <div className="border-t border-[#E2E8F0] px-6 py-3">
        <span className="text-sm text-[#64748B]">
          מציג {institutions.length} מתוך {institutions.length} מוסדות
        </span>
      </div>
    </div>
  )
}
