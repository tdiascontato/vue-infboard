<script setup lang="ts">
import IconShieldLogo from '../icons/navbar/IconShieldLogo.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <RouterLink to="/" class="no-underline">
        <section class="container-nav-logo">
            <IconShieldLogo width="25"/>
            <span>VerifyInfluencers</span>
        </section>
    </RouterLink>
</template>

<style scoped>
.container-nav-logo {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    text-decoration: none;
}
.container-nav-logo > span {
    background: linear-gradient(to right, var(--color-green-1), var(--color-blue-1));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1rem;
    cursor: pointer;
}
.no-underline {
    text-decoration: none;
}
@media (min-width: 1024px) {

}
</style>
