<template>
  <div style="width: 100%; margin: 0; padding: 20px; overflow: auto; min-height: 100vh;box-sizing: border-box;background: #f5f7fa">
    <vue-office-docx
      :src="docxUrl"
      @rendered="renderedHandler"
      @error="errorHandler"
      style="width: 100%;"
    />
    <Foot />
  </div>
</template>

<script setup>
import VueOfficeDocx from "@vue-office/docx";
import "@vue-office/docx/lib/index.css";
import Foot from "@/components/foot.vue";

const docxUrl = `/docx/灾害应急/20250731-灾害应急：山东济南市莱芜区大王庄镇山洪无人机应急监测.docx`

</script>

<style scoped>
:deep(.docx-wrapper) {
  background: #FFF !important;
  padding: 0 !important;
}
:deep(.docx) {
  width: 98% !important;
  box-shadow: none !important;
}

:deep(.docx-wrapper) {
  overflow: visible !important;
  height: auto !important;   
}

:deep(.docx) {
  height: auto !important;
  min-height: auto !important;
  padding: 20px !important;
}
</style>