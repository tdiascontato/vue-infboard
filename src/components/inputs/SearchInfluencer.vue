<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const searchValue = ref('');
const router = useRouter();

const handleSearch = () => {  if (searchValue.value) router.push(`/influencerid/${searchValue.value}`) };
</script>

<template>
  <input
    class="container-search-influencer"
    placeholder="Search for an influencer"
    v-model="searchValue"
    @keyup.enter="handleSearch"
  />
</template>

<style scoped>
.container-search-influencer {
    width: 100%;
    height: 4rem;
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    text-align: center;
    font-size: 1rem;
    background: var(--color-smooth-dark-purple-1);
    color: var(--color-white-1);
}
.container-search-influencer:focus {
    outline: 0.1px solid var(--color-green-1);
}
@media (min-width: 1024px) {

}
</style>