<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import InfluenceridHeader from '@/components/influencerid/InfluenceridHeader.vue';
import CardsStats from '@/components/influencerid/CardsStats.vue';
import Cash from '@/components/icons/influencerid/Cash.vue';
import Products from '@/components/icons/influencerid/Products.vue';
import ArrowUp from '@/components/icons/leaderboard/ArrowUp.vue';
import SearchPainel from '@/components/influencerid/SearchPainel.vue';
import CardsClaimsSlot from '@/components/influencerid/CardsClaimsSlot.vue';
import { postInfluencerSave, postRecentTweets } from '@/services/api';

const route = useRoute();
const influencerId = route.params.id;

type IconKey = 'arrowup' | 'cash' | 'products';

const iconComponents: Record<IconKey, any> = {
    arrowup: ArrowUp,
    cash: Cash,
    products: Products
};

const errorMessage = ref('');
const tweets_data = ref({
    id: 1,
    influecer: 'Will',
    content: 'Viewing sunlight within 30-60 minutes of waking enhances cortisol release.',
    created_at: '11/01/2025',
    url: 'http://localhost:5173',
    comment: 'Multiple studies confirm morning light exposure affects cortisol rhythms. Timing window supported by research.',
    category: 'Entertainment',
    percentual: '92%',
});
const influencer_data = ref({
    id: 0,
    username: 'Will',
    created_at: '01/01/2000',
    category: 'Entertainment',
    trend: 'up',
    followers: '1M',
    tweets_number: 180,
    score: '89'
});

const cardStatsData: { title: string; medium: string; description: string; icon: IconKey }[] = [
    { title: 'Score', medium: influencer_data.value.score, description: 'Based on 127 verified claims', icon: 'arrowup' },
    { title: 'Yearly Revenue', medium: '$5M', description: 'Estimated earnings', icon: 'cash' },
    { title: 'Products', medium: '1', description: 'Recommended products', icon: 'products' },
    { title: 'Followers', medium: influencer_data.value.followers, description: 'Total following', icon: 'arrowup' }
];


onMounted(async () => {
  try {
    influencer_data.value = await postInfluencerSave(influencerId);
    tweets_data.value = await postRecentTweets(influencerId)
  } catch (error) {
    errorMessage.value = 'Check your credetionals';
  }
});
</script>

<template>
    <section class="container-influencer-id">
        <InfluenceridHeader :influencer_data="influencer_data" />
        <div class="cards-influencer-wrapper">
            <CardsStats
                v-for="(card, index) in cardStatsData"
                :key="index"
                :title="card.title"
                :medium="card.medium"
                :description="card.description"
            >
                <component :is="iconComponents[card.icon]" />
            </CardsStats>
        </div>
        <SearchPainel />
        <div class="show-claims-contents">
            <h3 v-if="influencer_data">Showing {{ influencer_data.tweets_number }} tweets</h3>
            <h3 v-else>Showing 1 tweet</h3>
            <CardsClaimsSlot :tweets_data="tweets_data" />
        </div>
        <div v-if="errorMessage" class="error-message-data">{{ errorMessage }}</div>
    </section>
</template>

<style scoped>
.container-influencer-id {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
}

.container-influencer-id > .cards-influencer-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
}

.error-message-data {
    font-weight: 600;
    font-size: 1.3rem;
    color: red;
    text-align: center;
    margin-top: 1rem;
}
</style>