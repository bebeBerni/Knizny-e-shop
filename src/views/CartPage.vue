<template>
    <div class="cart-page">
        <h1>Košík</h1>
            <div v-if="cart.length">
                <cart-item v-for="item in cart" :key="item.id" :item="item" @remove="removeItem" @update-quantity="updateQuantity"/>
                <div class="summary">
                    <p>Počet položiek: {{ totalItems }}</p>
                    <p>Celkom: {{ totalPrice.toFixed(2) }} €</p>
                    <button @click="checkout">Objednať</button>
                </div>
            </div>


        <div v-else>
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
        alert('Simulované odoslanie objednávky')
    }
}
}
</script>


<style scoped>
.summary { 
    margin-top: 1rem 
}

</style>