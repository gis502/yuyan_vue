<template>
  <DocumentOther
      :title="title"
      :content="content"
      :breadcrumbName="'当前页面名称'"
  />
</template>

<script setup>
import "@vue-office/docx/lib/index.css";
import DocumentOther from "@/components/documentOther.vue";

const title = `标题`
const content = `内容`
</script>

<style scoped>
</style>
