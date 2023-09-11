import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Navbar from './Navbar'

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Lucas Otanez - Full Stack Engineer',
  description: 'Web Portfolio',
  openGraph: {
    title: 'Lucas Otanez - Full Stack Engineer',
    description: 'Web Portfolio',
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
    <html lang="en" className="overflow-x-hidden">
      <body className={outfit.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
