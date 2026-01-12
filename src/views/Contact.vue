<template>
  <div class="contact">
    <section class="hero">
      <h1>Kontakt</h1>
      <p>
        Máš otázky? Napíš nám alebo nás kontaktuj cez uvedené údaje.
      </p>
    </section>

    <section class="grid">
      <div class="info">
        <h3>📍 Kontaktné údaje</h3>
        <p><strong>Email:</strong> info@kniznyobchod.sk</p>
        <p><strong>Telefón:</strong> +421 900 000 000</p>
        <p><strong>Adresa:</strong> Knižná 12, 811 01 Bratislava</p>
      </div>

      <form class="form" @submit.prevent="submit">
        <h3>✉️ Napíšte nám</h3>

        <input type="text" placeholder="Meno" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Vaša správa" rows="4" required></textarea>

        <button type="submit">Odoslať správu</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  methods: {
    submit() {
      alert('Správa bola odoslaná (simulácia)')
    }
  }
}
</script>

<style scoped>
.contact {
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

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.info {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  padding: 20px;
}

.info h3 {
  color:#111 ;  
  margin: 0 0 10px;
  font-weight: 900;
}

.info p {
  margin: 6px 0;
  color: #6b7280;
}

.form {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form h3 {
  color: #111;
  margin: 0 0 6px;
  font-weight: 900;
}

.form input,
.form textarea {
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.15);
  font-size: 0.95rem;
}

.form button {
  margin-top: 6px;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: #2563eb;
  color: #fff;
  font-weight: 900;
  cursor: pointer;
}

.form button:hover {
  background: #1d4ed8;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>