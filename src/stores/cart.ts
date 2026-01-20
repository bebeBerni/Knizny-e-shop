import { defineStore } from 'pinia'
import { watch } from 'vue'

export interface CartItem {
  id: number
  title: string
  author: string
  price: number
  image: string
  genre: string
  quantity: number
}

export type BookLike = Omit<CartItem, 'quantity'>

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem('cart')
    if (!raw) return []
    const parsed = JSON.parse(raw) as CartItem[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: loadCart() as CartItem[]
  }),

  getters: {
    totalPrice: (state): number => {
      let sum = 0
      for (const item of state.cart) {
        sum += item.price * item.quantity
      }
      return sum
    },

    totalItems: (state): number => {
      let count = 0
      for (const item of state.cart) {
        count += item.quantity
      }
      return count
    }
  },

  actions: {
    addToCart(book: BookLike) {
      const item = this.cart.find(i => i.id === book.id)
      if (item) {
        item.quantity += 1
      } else {
        this.cart.push({ ...book, quantity: 1 })
      }
    },

    removeFromCart(id: number) {
      this.cart = this.cart.filter(i => i.id !== id)
    },

    updateQuantity(id: number, quantity: number) {
      const q = Number(quantity)
      if (!Number.isFinite(q)) return

      const item = this.cart.find(i => i.id === id)
      if (!item) return

      if (q <= 0) {
        this.removeFromCart(id)
      } else {
        item.quantity = q
      }
    },

    clearCart() {
      this.cart = []
    }
  }
})

export function watchCartStore(): void {
  const store = useCartStore()

  watch(
    () => store.cart,
    (cart) => {
      localStorage.setItem('cart', JSON.stringify(cart))
    },
    { deep: true }
  )
}
