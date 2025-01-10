<template>
    <div class="container-influencer-header">
        <div class="left-influencer-hearder">
            <img :src="imageUrl" alt="Influencer Image" />
        </div>
        <div class="right-influencer-hearder">
            <h2>{{ name }}</h2>
            <div class="buttons-categories-influencer">
                <button class="buttom-categories-influencer">
                    {{ category }}
                </button>
            </div>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
    influencerData: {
        type: Object,
        default: () => ({
            username: 'Will Smith',
            category: 'Entertainment',
            comment: 'This is a description of the influencer. They have a significant impact on social media platforms. Their content is engaging and widely appreciated.',
            imageUrl: '/will.png'
        })
    }
});

const name = ref('');
const category = ref([]);
const description = ref('');
const imageUrl = ref('');

onMounted(() => {
    name.value = props.influencerData.username;
    category.value = props.influencerData.category;
    description.value = props.influencerData.comment;
    imageUrl.value = props.influencerData.imageUrl;
});
</script>

<style scoped>
.container-influencer-header {
    display: flex;
    gap: 1rem;
}

.container-influencer-header > .left-influencer-hearder {
    flex: 5%;
    display: flex;
    align-items: center;
}

.container-influencer-header > .left-influencer-hearder > img {
    width: 5rem;
    border-radius: 50%;
}

.container-influencer-header > .right-influencer-hearder {
    flex: 95%;
    display: flex;
    flex-direction: column;
}
.container-influencer-header > .right-influencer-hearder > h2 {
    color: var(--color-white-1);
}

.container-influencer-header > .right-influencer-hearder > .buttons-categories-influencer {
    display: flex;
    gap: 0.5rem;
}

.container-influencer-header > .right-influencer-hearder > .buttons-categories-influencer > .buttom-categories-influencer {
    background: var(--color-blue-2);
    color: var(--color-grey-1);
    border: 0.05rem solid var(--color-smooth-green-1);
    font-size: 0.7rem;
    padding: 0.2rem 0.8rem;
    border-radius: 0.5rem;
}
</style>
