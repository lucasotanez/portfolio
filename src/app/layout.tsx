import './globals.css'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import Navbar from './Navbar'

const inter = Ubuntu({ weight: '500', subsets: ["cyrillic"] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Lucas Otanez Web Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
