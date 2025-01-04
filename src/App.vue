<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/navbar/Index.vue'

</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style scoped>
body {
  font-family: 'Nunito', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: aliceblue;
}
@media (min-width: 1024px) {

}
</style>
