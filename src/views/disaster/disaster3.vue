<template>
  <Document
      :docx-url="docxUrl"
      :breadcrumb-name="'灾害应急'"
  />
</template>

<script setup>
import "@vue-office/docx/lib/index.css";
import Document from "@/components/document.vue";

const docxUrl = `/docx/灾害应急/20250322-灾害应急：云南福贡县亚目水电站滑坡应急监测.docx`
</script>

<style scoped>
</style>
