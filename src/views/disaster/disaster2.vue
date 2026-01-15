<template>
  <Document
      :docx-url="docxUrl"
      :breadcrumb-name="'灾害应急'"
  />
</template>

<script setup>
import "@vue-office/docx/lib/index.css";
import Document from "@/components/document.vue";

const docxUrl = `/docx/灾害应急/20250210-灾害应急：四川筠连山体滑坡应急监测评估.docx`
</script>

<style scoped>
</style>
