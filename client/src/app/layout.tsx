import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer } from '@/components/footer'

import './globals.css'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Kit Dev',
    template: '%s | Kit Dev'
  },
  description: 'Seu Kit de ferramentas para melhorar sua produtividade na programação.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
