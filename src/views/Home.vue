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
.hero {
  background-image:
    linear-gradient(rgba(15,23,42,0.75), rgba(15,23,42,0.75)),
    url("https://images.unsplash.com/photo-1512820790803-83ca734da794");
  background-size: cover;
  background-position: center;
  color: white;

  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 18px;
}

.hero-inner {
  text-align: center;
  max-width: 800px;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1.2rem;
  line-height: 1.2;
}

.hero h1::before {
  content: "VITAJTE 👋";
  display: block;
  font-size: 1.3rem;
  letter-spacing: 2px;
  color: #93c5fd;
  margin-bottom: 0.8rem;
}

.hero p {
  font-size: 1.2rem;
  color: #e5e7eb;
  margin-bottom: 2.2rem;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.primary {
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.7rem 1.4rem;
  border-radius: 8px;
  cursor: pointer;
}

.primary:hover {
  background: #1e40af;
}

.ghost {
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 0.7rem 1.4rem;
  border-radius: 8px;
  cursor: pointer;
}

.trust span {
  margin-right: 1rem;
  font-size: 0.9rem;
}

.benefits {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
}

.benefit {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  gap: 1rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}

.icon {
  font-size: 2rem;
}
</style>