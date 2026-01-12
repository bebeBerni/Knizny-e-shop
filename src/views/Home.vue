<template>
  <div class="home">
    <section class="hero">
      <div class="hero-inner">
        <h1>Knižný e-shop, ktorý si zamiluješ</h1>
        <p>
          Najlepšie tituly, rýchle doručenie a zľavy každý týždeň.
          Vyber si knihu podľa žánru a čítaj ešte dnes.
        </p>

        <div class="actions">
          <button class="primary" @click="goTo('/knihy')">Prejsť na knihy</button>
          <button class="ghost" @click="goTo('/kosik')">Pozrieť košík</button>
        </div>

        <div class="trust">
          <span>⭐ 4.9/5</span>
          <span>🚚 Doručenie 24–48h</span>
          <span>🔒 Bezpečná platba</span>
        </div>
      </div>
    </section>

    <section class="benefits">
      <div class="benefit">
        <div class="icon">⚡</div>
        <div>
          <h4>Rýchle doručenie</h4>
          <p>Objednávky odosielame každý pracovný deň.</p>
        </div>
      </div>

      <div class="benefit">
        <div class="icon">💸</div>
        <div>
          <h4>Super ceny</h4>
          <p>Akcie, zľavy a výhodné balíčky kníh.</p>
        </div>
      </div>

      <div class="benefit">
        <div class="icon">🤝</div>
        <div>
          <h4>Overený e-shop</h4>
          <p>Spokojní zákazníci a jednoduché vrátenie.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goTo(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.hero {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  padding: 34px;
  box-shadow: 0 16px 40px rgba(0,0,0,0.08);
}

.hero h1 {
  margin: 0;
  font-size: 2.2rem;
  color: #111;
  letter-spacing: -0.02em;
}

.hero p {
  margin: 12px 0 18px;
  color: #6b7280;
  line-height: 1.7;
  font-size: 1.05rem;
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.primary, .ghost {
  border: none;
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 10px;
  font-weight: 900;
}

.primary {
  background: #2563eb;
  color: #fff;
}
.primary:hover { background: #1d4ed8; }

.ghost {
  background: #f3f4f6;
  color: #2563eb;
}
.ghost:hover { background: #e5e7eb; }

.trust {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  color: #6b7280;
  font-weight: 800;
}

.promo {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.promo-card {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  padding: 18px;
}

.promo-card h3 {
  margin: 0 0 6px;
  color: #111;
  font-weight: 900;
}

.promo-card p {
  margin: 0 0 10px;
  color: #6b7280;
  line-height: 1.6;
}

.linkbtn {
  border: none;
  background: transparent;
  padding:  0;
  cursor: pointer;
  font-weight: 900;
  color: #2563eb;
}
.linkbtn:hover { color: #1d4ed8; }

.benefits {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.benefit {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  padding: 18px;
  display: flex;
  gap: 12px;
}

.icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #eef2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.benefit h4 {
  margin: 0 0 6px;
  color: #111;
  font-weight: 900;
}

.benefit p {
  margin: 0;
  color: #6b7280;
  line-height: 1.5;
}

.quick {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.quick-card {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  padding: 18px;
  cursor: pointer;
}

.quick-card:hover {
  border-color: rgba(37, 99, 235, 0.35);
}

.quick-card h4 {
  margin: 0 0 8px;
  font-weight: 900;
  color: #111;
}

.quick-card p {
  margin: 0 0 10px;
  color: #6b7280;
  line-height: 1.5;
}

.quick-card span {
  color: #2563eb;
  font-weight: 900;
}

@media (max-width: 900px) {
  .benefits, .quick { grid-template-columns: 1fr; }
}
</style>