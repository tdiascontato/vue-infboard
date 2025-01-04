<script setup lang="ts"></script>
<template>
    <div class="container-time-range">
        <h3>Time Range</h3>
        <div class="container-button-grid">
            <button>Last Week</button>
            <button>Last Month</button>
            <button>Last Year</button>
            <button>All Time</button>
        </div>
    </div>
</template>
<style scoped>
.container-time-range {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.container-time-range > .container-button-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
}

.container-time-range > .container-button-grid > button {
    padding: 0.5rem;
    border: 0.01rem solid var(--color-green-1);
    border-radius: 0.3rem;
    background: #1dd7b249;
    font-size: 1rem;
    cursor: pointer;
    color: var(--color-grey-1);
}

.container-time-range > .container-button-grid > button:hover {
    background: #12877049;
    transition: 0.5s ease-in-out;
}   

.container-time-range > .container-button-grid > button.active {
    color: var(--color-white-1);
    background: #2c3e50;
}

</style>