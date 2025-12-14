<template>
    <div class="quantity-selector">
        <button @click="decrease">-</button>
        <input type="number" :value="value" @input="onInput($event)" min="1" />
        <button @click="increase">+</button>
    </div>
</template>


<script>
export default {
    name: 'QuantitySelector',
    props: {
    value: {
        type: Number,
        default: 1
    }
},
    methods: {
        increase() {
            this.$emit('input', this.value + 1)
        },

        decrease() {
            if (this.value > 1) this.$emit('input', this.value - 1)
        },

        onInput(e) {
            const v = Number(e.target.value) || 1
            if (v < 1) return
            this.$emit('input', v)
        }
    }
}
</script>


<style scoped>
.quantity-selector {
    display: flex;
    gap: 5px;
    align-items: center;
}

input { 
    width: 50px; 
    text-align: center 
}

</style>