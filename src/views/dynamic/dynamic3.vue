<template>
  <div class="document-container">
    <!-- 顶部图片展示区 -->
    <header class="document-header">
      <img src="@/assets/images/head.png" alt="国家减灾中心" class="header-image" />
    </header>

    <main class="document-content">
      <div class="breadcrumb-container">
        <div class="breadcrumb">
          <a href="./index.html" class="breadcrumb-item">首页</a>
          <span class="breadcrumb-separator">/</span>
          <a href="./index.html#/moreInfo/dynamic" class="breadcrumb-item">机制动态</a>
        </div>
        <button class="back-button" @click="handleBack">
          <span class="back-icon">←</span> 返回首页
        </button>
      </div>

      <!-- 渲染后的 docx 内容（按 dynamic1.vue 模板） -->
      <div class="docx-renderer">
        <div class="docx-wrapper">
          <section class="docx" style="padding: 72pt 90pt; width: 595.3pt; min-height: 841.9pt;">
            <article>
              <p style="text-align: center;">
          <span style="font-family: 方正小标宋_GBK; font-weight: bold; min-height: 22pt; font-size: 22pt;">
            聚青年英才之力 筑无人机应急防线
          </span>
              </p>

              <p style="margin-top: 28pt; margin-bottom: 7.8pt; text-indent: 28pt;">
          <span style="font-family: 方正仿宋_GBK; min-height: 14pt; font-size: 14pt;">
            自2010年建立“重大灾害无人机应急合作机制”以来，该机制在历次重特大自然灾害的防灾减灾救灾工作中发挥了重要的技术支撑作用。应急管理部国家减灾中心航空遥感应用部积极推动“重大灾害无人机应急合作机制”的创新发展，按照“开门办中心”的部署，引入青年专家型志愿者共同参与部门能力建设、技术研发和业务支撑工作。
          </span>
              </p>

              <p style="margin-bottom: 7.8pt; text-indent: 28pt;">
          <span style="font-family: 方正仿宋_GBK; min-height: 14pt; font-size: 14pt;">
            经过前期调研和广泛征求意见，减灾中心已从省级减灾中心、机制合作单位及公益基金会等征集了10名具备无人机技术、应急管理或遥感应用背景的青年专家志愿者。这些志愿者将被聘任为不取酬外聘专家，他们的加入将为无人机应急合作机制注入新的活力，助力减灾中心在重大自然灾害风险防范和应急救援保障工作中发挥更大作用。
          </span>
              </p>

              <p style="margin-bottom: 7.8pt; text-indent: 28pt;">
          <span style="font-family: 方正仿宋_GBK; min-height: 14pt; font-size: 14pt;">
            此次引入青年专家志愿者，不仅是减灾中心提升业务能力的重要举措，还是推动“开门办中心”理念落地的具体实践，同时也助力社会企事业单位履行社会责任、共享创新成果、提升品牌价值、培养复合人才，共同以科技创新守护生命防线，用责任担当诠释企业价值。
          </span>
              </p>

              <p style="margin-bottom: 7.8pt; text-indent: 28pt;">
          <span style="font-family: 方正仿宋_GBK; min-height: 14pt; font-size: 14pt;">
            通过青年专家的参与，减灾中心将进一步优化无人机应急合作机制的运行效率，增强技术研发能力，为重大自然灾害的防范和应急救援提供更加坚实的支撑，共同推动无人机应急合作机制的创新发展，为国家的防灾减灾救灾事业贡献力量。
          </span>
              </p>

              <p style="margin-bottom: 7.8pt; text-align: center;">
              <span style="font-family: 仿宋_GB2312; min-height: 14pt; font-size: 14pt;">
                <div style="display: block; position: relative; text-indent: 0px; width: 100%; height: auto; margin: 0px auto;">
                  <img src="/images/dynamic/dynamic3-1.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
                </div>
              </span>
              </p>
            </article>
          </section>
        </div>
      </div>
    </main>

    <Foot />
  </div>
</template>

<script setup>
import Foot from "@/components/foot.vue";

function handleBack() {
  window.location.href = './index.html';
}
</script>

<style scoped>
/* 完全复用 dynamic1.vue 的样式 */
.document-container {
  width: 100%;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: #fff;
}

.document-header {
  width: 100%;
  background: #fff;
  text-align: center;
  padding: 0;
}

.docx-renderer {
  width: 100%;
  background: #fff;
}

.docx-wrapper {
  background: #FFF;
  padding: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  overflow: visible !important;
  height: auto !important;
}

.docx-wrapper > section.docx {
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 30px;
}

.docx {
  width: 700pt !important;
  box-shadow: none !important;
  padding: 20px !important;
  height: auto !important;
  min-height: auto !important;
  color: black;
  hyphens: auto;
  text-underline-position: from-font;
}

section.docx {
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  overflow: hidden;
}

section.docx > article {
  margin-bottom: auto;
  z-index: 1;
}

.docx table {
  border-collapse: collapse;
}

.docx table td,
.docx table th {
  vertical-align: top;
}

.docx p {
  margin: 0pt;
  min-height: 1em;
}

.docx span {
  white-space: pre-wrap;
  overflow-wrap: break-word;
}

.docx a {
  color: inherit;
  text-decoration: inherit;
}

.docx svg {
  fill: transparent;
}

/* 主题变量 */
.docx {
  --docx-majorHAnsi-font: "等线 Light";
  --docx-minorHAnsi-font: "等线";
  --docx-dk1-color: #000000;
  --docx-lt1-color: #ffffff;
  --docx-dk2-color: #44546a;
  --docx-lt2-color: #e7e6e6;
  --docx-accent1-color: #4472c4;
  --docx-accent2-color: #ed7d31;
  --docx-accent3-color: #a5a5a5;
  --docx-accent4-color: #ffc000;
  --docx-accent5-color: #5b9bd5;
  --docx-accent6-color: #70ad47;
  --docx-hlink-color: #0563c1;
  --docx-folhlink-color: #954f72;
}

.docx span {
  font-family: var(--docx-minorHAnsi-font);
}

.document-content {
  width: 800pt;
  padding: 20px;
  background: #fff;
  border: 1px solid #eeeeee;
  min-height: 80vh;
  position: relative;
  box-sizing: border-box;
  margin-left: 150pt;
}

.breadcrumb-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e8e8e8;
}

.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
}

.breadcrumb-item {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-item:hover {
  color: #1890ff;
}

.breadcrumb-item.current {
  color: #333;
  font-weight: 500;
}

.breadcrumb-separator {
  margin: 0 8px;
  color: #999;
}

.back-button {
  display: flex;
  align-items: center;
  padding: 6px 12px;
  background-color: #f0f0f0;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: all 0.3s;
}

.back-button:hover {
  background-color: #e6e6e6;
  border-color: #b3b3b3;
}

.back-button:active {
  background-color: #d9d9d9;
}

.back-icon {
  margin-right: 4px;
  font-size: 12px;
}
</style>