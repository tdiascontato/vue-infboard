<script setup lang="ts">
import SearchInfluencer from '@/components/inputs/SearchInfluencer.vue';
import Leaderboard from '@/components/leaderboard/Index.vue';
</script>

<template>
  <main class="container-home-view">
    <SearchInfluencer width="80vw"/>
    <Leaderboard />
  </main>
</template>

<style scoped>
.container-home-view {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
</style>