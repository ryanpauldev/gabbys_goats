import './css/style.css'
import { Inter, Architects_Daughter } from 'next/font/google'
import Header from '@/components/ui/header'
import { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Gabby's GOATS | Giving Others Assistance To Serve",
  description: "Supporting and uplifting the community through Gabby's legacy of kindness and service. GOATS - Giving Others Assistance To Serve.",
  metadataBase: new URL('https://gabbys-goats.vercel.app/'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gabbys-goats.vercel.app/',
    siteName: "Gabby's GOATS",
    title: "Gabby's GOATS | Giving Others Assistance To Serve",
    description: "Supporting and uplifting the community through Gabby's legacy of kindness and service. GOATS - Giving Others Assistance To Serve.",
    images: [
      {
        url: '/images/og-image.png', // Create this image
        width: 1200,
        height: 630,
        alt: "Gabby's GOATS - Giving Others Assistance To Serve"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Gabby's GOATS | Giving Others Assistance To Serve",
    description: "Supporting and uplifting the community through Gabby's legacy of kindness and service.",
    images: ['/images/og-image.png'], // Same image as OG
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          
        </div>
      </body>
    </html>
  )
}
