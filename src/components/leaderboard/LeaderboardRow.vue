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
    imageInfluencer: string;
}

defineProps<{
    row: LeaderboardItem[];
}>();

function getTrustScoreColor(trustScore: number): string {
    if (trustScore >= 90) {
        return 'var(--color-green-2)';
    } else if (trustScore >= 70 && trustScore <= 89) {
        return 'var(--color-yellow-1)';
    } else if (trustScore >= 59 && trustScore <= 69) {
        return 'var(--color-grey-1)';
    } else {
        return 'var(--color-red-1)';
    }
}
</script>

<template>
<tr class="container-leaderboard-row" v-for="(item, index) in row" :key="index">
        <td>#{{ item.rank }}</td>
        <td>
            <img :src="item.imageInfluencer" alt="Influencer Image" class="influencer-image" />
            {{ item.name }}
        </td>
        <td>{{ item.category }}</td>
        <td :style="{ color: getTrustScoreColor(item.trustScore) }">{{ item.trustScore }}%</td>
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
    font-size: 1.3rem;
}

.container-leaderboard-row svg {
    width: 2rem;
    fill: white;
}

.container-leaderboard-row, .container-leaderboard-row > td > .influencer-image {
    width: 2rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
    vertical-align: middle;
}
</style>
