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
  background: #fff;
  border-bottom: 1px solid rgba(0,0,0,0.08);
}

.topbar {
  width: 100%;
  background: #eef2ff;
  color: #1e40af;
  font-weight: 700;
  font-size: 0.95rem;
  border-bottom: 1px solid rgba(30, 64, 175, 0.12);
}

.topbar-inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 10px 16px;
  text-align: center;
}

.sep { opacity: 0.55; margin: 0 8px; }

.nav {
  width: 100%;
}

.nav-inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 16px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.logo {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #2563eb;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.name {
  font-weight: 900;
  color: #111;
  font-size: 1.05rem;
}

.tag {
  color: #6b7280;
  font-size: 0.92rem;
  margin-top: 2px;
}

.links {
  display: flex;
  align-items: center;
  gap: 12px;
}

.link {
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: 800;
  color: #111;
  padding: 10px 12px;
  border-radius: 10px;
}

.link:hover {
  background: #f3f4f6;
}

.cta {
  border: 1px solid rgba(0,0,0,0.10);
  background: #2563eb;
  color: #fff;
  cursor: pointer;
  font-weight: 900;
  padding: 10px 14px;
  border-radius: 10px;
  position: relative;
}

.cta:hover { background: #1d4ed8; }

.badge {
  margin-left: 10px;
  background: #ef4444;
  color: #fff;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 900;
}

@media (max-width: 700px) {
  .nav-inner { flex-direction: column; align-items: stretch; }
  .links { justify-content: space-between; }
}
</style>