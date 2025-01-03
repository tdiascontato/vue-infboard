<script setup lang="ts">
import NavLogo from './NavLogo.vue';
import NavLinks from './NavLinks.vue';
</script>

<template>
    <section class="container-navbar">
        <NavLogo />
        <NavLinks />
    </section>
</template>

<style scoped>
.container-navbar {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
}

@media (min-width: 1024px) {

}
</style>
