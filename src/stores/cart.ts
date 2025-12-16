import { defineStore } from 'pinia'
import { watch } from 'vue'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: JSON.parse(localStorage.getItem('cart') || '[]')
  }),

  getters: {
    totalPrice: (state) =>
      state.cart.reduce((s, i) => s + i.price * i.quantity, 0),

    totalItems: (state) =>
      state.cart.reduce((s, i) => s + i.quantity, 0)
  },

  actions: {
    addToCart(book) {
      const found = this.cart.find(i => i.id === book.id)
      if (found) found.quantity += 1
      else this.cart.push({ ...book, quantity: 1 })
    },

    removeFromCart(id) {
      this.cart = this.cart.filter(i => i.id !== id)
    },

    updateQuantity({ id, quantity }) {
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

export function watchCartStore() {
  const store = useCartStore()

  watch(
    () => store.cart,
    (cart) => {
      localStorage.setItem('cart', JSON.stringify(cart))
    },
    { deep: true }
  )
}