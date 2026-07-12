import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/section-heading'
import { Sparkles, Clock3 } from 'lucide-react'

export default function PromotionsPageContent() {
  return (
    <main className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="Promoções" title="Campanhas premium para aumentar cada pedido" description="Estruture ofertas especiais com foco em urgência, valor e conversão." />
        <div className="mt-12 space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D62828]/20 bg-[#FFF7ED] px-3 py-1 text-sm font-semibold text-[#D62828]">
                  <Sparkles size={16} /> Oferta Especial
                </div>
                <h2 className="mt-4 text-3xl font-black text-slate-900">2 pizzas + refrigerante por R$ 49,90</h2>
                <p className="mt-3 max-w-2xl text-slate-600">Ideal para famílias, grupos e clientes que buscam maior valor percebido em cada compra.</p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#FFFDF8] px-4 py-3 text-slate-700">
                <Clock3 size={18} className="text-[#D62828]" />
                <span className="font-semibold">Válido até domingo</span>
              </div>
            </div>
            <div className="mt-8">
              <Button href="/contact" variant="primary">Pedir Promoção</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
