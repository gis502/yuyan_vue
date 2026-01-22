<template>
  <Document
      :docx-url="docxUrl"
      :breadcrumb-name="'机制动态'"
  />
</template>

<script setup>
import "@vue-office/docx/lib/index.css";
import Document from "@/components/document.vue";

const docxUrl = `/docx/dynamic/20250326-机制动态：聚青年英才之力 筑无人机应急防线.docx`
</script>

<style scoped>
</style>
