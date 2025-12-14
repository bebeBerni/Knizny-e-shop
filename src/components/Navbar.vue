<template>
    <nav class="navbar">
        <router-link to="/">Domov</router-link>
        <router-link to="/knihy">Knihy</router-link>
        <router-link to="/kosik">Košík ({{ totalItems }})</router-link>
    </nav>
</template>


<script>
import { useCartStore } from '@/stores/cart'


export default {
    name: 'Navbar',
    computed: {
        totalItems() {
            return useCartStore().totalItems
    }
    }
}
</script>


<style scoped>
.navbar {
    display: flex;
    gap: 2rem;
    background: #f4f4f4;
    padding: 1rem;
    align-items: center;
}
</style>