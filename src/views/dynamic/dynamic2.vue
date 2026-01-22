<template>
  <Document
      :docx-url="docxUrl"
      :breadcrumb-name="'机制动态'"
  />
</template>

<script setup>
import "@vue-office/docx/lib/index.css";
import Document from "@/components/document.vue";

const docxUrl = `/docx/dynamic/20250307-机制动态：“重大灾害无人机应急合作机制”2025年考核和增补工作圆满完成.docx`
</script>

<style scoped>
</style>
