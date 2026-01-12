<template>
  <div class="about">
    <section class="hero">
      <h1>O nás</h1>
      <p>
        Sme moderný knižný e-shop, ktorého cieľom je sprístupniť kvalitné knihy
        každému – rýchlo, jednoducho a za férové ceny.
      </p>
    </section>

    <section class="content">
      <div class="card">
        <h3>📚 Naša misia</h3>
        <p>
          Chceme podporovať čítanie a vzdelávanie. Vyberáme knihy, ktoré
          inšpirujú, rozvíjajú a prinášajú radosť.
        </p>
      </div>

      <div class="card">
        <h3>🚚 Ako fungujeme</h3>
        <p>
          Objednávky spracúvame každý pracovný deň. Spolupracujeme
          s overenými dodávateľmi, aby sa knihy dostali k tebe čo najrýchlejšie.
        </p>
      </div>

      <div class="card">
        <h3>🤝 Prečo my</h3>
        <p>
          Férové ceny, rýchle doručenie, jednoduché vrátenie
          a podpora zákazníkov, na ktorú sa môžeš spoľahnúť.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.hero {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 14px 36px rgba(0,0,0,0.08);
}

.hero h1 {
  margin: 0 0 10px;
  font-size: 2rem;
  color: #111;
}

.hero p {
  margin: 0;
  color: #6b7280;
  line-height: 1.7;
  font-size: 1.05rem;
}

.content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.card {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  padding: 20px;
}

.card h3 {
  margin: 0 0 8px;
  color: #111;
  font-weight: 900;
}

.card p {
  margin: 0;
  color: #6b7280;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .content {
    grid-template-columns: 1fr;
  }
}
</style>
