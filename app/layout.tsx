import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alexis Concrete | Quality Concrete Solutions in Tulsa',
  description: 'Expert concrete services for residential and commercial projects in Tulsa. Specializing in driveways, patios, foundations, and decorative concrete.',
  keywords: 'concrete contractor, concrete services, Tulsa concrete, residential concrete, commercial concrete, concrete driveways, concrete patios, concrete foundations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
