<script setup lang="ts">
</script>

<template>
    <section class="container-leaderboard-filters">
        <button class="filter-button active">All</button>
        <button class="filter-button">Nutrition</button>
        <button class="filter-button">Fitness</button>
        <button class="filter-button">Medicine</button>
        <button class="filter-button">Mental Health</button>
    </section>
</template>

<style scoped>
.container-leaderboard-filters {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
}
.container-leaderboard-filters > .filter-button {
    background-color: #1e293b;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
}
.container-leaderboard-filters > .filter-button.active {
    background-color: var(--color-blue-1);
}
</style>
