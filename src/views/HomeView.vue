<script setup>
  import { ref } from 'vue'
  import { useItems } from '@/shared/useItems.js'
  const { items, getItems } = useItems()
  getItems()

  const searchQuery = ref('')

  const search = () => {
    console.log('Searching for:', searchQuery.value)
  }
</script>
<template>
  <div class="home-page">
    <main class="main-content">
      <div class="container">
        <section class="hero">
          <h2>Find What You Need, Rent with Ease</h2>
          <p>Discover a wide range of items available for rent in your area.</p>
          <div class="search-bar">
            <input
              type="text"
              placeholder="What do you want to rent?"
              v-model="searchQuery"
            />
            <button class="button-primary" @click="search">Search</button>
          </div>
        </section>

        <section class="featured-items">
          <h3>Featured Items</h3>
          <div class="item-grid">
            <div
              v-for="item in items.slice(0, 4)"
              :key="item.id"
              class="item-card"
            >
              <img :src="item.images[0]" :alt="item.name" class="item-image" />
              <h4>{{ item.title }}</h4>
              <p>{{ item.price }} SEK</p>

              <button class="button-secondary">View Details</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
  .main-content {
    padding: 2rem 0;
  }

  .hero {
    text-align: center;
    margin-bottom: 2rem;
  }

  .hero h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .search-bar {
    display: flex;
    max-width: 600px;
    margin: 1rem auto;
  }

  .search-bar input {
    flex-grow: 1;
    margin-bottom: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .search-bar button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .featured-items h3 {
    margin-bottom: 1rem;
  }

  .item-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }

  .item-card {
    background-color: var(--color-bg-alt);
    border: 1px solid var(--color-border);
    border-radius: 4px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .item-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  .item-card h4 {
    margin-bottom: 0.5rem;
  }

  .item-card p {
    margin-bottom: 0.5rem;
  }

  .item-card .badge {
    margin-bottom: 0.5rem;
  }
</style>
