<script setup lang="ts">
import { ref } from 'vue';
import LabelCheckBox from './LabelCheckBox.vue';

defineProps<{ labels: string[] }>();

const selectedLabels = ref<string[]>([]);

</script>

<template>
    <div class="container-scientific-search">
        <div class="scientific-header">
            <h2>Scientific Search</h2>
            <div class="select-buttons">
                <button @click="">Select all</button>
                <button @click="">Deselect all</button>
            </div>
        </div>
        <div class="selected-labels">
            <LabelCheckBox
                v-for="label in labels"
                :key="label"
                :label="label"
                :modelValue="selectedLabels"
            />
        </div>
        <div class="add-new-journal">
            <button @click="">+ Add New Journal</button>
        </div>
    </div>
</template>

<style scoped>
.container-scientific-search > .scientific-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.container-scientific-search > .scientific-header > .select-buttons {
    display: flex;
    gap: 0.5rem;
}

.container-scientific-search > .scientific-header > .select-buttons > button {
    padding: 0.2rem 0.5rem;
    border: none;
    border-radius: 0.3rem;
    background: var(--color-blue-1);
    color: white;
    cursor: pointer;
}

.container-scientific-search > .scientific-header > .select-buttons > button:focus {
    background: var(--color-green-1);
}

.container-scientific-search > .scientific-header > h2 {
    font-size: 1.2rem;
}

.container-scientific-search > .selected-labels {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: start;
    gap: 0.5rem;
    width: 100%;
}

.container-scientific-search > .add-new-journal > button {
    background: transparent;
    border: none;
    color: var(--color-green-1);
    font-size: 0.6rem;

}
</style>
