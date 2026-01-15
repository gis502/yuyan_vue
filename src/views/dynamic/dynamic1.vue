<template>
  <Document
      :docx-url="docxUrl"
      :breadcrumb-name="'机制动态'"
  />
</template>

<script setup>
import "@vue-office/docx/lib/index.css";
import Document from "@/components/document.vue";

const docxUrl = `/docx/机制动态/20250109-“重大灾害无人机应急合作机制”业务交流和技术研讨会在哈尔滨召开.docx`
</script>

<style scoped>
</style>
