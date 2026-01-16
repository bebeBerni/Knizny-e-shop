<template>
  <div class="cart-page">
    <h1>Košík</h1>

    <button class="back-btn" @click="goBack"> ← Späť na knihy </button>

    <div v-if="cart.length" class="checkout-layout">
      
      <div class="cart-items">
        <cart-item v-for="item in cart" :key="item.id" :item="item" @remove="removeItem" @update-quantity="updateQuantity"/>
      </div>

      <div class="summary">
        <p>Počet položiek: {{ totalItems }}</p>
        <p>Celkom: {{ totalPrice.toFixed(2) }} €</p>
        <button @click="checkout">Objednať</button>
      </div>

    </div>

    <div v-else class="empty-cart">
      <p>Košík je prázdny.</p>
    </div>
  </div>
</template>


<script>
import CartItem from '@/components/CartItem.vue'
import { useCartStore } from '@/stores/cart.ts'


export default {
    name: 'CartPage',
    components: { CartItem },
    data() {
        return {
            cart: []
        }
},
computed: {
    totalItems() {
        return useCartStore().totalItems
    },

    totalPrice() {
        return useCartStore().totalPrice
    }
},
    created() {
        this.cart = useCartStore().cart
    },
methods: {
    removeItem(id) {
        useCartStore().removeFromCart(id)
        this.cart = useCartStore().cart
    },

    updateQuantity({ id, quantity }) {
        useCartStore().updateQuantity({ id, quantity })
        this.cart = useCartStore().cart
    },

    checkout() {
      const cartStore = useCartStore()

      alert('Objednávka bola úspešne odoslaná 🎉')

      cartStore.clearCart()  
      this.cart = []        
    },

    goBack() {
        this.$router.push('/knihy') 
    }
}
}
</script>


<style scoped>
.cart-page {
  max-width: 1200px;
  margin: 50px auto;
  padding: 0 20px;
}

.cart-page h1 {
  font-size: 2.3rem;
  margin-bottom: 24px;
  color: #222;
}

.checkout-layout {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 32px;
  align-items: start;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.summary {
  position: sticky;
  top: 20px;

  background: #fff;
  padding: 26px;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.summary p {
  margin: 10px 0;
  font-size: 1.05rem;
  color: #444;
}

.summary p:last-of-type {
  font-size: 1.35rem;
  font-weight: 800;
  color: #2e7d32;
  margin-top: 16px;
}

.summary button {
  width: 100%;
  margin-top: 22px;
  padding: 16px;
  font-size: 1.1rem;
  font-weight: 700;

  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  transition: transform 0.1s ease, background-color 0.2s ease;
}

.summary button:hover {
  background: #1565c0;
  transform: translateY(-2px);
}

.cart-page > div:last-child p {
  background: #fff;
  padding: 22px;
  border-radius: 14px;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.08);
}

.empty-cart {
    margin-top: 40px;
    padding: 40px 20px;
    text-align: center;

    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
}

.empty-cart p {
    font-size: 1.4rem;
    font-weight: 600;
    color: #555;
}

button {
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: 600;
    background-color: #1976d2;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
}

button:hover {
    background-color: #1565c0;
    transform: translateY(-1px);
}

button:active {
    transform: translateY(0);
}

</style>