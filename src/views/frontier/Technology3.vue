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
              <p style="line-height: 1.4; text-align: center;">
                <span style="font-family: 仿宋; font-weight: bold; min-height: 22pt; font-size: 22pt;">
                  高分辨率遥感影像复杂目标检测技术及减灾应用
                </span>
              </p>
              <p style="line-height: 1.4; text-align: center;">
                <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;">刘庆杰  张明明 </span>
                <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;"> </span>
                <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;">万峤 </span>
              </p>
              <p style="line-height: 1.4; text-align: center;">
                <span style="font-family: 宋体;">北京航空航天大学</span>
              </p>
              <p style="line-height: 1.4;">
                <span style="font-family: 宋体; font-weight: bold; min-height: 14pt; font-size: 14pt;">1前言</span>
              </p>
              <p style="line-height: 1.4; text-indent: 24pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  近年来，随着航空航天、传感器和信息技术的飞速发展，我国已进入高分辨率遥感卫星时代。高分辨率遥感影像目标检测在应急减灾、资源勘探、重大基础设施安全监测等领域的应用逐渐增多，尤其在应急减灾中发挥着重要作用。目标检测技术作为计算机视觉的核心任务，通过检测遥感图像中的目标，显著提升了灾后应急响应的效率与精度。因此，发展高分辨率遥感影像复杂目标检测技术已成为支撑灾害应急监测、预警与评估的重要手段。
                </span>
              </p>
              <p style="line-height: 1.4;">
                <span style="font-family: 宋体; font-weight: bold; min-height: 14pt; font-size: 14pt;">2 </span>
                <span style="font-family: 宋体; font-weight: bold; min-height: 14pt; font-size: 14pt;">研究现状与技术挑战</span>
              </p>
              <p style="line-height: 1.4; text-indent: 24pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  高分辨率遥感影像不仅可以实时提供灾区的详细地理信息，还能够自动化地提取灾后场景的目标信息，为应急决策提供科学依据。在应急减灾中，通过遥感影像快速提取破坏区域的边界、受灾建筑物的数量及损毁程度，能够为救援部门提供高效的现场信息支持。同时，通过对灾区遥感图像进行目标检测，能够识别出灾区的灾害类型和变化趋势。
                </span>
              </p>
              <p style="line-height: 1.4; text-indent: 21pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  尽管高分辨率遥感影像在应急减灾中展现出了巨大潜力，但其在实际应用中仍然面临一系列挑战：
                </span>
              </p>
              <p class="docx-num-1-0" style="line-height: 1.4; text-indent: 21pt;">
                <span class="docx_ab" style="font-family: 宋体; font-weight: normal; min-height: 12pt; font-size: 12pt;">复杂几何信息和密集目标的提取难度</span>
                <span class="docx_ab" style="font-family: 宋体; font-weight: normal; min-height: 12pt; font-size: 12pt;">高。</span>
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  高分辨率遥感影像中，大视场目标的几何信息往往复杂且目标分布密集。现有的目标检测技术难以有效处理目标之间的遮挡、重叠及形态变异，导致目标的几何特征难以精确提取。
                </span>
              </p>
              <p class="docx-num-1-0" style="line-height: 1.4; text-indent: 21pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  尺度和视角变化带来的检测挑战。
                </span>
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  高分辨率遥感影像中的目标尺度差异较大，且由于遥感平台的高度、拍摄角度和光照条件的变化，同一目标在不同视角下的外观会发生显著变化。这使得现有检测方法在不同尺度和视角下难以保持一致的检测效果。
                </span>
              </p>
              <p style="line-height: 1.4; text-align: center;">
                <img src="/images/technology/3-1.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
              </p>
              <p style="line-height: 1.4; text-align: center;">
                <span style="font-family: 宋体;">图1 遥感影像智能解译技术在应急检测的应用</span>
              </p>
              <p style="line-height: 1.4;">
                <span style="font-family: 宋体; font-weight: bold; min-height: 14pt; font-size: 14pt;">3</span>
                <span style="font-family: 仿宋; font-weight: bold; min-height: 16pt; font-size: 16pt;">高分辨率遥感影像复杂目标检测技术</span>
              </p>
              <p style="line-height: 1.4; text-indent: 21pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  高分辨率遥感影像复杂目标检测技术围绕解决大视场目标几何信息表示难的问题，开展了一系列针对实际应用的研究工作。通过研究多尺度遥感目标检测技术，实现了高效、精准的目标感知，同时助力遥感影像领域技术在应急减灾中的应用。
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 24pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  针对大视场遥感图像目标感知面临密集小目标检测难的问题，探索遥感图像小目标感知空间和语义特征的纠缠耦合机理，在此基础上提出了动态感受野和细粒度任务解耦的多尺度遥感目标检测方法与多尺度遥感目标检测感知框架，实现了大视场密集小目标的精准感知。除此之外，针对遥感图像中目标的几何结构不规则、自相交及非闭合等难题，发明了双向几何轮廓表示技术，引入矢量表示遥感目标的几何结构，并建立基于"双向环"损失的序列约束，用于起始点与顺逆性无关的动态顶点间序列关系建模，实现高效的遥感图像复杂形状目标检测和矢量化几何信息提取。最终，构建了复杂目标的自适应几何结构表示框架，实现多尺度、多类型遥感目标的灵活表示和精准感知。
                </span>
              </p>
              <p style="line-height: 1.4; text-align: center;">
                <img src="/images/technology/3-2.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
              </p>
              <p style="line-height: 1.4; text-align: center;">
                <span style="font-family: 宋体;">图2 高分辨率遥感影像复杂目标检测技术框架</span>
              </p>
              <p style="line-height: 1.4; text-indent: 21pt; text-align: left;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  该技术应用于重大自然灾害评估，有效支撑了"2021年舟曲立节滑坡"、"2021年云南漾濞6.4级地震"、"2021年河南郑州'7•20'特大暴雨灾害"、"2022年四川泸定县6.8级地震"、"2023年甘肃积石山6.2级地震"等90余次全国滑坡、地震、洪灾等重大自然灾害的灾后评估，使灾后本底房屋分布制图由原来的1天提速为15分钟。
                </span>
              </p>
              <p style="line-height: 1.4; text-indent: 21pt; text-align: left;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  该技术也作为2024年度中国图象图形学学会技术发明奖的支持技术。
                </span>
              </p>
              <p style="line-height: 1.4; text-indent: 21pt; text-align: center;">
                <img src="/images/technology/3-3.jpg" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
              </p>
              <p style="line-height: 1.4; text-indent: 21pt; text-align: center;">
                <span style="font-family: 宋体;">图3 水体提取结果</span>
              </p>
              <p style="line-height: 1.4; text-indent: 21pt; text-align: center;">
                <img src="/images/technology/3-4.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
              </p>
              <p style="line-height: 1.4; text-indent: 21pt; text-align: center;">
                <span>图4 道路提取输入图像与结果</span>
              </p>
              <p style="line-height: 1.4; text-indent: 21pt; text-align: center;">
                <img src="/images/technology/3-5.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
              </p>
              <p style="line-height: 1.4; text-indent: 21pt; text-align: center;">
                <span>图</span>
                <span>5 </span>
                <span>房屋提取结果</span>
              </p>
            </article>
          </section>
          
          <!-- 第二部分：详细内容 -->
          <section class="docx" style="padding: 72pt 90pt; width: 595.3pt; min-height: 841.9pt;">
            <article>
              <p style="line-height: 1.4;">
                <span style="font-family: 宋体; font-weight: bold; min-height: 12pt; font-size: 12pt;">4</span>
                <span style="font-family: 宋体; font-weight: bold; min-height: 12pt; font-size: 12pt;"> 发展趋势展望</span>
              </p>
              <p style="line-height: 1.4; text-indent: 24pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  高分辨率遥感影像复杂目标检测技术尽管对遥感影像目标感知的研究取得了显著成果，但仍然存在一定的技术局限性。
                </span>
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  随着遥感技术、深度学习和人工智能的不断进步，高分辨率遥感影像目标检测将在应急减灾领域发挥更为重要的作用。高分辨率遥感影像目标检测技术未来将围绕以下几个方面蓬勃发展：
                </span>
              </p>
              <p style="line-height: 1.4; text-indent: 24pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">（1）大模型驱动的多模态信息融合</span>
              </p>
              <p style="line-height: 1.4; text-indent: 24pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  将大模型应用于遥感影像的多模态信息融合中，通过预训练模型来处理遥感影像的光谱、空间、时间等多维数据，可以学习不同模态间的关联性，增强其对细节信息的捕捉能力，进而减少信息融合过程中的损失。同时，利用大模型的自适应性，针对不同的遥感场景动态调整信息融合策略，从而提高目标检测的精度和可靠性。
                </span>
              </p>
              <p style="line-height: 1.4; text-indent: 24pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">（2）基于生成式模型的几何结构表示</span>
              </p>
              <p style="line-height: 1.4; text-indent: 24pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  生成对抗网络和扩散模型等生成模型近年来在复杂目标建模方面展现了强大的能力。将这些生成式模型应用于遥感影像的几何结构表示中，通过生成式模型来学习和模拟目标的多种几何形态，可以增强目标几何结构表示的鲁棒性，从而提升其在复杂场景中的表现。
                </span>
              </p>
              <p style="line-height: 1.4; text-indent: 24pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">（3）人工智能与遥感领域的深度融合</span>
              </p>
              <p style="line-height: 1.4; text-indent: 24pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  未来的遥感影像目标感知研究将进一步与自监督学习、强化学习等新兴技术深度融合，通过自监督学习方法，利用大量未标注的遥感影像数据进行预训练，从而减少对标注数据的依赖，可以提高模型的泛化能力和适应性。
                </span>
              </p>
              <p style="line-height: 1.4; text-indent: 24pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  总之，随着大模型等新兴技术的引入和发展，高分辨率遥感影像目标检测技术将在未来迎来新的发展机遇。
                </span>
              </p>
              <p style="line-height: 1.4; text-indent: 24pt;"></p>
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