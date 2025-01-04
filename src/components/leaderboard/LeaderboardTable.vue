<script setup lang="ts">
import LeaderboardRow from './LeaderboardRow.vue';
import { mockRowsLeaderboard } from '@/services/mocks';

const row = mockRowsLeaderboard.slice(0, 10);
</script>

<template>
    <table class="container-leaderboard-table">
        <thead>
            <tr>
                <th>Rank</th>
                <th>Influencer</th>
                <th>Category</th>
                <th>Trust Score</th>
                <th>Trend</th>
                <th>Followers</th>
                <th>Verified Claims</th>
            </tr>
        </thead>
        <tbody>
            <LeaderboardRow :row=" row" />
        </tbody>
    </table>
</template>

<style scoped>
.container-leaderboard-table {
    margin: 0 auto;
    width: 80vw;
    height: max-content;
    border-collapse: collapse;
    text-align: center;
    background-color: var(--color-blue-2);
    border-radius: 0.5rem;
}
.leaderboard-table th, .leaderboard-table td {
    padding: 0.5rem;
    text-align: center;
    border-bottom: 1px solid #1e293b;
}

.container-leaderboard-table > thead > tr > th {
    color: var(--color-grey-1);
    padding: 1rem;
    font-weight: 700;
    font-size: 1.5rem;
}

.leaderboard-table th {
    color: var(--color-white-1);
    font-size: 1.2rem;
}

@media (min-width: 1024px) {

}
</style>
