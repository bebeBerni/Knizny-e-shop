<template>
  <div class="notfound">
    <div class="card">
      <h1>404</h1>
      <h2>Stránka nebola nájdená</h2>
      <p>URL adresa neexistuje alebo bola presunutá.</p>

      <div class="actions">
        <button @click="goHome">Domov</button>
        <button class="secondary" @click="goBooks">Knihy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    goHome() {
      this.$router.push('/')
    },
    goBooks() {
      this.$router.push('/knihy')
    }
  }
}
</script>

<style scoped>
.notfound {
  min-height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 16px;
}

.card {
  width: 100%;
  max-width: 650px;
  background: #fff;
  border-radius: 16px;
  padding: 34px;
  text-align: center;
  box-shadow: 0 12px 32px rgba(0,0,0,0.12);
}

h1 {
  margin: 0;
  font-size: 4rem;
  color: #1976d2;
}

h2 {
  margin: 10px 0 8px;
  color: #222;
}

p {
  margin: 0 0 22px;
  color: #555;
  line-height: 1.5;
}

.actions {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

button {
  padding: 12px 18px;
  border: none;
  border-radius: 12px;
  background: #1976d2;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: background-color .2s ease, transform .1s ease;
}

button:hover {
  background: #1565c0;
  transform: translateY(-1px);
}

.secondary {
  background: #f5f7fa;
  color: #1976d2;
}

.secondary:hover {
  background: #e9f2ff;
}
</style>
