<template>
  <NoticeCommon header="机制动态" :content="list?.dynamic?.[1]?.html" />
</template>

<script setup>
import NoticeCommon from "@/components/NoticeCommon.vue";
import list from "/public/json/list.json";
</script>
<style scoped></style>
