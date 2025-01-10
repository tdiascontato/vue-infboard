<script setup lang="ts">
import { ref, onMounted } from 'vue';
import StatCardCheck from '../icons/leaderboard/StatCardCheck.vue';
import StatCardStats from '../icons/leaderboard/StatCardStats.vue';
import StatCardUsers from '../icons/leaderboard/StatCardUsers.vue';

import { getNumbersStatsGeneral } from '@/services/api';

const stats = ref({
    num_influencers: 75,
    num_tweets: 1831,
    avg_score: 77
});

onMounted(async () => {
    const response = await getNumbersStatsGeneral();
    if(response.num_influencers != 0) {
        stats.value = response;
    }
});
</script>

<template>
    <section class="container-leaderboard-stats">
        <div class="stat-card">
            <div class="icon-stat-card">
                <StatCardUsers />
            </div>
            <div class="disc-stat-card">
                <h2>{{ stats.num_influencers }}</h2>
                <span>Influencers</span>
            </div>
        </div>
        <div class="stat-card">
            <div class="icon-stat-card">
                <StatCardCheck />
            </div>
            <div class="disc-stat-card">
                <h2>{{ stats.num_tweets }}</h2>
                <span>Tweets</span>
            </div>
        </div>
        <div class="stat-card">
            <div class="icon-stat-card">
                <StatCardStats />
            </div>
            <div class="disc-stat-card">
                <h2>{{ stats.avg_score }}%</h2>
                <span>Score</span>
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
    cursor: default;
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
    font-size: medium;
}
</style>
