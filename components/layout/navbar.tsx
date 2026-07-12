import Link from 'next/link'
import { Menu, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CartButton } from '@/components/cart/cart-button'

const links = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Cardápio' },
  { href: '/promotions', label: 'Promoções' },
  { href: '/about', label: 'Sobre' },
  { href: '/contact', label: 'Contato' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D62828] text-lg font-black text-white">PH</div>
          <div>
            <p className="text-lg font-black tracking-wide text-slate-900">PizzaHub</p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Template Premium</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-[#D62828]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/contact" variant="secondary" className="hidden sm:flex">
            <PhoneCall size={16} />
            Pedir Agora
          </Button>
          <CartButton />
          <button className="rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-sm md:hidden">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
