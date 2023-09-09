import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Navbar from './Navbar'

//const inter = Ubuntu({ weight: '500', subsets: ["cyrillic"] })
const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Lucas Otanez',
  description: 'Web Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta property="og:image" content='<generated>'/>
      <meta property="og:image:type" content='<generated>'/>
      <meta property="og:image:width" content='<generated>'/>
      <meta property="og:image:height" content='<generated>'/>

      <body className={outfit.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
