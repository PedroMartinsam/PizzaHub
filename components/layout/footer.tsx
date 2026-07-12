import Link from 'next/link'
import { Instagram, Phone, MapPin, Clock3 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#FFF7ED]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-2xl font-black text-slate-900">PizzaHub</p>
          <p className="mt-4 max-w-sm text-slate-600">Template premium para pizzarias que desejam vender mais via WhatsApp com uma experiência elegante e conversiva.</p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-slate-900">Links</h3>
          <div className="flex flex-col gap-3 text-slate-600">
            <Link href="/menu" className="hover:text-[#D62828]">Cardápio</Link>
            <Link href="/promotions" className="hover:text-[#D62828]">Promoções</Link>
            <Link href="/contact" className="hover:text-[#D62828]">Contato</Link>
            <Link href="/privacy" className="hover:text-[#D62828]">Política de Privacidade</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-slate-900">Contato</h3>
          <div className="space-y-3 text-sm text-slate-600">
            <p className="flex items-center gap-2"><Phone size={16} className="text-[#D62828]" /> (11) 99999-0000</p>
            <p className="flex items-center gap-2"><Instagram size={16} className="text-[#D62828]" /> @pizzahub</p>
            <p className="flex items-center gap-2"><MapPin size={16} className="text-[#D62828]" /> Rua das Pizzas, 123</p>
            <p className="flex items-center gap-2"><Clock3 size={16} className="text-[#D62828]" /> 18h às 23h</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
