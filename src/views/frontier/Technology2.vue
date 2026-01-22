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
            href="./index.html#/moreInfo/technology"
            class="breadcrumb-item"
        >
        前沿科技
        </a>
      </div>
      <button class="back-button" @click="handleBack">
        <span class="back-icon">←</span> 返回首页
      </button>
    </div>

    <!-- 渲染后的 docx 内容 -->
    <div class="docx-renderer">
      <div class="docx-wrapper">
        <!-- 第一部分：标题和摘要 -->
        <section class="docx" style="padding: 72pt 90pt; width: 595.3pt; min-height: 841.9pt;">
          <article>
            <p style="text-align: center;">
              <span lang="null" style="font-family: var(--docx-minorEastAsia-font); font-weight: bold; color: rgb(0, 0, 0); min-height: 14pt; font-size: 14pt;">
                《北邮学报》基于道路中心线的分阶段弱监督遥感图像道路提取 
              </span>
            </p>
            <p style="text-align: left;">
              <span lang="null" style="font-family: var(--docx-minorEastAsia-font); color: rgb(0, 0, 0);">
                本文提出了一种基于道路中心线的分阶段弱监督遥感图像道路提取算法（SWSS），旨在解决卫星图像中道路提取任务中像素级标注成本高的问题。该算法通过分阶段训练道路分割模型，利用道路中心线涂鸦标签进行弱监督学习，并提出了伪掩码更新策略和混合训练策略。实验结果表明，该算法在道路分割任务中优于其他基于道路中心线的弱监督方法，有效降低了数据标注成本。
              </span>
            </p>
            <p style="text-align: center;">
              <span lang="null" style="font-family: 黑体; color: rgb(0, 0, 0); min-height: 22pt; font-size: 22pt;">
                基于道路中心线的分阶段弱监督遥感图像道路提取
              </span>
            </p>
            <p style="line-height: 1.4; text-align: center;">
              <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;">王  </span>
              <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;">薇</span>
              <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;"><sup>1</sup></span>
              <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;">，  </span>
              <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;">谢沈惟</span>
              <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;"><sup>2</sup></span>
              <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;">, </span>
              <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;"> </span>
              <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;">闫浩田</span>
              <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;"><sup>2</sup></span>
              <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;">,  张  闯</span>
              <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;"><sup>2</sup></span>
              <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;">，  吴  铭</span>
              <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;"><sup>2</sup></span>
            </p>
            <p style="line-height: 1.4; text-align: center;">
              <span style="font-family: 宋体; min-height: 8pt; font-size: 8pt;">
                (1. 应急管理部门国家减灾中心 航空遥感应用部，北京 100124；2. 北京邮电大学 人工智能学院 北京 100876)
              </span>
            </p>
            <p>
              <span style="font-weight: bold;">摘要：</span>
              <span>
                利用语义分割算法从卫星图像中提取道路已经成为遥感道路监测任务的主流解决方案。然而，不同地理环境下卫星图像中的道路纹理复杂多变，加之道路的像素级标注成本昂贵，因此在训练语义分割模型时大量使用像素级标注的方法是不现实的。对此，提出了一种分阶段弱监督道路提取算法，利用道路中心线涂鸦标签进行弱监督训练，并分阶段地训练道路分割模型。此外，还提出了伪掩码更新策略和混合训练策略，设计了适用于道路前景和背景的损失函数。实验结果表明，所提算法在道路分割任务中比其他基于道路中心线的弱监督方法具有更优异的性能，而消融实验结果也验证了所提训练策略的有效性。
              </span>
            </p>
            <p>
              <span style="font-weight: bold;">关  键  词：</span>
              <span>
                道路提取；图像分割；弱监督学习；遥感图像
              </span>
            </p>
            <p class="docx-num-1-0">
              <span style="font-weight: bold;">
                弱监督道路提取概况
              </span>
            </p>
            <p>
              <span>
                道路状况监测对城市发展和基础设施建设至关重要。随着遥感技术的发展，语义分割算法成为从卫星图像中提取道路的主流方法。然而，由于不同地理环境下道路纹理复杂多变，且像素级标注成本高昂，获取大量高分辨率卫星图像的像素级标注用于训练非常困难。弱监督学习方法通过利用易获取的道路中心线矢量数据，减少了对全像素标注的需求。现有的基于道路中心线的弱监督方法通常通过非深度学习方式生成伪掩码（如图1），导致道路边缘信息缺失。本文提出的算法旨在解决这些问题，提高道路分割的准确性和完整性。
              </span>
            </p>
            <p style="text-align: center;">
              <img src="/images/technology/2-1.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
            </p>
            <p style="text-align: center;">
              <span>
                图1 现有文献中的伪道路标注掩码生成方式
              </span>
            </p>
            <p style="text-align: center;"></p>
            <p class="docx-num-1-0">
              <span style="font-weight: bold;">
                SWSS算法方案
              </span>
            </p>
            <p style="text-align: left;">
              <span>
                本文提出的SWSS算法包括两个阶段：中心线学习和伪掩码学习。在第一阶段，模型利用道路中心线涂鸦标签进行训练，学习道路的大致位置和拓扑结构信息。在第二阶段，模型使用第一阶段生成的伪掩码进行训练，逐步优化道路分割结果。为了提升伪掩码的质量，算法引入了伪掩码更新策略，通过指数移动平均方法周期性地更新伪掩码。此外，混合训练策略通                过固定部分真实道路分割掩码，减少模型对非道路纹理的关注。算法还设计了适用于道路前景和背景的损失函数，进一步优化模型训练。
              </span>
            </p>
          </article>
        </section>
        
        <!-- 第二部分：详细内容 -->
        <section class="docx" style="padding: 72pt 90pt; width: 595.3pt; min-height: 841.9pt;">
          <article>
            <p style="text-align: center;">
              <img src="/images/technology/2-2.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
            </p>
            <p style="text-align: center;">
              <span>
                图2 SWSS算法流程图
              </span>
            </p>
            <p class="docx-num-1-0">
              <span style="font-weight: bold;">
                仿真实验
              </span>
            </p>
            <p style="text-align: left;">
              <span>
                实验在DeepGlobe和云南山区道路数据集上进行，评估指标为交并比（IoU）。实验结果表明，SWSS算法在DeepGlobe数据集上的IoU达到0.5621，加入去噪模块和混合训练策略后提升至0.5801，优于其他弱监督方法（表1）。在云南山区道路数据集上，该算法的IoU为0.5077，表现出较强的鲁棒性，能够有效处理山区道路的遮挡和弯曲问题（表2）。消融实验验证了伪掩码更新策略、混合训练策略和去噪模块的有效性（表3）。损失函数权重的消融实验表明，道路前景和背景损失的权重分别设置为1和0.5时，模型性能最佳（表4）。
              </span>
            </p>
            <p style="text-align: center;">
              <img src="/images/technology/2-3.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
            </p>
            <p style="text-align: center;">
              <span>
                图3 仿真实验所采用数据例图
              </span>
            </p>
            <p style="text-align: center;">
              <img src="/images/technology/2-4.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
            </p>
            <p style="text-align: center;">
              <span>
                表1 基于DeepGlobe数据的结果
              </span>
            </p>
            <p style="text-align: center;">
              <img src="/images/technology/2-5.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
            </p>
            <p style="text-align: center;">
              <span>
                表2 基于云南山区数据的结果
              </span>
            </p>
            <p style="text-align: center;">
              <img src="/images/technology/2-6.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
            </p>
            <p style="text-align: center;">
              <span>
                表3 训练策略消融实验
              </span>
            </p>
            <p style="text-align: center;">
              <img src="/images/technology/2-7.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
            </p>
            <p style="text-align: center;">
              <span>
                表4 损失函数权重消融实验
              </span>
            </p>
            <p class="docx-num-1-0">
              <span style="font-weight: bold;">
                结果对比
              </span>
            </p>
            <p style="text-align: left;">
              <span>
                对比道路分割预测的结果可以看出，Facebook团队方法预测的道路掩码在道路完整性和连通性方面有明显劣势，WeaklyOSM方法提取出的道路边缘特征存在不足，而ScRoadExtractor的预测结果的道路拓扑结构与真实道路掩码仍有一定差距。SWSS方法所预测的道路掩码比其他方法更全面，提取出的道路纹理更精确，恢复的道路边缘轮廓和预测的拓扑结构更准确。
              </span>
            </p>
            <p style="text-align: center;">
              <img src="/images/technology/2-8.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
            </p>
            <p style="text-align: center;">
              <span>
                图4 SWSS与主流方法的道路提取结果对比
              </span>
            </p>
            <p>
              <span style="font-weight: bold;">
                结论
              </span>
            </p>
            <p style="text-align: left;">
              <span>
                本文提出的基于道路中心线的分阶段弱监督道路提取算法，通过伪掩码更新策略和混合训练策略，有效提高了道路分割的准确性和完整性。实验结果表明，该算法在弱监督道路提取任务中表现优异，为降低卫星图像道路提取任务中的数据标注成本提供了新的解决方案
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
// 组件导入
import Foot from "@/components/foot.vue";

