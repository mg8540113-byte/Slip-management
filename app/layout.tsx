import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
    title: 'מערכת ניהול תלושים',
    description: 'מערכת לניהול תלושים למוסדות וקבוצות',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="he" dir="rtl">
            <body>
                {children}
                <Toaster />
            </body>
        </html>
    )
}
