import { MapPin, Clock3, Truck, Receipt } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'

const zones = [
  { bairro: 'Vila Nova', taxa: 'R$ 6,50', tempo: '25-35 min' },
]

export default function DeliverySection() {
  return (
    <section className="border-b border-slate-200 bg-[#FFF7ED]/50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="Área de Entrega" title="Cobertura ampla e tempo de entrega eficiente" description="Uma experiência confiável para quem busca praticidade e agilidade." />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)]">
            <div className="flex items-center gap-3 text-[#D62828]"><MapPin size={20} /> <span className="font-semibold">Mapa de cobertura</span></div>
            <div className="mt-6 h-64 rounded-[1.5rem] border border-dashed border-slate-300 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.2),_transparent_70%)]" />
          </div>
          <div className="space-y-6">
            {zones.map((zone) => (
              <div key={zone.bairro} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)]">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">{zone.bairro}</h3>
                  <span className="rounded-full bg-[#FFF7ED] px-3 py-1 text-sm font-semibold text-[#D62828]">{zone.taxa}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-2"><Truck size={16} />  {zone.tempo}</div>
                  <div className="flex items-center gap-2"><Clock3 size={16} />  Entrega rápida</div>
                  <div className="flex items-center gap-2"><Receipt size={16} />  Pagamento na entrega</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
