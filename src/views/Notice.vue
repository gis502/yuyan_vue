
<template>
  <NoticeCommon header="招募公告" :content="List.notice[0].html" />
</template>

<script setup>
import NoticeCommon from "@/components/NoticeCommon.vue";
import List from "/public/json/list.json"
</script>
<style scoped></style>
