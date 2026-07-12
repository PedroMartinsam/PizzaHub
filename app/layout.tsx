import './globals.css'
import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Toaster } from 'sonner'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { CartProvider } from '@/components/cart/cart-context'
import { CartShell } from '@/components/cart/cart-shell'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })

export const metadata: Metadata = {
  title: 'PizzaHub | Template Premium para Pizzarias',
  description: 'Template moderno e otimizado para transformar visitantes em pedidos pelo WhatsApp.',
  keywords: ['pizzaria', 'delivery', 'whatsapp', 'template', 'nextjs'],
  openGraph: {
    title: 'PizzaHub',
    description: 'Template premium para pizzarias com alta conversão.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${jakarta.variable} font-sans bg-[#FFFDF8] text-slate-800`}>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <CartShell />
          <Toaster richColors position="top-right" />
        </CartProvider>
      </body>
    </html>
  )
}
