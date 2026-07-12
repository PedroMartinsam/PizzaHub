import { MenuCard } from '@/components/cards/menu-card'
import { SectionHeading } from '@/components/ui/section-heading'
import { products } from '@/data/products'

const items = products.filter((product) => ['Mais Pedida', 'Nova', 'Especial'].includes(product.badge ?? '')).slice(0, 3)

export default function PopularSection() {
  return (
    <section className="border-b border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="Mais Pedidas" title="As preferidas dos clientes e mais vendidas" description="Produtos que unem sabor, apresentação e alto potencial de conversão." />
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <MenuCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
