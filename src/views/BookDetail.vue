<template>
    <div v-if="book" class="detail">

        <button class="back-btn" @click="goBack"> ← Späť na knihy </button>

        <img :src="book.image" class="big-cover" />
        <h2>{{ book.title }}</h2>
        <p><strong>Autor:</strong> {{ book.author }}</p>
        <p><strong>Žáner:</strong> {{ book.genre }}</p>
        <p class="price">{{ book.price }} €</p>


        <button @click="addToCart(book)">Pridať do košíka</button>
    </div>
    <div v-else>
        <p>Kniha nebola nájdená.</p>
    </div>
</template>


<script>
import { useBooksStore } from '../stores/books'
import { useCartStore } from '../stores/cart'


export default {
    name: 'BookDetail',
    data() {
    return {
        book: null
    }
},
    created() {
        const booksStore = useBooksStore()
        const id = Number(this.$route.params.id)
        this.book = booksStore.getBookById(id)
},
methods: {
    addToCart(book) {
        useCartStore().addToCart(book)
        this.$router.push('/kosik')
    },
    goBack() {
        this.$router.push('/knihy') 
    }
}
}
</script>


<style scoped>
.detail {
    max-width: 800px;
    margin: 40px auto;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.big-cover {
    width: 240px;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

h2 {
    margin-top: 16px;
    font-size: 1.8rem;
    text-align: center;
    color: #333;
}

p {
    font-size: 1rem;
    color: #555;
    margin: 4px 0;
}

p strong {
    color: #222;
}

.price {
    font-size: 1.4rem;
    font-weight: bold;
    color: #2e7d32;
    margin: 12px 0;
}

button {
    margin-top: 16px;
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