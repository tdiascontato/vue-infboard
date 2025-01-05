<template>
    <h2 class="title-text-box">Notes for Research Assistant</h2>
    <div class="container-text-box">
        <textarea :placeholder="placeholder"></textarea>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    placeholder: string,
}>();
</script>

<style scoped>
.title-text-box {
    font-size: 1.2rem;
    color: var(--color-grey-2);
}
.container-text-box {
    width: 100%;
    height: 8rem;
    padding: 0.5rem;
    box-sizing: border-box;
    border: 1px solid var(--color-smooth-green-1);
    border-radius: 0.3rem;
    font-size: 0.8rem;
    background: var(--color-smooth-dark-purple-1);
}

.container-text-box > textarea {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
    border: none;
    background: transparent;
    color: var(--color-white-1);
    font-size: 0.8rem;
}
</style>