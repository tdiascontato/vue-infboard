<script setup lang="ts">
import LeaderboardHeader from './LeaderboardHeader.vue';
import LeaderboardStats from './LeaderboardStats.vue';
import LeaderboardFilters from './LeaderboardFilters.vue';
import LeaderboardTable from './LeaderboardTable.vue';

</script>

<template>
    <section class="container-leaderboard">
        <LeaderboardHeader width="70vw" />
        <LeaderboardStats width="70vw" />
        <LeaderboardFilters width="70vw" />
        <LeaderboardTable width="70vw" />
    </section>
</template>

<style scoped>
.container-leaderboard {
    display: flex;
    flex-direction: column;
    padding: 1rem;
}
</style>
