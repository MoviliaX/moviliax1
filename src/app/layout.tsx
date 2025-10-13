import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MoviliaX - Movilidad y Logística Digital',
  description: 'Plataforma de conocimiento sobre movilidad y logística',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-MX">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
