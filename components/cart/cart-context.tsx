'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { toast } from 'sonner'
import type { Product } from '@/data/products'

export type CartItem = {
  key: string
  product: Product
  quantity: number
  size: string
  crust: string
  extras: string[]
  note: string
}

type CartContextType = {
  items: CartItem[]
  isOpen: boolean
  itemCount: number
  subtotal: number
  openCart: () => void
  closeCart: () => void
  addItem: (product: Product, options?: Partial<CartItem>) => void
  updateQuantity: (key: string, delta: number) => void
  removeItem: (key: string) => void
  updateItem: (key: string, updates: Partial<CartItem>) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

function createCartItem(product: Product, overrides?: Partial<CartItem>): CartItem {
  const defaultSize = product.sizes?.[0]?.label ?? 'Média'
  const defaultCrust = product.crusts?.[0]?.label ?? 'Tradicional'

  const base: CartItem = {
    key: `${product.id}-${defaultSize}-${defaultCrust}-`,
    product,
    quantity: 1,
    size: defaultSize,
    crust: defaultCrust,
    extras: [],
    note: '',
  }

  if (!overrides) return base

  const result: CartItem = {
    ...base,
    ...overrides,
  }

  // ensure key reflects chosen options
  result.key = `${product.id}-${result.size ?? defaultSize}-${result.crust ?? defaultCrust}-${(result.extras ?? []).join('|')}-${result.note ?? ''}`

  return result
}

function getItemTotal(item: CartItem) {
  const sizePrice = item.product.sizes?.find((size) => size.label === item.size)?.price ?? 0
  const crustPrice = item.product.crusts?.find((crust) => crust.label === item.crust)?.price ?? 0
  const extrasPrice = item.extras.reduce((acc, extraLabel) => {
    const extra = item.product.extras?.find((extra) => extra.label === extraLabel)
    return acc + (extra?.price ?? 0)
  }, 0)

  return (item.product.price + sizePrice + crustPrice + extrasPrice) * item.quantity
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const storedItems = window.localStorage.getItem('pizzahub-cart')

    if (storedItems) {
      try {
        setItems(JSON.parse(storedItems))
      } catch {
        window.localStorage.removeItem('pizzahub-cart')
      }
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('pizzahub-cart', JSON.stringify(items))
  }, [items])

  const itemCount = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items])
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + getItemTotal(item), 0), [items])

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const addItem = (product: Product, options?: Partial<CartItem>) => {
    const baseItem = createCartItem(product, options)
    const existingIndex = items.findIndex((item) => item.product.id === product.id && item.size === baseItem.size && item.crust === baseItem.crust && item.extras.join('|') === baseItem.extras.join('|') && item.note === baseItem.note)

    if (existingIndex >= 0) {
      setItems((current) => current.map((item, index) => index === existingIndex ? { ...item, quantity: item.quantity + 1 } : item))
    } else {
      setItems((current) => [{ ...baseItem, key: `${product.id}-${baseItem.size}-${baseItem.crust}-${baseItem.extras.join('|')}-${baseItem.note}` }, ...current])
    }

    setIsOpen(true)
    toast.success(`${product.title} adicionado ao carrinho.`)
  }

  const updateQuantity = (itemKey: string, delta: number) => {
    setItems((current) => current.flatMap((item) => {
      if (item.key !== itemKey) return [item]
      const nextQuantity = item.quantity + delta
      return nextQuantity > 0 ? [{ ...item, quantity: nextQuantity }] : []
    }))
  }

  const removeItem = (itemKey: string) => {
    setItems((current) => current.filter((item) => item.key !== itemKey))
  }

  const updateItem = (itemKey: string, updates: Partial<CartItem>) => {
    setItems((current) => current.map((item) => item.key === itemKey ? { ...item, ...updates } : item))
  }

  const clearCart = () => {
    setItems([])
    toast.success('Carrinho limpo.')
  }

  return (
    <CartContext.Provider value={{ items, isOpen, itemCount, subtotal, openCart, closeCart, addItem, updateQuantity, removeItem, updateItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
