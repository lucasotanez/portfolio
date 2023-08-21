import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Navbar from './Navbar'

//const inter = Ubuntu({ weight: '500', subsets: ["cyrillic"] })
const outfit = Outfit({ subsets: ["latin"] })

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
      <body className={outfit.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
