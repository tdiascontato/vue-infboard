<script setup lang="ts">
</script>

<template>
  <section class="container-leaderboard-filters">
    <div class="categories-searchs">
      <button class="filter-button active">All</button>
      <button class="filter-button">Nutrition</button>
      <button class="filter-button">Fitness</button>
      <button class="filter-button">Medicine</button>
      <button class="filter-button">Mental Health</button>
    </div>
    <div class="dropdown-menu">
      <button class="dropdown-button">Highest First</button>
      <ul class="dropdown-list">
        <li><button class="search-option">Highest First</button></li>
        <li><button class="search-option">Most Viewed</button></li>
        <li><button class="search-option">Most Growth</button></li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.container-leaderboard-filters {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.categories-searchs {
  display: flex;
  gap: 0.5rem;
}

.categories-searchs .filter-button {
  background-color: #1e293b;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.categories-searchs .filter-button.active {
    background-color: var(--color-blue-1);
}

.dropdown-menu {
    width: max-content;
    position: relative;
}

.dropdown-button {
    background-color: var(--color-blue-1);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
}

.dropdown-list {
    list-style: none;
    position: absolute;
    top: 100%;
    left: 0;
    margin: 0;
    padding: 0;
    background-color: #1e293b;
    border-radius: 0.5rem;
    display: none;
    flex-direction: column;
    z-index: 10;
}

.dropdown-menu:hover .dropdown-list,
.dropdown-menu:focus-within .dropdown-list {
    display: flex;
}

.dropdown-list > li {
    width: max-content;
    padding: 0.5rem;
}

.search-option {
    background-color: #1e293b;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
}

.search-option:hover {
    background-color: var(--color-blue-1);
}
</style>
