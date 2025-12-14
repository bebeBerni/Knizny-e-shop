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
  background-color: #ffffff;
  border-radius: 16px;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
  max-width: 260px;
  margin: 0 auto;

  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.book-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.15);
}

.cover {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 0.5rem;
}

.book-card h3 {
  font-size: 1.05rem;
  color: #2c3e50;
}

.author {
  font-size: 0.9rem;
  color: #777;
}

.price {
  font-size: 1.1rem;
  font-weight: 700;
  color: #27ae60;
  margin-top: auto; 
}

button {
  padding: 0.6rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

button:first-of-type {
  background-color: #3498db;
  color: #fff;
}

button:first-of-type:hover {
  background-color: #2980b9;
  transform: translateY(-1px);
}

a button {
  background-color: #ecf0f1;
  color: #333;
}

a button:hover {
  background-color: #dcdde1;
}
</style>