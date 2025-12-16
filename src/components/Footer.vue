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
      <p>© {{ year }} Knižný obchod • Všetky práva vyhradené</p>
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
  width: 100%;
  background: #ffffff;                 
  border-top: 1px solid rgba(0,0,0,0.06);
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 34px 20px;
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 28px;
  align-items: start;
}

.brand h3 {
  margin: 0 0 8px 0;
  font-size: 1.2rem;
  color: #222;
}

.brand p {
  margin: 0;
  color: #555;
  line-height: 1.5;
}

.links h4,
.contact h4 {
  margin: 0 0 10px 0;
  font-size: 1.05rem;
  color: #222;
}

.links ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
}

a {
  color: #1976d2;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease, transform 0.1s ease;
}

a:hover {
  color: #1565c0;
}

.contact p {
  margin: 6px 0;
  color: #555;
}

.social {
  display: flex;
  gap: 10px;
  margin-top: 12px;
}

.social a {
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #f5f7fa;
  color: #1976d2;
  font-weight: 800;
}

.social a:hover {
  background: #e9f2ff;
}

.bottom {
  width: 100%;
  border-top: 1px solid rgba(0,0,0,0.06);
}

.bottom > * {
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 20px 22px;
}

.bottom p {
  margin: 0;
  text-align: center;
  width: 100%;
  color: #222;
}

</style>