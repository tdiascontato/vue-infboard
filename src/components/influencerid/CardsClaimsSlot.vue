<template>
    <div class="container-show-claims">
        <div class="up-section-claims">
                <div class="left-up-content-claims">
                    <div class="statuses-date">
                        <button class="verify-statuses-date"> verified </button>
                        <div class="dates-statuses-date">
                            <Calendar />
                            <p>{{ tweets_data.created_at }} </p>
                        </div>
                    </div>
                    <p class="content-claim">{{ tweets_data.content }}</p>
                    <div class="link-to-content">
                        <a :href="tweets_data.url" target="_blank">
                        <p>View Source</p>
                            <Link />
                        </a>
                    </div>
                </div>
                <div class="right-up-content-claims">
                    <p class="left-up-percentual">{{ tweets_data.percentual}}</p>
                    <p class="left-up-trust-score">Score</p>
                </div>
        </div>
        <div class="down-section-claims">
            <div class="down-ai-analysis">
                <Brain />
                <p class="down-ai-analysis-text">AI Analysis</p>
            </div>
            <p class="down-ai-analysis-title">{{ tweets_data.comment }}</p>
            <div class="link-to-content">
                <a :href="tweets_data.url" target="_blank">
                <p>View Research</p>
                    <Link />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Brain from '../icons/influencerid/Brain.vue';
import Link from '../icons/influencerid/Link.vue';
import Calendar from '../icons/influencerid/Calendar.vue';

defineProps<{
    tweets_data: {
        id: number,
        influecer: string,
        content: string,
        created_at: string,
        url: string,
        comment: string,
        category: string,
        percentual: string,
    }
}>();
</script>

<style scoped>
.container-show-claims {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.container-show-claims svg {
    width: 1.4rem;
    height: 1.4rem;
}

.container-show-claims > .up-section-claims {
    display: flex;
    justify-content: space-between;
    height: fit-content;
}

.container-show-claims > .up-section-claims > .right-up-content-claims {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.container-show-claims > .up-section-claims > .right-up-content-claims > .left-up-percentual {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--color-green-1);

}

.left-up-content-claims > .statuses-date {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.left-up-content-claims > .statuses-date > .verify-statuses-date {
    background-color: var(--color-green-1);
    color: var(--color-smooth-dark-purple-1);
    border: none;
    border-radius: 0.5rem;
    height: 1rem;
}

.left-up-content-claims > .statuses-date > .dates-statuses-date {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.up-section-claims > .left-up-content-claims > .content-claim {
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--color-white-1);
}

.up-section-claims > .left-up-content-claims > .link-to-content, .down-section-claims > .link-to-content {
    display: flex;
    align-items: center;
    gap: 0.1rem;
    color: var(--color-green-1);
    text-decoration: none;
    font-style: normal;
}

.up-section-claims > .left-up-content-claims > .link-to-content a, .down-section-claims > .link-to-content a {
    text-decoration: none;
    color: var(--color-green-1);
    margin: 0;
    cursor: pointer;
    display: flex;
    gap: 0.3rem;
}

.container-show-claims > .down-section-claims {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.container-show-claims > .down-section-claims > .down-ai-analysis {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-white-1);
}

.container-show-claims > .down-section-claims > .down-ai-analysis > .down-ai-analysis-title {
    font-size: 1.3rem;
    font-weight: 500;
}   
</style>