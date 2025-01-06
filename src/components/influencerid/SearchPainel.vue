<template>
    <section class="container-search-painel">
        <ul>
            <li 
                @click="selectedOption = 'Claims Analysis'" 
                :class="{ active: selectedOption === 'Claims Analysis' }"
            >Claims Analysis</li>
            <li 
                @click="selectedOption = 'Recommended Products'" 
                :class="{ active: selectedOption === 'Recommended Products' }"
            >Recommended Products</li>
            <li 
                @click="selectedOption = 'Monetization'" 
                :class="{ active: selectedOption === 'Monetization' }"
            >Monetization</li>
        </ul>
        <div v-if="selectedOption">
            <ClaimsAnalysisSlot v-if="selectedOption === 'Claims Analysis'" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ClaimsAnalysisSlot from './ClaimsAnalysisSlot.vue';

const selectedOption = ref<string | null>('Claims Analysis');
</script>

<style scoped>
.container-search-painel {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--color-blue-2);
}

.container-search-painel ul {
    list-style-type: none;
    text-decoration: none;
    display: flex;
    width: 100%;
    gap: 1rem;
}

.container-search-painel li {
    margin: 0;
    cursor: pointer;
    color: var(--color-grey-1);
}

.container-search-painel li.active {
    color: var(--color-green-1);
    border-bottom: 0.05rem solid var(--color-green-1);
}
</style>