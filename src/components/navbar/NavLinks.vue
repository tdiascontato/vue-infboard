<script setup lang="ts">
import NavSignOut from './NavSignOut.vue';

const links = [
  'Leaderboard',
  'Products',
  'Monetization',
  'About',
  'Contact',
  'Admin',
];

</script>

<template>
    <ul class="container-nav-links">
        <li v-for="link in links" :key="link">
            <a href="#" class="nav-link">{{ link }}</a>
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
