<template>
  <NoticeCommon header="机制动态" :content="list?.dynamic?.[4]?.html" :href="list?.dynamic?.[4]?.moreInfo" />
</template>

<script setup>
import NoticeCommon from "@/components/NoticeCommon.vue";
import list from "/public/json/list.json";
</script>
<style scoped></style>
