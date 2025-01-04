<script setup lang="ts">
import { ref } from 'vue';
import LabelCheckBox from './LabelCheckBox.vue';

defineProps<{ labels: string[] }>();

const selectedLabels = ref<string[]>([]);
</script>
<template>
    <div class="container-scientific-search">
        <h2>Scientific Search</h2>
        <LabelCheckBox :labels="labels" :modelValue="selectedLabels" />
    </div>
</template>
<style scoped>
.container-scientific-search > h2 {
    font-size: 1.2rem;
}
</style>
