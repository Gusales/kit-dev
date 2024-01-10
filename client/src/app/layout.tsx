import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header/index'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kit Dev',
  description: 'Seu Kit de Ferramentas para Melhorar suas Programação',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-zinc-950 h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
