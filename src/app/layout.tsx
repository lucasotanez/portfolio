import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Navbar from './Navbar'

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Lucas Otanez',
  description: 'Web Portfolio',
  openGraph: {
    images: [
      {
        url: 'https://lucasotanez.vercel.app/img/thumbnail.png',
      },
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
