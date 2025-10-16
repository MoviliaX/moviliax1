import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next'
import { Inter, Exo_2 } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const exo2 = Exo_2({ 
  subsets: ['latin'],
  variable: '--font-exo',
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'MoviliaX - El Futuro de la Movilidad en Movimiento',
  description: 'Revista digital líder en movilidad, logística e innovación tecnológica en América Latina. Electromovilidad, ciudades inteligentes y transporte del futuro.',
  keywords: ['movilidad', 'logística', 'tecnología', 'transporte', 'LATAM', 'electromovilidad', 'ciudades inteligentes'],
  authors: [{ name: 'MoviliaX Team' }],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://moviliax.lat',
    siteName: 'MoviliaX',
    title: 'MoviliaX - El Futuro de la Movilidad en Movimiento',
    description: 'Explora la nueva experiencia de moverte. El futuro de la movilidad digital en América Latina.',
    images: [{
      url: '/assets/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'MoviliaX',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MoviliaX',
    creator: '@MoviliaX',
    title: 'MoviliaX - El Futuro de la Movilidad en Movimiento',
    description: 'Explora la nueva experiencia de moverte',
    images: ['/assets/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-MX" className={`${inter.variable} ${exo2.variable}`}>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />      
      </body>
    </html>
  )
}
