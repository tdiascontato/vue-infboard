<template>
    <div class="container-label-checkbox">
        <input type="checkbox" :id="label" :value="label" class="custom-checkbox" />
        <label :for="label">{{ label }}</label>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ label: string }>();

</script>

<style scoped>
.container-label-checkbox {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    border-radius: 0.3rem;
    background-color: #1dd7b249;
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