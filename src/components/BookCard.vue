<template>
    <div class="book-card">
        <img :src="book.image" :alt="book.title" class="cover" />


        <h3>{{ book.title }}</h3>
        <p class="author">{{ book.author }}</p>
        <p class="price">{{ book.price }} €</p>


        <button @click="$emit('add-to-cart', book)">Pridať do košíka</button>
    <router-link :to="`/knihy/${book.id}`">
        <button>Detail</button>
    </router-link>
    </div>
</template>


<script>
export default {
    name: 'BookCard',
    props: {
    book: {
        type: Object,
        required: true
    }
    }
}
</script>


<style scoped>
.book-card {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.cover {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.price {
    font-weight: bold;
}

button { 
    cursor: pointer; 
}

</style>