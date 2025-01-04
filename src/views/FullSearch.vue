
<script setup lang="ts">
import { ref } from "vue";
import ReturnPage from "@/components/actions/ReturnPage.vue";
import TabOptions from "@/components/fullsearch/TabOptions.vue";
import TimeRange from "@/components/fullsearch/TimeRange.vue";
import LabelsSearch from "@/components/fullsearch/LabelsSearch.vue";
import SelectLabel from "@/components/fullsearch/SelectLabel.vue";
import ScientificSearch from "@/components/fullsearch/ScientificSearch.vue";
  
const scientificJournals = ref([
    "Nature",
    "Science",
    "The Lancet",
    "Cell",
    "JAMA",
    "BMJ",
    "New England Journal of Medicine"
]);
</script>

<template>
    <section class="container-research-tasks">
      <ReturnPage backTo="Dashboard" title="Full Search" @go-dashboard="" />
      
      <div class="form-research">
        <TabOptions />
        <div class="bi-section-research">
          <aside class="left-section-research">
            <TimeRange />
            <LabelsSearch title="Influencer Name" type="text" placeholder="Enter influencer name" />
            <LabelsSearch title="Claims to Analyze Per Influencer" type="number" description="Recommended: 50-100 claims for comprehensive analysis"/>
          </aside>
          <aside class="right-section-research">
            <LabelsSearch title="Claims to Analyze Per Influencer" type="number" description="Set 0 to skip product research"/>
            <SelectLabel title="Product Research" description="Analyze products mentioned in claims" />
            <SelectLabel title="Verify with Scientific Journais" description="Cross-reference claims with scientific literature" />
          </aside>
        </div>
        <ScientificSearch :labels="scientificJournals" />
      </div>

    </section>
</template>
  
<style scoped>
.container-research-tasks {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.container-research-tasks > .form-research {
  background: var(--color-blue-2);
  padding: 0.3rem 1rem;
  border-radius: 0.3rem;
}

.container-research-tasks > .form-research > .bi-section-research {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.container-research-tasks > .form-research > .bi-section-research > .left-section-research, .container-research-tasks > .form-research > .bi-section-research > .right-section-research {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

</style>