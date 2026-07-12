import { MapPin, Phone, Instagram, Clock3, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/section-heading'

export default function ContactSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="Contato" title="Pronto para vender mais e converter mais pedidos" description="Tudo preparado para transformar cada visita em um novo pedido pelo WhatsApp." />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-[#FFFDF8] p-8 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)]">
            <div className="space-y-6 text-slate-600">
              <div className="flex items-center gap-3"><Phone size={18} className="text-[#D62828]" /> <span>(11) 99999-0000</span></div>
              <div className="flex items-center gap-3"><Instagram size={18} className="text-[#D62828]" /> <span>@pizzahub</span></div>
              <div className="flex items-center gap-3"><MapPin size={18} className="text-[#D62828]" /> <span>Rua das Pizzas, 123 - Centro</span></div>
              <div className="flex items-center gap-3"><Clock3 size={18} className="text-[#D62828]" /> <span>Segunda a Domingo • 18h às 23h</span></div>
            </div>
            <div className="mt-8">
              <Button href="/contact" variant="primary" icon={<MessageCircle size={16} />}>Fazer Pedido</Button>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)]">
            <div className="h-72 rounded-[1.5rem] border border-dashed border-slate-300 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.16),_transparent_70%)]" />
          </div>
        </div>
      </div>
    </section>
  )
}
