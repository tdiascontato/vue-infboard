<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getInfluencerRank } from '@/services/api';
import { mock_rank_influencers } from '@/services/mocks';
import LeaderboardRow from './LeaderboardRow.vue';

interface Influencer {
    id: number;
    username: string;
    created_at: string;
    category: string;
    trend: string;
    followers: string;
    tweets_number: string;
    score: string;
}

const influencer_rank = ref<Influencer[]>([]);


onMounted(async () => {
    try {
        const response = await getInfluencerRank();
        if (response && Array.isArray(response) && response.length > 0) {
            influencer_rank.value = response;
        } else {
            influencer_rank.value = mock_rank_influencers;
        }
    } catch (error) {
        console.log('Using just in development. Change:', error);
        influencer_rank.value = mock_rank_influencers;
    }
});
</script>

<template>
    <table class="container-leaderboard-table">
        <thead>
            <tr>
                <th>Rank</th>
                <th>Influencer</th>
                <th>Category</th>
                <th>Score</th>
                <th>Trend</th>
                <th>Followers</th>
                <th>Tweets</th>
            </tr>
        </thead>
        <tbody>
            <LeaderboardRow :influencer_rank="influencer_rank" />
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
