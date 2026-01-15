<template>
  <Document
      :docx-url="docxUrl"
      :breadcrumb-name="'灾害应急'"
  />
</template>

<script setup>
import "@vue-office/docx/lib/index.css";
import Document from "@/components/document.vue";

const docxUrl = `/docx/灾害应急/20250526-灾害应急：贵州大方县果瓦乡山体滑坡无人机应急监测.docx`;
</script>

<style scoped>
</style>
