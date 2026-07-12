import Image from 'next/image'
import { ArrowRight, Clock3, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(135deg,_#FFFDF8_0%,_#FFF7ED_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.16),_transparent_35%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D62828]/20 bg-white px-4 py-2 text-sm font-medium text-[#D62828] shadow-sm">
            <Clock3 size={16} /> Promoção do dia • 2 pizzas por R$ 49,90
          </div>
          <div className="space-y-5">
            <h1 className="max-w-2xl text-5xl font-black leading-[0.95] text-slate-900 sm:text-6xl lg:text-7xl">
              Pizzas premium que vendem mais em cada visita.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              Um template moderno, elegante e convertido para restaurantes que querem crescer com WhatsApp, estética premium e alta confiança.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/menu" variant="secondary">Ver Cardápio</Button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2"><Phone size={16} className="text-[#D62828]" /> (11) 99999-0000</div>
            <div className="flex items-center gap-2"><MapPin size={16} className="text-[#D62828]" /> Entrega em até 35 min</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -translate-y-6 rounded-[2rem] bg-gradient-to-br from-[#F59E0B]/20 to-[#D62828]/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.4)]">
            <Image src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80" alt="Pizza artesanal premium" width={900} height={1100} className="h-[560px] w-full rounded-[1.4rem] object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
