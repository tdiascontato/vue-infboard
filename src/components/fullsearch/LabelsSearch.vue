<script setup lang="ts">

defineProps<{
    title: string,
    placeholder?: string,
    description?: string,
    type?: string
}>();
</script>

<template>
    <div class="container-labels-search">
        <h3>{{ title }}</h3>
        <input :placeholder="placeholder" :type="type || 'text'" />
        <p v-if="description">{{ description }}</p>
    </div>
</template>

<style scoped>
.container-labels-search {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
}
.container-labels-search h3 {
    font-size: 1rem;
    color: var(--color-grey-1);
}
.container-labels-search input {
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: 0.01rem solid var(--color-green-1);
    background: var(--color-smooth-dark-purple-1);
    color: var(--color-white-1);
}
.container-labels-search input:focus {
    outline: none;
}

.container-labels-search p {
    font-size: 0.6rem;
    color: var(--color-grey-2);
}

</style>