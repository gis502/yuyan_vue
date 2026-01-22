<template>
  <div class="document-container">
    <!-- 顶部图片展示区 -->
    <header class="document-header">
      <img
          src="@/assets/images/head.png"
          alt="国家减灾中心"
          class="header-image"
      />
    </header>

  <main class="document-content">
    <div class="breadcrumb-container">
      <div class="breadcrumb">
        <a href="./index.html" class="breadcrumb-item">首页</a>
        <span class="breadcrumb-separator">/</span>
        <a
            href="./index.html#/moreInfo/dynamic"
            class="breadcrumb-item"
        >
        机制动态
        </a>
      </div>
      <button class="back-button" @click="handleBack">
        <span class="back-icon">←</span> 返回首页
      </button>
    </div>

    <div class="docx-renderer">
      <div class="docx-wrapper">
        <section class="docx" style="padding: 72pt 90pt; width: 595.3pt; min-height: 841.9pt;">
          <article>
            <p style="text-align: center;">
          <span style="font-family: 方正小标宋_GBK; font-weight: bold; min-height: 22pt; font-size: 22pt;">
            “重大灾害无人机应急合作机制”业务交流和技术研讨会在哈尔滨召开
          </span>
            </p>

            <p style="margin-top: 28pt; margin-bottom: 7.8pt; text-indent: 28pt;">
          <span style="font-family: 方正仿宋_GBK; min-height: 14pt; font-size: 14pt;">
            2025年1月9日，“重大灾害无人机应急合作机制”业务交流和技术研讨会在黑龙江省哈尔滨市召开。黑龙江省应急管理厅副厅长闫永军、黑龙江地质矿产局总工程师孙德忠、应急管理部风险监测和火灾综合防治司副司长王成磊、应急管理部地震和地质灾害救援司地质灾害防治指导处二级调研员刘秋强、国家消防救援局高级工程师滕波、应急管理部防汛抗旱司三级调研员汤中倩、应急管理部国家减灾中心副主任张学权参加会议并致辞。
          </span>
            </p>

            <p style="margin-bottom: 7.8pt; text-indent: 28pt;">
          <span style="font-family: 方正仿宋_GBK; min-height: 14pt; font-size: 14pt;">
            会议以习近平新时代中国特色社会主义思想为指导，深入学习贯彻党的二十大和二十届二中、三中全会精神，认真贯彻落实全国应急管理工作会议精神，全面分析“重大灾害无人机应急合作机制”的作用发挥、存在不足和下步工作重点，进一步强化提升无人机监测“快速、精准、全面、专业”能力，更好地为重大灾害指挥决策和救援救灾提供支撑，更深入地服务于各地应急管理系统和相关行业单位。
          </span>
            </p>

            <p style="margin-bottom: 7.8pt; text-indent: 28pt;">
          <span style="font-family: 方正仿宋_GBK; min-height: 14pt; font-size: 14pt;">
            会上，成都理工大学、应急管理部北方航空护林总站的专家围绕地质灾害航空遥感调查关键技术和无人系统在森林火灾监测预警的实战应用做主旨报告，国家减灾中心航空遥感应用部主任王薇介绍了“重大灾害无人机应急合作机制”相关情况，14家省级单位和6个机制合作单位代表围绕航空应急监测工作业务需求与无人机应急经验作了业务交流和经验分享、提出工作建议。
          </span>
            </p>

            <p style="margin-bottom: 7.8pt; text-indent: 28pt;">
          <span style="font-family: 方正仿宋_GBK; min-height: 14pt; font-size: 14pt;">
            会议由应急管理部国家减灾中心主办，黑龙江省减灾中心、黑龙江省地质矿产局、黑龙江省精臻科技发展有限公司协办，来自16个省（自治区、直辖市）应急管理相关部门负责人和38家机制合作单位140余人参加会议。
          </span>
            </p>

            <p style="margin-bottom: 7.8pt; text-align: center;">
              <span style="font-family: 仿宋_GB2312; min-height: 14pt; font-size: 14pt;">
                <div style="display: block; position: relative; text-indent: 0px; width: 100%; height: auto; margin: 0px auto;">
                  <img src="/images/dynamic/dynamic1.jpg" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
                </div>
              </span>
            </p>
          </article>
        </section>
      </div>
    </div>
  </main>
    <Foot/>
  </div>
</template>

<script setup>
// 如果需要交互（比如返回按钮），可以加逻辑
import Foot from "@/components/foot.vue";

function handleBack() {
  window.location.href = './index.html'
}
</script>

<style scoped>
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
/* 提取自原始 HTML 中的内联样式 */
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

section.docx > footer {
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

/* 文档具体样式 */
.docx span {
  font-family: var(--docx-minorHAnsi-font);
}

.docx p,
p.docx_a {
  text-align: justify;
}

.docx p,
p.docx_a span {
  min-height: 10.5pt;
  font-size: 10.5pt;
}

.docx table,
table.docx_a1 td {
  padding-top: 0pt;
  padding-left: 5.4pt;
  padding-bottom: 0pt;
  padding-right: 5.4pt;
}

p.docx_a3 {
  text-align: left;
}

p.docx_a3 span {
  min-height: 9pt;
  font-size: 9pt;
}

p.docx_a5 {
  border-bottom: 0.75pt solid black;
  text-align: center;
}

p.docx_a5 span {
  min-height: 9pt;
  font-size: 9pt;
}

span.docx_a6 {
  min-height: 9pt;
  font-size: 9pt;
}

span.docx_a6 p {
  border-bottom: 0.75pt solid black;
  text-align: center;
}

span.docx_a4 {
  min-height: 9pt;
  font-size: 9pt;
}

span.docx_a4 p {
  text-align: left;
}

p.docx_1 span {
  min-height: 10.5pt;
  font-size: 10.5pt;
}

/* 页面布局样式 */
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