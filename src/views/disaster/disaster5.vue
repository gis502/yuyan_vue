<template>
  <NoticeCommon header="灾害应急" :content="list?.disaster?.[4]?.html" />
</template>

<script setup>
import NoticeCommon from "@/components/NoticeCommon.vue";
import list from "/public/json/list.json";
</script>
<style scoped></style>
