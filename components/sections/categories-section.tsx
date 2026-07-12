import { SectionHeading } from '@/components/ui/section-heading'

const categories = [
  { title: 'Tradicionais', description: 'Sabores clássicos com massa crocante e ingredientes bem balanceados.' },
  { title: 'Especiais', description: 'Combinações premium com toque gourmet e apresentação impecável.' },
  { title: 'Doces', description: 'Pizzas doces com frutas, chocolate e coberturas irresistíveis.' },
  { title: 'Bebidas', description: 'Refrigerantes, sucos e drinks para acompanhar sua experiência.' },
]

export default function CategoriesSection() {
  return (
    <section className="border-b border-slate-200 bg-[#FFF7ED]/60 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="Categorias" title="Escolha o sabor ideal para cada momento" description="Uma seleção pensada para agradar desde os tradicionais até os mais ousados." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div key={category.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)]">
              <h3 className="text-2xl font-semibold text-slate-900">{category.title}</h3>
              <p className="mt-3 text-slate-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
