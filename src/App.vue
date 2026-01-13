<template>
  <div id="app">
    <Navbar />

    <main class="container">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { watchCartStore } from '@/stores/cart'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  created() {
    watchCartStore()
  }
}
</script>

<style scoped>
  :global(*) {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  width: 100%;
  background: #f6f7fb;
  padding: 3rem 1rem;
}

.container > * {
  max-width: 1200px;
  margin: 0 auto;
}
</style>