<template>
    <div class="cart-item">
        <div class="info">
            <h4>{{ item.title }}</h4>
            <p>{{ item.price }} €</p>
        </div>

        <quantity-selector :value="item.quantity" @input="updateQuantity" />
        
        <button @click="$emit('remove', item.id)">Odstrániť</button>
    </div>
</template>


<script>
import QuantitySelector from './QuantitySelector.vue'


export default {
    name: 'CartItem',
    components: { QuantitySelector },
    props: {
    item: {
        type: Object,
        required: true
    }
},
    methods: {
    updateQuantity(payload) {
      const value = typeof payload === 'number' ? payload : Number(payload?.target?.value)

      if (!Number.isFinite(value)) return

      this.$emit('update-quantity', { id: this.item.id, quantity: value })
    }
  }
}
</script>


<style scoped>
.cart-item {
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
    gap: 16px;

    background: #ffffff;
    padding: 18px 22px;
    margin-bottom: 14px;

    border-radius: 14px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

.info h4 {
    margin: 0 0 6px 0;
    font-size: 1.1rem;
    color: #222;
}

.info p {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    color: #2e7d32;
}

.cart-item button {
    background: transparent;
    border: none;
    color: #d32f2f;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    padding: 6px 8px;

    transition: color 0.2s ease, transform 0.1s ease;
}

.cart-item button:hover {
    color: #b71c1c;
    transform: scale(1.05);
}

</style>