import type { Metadata } from 'next'
import { Bebas_Neue, Cairo } from 'next/font/google'
import './globals.css'
import { config } from '@/config/site.config'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${bebasNeue.variable} ${cairo.variable}`}>
      <body>{children}</body>
    </html>
  )
}
