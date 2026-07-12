'use client'

import { useMemo, useState } from 'react'
import { MenuCard } from '@/components/cards/menu-card'
import { SectionHeading } from '@/components/ui/section-heading'
import { products, type Product } from '@/data/products'

const menuTabs = [
  { key: 'pizza', label: '🍕 Pizzas' },
  { key: 'bebida', label: '🥤 Bebidas' },
] as const

type MenuTab = (typeof menuTabs)[number]['key']

const categoryOrder: Record<MenuTab, string[]> = {
  pizza: ['Tradicionais', 'Especiais', 'Doces', 'Premium'],
  bebida: ['Refrigerantes', 'Sucos', 'Águas', 'Outros'],
}

function groupByCategory(items: Product[]) {
  return items.reduce<Record<string, Product[]>>((group, item) => {
    if (!group[item.category]) {
      group[item.category] = []
    }
    group[item.category].push(item)
    return group
  }, {})
}

export default function MenuPageContent() {
  const [activeTab, setActiveTab] = useState<MenuTab>('pizza')

  const filteredProducts = useMemo(
    () => products.filter((product) => product.type === activeTab),
    [activeTab],
  )

  const groupedProducts = useMemo(
    () => groupByCategory(filteredProducts),
    [filteredProducts],
  )

  return (
    <main className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cardápio"
          title="Um catálogo elegante e preparado para conversão"
          description="Filtre, escolha e converta com uma experiência premium."
        />

        <div className="mt-10 rounded-full bg-slate-100 p-1 shadow-sm">
          <div className="inline-flex overflow-hidden rounded-full bg-slate-100 p-1">
            {menuTabs.map((tab) => {
              const active = tab.key === activeTab
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={
                    active
                      ? 'rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-sm transition'
                      : 'rounded-full px-5 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white/80'
                  }
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-10 space-y-12">
          {categoryOrder[activeTab].map((category) => {
            const items = groupedProducts[category] ?? []
            if (items.length === 0) return null

            return (
              <section key={category} className="space-y-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#D62828]">{activeTab === 'pizza' ? 'Categoria' : 'Categoria'}</p>
                    <h2 className="text-2xl font-semibold text-slate-900">{category}</h2>
                  </div>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">{items.length} item{items.length > 1 ? 's' : ''}</span>
                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                  {items.map((item) => (
                    <MenuCard key={item.id} product={item} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </main>
  )
}
