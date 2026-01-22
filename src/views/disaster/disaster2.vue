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

      <div class="docx-renderer">
        <div class="docx-wrapper">
          <section class="docx" style="padding: 72pt 90pt; width: 595.3pt; min-height: 841.9pt;">
            <article>
              <p style="text-align: center;">
          <span style="font-family: 方正小标宋_GBK; font-weight: bold; min-height: 22pt; font-size: 22pt;">
            灾害应急：四川筠连山体滑坡应急监测评估
          </span>
              </p>

              <p style="margin-top: 28pt; margin-bottom: 7.8pt; text-indent: 28pt;">
          <span style="font-family: 方正仿宋_GBK; min-height: 14pt; font-size: 14pt;">
            2025 年 2 月 8 日 11 时 50 分许，四川省宜宾市筠连县沐爱镇金坪村发生山体滑坡，造成了重大人员伤亡和财产损失。
          </span>
              </p>

              <p style="margin-bottom: 7.8pt; text-indent: 28pt;">
          <span style="font-family: 方正仿宋_GBK; min-height: 14pt; font-size: 14pt;">
            灾害发生后，应急管理部国家减灾中心紧急启动重大灾害应急无人机合作机制，就近调拨了 4 支队伍共 11 人携带 15 架无人机，可见光、Lidar、热红外等载荷以及照明、喊话、抛投、卫星通讯等设备赶赴灾区开展无人机应急监测。
          </span>
              </p>

              <p style="margin-bottom: 7.8pt; text-indent: 28pt;">
          <span style="font-family: 方正仿宋_GBK; min-height: 14pt; font-size: 14pt;">
            飞行队于 2 月 8 日当天 16 时 30 分抵达现场后立刻展开飞行，至 2 月 9 日飞行队共飞行 18 架次，巡查 8.3 公里，监测面积约 5 平方公里，拍摄全景图 10 幅、视频 28 段、相片 20 余张，高效支撑了中心对灾区滑坡碎屑流、房屋冲毁和掩埋、二次滑坡风险等情况的分析研判，并配合消防队伍人员搜救开展夜间系留照明工作。
          </span>
              </p>

              <p style="margin-bottom: 7.8pt; text-align: center;">
              <span style="font-family: 仿宋_GB2312; min-height: 14pt; font-size: 14pt;">
                <div style="display: block; position: relative; text-indent: 0px; width: 100%; height: auto; margin: 0px auto;">
                  <img src="/images/disaster/disaster2-1.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
                </div>
              </span>
              </p>

              <p style="margin-bottom: 7.8pt; text-align: center;">
              <span style="font-family: 仿宋_GB2312; min-height: 14pt; font-size: 14pt;">
                <div style="display: block; position: relative; text-indent: 0px; width: 100%; height: auto; margin: 0px auto;">
                  <img src="/images/disaster/disaster2-2.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
                </div>
              </span>
              </p>

              <p style="margin-bottom: 7.8pt; text-align: center;">
              <span style="font-family: 仿宋_GB2312; min-height: 14pt; font-size: 14pt;">
                <div style="display: block; position: relative; text-indent: 0px; width: 100%; height: auto; margin: 0px auto;">
                  <img src="/images/disaster/disaster2-3.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
                </div>
              </span>
              </p>

              <p style="margin-bottom: 7.8pt; text-align: center;">
              <span style="font-family: 仿宋_GB2312; min-height: 14pt; font-size: 14pt;">
                <div style="display: block; position: relative; text-indent: 0px; width: 100%; height: auto; margin: 0px auto;">
                  <img src="/images/disaster/disaster2-4.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
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