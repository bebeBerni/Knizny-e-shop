<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <div class="brand">
        <h3>Knižný obchod</h3>
        <p>Čítanie na dosah. Vyber si knihu a my sa postaráme o zvyšok.</p>
      </div>

      <div class="links">
        <h4>Odkazy</h4>
        <ul>
          <li><router-link to="/knihy">Knihy</router-link></li>
          <li><router-link to="/kosik">Košík</router-link></li>
          <li><a href="hore" @click.prevent="scrollTop">Hore</a></li>
        </ul>
      </div>

      <div class="contact">
        <h4>Kontakt</h4>
        <p><strong>Email:</strong> info@kniznyobchod.sk</p>
        <p><strong>Telefón:</strong> +421 900 000 000</p>
        <div class="social">
          <a href="https://facebook.com" target="_blank" title="Facebook">Fb</a>
          <a href="https://www.instagram.com" target="_blank"  title="Instagram">Ig</a>
          <a href="https://www.x.com" target="_blank" title="X">X</a>
        </div>
      </div>
    </div>

    <div class="bottom">
  <div class="bottom-inner">
    <p>© {{ year }} Knižný obchod • Všetky práva vyhradené</p>
  </div>
</div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  methods: {
    goTo(path) {
      if (this.$router) this.$router.push(path);
    },
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.app-footer {
  background: #1f2937;
  color: #e5e7eb;
  margin-top: 10;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
}

.brand h3 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.links h4,
.contact h4 {
  margin-bottom: 0.8rem;
  font-size: 1rem;
}

.links ul {
  list-style: none;
  padding: 0;
}

.links li {
  margin-bottom: 0.5rem;
}

.links a {
  color: #d1d5db;
  text-decoration: none;
}

.links a:hover {
  color: #fff;
}

.social a {
  margin-right: 0.5rem;
  color: #d1d5db;
  text-decoration: none;
  font-weight: bold;
}

.social a:hover {
  color: #fff;
}

.bottom {
  border-top: 1px solid #374151;
}

.bottom-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  font-size: 0.85rem;
  color: #9ca3af;
}
</style>