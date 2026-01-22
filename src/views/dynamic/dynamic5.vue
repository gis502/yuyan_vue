<template>
  <Document
      :docx-url="docxUrl"
      :breadcrumb-name="'机制动态'"
  />
</template>

<script setup>
import "@vue-office/docx/lib/index.css";
import Document from "@/components/document.vue";

const docxUrl = `/docx/dynamic/20250530-业务交流：国家减灾中心派员参加2025第九届世界无人机大会暨UASE无人机展.docx`
</script>

<style scoped>
</style>
