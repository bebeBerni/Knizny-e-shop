<template>
    <div class="books-list">
        <h1>Knihy</h1>
        <div class="grid">
            <book-card v-for="b in books" :key="b.id" :book="b" @add-to-cart="addToCart"/>
        </div>
    </div>
</template>


<script>
import BookCard from '@/components/BookCard.vue'
import { useBooksStore } from '@/stores/books'
import { useCartStore } from '@/stores/cart'


export default {
    name: 'BooksList',
    components: { BookCard },
    data() {
        return {
        books: []
        }
},
    created() {
        this.books = useBooksStore().books
},
    methods: {
        addToCart(book) {
            useCartStore().addToCart(book)
        }
}
}
</script>


<style scoped>
.books-list {
  width: 100%;
  padding: 3rem 2rem;
}

.books-list h1 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  color: #2c3e50;
}

.grid {
  display: flex;             
  flex-wrap: wrap;            
  gap: 2rem;
  justify-content: center;   
}

</style>