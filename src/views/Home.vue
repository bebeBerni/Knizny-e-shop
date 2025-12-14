<template>
    <div class="home">
        <h1>Vitaj v E-shope s knihami</h1>
        <p>Vyber si knihu z ponuky.</p>

        <img src="@/assets/books.jpg" alt="Banner knihy" class="banner">

        <router-link to="/knihy" class="cta-btn">
            Prejsť na knihy
        </router-link>

    </div>
</template>

<script>
    export default { name: 'Home' }
</script>

<style scoped>
.home {
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
}

.home h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.home p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2.5rem;
}

.cta-btn {
  display: inline-block;
  padding: 0.9rem 2.2rem;
  background-color: #3498db;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.25s ease;
  box-shadow: 0 6px 16px rgba(52, 152, 219, 0.35);
}

.cta-btn:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(52, 152, 219, 0.45);
}

.banner {
  width: 100%;
  max-height: 320px;
  object-fit: cover;
  border-radius: 18px;
  margin: 2.5rem 0;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease;
}

.banner:hover {
  transform: scale(1.03);
}

@media (max-width: 768px) {
  .home h1 {
    font-size: 2rem;
  }

  .cta-btn {
    width: 100%;
    padding: 1rem;
  }
}

</style>