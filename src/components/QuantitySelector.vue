<template>
    <div class="quantity-selector">
        <button @click="decrease">-</button>
        <input type="number" :value="value" min="1" @input="onInput" @blur="onBlur"/>
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
    if (this.value > 1) {
      this.$emit('input', this.value - 1)
    }
  },

  onInput(e) {
    const raw = e.target.value
    if (raw === '') return

    const v = Number(raw)
    if (!Number.isFinite(v)) return

    this.$emit('input', v)
  },

  onBlur(e) {
    let v = Number(e.target.value)

    if (!Number.isFinite(v) || v < 1) {
      this.$emit('input', 1)
    }
  }
}
}
</script>


<style scoped>
.quantity-selector {
    display: flex;
    align-items: center;
    gap: 6px;

    background: #f5f7fa;
    padding: 6px;
    border-radius: 10px;
}

.quantity-selector button {
    width: 34px;
    height: 34px;

    border: none;
    border-radius: 8px;
    background: #1976d2;
    color: #fff;

    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s ease, transform 0.1s ease;
}

.quantity-selector button:hover {
    background: #1565c0;
    transform: scale(1.05);
}

.quantity-selector button:active {
    transform: scale(1);
}

.quantity-selector input {
    width: 44px;
    height: 34px;

    border: none;
    border-radius: 6px;
    text-align: center;

    font-size: 1rem;
    font-weight: 600;
    color: #333;

    background: #ffffff;
}

</style>