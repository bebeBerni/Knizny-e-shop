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

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f6fa;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main.container {
  flex: 1;
  width: 100%;
  padding: 2rem;
  background-color: #f5f6fa;
}
</style>