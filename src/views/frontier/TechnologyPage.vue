<template>
  <Document
      :docx-url="docxUrl"
      :breadcrumb-name="'技术前沿'"
  />
</template>

<script setup>
import { computed } from "vue";
import "@vue-office/docx/lib/index.css";
import { useRoute } from "vue-router";
import Document from "@/components/document.vue";
const route = useRoute();

const docId = computed(() => {
  return parseInt(route.params.id) || 1;
});

const docxUrl = computed(() => {
  return `/docx/technicaldox/${docId.value}.docx`;
});

</script>

<style scoped>
:deep(td) {
  vertical-align: middle !important;
}
</style>
