<script setup lang="ts">
import ArrowDown from '../icons/leaderboard/ArrowDown.vue';
import ArrowUp from '../icons/leaderboard/ArrowUp.vue';

defineProps<{
    influencer_rank: {
        id: number;
        username: string;
        created_at: string;
        category: string;
        trend: string;
        followers: string;
        tweets_number: string;
        score: string;
    }[];
}>();

function getTrustScoreColor(score: string): string {
    const trustScore = parseFloat(score);
    if (trustScore >= 90) {
        return 'var(--color-green-2)';
    } else if (trustScore >= 75 && trustScore < 90) {
        return 'var(--color-blue-1)';
    } else if (trustScore >= 60 && trustScore < 75) {
        return 'var(--color-yellow-1)';
    } else {
        return 'var(--color-red-1)';
    }
}
    
</script>

<template>
<tr class="container-leaderboard-row" v-for="(item, index) in influencer_rank" :key="index">
        <td>#{{ index + 1 }}</td>
        <td>
            <img src="/will.png" alt="Influencer Image" class="influencer-image" />
            {{ item.username }}
        </td>
        <td>{{ item.category }}</td>
        <td :style="{ color: getTrustScoreColor(item.score) }">{{ item.score }}%</td>
        <td>
            <ArrowUp v-if="item.trend === 'up'" />
            <ArrowDown v-else />
        </td>
        <td>{{ item.followers }}</td>
        <td>{{ item.tweets_number }}</td>
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
