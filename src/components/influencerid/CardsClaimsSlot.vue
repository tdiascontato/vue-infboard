<template>
    <div class="container-show-claims">
        <div class="up-section-claims">
                <div class="left-up-content-claims">
                    <div class="statuses-date">
                        <button class="verify-statuses-date"> verified </button>
                        <div class="dates-statuses-date">
                            <Calendar />
                            <p>14/01/2024</p>
                        </div>
                    </div>
                    <p class="content-claim">Viewing sunlight within 30-60 minutes of waking enhances cortisol release.</p>
                    <div class="link-to-content">
                        <p>View Source</p>
                        <Link />
                    </div>
                </div>
                <div class="right-up-content-claims">
                    <p class="left-up-percentual">92%</p>
                    <p class="left-up-trust-score">Trust Score</p>
                </div>
        </div>
        <div class="down-section-claims">
            <div class="down-ai-analysis">
                <Brain />
                <p class="down-ai-analysis-text">AI Analysis</p>
            </div>
            <p class="down-ai-analysis-title">Multiple studies confirm morning light exposure affects cortisol rhythms. Timing window supported by research.</p>
            <div class="link-to-content">
                <p>View Research</p>
                <Link />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Brain from '../icons/influencerid/brain.vue';
import Link from '../icons/influencerid/Link.vue';
import Calendar from '../icons/influencerid/Calendar.vue';

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