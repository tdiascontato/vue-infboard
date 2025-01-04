<script setup lang="ts">
import StatCardCheck from '../icons/leaderboard/StatCardCheck.vue';
import StatCardStats from '../icons/leaderboard/StatCardStats.vue';
import StatCardUsers from '../icons/leaderboard/StatCardUsers.vue';

</script>

<template>
    <section class="container-leaderboard-stats">
        <div class="stat-card">
            <div class="icon-stat-card">
                <StatCardUsers />
            </div>
            <div class="disc-stat-card">
                <h2>1,234</h2>
                <span>Active Influencers</span>
            </div>
        </div>
        <div class="stat-card">
            <div class="icon-stat-card">
                <StatCardCheck />
            </div>
            <div class="disc-stat-card">
                <h2>25,431</h2>
                <span>Claims Verified</span>
            </div>
        </div>
        <div class="stat-card">
            <div class="icon-stat-card">
                <StatCardStats />
            </div>
            <div class="disc-stat-card">
                <h2>85.7%</h2>
                <span>Average Trust Score</span>
            </div>
        </div>
    </section>
</template>

<style scoped>
.container-leaderboard-stats {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
}
.container-leaderboard-stats > .stat-card {
    display: flex;
    text-align: center;
    gap: 1rem;
    background-color: #1e293b;
    padding: 1rem;
    border-radius: 0.5rem;
}
.container-leaderboard-stats > .stat-card > .icon-stat-card {
    display: flex;
    align-items: center;
    width: 2.5rem;
}
.container-leaderboard-stats > .stat-card > .disc-stat-card > h2 {
    font-size: xx-large;
    font-weight: bold;
    color: var(--color-white-1);
}
.container-leaderboard-stats > .stat-card > .disc-stat-card > span {
    font-size: medium;}
</style>
