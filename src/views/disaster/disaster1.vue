<template>
  <Document
      :docx-url="docxUrl"
      :breadcrumb-name="'灾害应急'"
  />
</template>

<script setup>
import "@vue-office/docx/lib/index.css";
import Document from "@/components/document.vue";

const docxUrl = `/docx/灾害应急/20250117-灾害应急：西藏定日6.8级地震应急监测评估.docx`

</script>

<style scoped>
</style>
