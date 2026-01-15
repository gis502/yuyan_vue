<template>
  <Document
      :docx-url="docxUrl"
      :breadcrumb-name="'灾害应急'"
  />
</template>

<script setup>
import "@vue-office/docx/lib/index.css";
import Document from "@/components/document.vue";

const docxUrl = `/docx/灾害应急/20250731-灾害应急：山东济南市莱芜区大王庄镇山洪无人机应急监测.docx`

</script>

<style scoped>
</style>
