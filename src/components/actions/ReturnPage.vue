<script setup lang="ts">
import BackArrow from '../icons/actions/BackArrow.vue';

defineProps<{
    backTo: string;
    title: string;
}>();
</script>

<template>
    <div class="return-page">
        <BackArrow />
        <a @click="$emit('go-dashboard')" class="back-link">
            Back to {{ backTo }}
        </a>
        <h2>{{ title }}</h2>
    </div>
</template>

<style scoped>
.return-page {
    display: flex;
    width: fit-content;
    text-align: center;
    align-items: center;
}

.return-page > svg {
    width: 2rem;
    height: 1rem;
}

.return-page > .back-link {
    margin-right: 10px;
    background: none;
    border: none;
    color: var(--color-green-1);
    cursor: pointer;
    font-size: 16px;
}

.return-page > h2 {
    margin: 0;
    font-size: 1.5rem;
    color: var(--color-grey-1);

}
</style>