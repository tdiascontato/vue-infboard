<script setup lang="ts">
import ArrowDown from '../icons/leaderboard/ArrowDown.vue';
import ArrowUp from '../icons/leaderboard/ArrowUp.vue';


interface LeaderboardItem {
    rank: number;
    name: string;
    category: string;
    trustScore: number;
    trend: string;
    followers: string;
    verifiedClaims: number;
}

defineProps<{
    row: LeaderboardItem[];
}>();
</script>

<template>
<tr class="container-leaderboard-row" v-for="(item, index) in row" :key="index">
        <td>#{{ item.rank }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.trustScore }}%</td>
        <td>
            <ArrowUp v-if="item.trend === 'up'" />
            <ArrowDown v-else />
        
        </td>
        <td>{{ item.followers }}</td>
        <td>{{ item.verifiedClaims }}</td>
</tr>
</template>

<style scoped>
.container-leaderboard-row, .container-leaderboard-row > td {
    padding: 0.5rem;
    color: var(--color-white-1);
}

.container-leaderboard-row svg {
    width: 2rem;
    fill: white;
}
</style>
