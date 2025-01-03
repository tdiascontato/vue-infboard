<script setup lang="ts">
import IconExit from '@/components/icons/navbar/IconExit.vue';

</script>

<template>
    <button class="container-nav-sign-out">
        <span><IconExit /> </span>
        Sign Out
    </button>
</template>

<style scoped>
.container-nav-sign-out {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    font-size: 0.8rem;
    cursor: pointer;
    transition: color 0.3s;
    color: #ccc;
}
.container-nav-sign-out:hover {
    color: var(--color-green-1);
}

.container-nav-sign-out > span {
    width: 1rem;
}



@media (min-width: 1024px) {

}
</style>
