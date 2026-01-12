<template>
  <header class="header">
    <div class="topbar">
      <div class="topbar-inner">
        📦 Doprava zdarma od 25€ <span class="sep">•</span> ⭐ 4.9/5 <span class="sep">•</span> 🔥 Novinky každý týždeň
      </div>
    </div>

    <div class="nav">
      <div class="nav-inner">
        <div class="brand" @click="goTo('/')">
          <div class="logo">📚</div>
          <div class="brand-text">
            <div class="name">Knižný E-shop</div>
            <div class="tag">najlepšie knihy na jednom mieste</div>
          </div>
        </div>

        <div class="links">
          <button class="link" @click="goTo('/')">Domov</button>
          <button class="link" @click="goTo('/knihy')">Knihy</button>
          <button class="link" @click="goTo('/o-nas')">O nás</button>
          <button class="link" @click="goTo('/kontakt')">Kontakt</button>

          <button class="cta" @click="goTo('/kosik')">
            Košík
            <span v-if="totalItems > 0" class="badge">{{ totalItems }}</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useCartStore } from '@/stores/cart'

export default {
  name: 'Navbar',
  computed: {
    totalItems() {
      return useCartStore().totalItems
    }
  },
  methods: {
    goTo(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.topbar {
  background: #111827;
  color: #e5e7eb;
  font-size: 0.85rem;
}

.topbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  text-align: center;
}

.nav {
  background: white;
  border-bottom: 1px solid #e5e7eb;
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.9rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap; 
}

.brand {
  display: flex;
  gap: 0.8rem;
  cursor: pointer;
  align-items: center;
  min-width: 220px;
}

.logo {
  font-size: 2rem;
}

.name {
  font-weight: 800;
}

.tag {
  font-size: 0.8rem;
  color: #6b7280;
}

.links {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap; 
  justify-content: flex-end;
}

.link {
  background: none;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 0.95rem;
  padding: 0.45rem 0.7rem;
  border-radius: 8px;
}

.link:hover {
  color: #2563eb;
  border-color: #dbeafe;
  background: #eff6ff;
}

.cta {
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.55rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  font-weight: 700;
}

.cta:hover {
  background: #1e40af;
}

.badge {
  background: #ef4444;
  color: white;
  border-radius: 999px;
  font-size: 0.75rem;
  padding: 0.15rem 0.5rem;
  margin-left: 0.5rem;
}

@media (max-width: 700px) {
  .nav-inner {
    justify-content: center;
    text-align: center;
  }

  .brand {
    justify-content: center;
    min-width: unset;
  }

  .links {
    justify-content: center;
  }

  .topbar-inner {
    font-size: 0.78rem;
  }
}
</style>