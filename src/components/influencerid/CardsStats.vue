<template>
    <div class="container-card-stats">
        <div class="card-stats-content">
            <h2>{{ title }}</h2>
            <p class="card-stats-percentage">{{ medium }}</p>
            <p class="card-stats-description">{{ description }}</p>
        </div>
        <div class="card-stats-icon">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string;
    medium: string;
    description: string;
}

defineProps<Props>();
</script>

<style scoped>
.container-card-stats {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    background: var(--color-blue-2);
    border: 0.05rem solid var(--color-green-1);
    width: 20%;
    margin: 0;
    border-radius: 0.5rem;
}

.card-stats-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.card-stats-content > h2 {
    font-weight: bold;
    font-size: 1rem;
    color: var(--color-white-1);    
}

.card-stats-icon {
    width: 2rem;
}

.card-stats-percentage {
    font-weight: 500;
    color: var(--color-green-1);
    font-size: 2rem;
}

.card-stats-description {
    font-size: 0.7rem;
    font-weight: 400;
}
</style>
