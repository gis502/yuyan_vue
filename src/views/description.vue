<template>
  <Document
      :docx-url="docxUrl"
      :breadcrumb-name="'机制介绍'"
  />
</template>

<script setup>
import "@vue-office/docx/lib/index.css";
import Document from "@/components/document.vue";

const docxUrl = `/docx/机制介绍/1.docx`

</script>

<style scoped>
</style>