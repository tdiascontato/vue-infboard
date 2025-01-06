<script setup lang="ts">
import InfluenceridHeader from '@/components/influencerid/InfluenceridHeader.vue';
import CardsStats from '@/components/influencerid/CardsStats.vue';
import Cash from '@/components/icons/influencerid/Cash.vue';
import Products from '@/components/icons/influencerid/Products.vue';
import ArrowUp from '@/components/icons/leaderboard/ArrowUp.vue';
import SearchPainel from '@/components/influencerid/SearchPainel.vue';

type IconKey = 'arrowup' | 'cash' | 'products';

const cardStatsData: { title: string; medium: string; description: string; icon: IconKey }[] = [
    { title: 'Trust Score', medium: '89%', description: 'Based on 127 verified claims', icon: 'arrowup' },
    { title: 'Yearly Revenue', medium: '$5.0M', description: 'Estimated earnings', icon: 'cash' },
    { title: 'Products', medium: '1', description: 'Recommended products', icon: 'products' },
    { title: 'Products', medium: '4.2M+', description: 'Total following', icon: 'arrowup' }
];

const iconComponents: Record<IconKey, any> = {
    arrowup: ArrowUp,
    cash: Cash,
    products: Products
};
</script>

<template>
    <section class="container-influencer-id">
        <InfluenceridHeader />
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
</style>