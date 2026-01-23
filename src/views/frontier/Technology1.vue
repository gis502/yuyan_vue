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
                <span style="font-weight: bold; min-height: 22pt; font-size: 22pt;">
                  远程无人机洪灾应急信息全自主感知技术
                </span>
              </p>
              <p style="line-height: 1.4; text-align: center;">
                <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;">李德仁  </span>
                <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;">眭</span>
                <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;">海刚 </span>
                <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;"> </span>
                <span style="font-family: 宋体; min-height: 11pt; font-size: 11pt;">刘俊怡 </span>
              </p>
              <p style="line-height: 1.4; text-align: center;">
                <span style="font-family: 宋体;">武汉大学测绘遥感信息工程国家重点实验室</span>
              </p>
              <p style="line-height: 1.4;">
                <span style="font-family: 宋体; font-weight: bold; min-height: 14pt; font-size: 14pt;">1前言</span>
              </p>
              <p style="line-height: 1.4; text-indent: 24pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  洪涝灾害是一种常见的自然灾害，对人类生命安全、基础设施、房屋建筑、农业、自然环境和经济有着的广泛影响。洪灾的爆发具有突发性和破坏性，洪灾发生后减灾救灾工作迫切需要第一时间获取全局的洪涝灾害应急信息，包括洪水淹没范围、洪水持续时间、典型承灾体受灾情况、受灾人员/车辆位置信息等。无人机遥感技术具有数据采集快、远距离观测、实时性好、动态性强等不可替代的优势，特别是在重大自然灾害"三断"（断电断网断路）等极端情况下，已成为支撑灾害应急监测、预警与评估的重要手段。
                </span>
              </p>
              <p style="line-height: 1.4;">
                <span style="font-family: 宋体; font-weight: bold; min-height: 14pt; font-size: 14pt;">2 </span>
                <span style="font-family: 宋体; font-weight: bold; min-height: 14pt; font-size: 14pt;">研究现状与技术挑战</span>
              </p>
              <p style="line-height: 1.4; text-indent: 24pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  由于洪灾应急的时效性需求，航空遥感特别是无人机遥感灾害信息实时处理一直是国内外学术界和产业界关注的焦点之一。
                  城市区域的洪灾应急往往需要航空遥感提供更加快捷智能的灾情信息服务，
                  包括洪水淹没范围、受困救援目标、重要设施受损情况等。
                  将深度学习算法与航空遥感图像/视频相结合，不仅可以有效提高洪灾信息提取的准确性和时效性，
                  而且还能从航空视频数据中实时识别和定位受灾人群，为应急救援提供有力的救援指引信息。</span>
              </p>
              <p style="line-height: 1.4; text-indent: 24pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  尽管航空遥感在洪涝灾害监测与应用中发挥了重要作用，但在实时性、精准性等方面仍面临如下挑战：</span>
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;"> </span>
              </p>
              <p style="line-height: 1.4; text-indent: 24pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  （1）洪涝应急响应不实时，航空遥感面临"操作起飞-获取数据-应急处理"等过程，应急响应时间一般是小时级，机载实时处理与传输未大规模应用，实时性仍是目前遥感急响应的难言之隐。
                </span>
              </p>
              <p style="line-height: 1.4; text-indent: 24pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  （2）洪涝灾害要素提取不全面。绝大多数遥感灾害信息提取主要关注洪水淹没的范围、
                  道路/建筑物等典型承载体受灾情况等，缺少对受灾车辆、受灾人员的动态定位与跟踪；
                  同时灾后遥感信息处理的自动化和精准化水平还有待进一步提高。</span>
              </p>
              <p style="line-height: 1.4;">
                <span style="font-family: 宋体; font-weight: bold; min-height: 14pt; font-size: 14pt;">
                  3远程无人机洪灾应急信息全自主感知
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 21pt; text-align: left;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  远程无人机洪灾应急信息全自主感知系统是利用无人机集成北斗和遥感观测手段，当地面传感网由于断电或损毁无法正常工作，而交通瘫痪（如水淹路断）又使得地面人员和车辆难以到达灾害区域时，通过部署在灾害风险区域的远程无人机全自动快速感知系统，可实现在三断（断电、断水、断路）等极端条件下对的灾害现场远程全自动快速感知。该系统具有："远程一键收发、自动规划飞行、自动快速成图、自动损毁提取、信息自动回传、克服三断环境"的特点。在断电的极端条件下，通过备用电池和太阳能板来                  为机巢和设备供电；在断网的情况下，基于北斗短报文或卫星通信手段，远程一键启动系统并自主规划任务快速获取影像，提取受灾范围和损毁信息，通过北斗短报文或长距离无线自组网直接传输至指挥中心，生成灾损图，实现对灾害区域的快速感知，在极端条件下能够在分钟级可完成从发生灾害到获取灾害第一张图的应急响应。
                </span>
              </p>
            </article>
          </section>
          
          <!-- 第二部分：详细内容 -->
          <section class="docx" style="padding: 72pt 90pt; width: 595.3pt; min-height: 841.9pt;">
            <article>
              <p style="line-height: 1.5; text-indent: 21pt; text-align: center;">
                <img src="/images/technology/1-1.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
              </p>
              <p style="line-height: 1.4; text-indent: 24pt; text-align: center;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  图3 面向应急的远程无人机全自动快速感知流程图
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 24pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  受灾区域的洪灾场景复杂和无人机影像地物覆盖类型多样，导致现有深度语义分割模型的无人机影像洪水范围提取精度较差、受灾目标实时检测算法相对较少。针对面临边缘端计算资源受限、模型推理速度不足、受困目标识别不准的问题，我们提出了基于无人机远程感知的局部洪灾应急信息精细提取方法，并将该方法部署在远程无人机感知系统中，实现了洪水范围精细提取与洪灾受困人、车等典型目标的实时检测。
                </span>
              </p>
              
              <!-- 表格内容 -->
              <table class="first-row first-col no-vband docx_ab" style="width: auto; margin-left: auto; margin-right: auto;">
                <colgroup>
                  <col style="width: 223pt;">
                  <col style="width: 192.3pt;">
                </colgroup>
                <tr style="text-align: center;">
                  <td style="width: 213.05pt; border-width: 0pt; border-style: solid; border-color: black;vertical-align: middle">
                    <p style="line-height: 1.5;">
                      <img src="/images/technology/1-2.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />

                    </p>
                  </td>
                  <td style="width: 213.05pt; border-width: 0pt; border-style: solid; border-color: black;">
                    <p style="line-height: 1.5;">
                      <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                        <img src="/images/technology/1-3.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
                      </span>
                    </p>
                  </td>
                </tr>
                <tr style="text-align: center;">
                  <td style="width: 213.05pt; border-width: 0pt; border-style: solid; border-color: black;">
                    <p style="line-height: 1.5; text-align: center;">
                      <span style="font-family: 宋体;">(a)</span>
                      <span style="font-family: 宋体;">广西浦北部署点</span>
                    </p>
                  </td>
                  <td style="width: 213.05pt; border-width: 0pt; border-style: solid; border-color: black;">
                    <p style="line-height: 1.5; text-align: center;">
                      <span style="font-family: 宋体;">(b)</span>
                      <span style="font-family: 宋体;">无人机影像受灾目标监测结果</span>
                    </p>
                  </td>
                </tr>
              </table>
              <p style="line-height: 1.5;"></p>
              <p style="line-height: 1.4; text-align: center;">
                <span style="font-family: 宋体;">
                  图4 广西壮族自治区钦州市浦北县远程无人机感知系统
                </span>
              </p>
              <p style="line-height: 1.4;">
                <span style="font-family: 宋体; font-weight: bold; min-height: 12pt; font-size: 12pt;">4</span>
                <span style="font-family: 宋体; font-weight: bold; min-height: 12pt; font-size: 12pt;"> 发展趋势展望</span>
              </p>
              <p style="line-height: 1.4; text-indent: 24pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  航空遥感已成为洪涝灾害监测的常态化手段，联合多模态遥感影像进行洪灾应急信息提取工作，在洪涝灾前预警分析、灾中应急自动制图、灾后损失评估的智能化遥感空间信息服务能力还有很大提升空间。随着先进的遥感大数据、多源异构时空数据融合等技术的迅猛发展，洪涝灾害监测未来将围绕以下几个方面蓬勃发展：</span>
              </p>
              <p style="line-height: 1.4; text-indent: 24pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  （1）协同多平台无人系统，提升洪涝实时应急响应能力。利用无人机集群、无人船、水下无人潜行器、地面无人值守观测平台等无人系统多源遥感协同监测手段，增强对山洪、水利设施安全隐患、水下管涌渗漏点等传统遥感关注不多的监测能力。</span>
              </p>
              <p style="line-height: 1.4; text-indent: 24pt;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">
                  （2）加快遥感与人工智能的紧耦合，提升洪涝灾害遥感信息服务能力。目前无论是洪涝灾损信息的提取还是平时隐患点提取分析，都主要依靠人工方式，人工智能大模型包括遥感大模型、视觉大模型、语言大模型等，为多样化的遥感数据全自动提取提供了可能。</span>
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