<script setup lang="ts">
import ConfigIcon from '../icons/actions/ConfigIcon.vue';

</script>
<template>
    <div class="container-tab-options">
            <h2> 
            <ConfigIcon />
            Research Configuration
            </h2>
            <div class="tabs">
                <button>
                    Specific Influencer
                    <p>Research a known health influencer by name</p>
                </button>
                <button>
                    Discover New
                    <p>Find and analyze new health influencers</p>
                </button>
            </div>
        </div>
</template>
<style scoped>
.container-tab-options {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    text-align: start;
    padding: 0.5rem;
}   
.container-tab-options > .tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.container-tab-options > h2 {
    font-size: 1.1rem;
    font-weight: bold;
    color: var(--color-grey-1);
    margin-bottom: 0.2rem;
    width: 100%;
}

.container-tab-options > h2 > svg {
    width: 1rem;
}

.container-tab-options > .tabs > button {
    width: 50%;
    padding: 1rem 2rem;
    background: #1dd7b249;
    border: 0.05rem solid var(--color-green-1);
    border-radius: 0.5rem;
    font-size: 1rem;
    color: var(--color-white-1);
    cursor: pointer;
}
  
.container-tab-options > .tabs > button:hover {
    background: #12877049;
    color: #fff;
    transition: 0.5s ease-in-out;
}

.container-tab-options > .tabs > button.active {
    background: #2c3e50;
    color: #fff;
}

.container-tab-options > .tabs > button > p {
    font-size: 0.8rem;
    color: var(--color-grey-1);
}
  </style>