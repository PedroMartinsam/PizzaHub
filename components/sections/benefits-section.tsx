import { Clock3, Leaf, Flame, BadgeCheck } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'

const benefits = [
  { icon: Clock3, title: 'Entrega rápida', description: 'Chegamos com rapidez e eficiência para o seu pedido.' },
  { icon: Leaf, title: 'Ingredientes selecionados', description: 'Produtos frescos e de qualidade superior em cada receita.' },
  { icon: Flame, title: 'Massa artesanal', description: 'Receita própria, fermentação natural e textura inconfundível.' },
  { icon: BadgeCheck, title: 'Atendimento premium', description: 'Atendimento humanizado e atenção especial em cada contato.' },
]

export default function BenefitsSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="Diferenciais" title="Por que clientes escolhem PizzaHub" description="Cada detalhe foi pensado para transmitir confiança, qualidade e experiência premium." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div key={benefit.title} className="rounded-[1.5rem] border border-slate-200 bg-[#FFFDF8] p-8 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF7ED] text-[#D62828]">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{benefit.title}</h3>
                <p className="mt-3 text-slate-600">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
