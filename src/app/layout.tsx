import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Navbar from './Navbar'

//const inter = Ubuntu({ weight: '500', subsets: ["cyrillic"] })
const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Lucas Otanez',
  description: 'Web Portfolio',
  openGraph: {
    title: 'Lucas Otanez - Full Stack Engineer',
    description: 'Web Portfolio',
    images: [
      {
        url: 'src/img/thumbnail.png',
        width: 800,
        height: 600,
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
