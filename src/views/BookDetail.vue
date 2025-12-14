<template>
    <div v-if="book" class="detail">
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
    }
}
}
</script>


<style scoped>
.big-cover { 
    width: 200px 
}

.price { 
    font-weight: bold 
}
</style>