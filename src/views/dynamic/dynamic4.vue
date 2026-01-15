<template>
  <Document
      :docx-url="docxUrl"
      :breadcrumb-name="'机制动态'"
  />
</template>

<script setup>
import "@vue-office/docx/lib/index.css";
import Document from "@/components/document.vue";

const docxUrl = `/docx/机制动态/20250426-机制动态：“雨燕应急”2025首期线上培训圆满完成，684名无人机应急尖兵云端集结.docx`
</script>

<style scoped>
</style>
