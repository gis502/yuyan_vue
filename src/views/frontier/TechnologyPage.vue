<template>
  <div
    style="
      width: 100%;
      margin: 0;
      padding: 20px;
      overflow: auto;
      min-height: 100vh;
      box-sizing: border-box;
      background: #f5f7fa;
    "
  >
    <vue-office-docx
      :src="docxUrl"
      @rendered="renderedHandler"
      @error="errorHandler"
      style="width: 100%"
    />
    <Foot />
  </div>
</template>

<script setup>
import { computed } from "vue";
import VueOfficeDocx from "@vue-office/docx";
import "@vue-office/docx/lib/index.css";
import { useRoute } from "vue-router";
import Foot from "@/components/foot.vue";
const route = useRoute();

const docId = computed(() => {
  return parseInt(route.params.id) || 1;
});

const docxUrl = computed(() => {
  return `/docx/技术装备前沿/${docId.value}.docx`;
});

const errorHandler = (err) => {
  console.error("文档加载失败", err);
};

const renderedHandler = () => {
  console.log("文档渲染完成，开始修改图片样式");
  // 获取docx容器内的所有图片标签【只选图片，精准无遗漏】
  const imgList = document.querySelectorAll(".docx img");
  // 遍历每一张图片，只修改它的父级div
  imgList.forEach((img, index) => {
    const imgParentDiv = img.closest("div");
    if (imgParentDiv) {
      if (docId.value == 1 && (index == 1 || index == 2)) {
        imgParentDiv.style.width = "100%";
        imgParentDiv.closest("td").style.width = "50%";
        imgParentDiv.closest("table").style.width = "100%";
      } else {
        imgParentDiv.style.width = "100%";
      }

      imgParentDiv.style.height = "auto";
      imgParentDiv.style.display = "block";
      imgParentDiv.style.margin = "0 auto";
      imgParentDiv.style.textIndent = "0";
    }

    img.style.width = "100%";
    img.style.height = "auto";
  });
};
</script>

<style scoped>
:deep(.docx-wrapper) {
  background: #fff !important;
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

:deep(td) {
  vertical-align: middle !important;
}
</style>