/**
 * 处理返回首页按钮点击事件
 * 使用 window.location.href 进行页面跳转
 */
function handleBack() {
  // 跳转到首页
  window.location.href = './index.html';
}
</script>

<style scoped>
/* ==================== 容器样式 ==================== */
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

/* ==================== 文档包装器样式 ==================== */
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

/* ==================== Docx 文档基础样式 ==================== */
.docx {
  width: 700pt !important;
  box-shadow: none !important;
  padding: 20px !important;
  height: auto !important;
  min-height: auto !important;
  color: black;
  hyphens: auto;
  text-underline-position: from-font;
  font-size: 16px; /* 增大基础字体大小 */
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

/* ==================== Docx 内容元素样式 ==================== */
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

/* ==================== 主题变量 ==================== */
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

/* ==================== 文档具体样式 ==================== */
.docx span {
  font-family: var(--docx-minorHAnsi-font);
}

.docx p,
p.docx_a {
  text-align: justify;
}

.docx p,
p.docx_a span {
  min-height: 14pt; /* 增大段落最小高度 */
  font-size: 14pt; /* 增大段落字体大小 */
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
  min-height: 12pt; /* 增大图标题最小高度 */
  font-size: 12pt; /* 增大图标题字体大小 */
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

/* ==================== 页面布局样式 ==================== */
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

/* ==================== 面包屑导航样式 ==================== */
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

/* ==================== 返回按钮样式 ==================== */
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