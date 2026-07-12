'use client'

import { useCart } from '@/components/cart/cart-context'
import { CartDrawer } from '@/components/cart/cart-drawer'

export function CartShell() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, updateItem, clearCart } = useCart()

  return (
    <CartDrawer
      open={isOpen}
      onClose={closeCart}
      items={items.map((item) => ({
        product: item.product,
        quantity: item.quantity,
        size: item.size,
        crust: item.crust,
        extras: item.extras,
        note: item.note,
      }))}
      onUpdateQuantity={(productId, delta) => {
        const existingItem = items.find((item) => item.product.id === productId)
        if (existingItem) {
          updateQuantity(existingItem.key, delta)
        }
      }}
      onRemoveItem={(productId) => {
        const existingItem = items.find((item) => item.product.id === productId)
        if (existingItem) {
          removeItem(existingItem.key)
        }
      }}
      onUpdateItem={(productId, updates) => {
        const existingItem = items.find((item) => item.product.id === productId)
        if (existingItem) {
          updateItem(existingItem.key, updates)
        }
      }}
      onClear={clearCart}
    />
  )
}
