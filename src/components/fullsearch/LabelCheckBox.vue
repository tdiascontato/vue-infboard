<template>
    <div class="container-label-checkbox">
        <div v-for="label in labels" :key="label">
            <input type="checkbox" :id="label" :value="label" v-model="selectedLabels" class="custom-checkbox" />
            <label :for="label">{{ label }}</label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

defineProps<{ labels: string[] }>();

const selectedLabels = ref<string[]>([]);
</script>

<style scoped>
.container-label-checkbox {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.container-label-checkbox > div{
    display: flex;
    align-items: center;
    gap: 1rem;
}

.custom-checkbox {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ccc;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    position: relative;
}

.custom-checkbox:checked {
    background-color: var(--color-green-1);
    border-color: var(--color-green-2);
}
</style>
