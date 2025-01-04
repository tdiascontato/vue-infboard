<template>
    <div class="container-select-label">
        <div class="text-content">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
        </div>
        <div class="select-action">
            <div class="checkbox-wrapper-2">
                <input type="checkbox" class="sc-gJwTLC ikxBAC" v-model="isSelected" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    title: string;
    description: string;
}>();

const isSelected = ref(false);
</script>

<style scoped>
.container-select-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container-select-label > .text-content {
    flex: 1;
}

.container-select-label > .text-content > h3 {
    font-size: 1rem;
    color: var(--color-grey-1);
}

.container-select-label > .text-content > p {
    font-size: 0.6rem;
    color: var(--color-grey-2);
}

.container-select-label > .select-action {
    margin-left: 10px;
}

/* CheckBox CSS */
.checkbox-wrapper-2 .ikxBAC {
    appearance: none;
    background-color: #dfe1e4;
    border-radius: 72px;
    border-style: none;
    flex-shrink: 0;
    height: 20px;
    margin: 0;
    position: relative;
    width: 30px;
}

.checkbox-wrapper-2 .ikxBAC::before {
    bottom: -6px;
    content: "";
    left: -6px;
    position: absolute;
    right: -6px;
    top: -6px;
}

.checkbox-wrapper-2 .ikxBAC,
.checkbox-wrapper-2 .ikxBAC::after {
    transition: all 100ms ease-out;
}

.checkbox-wrapper-2 .ikxBAC::after {
    background-color: #fff;
    border-radius: 50%;
    content: "";
    height: 14px;
    left: 3px;
    position: absolute;
    top: 3px;
    width: 14px;
}

.checkbox-wrapper-2 input[type=checkbox] {
    cursor: default;
}

.checkbox-wrapper-2 .ikxBAC:hover {
    background-color: #c9cbcd;
    transition-duration: 0s;
}

.checkbox-wrapper-2 .ikxBAC:checked {
    background-color: #6e79d6;
}

.checkbox-wrapper-2 .ikxBAC:checked::after {
    background-color: #fff;
    left: 13px;
}

.checkbox-wrapper-2 :focus:not(.focus-visible) {
    outline: 0;
}

.checkbox-wrapper-2 .ikxBAC:checked:hover {
    background-color: #535db3;
}
</style>