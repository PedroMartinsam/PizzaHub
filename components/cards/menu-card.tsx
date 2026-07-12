'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '@/components/cart/cart-context'
import type { Product } from '@/data/products'
import { Button } from '@/components/ui/button'

type MenuCardProps = {
  product: Product
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

function piecesForLabel(label: string) {
  const l = label.toLowerCase()
  if (l.includes('pequena') || l.includes('peq') || l.includes('p')) return 4
  if (l.includes('média') || l.includes('media') || l === 'média' || l === 'media' || l.includes('m')) return 6
  if (l.includes('grande') || l.includes('g')) return 8
  return 6
}

export function MenuCard({ product }: MenuCardProps) {
  const { addItem } = useCart()
  const defaultSize = product.sizes?.[0]?.label ?? 'Média'
  const [selectedSize, setSelectedSize] = useState<string>(defaultSize)

  const standardizedSizes = ['Pequena', 'Média', 'Grande']
  const sizePrice = product.sizes?.find((s) => s.label.toLowerCase() === selectedSize.toLowerCase())?.price ?? 0
  const [selectedCrust, setSelectedCrust] = useState<string>(product.crusts?.[0]?.label ?? 'Sem Borda')

  const crustFallbackPrices: Record<string, number> = {
    'Sem Borda': 0,
    'Chocolate': 6,
    'Catupiry': 7,
  }

  const crustPrice = product.crusts?.find((c) => c.label.toLowerCase() === selectedCrust.toLowerCase())?.price ?? crustFallbackPrices[selectedCrust] ?? 0
  const extrasPrice = 0
  const displayPrice = product.price + sizePrice + crustPrice + extrasPrice

  return (
    <article className="group rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_18px_45px_-25px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(15,23,42,0.35)]">
      <div className="relative mb-4 h-48 overflow-hidden rounded-[1.25rem]">
        {product.image.startsWith('/') ? (
          <Image src={product.image} alt={product.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
        ) : (
          <img src={product.image} alt={product.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
        )}
      </div>
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">{product.title}</h3>
            {product.badge ? <span className="mt-2 inline-flex rounded-full bg-[#FFF7ED] px-3 py-1 text-xs font-semibold text-[#D62828]">{product.badge}</span> : null}
          </div>
          <span className="rounded-full bg-[#FFF7ED] px-3 py-1 text-sm font-semibold text-[#D62828]">{formatCurrency(displayPrice)}</span>
        </div>
        <p className="text-sm leading-6 text-slate-600">{product.description}</p>

        {product.type === 'pizza' ? (
          <div className="space-y-3">
            <div className="flex gap-2">
              {standardizedSizes.map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setSelectedSize(label)}
                  className={`rounded-full px-3 py-1 text-sm font-semibold transition ${label === selectedSize ? 'bg-[#D62828] text-white' : 'bg-slate-100 text-slate-700'}`}>
                  {label} • {piecesForLabel(label)}p
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              {['Sem Borda', 'Chocolate', 'Catupiry'].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSelectedCrust(c)}
                  className={`rounded-full px-3 py-1 text-sm font-semibold transition ${c === selectedCrust ? 'bg-[#D62828] text-white' : 'bg-slate-100 text-slate-700'}`}>
                  {c}
                </button>
              ))}
            </div>

            <Button onClick={() => addItem(product, { size: selectedSize, crust: selectedCrust })} variant="primary" className="w-full">Adicionar</Button>
          </div>
        ) : (
          <Button onClick={() => addItem(product, { size: selectedSize })} variant="primary" className="w-full">Adicionar</Button>
        )}
      </div>
    </article>
  )
}
