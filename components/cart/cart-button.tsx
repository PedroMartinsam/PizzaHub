'use client'

import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/components/cart/cart-context'

export function CartButton() {
  const { itemCount, openCart } = useCart()

  return (
    <button onClick={openCart} className="relative rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:border-brand-500 hover:text-brand-500">
      <ShoppingBag size={18} />
      {itemCount > 0 ? (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-500 px-1.5 text-[11px] font-semibold text-white">
          {itemCount}
        </span>
      ) : null}
    </button>
  )
}
