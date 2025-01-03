<script setup lang="ts">
import Navbar from '@/components/navbar/Index.vue';
</script>

<template>
  <main class="container-home-view">
    <Navbar />
    <h1>Hello!</h1>
  </main>
</template>

<style scoped>
.container-home-view {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
@media (min-width: 1024px) {

}
</style>