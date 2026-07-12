import { Button } from '@/components/ui/button'
import { Clock3, Sparkles } from 'lucide-react'

export default function PromoSection() {
  return (
    <section className="border-b border-slate-200 bg-[#FFF7ED]/60 py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] border border-slate-200 bg-white px-6 py-10 shadow-[0_22px_55px_-30px_rgba(15,23,42,0.3)] lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D62828]/20 bg-[#FFF7ED] px-3 py-1 text-sm font-semibold text-[#D62828]">
            <Sparkles size={16} /> Promoção do dia
          </div>
          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">2 pizzas grandes + refrigerante por apenas R$ 49,90</h2>
          <p className="text-lg text-slate-600">Ofertas exclusivas por tempo limitado. Aproveite enquanto durar!</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#FFFDF8] px-4 py-3 text-slate-700">
            <Clock3 size={18} className="text-[#D62828]" />
            <div>
              <p className="text-sm text-slate-500">Termina em</p>
              <p className="font-semibold">02h 15m 40s</p>
            </div>
          </div>
          <Button href="/contact" variant="primary">Pedir Promoção</Button>
        </div>
      </div>
    </section>
  )
}
