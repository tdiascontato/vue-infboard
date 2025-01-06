
<script setup lang="ts">
import { ref, computed } from 'vue';
import SearchIcon from '../icons/influencerid/SearchIcon.vue';

const categories = ['All Categories', 'Sleep', 'Performance', 'Hormones', 'Nutrition', 'Exercise', 'Stress', 'Cognition', 'Motivation', 'Recovery'];
const activeCategory = ref('All Categories');
const statuses = ['All Statuses', 'Verified', 'Questionable', 'Debunked'];
const activeStatus = ref('All Statuses');
const sortOptions = ['Date', 'Rank', 'Most commented'];
const sortBy = ref('Date');

const activeFilters = computed(() => {
    return `${activeCategory.value}, ${activeStatus.value}, ${sortBy.value}`;
});

function setActiveCategory(category: string) {
    activeCategory.value = category;
}

function setActiveStatus(status: string) {
    activeStatus.value = status;
}
</script>

<template>
    <div class="container-claims-analysis-slot">
        <div class="claims-analysis-slot-row">
            <SearchIcon class="search-icon" />
            <input type="text" placeholder="Search claims.." class="search-input">
        </div>

        <div class="claims-analysis-slot-row">
            <h3>Categories</h3>
            <div class="claims-analysis-slot-categories">
                <button v-for="category in categories" :key="category" :class="{ active: category === activeCategory }" @click="setActiveCategory(category)">
                    {{ category }}
                </button>
            </div>
        </div>

        <div class="claims-analysis-slot-row grid-search-slot">
            <div class="claims-analysis-slot-column">
                <h3>Verification Status</h3>
                <div class="claims-analysis-slot-statuses">
                    <button v-for="status in statuses" :key="status" :class="{ active: status === activeStatus }" @click="setActiveStatus(status)">
                        {{ status }}
                    </button>
                </div>
            </div>
            <div class="claims-analysis-slot-column">
                <h3>Sort By</h3>
                <select v-model="sortBy" class="sort-options">
                    <option v-for="option in sortOptions" :key="option" :value="option">
                        {{ option }}
                    </option>
                </select>
            </div>
        </div>

        <div class="claims-analysis-slot-row">
            <p>Active Filters: {{ activeFilters }}</p>
        </div>
        
        <div class="claims-analysis-slot-row">
            <button class="apply-filters">Apply Filters</button>
        </div>
    </div>
</template>

<style scoped>


.container-claims-analysis-slot > .claims-analysis-slot-row {
    margin-bottom: 0.8rem;
}

.container-claims-analysis-slot > .claims-analysis-slot-row > .search-input {
    width: 100%;
    background-color: var(--color-grey-1);
    color: black;
    font-size: 1rem;
    font-weight: bold;
    border: 0.05rem solid var(--color-green-1);
    border-radius: 0.5rem;
    padding: 10px;
    padding-left: 2rem;
    height: 3rem;
}

.container-claims-analysis-slot > .claims-analysis-slot-row > .search-input:focus {
    outline: none;
}

.container-claims-analysis-slot > .claims-analysis-slot-row > .search-icon {
    position: absolute;
    width: fit-content;
    margin: 0.7rem 0.3rem;
}

.claims-analysis-slot-categories, .claims-analysis-slot-statuses {
    display: flex;
    flex-wrap: wrap;
    width: 75%;
    gap: 0.5rem;
}

.claims-analysis-slot-categories button,
.claims-analysis-slot-statuses button {
    padding: 0.5rem 1rem;
    border: 0.05rem solid var(--color-green-1);
    border-radius: 0.5rem;
    background: var(--color-smooth-green-1);
    color: var(--color-white-1);
}
button.active {
    background-color: var(--color-green-1);
    color: white;
}
.grid-search-slot {
    display: flex;
}

.claims-analysis-slot-column {
    flex: 1;
}

.claims-analysis-slot-column > .sort-options {
    width: 100%;
    padding: 0.5rem;
    border: 0.05rem solid var(--color-green-1);
    border-radius: 0.5rem;
    background: var(--color-smooth-green-1);
    color: var(--color-white-1);
    cursor: pointer;
}

.claims-analysis-slot-column > .sort-options option {
    background: var(--color-smooth-grey-1);
    color: black;
    font-weight: bold;
    cursor: pointer;
}

.claims-analysis-slot-row > .apply-filters {
    padding: 0.5rem 1rem;
    border: 0.05rem solid var(--color-green-1);
    border-radius: 0.5rem;
    background: var(--color-smooth-green-1);
    color: var(--color-white-1);
    cursor: pointer;
}
</style>
