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
    width: 100%;
    height: max-content;
    border-collapse: collapse;
    text-align: center;
}
.leaderboard-table th, .leaderboard-table td {
    padding: 0.5rem;
    text-align: center;
    border-bottom: 1px solid #1e293b;
}
.leaderboard-table th {
    color: #94a3b8;
}

@media (min-width: 1024px) {

}
</style>
