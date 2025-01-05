<script setup lang="ts">
import NavSignOut from './NavSignOut.vue';

const links = [
  { name: 'Leaderboard', path: '/' },
  { name: 'Products', path: '/fullsearch' },
  { name: 'Monetization', path: '#' },
  { name: 'About', path: '#' },
  { name: 'Contact', path: '#' },
  { name: 'Admin', path: '#' },
];

</script>

<template>
    <ul class="container-nav-links">
        <li v-for="link in links" :key="link.name">
            <a :href="link.path" class="nav-link">{{ link.name }}</a>
        </li>
        <li class="nav-link">
            <NavSignOut />
        </li>
    </ul>
</template>

<style scoped>
.container-nav-links {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    list-style: none;
}

.nav-link {
  text-decoration: none;
  color: #cccccc;
  font-size: 0.875rem;
  transition: color 0.3s;
}

.nav-link:hover {
  color: var(--color-green-1);
}

@media (min-width: 1024px) {

}
</style>
