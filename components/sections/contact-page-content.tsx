import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/section-heading'
import { MessageCircle, Phone, MapPin, Instagram } from 'lucide-react'

export default function ContactPageContent() {
  return (
    <main className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="Contato" title="Entre em contato e transforme visitas em pedidos" description="O fluxo foi projetado para levar o usuário diretamente a um pedido pelo WhatsApp." />
        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)] lg:p-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-5 text-slate-600">
              <div className="flex items-center gap-3"><Phone size={18} className="text-[#D62828]" /> <span>(11) 99999-0000</span></div>
              <div className="flex items-center gap-3"><Instagram size={18} className="text-[#D62828]" /> <span>@pizzahub</span></div>
              <div className="flex items-center gap-3"><MapPin size={18} className="text-[#D62828]" /> <span>Rua das Pizzas, 123 - Centro</span></div>
            </div>
            <div>
              <Button href="/contact" variant="primary" icon={<MessageCircle size={16} />}>Fazer Pedido</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
