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
        updateQuantity(val) {
            this.$emit('update-quantity', { id: this.item.id, quantity: val })
        }
}
}
</script>


<style scoped>
.cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
}
.info { 
    flex: 1 
}

</style>