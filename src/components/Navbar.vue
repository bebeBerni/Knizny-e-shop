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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    gap: 2rem;
    background: #a8b9ca;      
    padding: 1rem;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    z-index: 1000;
}

.navbar a {
    text-decoration: none;
    color: #000000;           
    font-weight: 500;
    transition: color 0.3s, transform 0.2s;
}

.navbar a:hover {
    color: #0056b3;        
    transform: scale(1.05);
}
</style>