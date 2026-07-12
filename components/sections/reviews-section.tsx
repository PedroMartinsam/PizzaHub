import { SectionHeading } from '@/components/ui/section-heading'

const reviews = [
  {
    name: 'Marina L.',
    text: 'A experiência foi excelente do começo ao fim. A pizza chegou quentinha e com apresentação impecável.',
  },
  {
    name: 'Rafael T.',
    text: 'O site é lindo, rápido e me fez pedir com muita facilidade pelo WhatsApp. Muito profissional.',
  },
  {
    name: 'Patrícia M.',
    text: 'As fotos e a estrutura deixam a marca muito mais forte. Parece uma grande empresa.',
  },
]

export default function ReviewsSection() {
  return (
    <section className="border-b border-slate-200 bg-[#FFF7ED]/50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="Avaliações" title="Confiança que se transforma em pedidos" description="Clientes percebem a diferença de um template premium e uma experiência bem construída." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)]">
              <div className="text-2xl font-black tracking-[0.3em] text-[#D62828]">★★★★★</div>
              <p className="mt-4 text-slate-600">“{review.text}”</p>
              <p className="mt-6 font-semibold text-slate-900">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
