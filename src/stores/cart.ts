import { defineStore } from 'pinia'


export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: []
    }),
getters: {
    totalPrice: (state) => state.cart.reduce((s, i) => s + i.price * i.quantity, 0),
    totalItems: (state) => state.cart.reduce((s, i) => s + i.quantity, 0)
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
        const item = this.cart.find(i => i.id === id)
        if (item) item.quantity = quantity
    },

    clearCart() {
        this.cart = []
    }
}
})