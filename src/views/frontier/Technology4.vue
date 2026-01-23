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
      <!-- 面包屑导航和返回按钮 -->
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
              <p class="docx_aa" style="text-align: center;">
                <span style="min-height: 22pt; font-size: 22pt;">
                  基于多模遥感图像和相关知识的建筑结构类型识别技术
                </span>
              </p>
              <p style="text-align: center;">
                <span>      </span>
                <span>华中科技大学人工智能与自动化学院 </span>
                <span>  </span>
                <span>周宇航 </span>
                <span> </span>
                <span>谭毅华 </span>
                <span> </span>
                <span>李郑兴</span>
              </p>
              <p>
                <span> </span>
                <span>   </span>
              </p>
              <p>
                <span style="font-family: 微软雅黑; min-height: 12pt; font-size: 12pt;">前言</span>
              </p>
              <p style="text-indent: 21pt;">
                <span>建筑物是地震灾害的受灾主体，建筑物结构类型是评估其抗震能力的关键信息，对地震风险评估和应急响应至关重要</span>
                <span>。快速准确地获取</span>
                <span>建筑物结构类型</span>
                <span>信息对于防震减灾应用至</span>
                <span>关重要</span>
                <span>。</span>
              </p>
              <p style="text-indent: 21pt;">
                <span>遥感技术具备多模态、高时空分辨率的特点，已被广泛用于提取建筑物结构类型</span>
                <span>相关特征。同时，建筑相关知识，如税务评估数据（占用率、建筑年龄、高度）和地籍信息（楼层数、用途、兴趣点等），与</span>
                <span>建筑物结构类型</span>
                <span>具有内在联系，</span>
                <span>充分利用这两种信息是提高建筑物结构类型</span>
                <span>识别精度</span>
                <span>的重要手段。</span>
              </p>
              <p>
                <span style="font-family: 微软雅黑; min-height: 12pt; font-size: 12pt;">一、研究现状与技术挑战</span>
              </p>
              <p style="text-indent: 21pt;">
                <span>当前的建筑物结构类型</span>
                <span>识别研究主要分为两类</span>
                <span>：</span>
                <span>基于遥感图像的方法和结合遥感图像与建筑相关知识的方法。</span>
                <span>基于遥感图像的方法利用单模或多模遥感数据提取光谱、空间和几何特征，结合传统机器学习或深度学习</span>
                <span>模型进行建筑物结构类型预测。然而，由于建筑物结构类型反映的是建筑内部结构，仅依靠遥感图像难以准确识别，限制了方法的推广应用。结合</span>
                <span>建筑相关知识</span>
                <span>的方法则通过引入税务评估数据、地籍信息等辅助信息，提高识别精度。这些方法通常采用特征工程或机器学习分类器，</span>
                <span>但特征</span>
                <span>挖掘能力有限，难以充分利用多源信息。</span>
              </p>
              <p>
                <span><span>&emsp;</span></span>
                <span style="color: rgb(7, 79, 106);">尽管现有研究取得了一定进展，但建筑物结构类型</span>
                <span style="color: rgb(7, 79, 106);">识别仍</span>
                <span style="color: rgb(7, 79, 106);">面临以下技术挑战：</span>
              </p>
              <p>
                <span>（1）</span>
                <span style="font-weight: bold;">遥感数据的局限性</span>
                <span>：单一遥感数据难以准确反映建筑内部结构特征，而如何高效融合多模遥感数据仍然是一个技术难题。</span>
              </p>
              <p>
                <span>（2）</span>
                <span style="font-weight: bold;">建筑相关知识的利用不足</span>
                <span>：现有方法多采用人工构造特征或简单结合</span>
                <span>建筑相关知识</span>
                <span>，而未能充分利用知识图谱等技术建模</span>
                <span>建筑物结构类型</span>
                <span>相关信息。</span>
              </p>
              <p>
                <span>（3）</span>
                <span style="font-weight: bold;">数据可获取性与方法通用性问题</span>
                <span>：依赖税务评估或地籍数据的方法在部分地区可能因数据缺失或过时而难以适用，如何利用更</span>
                <span>广泛可</span>
                <span>获取的数据源提升模型的适用性仍需深入研究。</span>
              </p>
              <p>
                <span style="font-family: 微软雅黑; min-height: 12pt; font-size: 12pt;">二、基于多模遥感图像和相关知识的建筑结构类型识别</span>
              </p>
              <p style="text-indent: 21pt;">
                <span>基于多模遥感图像和相关知识的建筑结构类型识别系统是一种基于多模遥感影像和建筑相关知识的建筑物结构类型智能识别系统，能够在复杂场景下高效、精准地完成建筑物结构类型的自动化识别任务。当传统方法因数据单</span>
                <span>一</span>
                <span>或领域知识不足而难以满足实际需求时，</span>
                <span style="font-weight: bold;">本</span>
                <span style="font-weight: bold;">系统通过融合光学图像、</span>
                <span style="font-weight: bold;">遥感</span>
                <span style="font-weight: bold;">图像以及建筑相关知识，实现对建筑物结构类型的全面感知与精准判断。</span>
              </p>
              <p style="text-indent: 21pt;">
                <span>系统包含三个主要部分：</span>
                <span style="font-weight: bold;">图像特征提取模块、语义特征提取模块和多模特征融合模块</span>
                <span>，通过三个阶段完成建筑物结构类型的识别任务。首先，在特征提取阶段，模型利用两个独立的卷积神经网络分别从光学图像和合成孔径雷达图像中提取建筑物的外观、纹理以及材质特征，同时通过</span>
                <span>图注意</span>
                <span>网络从建筑相关知识中挖掘有用的语义信息。接下来，在特征融合阶段，模型通过一种智能筛选机制将光学图像和合成孔径雷达图像的特征进行融合，并进一步通过拼接的方式将语义特征整合进来，形成一个全面的融合特征。最后，在识别阶段，模型将融合后的特征输入全连接层，计算出建筑物属于每种结构类型的概率，并选择概率最高的类型作为最终结果。这种方法结合了遥感图像和建筑相关知识的优势，能够在复杂场景下实现高效且准确的建筑物结构类型识别。</span>
              </p>
            </article>
          </section>
          
          <!-- 第二部分：详细内容 -->
          <section class="docx" style="padding: 72pt 90pt; width: 595.3pt; min-height: 841.9pt;">
            <article>
              <p style="text-align: center;">
                <span><div style="display: block; position: relative; text-indent: 0px; width: 100%; height: auto; margin: 0px auto;"><img src="/images/technology/4-1.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" /></div></span>
              </p>
              <p class="docx_a3" style="text-align: center;">
                <span style="min-height: 9pt; font-size: 9pt;">图</span>
                <span style="min-height: 9pt; font-size: 9pt;"> </span>
                <span style="min-height: 9pt; font-size: 9pt;">1</span>
                <span style="min-height: 9pt; font-size: 9pt;"> </span>
                <span style="min-height: 9pt; font-size: 9pt;">基于多模遥感图像和相关知识的建筑结构类型识别框架图</span>
              </p>
              <p style="text-indent: 21pt;">
                <span>为了解决数据来源单一而导致的建筑物结构类型识别精度不足的问题，</span>
                <span style="font-weight: bold;">我们提出了一种整合多种形式数据的方法</span>
                <span>，并设计了一个简单而高效的数据收集框架。该框架结合了来自不同平台的光学影像、合成孔径雷达影像以及</span>
                <span>由领域</span>
                <span>专家通过目视解译获取的建筑相关知识，确保了数据的多样性和高质量。同时，建筑物轮廓通过人工在专业平台上精确勾勒，建筑物结构类型则通过地面调查获取，进一步提升了数据的准确性和可靠性。通过这种多</span>
                <span>源数据</span>
                <span>的整合与规范化处理，我们不仅丰富了数据的特征维度，还为后续模型的训练和识别任务提供了坚实的基础，从而显著提高了建筑物结构类型识别的性能。</span>
              </p>
              <p style="text-align: center;">
                <span><div style="display: block; position: relative; text-indent: 0px; width: 100%; height: auto; margin: 0px auto;"><img src="/images/technology/4-2.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" /></div></span>
              </p>
              <p class="docx_a3" style="text-align: center;">
                <span style="min-height: 9pt; font-size: 9pt;">图</span>
                <span style="min-height: 9pt; font-size: 9pt;"> </span>
                <span style="min-height: 9pt; font-size: 9pt;">2</span>
                <span style="min-height: 9pt; font-size: 9pt;"> </span>
                <span style="min-height: 9pt; font-size: 9pt;">多</span>
                <span style="min-height: 9pt; font-size: 9pt;">源数据</span>
                <span style="min-height: 9pt; font-size: 9pt;">收集框架</span>
              </p>
              <p></p>
              <p style="text-align: center;">
                <span><div style="display: block; position: relative; text-indent: 0px; width: 100%; height: auto; margin: 0px auto;"><img src="/images/technology/4-3.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" /></div></span>
              </p>
              <p class="docx_a3" style="text-align: center;">
                <span style="min-height: 9pt; font-size: 9pt;">图</span>
                <span style="min-height: 9pt; font-size: 9pt;"> </span>
                <span style="min-height: 9pt; font-size: 9pt;">3</span>
                <span style="min-height: 9pt; font-size: 9pt;"> </span>
                <span style="min-height: 9pt; font-size: 9pt;">建筑物结构类型识别效果</span>
              </p>
              <p>
                <span style="font-family: 微软雅黑; min-height: 12pt; font-size: 12pt;">三、发展趋势展望</span>
              </p>
              <p style="text-indent: 21pt;">
                <span>遥感技术和建筑相关知识已成为建筑物结构类型识别的重要支撑手段，联合多模态遥感影像与建筑相关知识进行信息提取，在城市规划、防震减灾以及灾害评估等领域的智能化服务能力仍有广阔提升空间。</span>
              </p>
              <p style="text-indent: 21pt;">
                <span style="color: rgb(7, 79, 106);">随着遥感大数据、多源异构数据融合以及人工智能技术的快速发展，建筑物结构类型识别未来将围绕以下几个方向实现突破性进展：</span>
              </p>
              <p style="text-indent: 21pt;">
                <span>（1</span>
                <span>）</span>
                <span style="font-weight: bold;">深化人工智能与遥感技术的融合，推动自动化识别能力升级</span>
                <span style="font-weight: bold;">。</span>
                <span>随着深度学习大模型（如遥感专用模型、视觉模型和语义推理模型）的发展，可以实现对多源异构数据的全自动处理和分析。结合领域知识图谱，这些模型能够更高效地挖掘光学影像中的纹理特征、合成孔径雷达影像中的材质特性以及建筑相关知识中的语义关联，从而显著提升识别的准确性和智能化水平。</span>
              </p>
              <p style="text-indent: 21pt;">
                <span>（2</span>
                <span>）</span>
                <span style="font-weight: bold;">强化多模态数据融合与语义建模，增强复杂场景适应能力</span>
                <span style="font-weight: bold;">。</span>
                <span>未来的建筑物结构类型识别将更加注重多模态数据的深度融合，通过结合光学影像、合成孔径雷达影像以及建筑相关知识，构建更全面的特征表达体系。此外，动态融合机制的应用将进一步优化多模态特征的互补利用，使得模型在广域范围内的适应性和鲁棒性得到显著提升。</span>
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
  min-height: 14pt;
  font-size: 14pt;
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