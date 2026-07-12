'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ShoppingBag, Trash2, Plus, Minus, X, MessageCircle, ArrowRight } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { toast } from 'sonner'
import { siteConfig } from '@/constants/site'
import type { Product } from '@/data/products'

export type CartItem = {
  product: Product
  quantity: number
  size: string
  crust: string
  extras: string[]
  note: string
}

type CartDrawerProps = {
  open: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (id: string, delta: number) => void
  onRemoveItem: (id: string) => void
  onUpdateItem: (id: string, updates: Partial<CartItem>) => void
  onClear: () => void
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

function buildWhatsAppMessage(items: CartItem[], subtotal: number) {
  const total = subtotal

  const message = [
    '🍕 Novo Pedido',
    '',
    'Itens do pedido',
    '',
    ...items.flatMap((item) => {
      const sizePrice = item.product.sizes?.find((size) => size.label === item.size)?.price ?? 0
      const crustPrice = item.product.crusts?.find((crust) => crust.label === item.crust)?.price ?? 0
      const extrasPrice = item.extras.reduce((acc, extraLabel) => {
        const extra = item.product.extras?.find((extra) => extra.label === extraLabel)
        return acc + (extra?.price ?? 0)
      }, 0)
      const value = (item.product.price + sizePrice + crustPrice + extrasPrice) * item.quantity
      return [
        `• ${item.product.title} (${item.size} • ${item.crust})`,
        `Quantidade: ${item.quantity}`,
        `Valor: ${formatCurrency(value)}`,
        item.note ? `Observação: ${item.note}` : '',
        '',
      ]
    }),
    'Subtotal:',
    `${formatCurrency(subtotal)}`,
    '',   
    
    'Total:',
    `${formatCurrency(total)}`,
  ].filter(Boolean)

  return encodeURIComponent(message.join('\n'))
}

export function CartDrawer({ open, onClose, items, onUpdateQuantity, onRemoveItem, onUpdateItem, onClear }: CartDrawerProps) {
  const subtotal = useMemo(() => items.reduce((acc, item) => {
    const sizePrice = item.product.sizes?.find((size) => size.label === item.size)?.price ?? 0
    const crustPrice = item.product.crusts?.find((crust) => crust.label === item.crust)?.price ?? 0
    const extrasPrice = item.extras.reduce((accExtra, extraLabel) => {
      const extra = item.product.extras?.find((extra) => extra.label === extraLabel)
      return accExtra + (extra?.price ?? 0)
    }, 0)
    return acc + (item.product.price + sizePrice + crustPrice + extrasPrice) * item.quantity
  }, 0), [items])

  const total = subtotal

  const handleCheckout = () => {
    if (!items.length) {
      toast.error('Seu carrinho está vazio.')
      return
    }

    const message = buildWhatsAppMessage(items, subtotal)
    window.open(`https://wa.me/55${siteConfig.whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank', 'noopener,noreferrer')
    toast.success('Pedido preparado! Você será redirecionado para o WhatsApp.')
    onClose()
  }

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-slate-950/40 backdrop-blur-sm" onClick={onClose} />
          <motion.aside initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 24, stiffness: 180 }} className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-slate-200 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">Seu pedido</p>
                <h2 className="text-xl font-semibold text-slate-900">Carrinho</h2>
              </div>
              <button onClick={onClose} className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-100">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                  <ShoppingBag size={40} className="text-brand-500" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">Seu carrinho está vazio</h3>
                  <p className="mt-2 text-sm text-slate-500">Adicione uma pizza e monte seu pedido com facilidade.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => {
                    const sizePrice = item.product.sizes?.find((size) => size.label === item.size)?.price ?? 0
                    const crustPrice = item.product.crusts?.find((crust) => crust.label === item.crust)?.price ?? 0
                    const extrasPrice = item.extras.reduce((acc, extraLabel) => {
                      const extra = item.product.extras?.find((extra) => extra.label === extraLabel)
                      return acc + (extra?.price ?? 0)
                    }, 0)
                    const itemSubtotal = (item.product.price + sizePrice + crustPrice + extrasPrice) * item.quantity

                    return (
                      <div key={`${item.product.id}-${item.size}-${item.crust}-${item.note}`} className="rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-semibold text-slate-900">{item.product.title}</p>
                            <p className="mt-1 text-sm text-slate-500">{item.size} • {item.crust}</p>
                          </div>
                          <button onClick={() => onRemoveItem(item.product.id)} className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-red-500">
                            <Trash2 size={16} />
                          </button>
                        </div>

                        {item.extras.length > 0 ? (
                          <p className="mt-2 text-sm text-slate-500">Extras: {item.extras.join(', ')}</p>
                        ) : null}

                        {item.note ? <p className="mt-2 text-sm text-slate-500">Obs: {item.note}</p> : null}

                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1">
                            <button onClick={() => onUpdateQuantity(item.product.id, -1)} className="rounded-full p-1.5 text-slate-600 transition hover:bg-white"><Minus size={15} /></button>
                            <span className="min-w-6 text-center text-sm font-semibold text-slate-900">{item.quantity}</span>
                            <button onClick={() => onUpdateQuantity(item.product.id, 1)} className="rounded-full p-1.5 text-slate-600 transition hover:bg-white"><Plus size={15} /></button>
                          </div>
                          <p className="text-sm font-semibold text-slate-900">{formatCurrency(itemSubtotal)}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            <div className="border-t border-slate-200 bg-slate-50 p-6">
              <div className="space-y-3 rounded-[1.25rem] border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between border-t border-slate-200 pt-3 text-base font-semibold text-slate-900">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <button onClick={onClear} className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">Esvaziar</button>
                <button onClick={handleCheckout} className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                  <MessageCircle size={16} /> Finalizar Pedido
                </button>
              </div>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  )
}
