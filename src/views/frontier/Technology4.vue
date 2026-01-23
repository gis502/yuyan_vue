<template>
  <NoticeCommon header="技术前沿" :content="list?.technology?.[3]?.html" :href="list?.technology?.[3]?.moreInfo" />
</template>

<script setup>
import NoticeCommon from "@/components/NoticeCommon.vue";
import list from "/public/json/list.json";
</script>
<style scoped></style>
