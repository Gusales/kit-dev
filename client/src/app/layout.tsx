import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ptBr, enUs } from "@/languages/languages.json";
import { Header } from '@/components/Header/index'
import { Footer } from '@/components/Footer/index'
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
    <html lang="pt-br">
      <body className={`${inter.className} bg-zinc-950 h-screen`}>
        <Header langueBR={ptBr} langueEn={enUs}/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
