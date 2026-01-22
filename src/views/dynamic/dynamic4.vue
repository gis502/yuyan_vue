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
            “雨燕应急”2025首期线上培训圆满完成
          </span>
              </p>
              <p style="text-align: center;">
          <span style="font-family: 方正小标宋_GBK; font-weight: bold; min-height: 22pt; font-size: 22pt;">
            684名无人机应急尖兵云端集结
          </span>
              </p>

              <p style="margin-top: 28pt; margin-bottom: 7.8pt; text-indent: 28pt;">
          <span style="font-family: 方正仿宋_GBK; min-height: 14pt; font-size: 14pt;">
            4月24日下午，应急管理部国家减灾中心在京组织召开了“雨燕应急”2025首期线上培训，聚焦“重大灾害无人机应急合作机制”，旨在强化机制成员灾害应急应对能力。此次培训共有220家机制成员单位的684名联络人和一线飞手线上参会，大疆应急行业负责人耿京乐、北京飞马遥测公司杨建华、河南省防灾减灾中心周永春共3名专家受邀在国家减灾中心现场参会。
          </span>
              </p>

              <p style="margin-bottom: 7.8pt; text-indent: 28pt;">
          <span style="font-family: 方正仿宋_GBK; min-height: 14pt; font-size: 14pt;">
            国家减灾中心航空遥感应用部王薇主任、李苓苓和杨坤3名同志分别就机制制度、日常管理和应急响应进行了详细讲解，参培人员和专家围绕机制制度规范、工作执行等关键问题展开了交流。
          </span>
              </p>

              <p style="margin-bottom: 7.8pt; text-indent: 28pt;">
          <span style="font-family: 方正仿宋_GBK; min-height: 14pt; font-size: 14pt;">
            通过培训，增进了机制成员单位联络人和一线飞手对机制运行和应急管理工作的了解，为机制成员单位平战结合，日常开展能力建设、灾害预警等应急准备工作，和在灾害场景下安全、高效、有序执行应急任务提供了明确指导。
          </span>
              </p>

              <p style="margin-bottom: 7.8pt; text-align: center;">
              <span style="font-family: 仿宋_GB2312; min-height: 14pt; font-size: 14pt;">
                <div style="display: block; position: relative; text-indent: 0px; width: 100%; height: auto; margin: 0px auto;">
                  <img src="/images/dynamic/dynamic4-1.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
                </div>
              </span>
              </p>

              <p style="margin-bottom: 7.8pt; text-align: center;">
              <span style="font-family: 仿宋_GB2312; min-height: 14pt; font-size: 14pt;">
                <div style="display: block; position: relative; text-indent: 0px; width: 100%; height: auto; margin: 0px auto;">
                  <img src="/images/dynamic/dynamic4-2.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
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