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
              <p style="line-height: 1.5; text-align: center;">
                <span style="font-weight: bold; min-height: 22pt; font-size: 22pt;">
                  【技术前沿】基于双时相场景变化检测的弱监督
                </span>
              </p>
              <p style="line-height: 1.5; text-align: center;">
                <span style="font-weight: bold; min-height: 22pt; font-size: 22pt;">
                  灾后建筑物损毁遥感判识技术
                </span>
              </p>
              <p style="margin-top: 15.6pt; line-height: 1.5; text-align: center;">
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;">西南交通大学地球科学与工程学院</span>
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;"> </span>
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;"> 慎利</span>
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;"> </span>
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;"> 乔文凡</span>
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;"> </span>
                <span style="font-family: 宋体; min-height: 12pt; font-size: 12pt;"> 郭梦晴</span>
              </p>
              <p class="docx_1" style="margin-top: 12.45pt; margin-bottom: 12.45pt; line-height: 1.5;">
                <span style="font-family: 黑体; font-weight: normal; min-height: 14pt; font-size: 14pt;">前言</span>
              </p>
              <p style="line-height: 1.5; text-indent: 21pt;">
                <span style="font-family: '微软雅黑';">
                  建筑密集区在自然灾害中往往是人员伤亡和财产损失最为严重的区域。因此，灾后迅速、准确地获取建筑物损毁信息，对于应急救援、决策指挥以及灾后重建至关重要。遥感技术凭借其广泛的地表覆盖能力和快速响应特点，成为灾后评估的重要手段。随着高分辨率遥感影像的普及，大范围、高精度地提取灾后建筑物损毁成为可能。然而，遥感影像中丰富的细节和纹理信息使得传统的人工解译方法效率低、耗时长，难以满足灾后紧急响应的时效性需求。因此，迫切需要开发高效、自动化的建筑损毁判识方法，为灾后决策提供及时的支持。
                </span>
              </p>
              <p class="docx_1" style="margin-top: 12.45pt; margin-bottom: 12.45pt; line-height: 1.5;">
                <span style="font-family: 'Times New Roma'; font-weight: normal; min-height: 14pt; font-size: 14pt;">一、研究现状与技术挑战</span>
              </p>
              <p style="line-height: 1.5; text-indent: 21pt;">
                <span style="font-family: '微软雅黑';">
                  目前，基于遥感的建筑损毁判识方法主要可分为两类：一类是仅依赖灾后影像进行评估，另一类则结合了灾前和灾后影像进行变化检测（双时相方法）。虽然灾后影像能够提供丰富的损毁信息，但由于受损建筑的形态复杂、边界模糊，且可能与周围环境产生干扰，基于单一灾后影像的判识效果较为有限。相较而言，双时相影像通过结合灾前影像提供的建筑物先验信息，能够有效提高损毁评估的精度。但这一方法仍面临以下技术挑战：
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 21pt;">
                <span style="font-family: 'Times New Roma';">(1) </span>
                <span style="font-family: 'Times New Roma'; font-weight: bold;">
                  建筑损毁的多样性与复杂性
                </span>
                <span style="font-family: 'Times New Roma';">：受损建筑在形态、光谱属性和几何特征上表现出较大的差异，且其与周围环境的相似性较强，这使得损毁区域的准确识别变得更加困难。</span>
              </p>
              <p style="line-height: 1.5; text-indent: 21pt;">
                <span style="font-family: 'Times New Roma';">(2) </span>
                <span style="font-family: 'Times New Roma'; font-weight: bold;">
                  影像变化检测中的干扰因素
                </span>
                <span style="font-family: 'Times New Roma';">：变化检测方法容易受到非建筑物变化（如道路、树木等）的干扰，从而影响损毁区域的准确定位。</span>
              </p>
              <p style="line-height: 1.5; text-indent: 21pt;">
                <span style="font-family: '微软雅黑';">
                  (3)
                </span>
                <span style="font-family: 'Times New Roma'; font-weight: bold;"> 
                  数据标注的挑战
                </span>
                <span style="font-family: 'Times New Roma';">：灾后影像的复杂性使得像素级的建筑损毁标注往往需要大量人工干预，既耗时又容易引入误差。此外，由于损毁建筑通常在影像中占比较小，正负样本严重不平衡，进一步增加了模型训练的难度。</span>
              </p>
              <p style="line-height: 1.5; text-indent: 21pt;"></p>
              <p style="line-height: 1.5; text-indent: 21pt;"></p>
              <p class="docx_1" style="margin-top: 12.45pt; margin-bottom: 12.45pt; line-height: 1.5;">
                <span style="font-family: 'Times New Roma'; font-weight: normal; min-height: 14pt; font-size: 14pt;">
                  二、
                </span>
                <span style="font-family: 'Times New Roma'; font-weight: normal; min-height: 14pt; font-size: 14pt;">
                  基于场景变化检测的弱监督建筑物损毁遥感判识
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 21pt;">
                <span style="font-family: '微软雅黑';">
                  针对上述挑战，
                </span>
                <span style="font-family: '微软雅黑';">
                  基于场景变化检测的弱监督建筑物损毁遥感判识方法将建筑物目标定位、场景变化检测和像素级建筑物损毁推断集成到一个统一的框架中，主要包括三个部分，即子建筑对象生成、双时相子建筑场景变化检测和像素级建筑物损毁信息推断。
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 21.1pt;">
                <span style="font-family: 'Times New Roma'; font-weight: bold;">
                  (1) 
                </span>
                <span style="font-family: 'Times New Roma'; font-weight: bold;">
                  子建筑对象生成
                </span>
              </p>
              <p class="docx_a6" style="line-height: 1.5;">
                <span style="font-family: '微软雅黑';">
                  首先，通过语义分割网络
                </span>
                <span style="font-family: '微软雅黑';">
                  (
                </span>
                <span style="font-family: '微软雅黑';">
                  如
                </span>
                <span style="font-family: '微软雅黑';">
                  DeepLab v3+)
                </span>
                <span style="font-family: '微软雅黑';">
                 
                </span>
                <span style="font-family: '微软雅黑';">
                  从灾前影像中提取建筑物区域，生成建筑区域的掩膜，从而有效过滤掉非建筑物的干扰区域；接着，结合超像素分割和区域邻接图，将建筑区域细化为边界清晰的子建筑对象，作为后续处理单元。这一步骤通过保留建筑物边界细节，避免了传统粗分割导致的边缘模糊问题，为后续精细化分析奠定基础。
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 21.1pt;">
                <span style="font-family: 'Times New Roma'; font-weight: bold;">
                  (2) 
                </span>
                <span style="font-family: 'Times New Roma'; font-weight: bold;">
                  双时相子建筑场景变化检测
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 21pt;">
                <span style="font-family: '微软雅黑';">
                  基于子建筑对象，构建双时相孪生网络，通过以下核心模块实现高精度变化检测：
                </span>
              </p>
              <p class="docx_a6 docx-num-1-0" style="line-height: 1.5;">
                <span style="font-family: '微软雅黑';">
                  局部
                </span>
                <span style="font-family: '微软雅黑';">
                  -
                </span>
                <span style="font-family: '微软雅黑';">
                  全局视觉
                </span>
                <span style="font-family: '微软雅黑';">
                  Transforme
                </span>
                <span style="font-family: '微软雅黑';">
                  r
                </span>
                <span style="font-family: '微软雅黑';">
                  结构
                </span>
                <span style="font-family: '微软雅黑';">
                 
                </span>
                <span style="font-family: '微软雅黑';">
                  (LgViTNet)
                </span>
                <span style="font-family: '微软雅黑';">
                  ：结合
                </span>
                <span style="font-family: '微软雅黑';">
                  CNN
                </span>
                <span style="font-family: '微软雅黑';">
                  的局部特征提取能力与
                </span>
                <span style="font-family: '微软雅黑';">
                  Transformer
                </span>
                <span style="font-family: '微软雅黑';">
                  的全局语义建模能力，通过逆残差块增强局部细节，同时利用自注意力机制捕捉跨区域的依赖关系。
                </span>
              </p>
              <p class="docx_a6 docx-num-1-0" style="line-height: 1.5;">
                <span style="font-family: '微软雅黑';">
                  跨孪生交互融合
                </span>
                <span style="font-family: '微软雅黑';">
                 
                </span>
                <span style="font-family: '微软雅黑';">
                  (CSIF) 
                </span>
                <span style="font-family: '微软雅黑';">
                  模块：引入通道注意力机制，动态筛选灾前和灾后图像的特征差异，通过交叉特征交互强化与损毁相关的关键区域，同时抑制非建筑变化的干扰。
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 21pt;">
                <span style="font-family: '微软雅黑';">
                  该网络以子建筑对象为中心裁剪双时相图像块
                </span>
                <span style="font-family: '微软雅黑';">
                  (256
                </span>
                <span style="font-family: '微软雅黑';">
                  ×
                </span>
                <span style="font-family: '微软雅黑';">
                  256
                </span>
                <span style="font-family: '微软雅黑';">
                  像素
                </span>
                <span style="font-family: '微软雅黑';">
                  )
                </span>
                <span style="font-family: '微软雅黑';">
                  ，输入双时相孪生网络网络进行场景级变化检测，输出"变化"或"无变化"的标签。
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 21.1pt;">
                <span style="font-family: 'Times New Roma'; font-weight: bold;">
                  (3) 
                </span>
                <span style="font-family: 'Times New Roma'; font-weight: bold;">
                  像素级建筑物损毁信息推断
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 21pt;">
                <span style="font-family: '微软雅黑';">
                  利用变化检测的输出信息来判定建筑物是否遭受损毁。如果某个子建筑物被检测为损毁，则其内部所有像素都标记为"损毁"，从而生成准确的像素级损毁地图。这种推断方法确保了每个子建筑物对象在变化检测结果的支持下被精确分类，最终所有在损毁区域内的像素都能得到正确标注。
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 21pt;"></p>
              <p style="line-height: 1.5; text-indent: 21pt; text-align: center;">
                <span style="font-family: '微软雅黑';">
                  <div style="display: block; position: relative; text-indent: 0px; width: 100%; height: auto; margin: 0px auto;">
                    <img src="/images/technology/5-1.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
                  </div>
                </span>
              </p>
              <p style="margin-bottom: 15.6pt; line-height: 1.5; text-indent: 21pt; text-align: center;">
                <span style="font-family: '微软雅黑';">
                  图
                </span>
                <span style="font-family: '微软雅黑';">
                  1 
                </span>
                <span style="font-family: '微软雅黑';">
                  基于场景变化检测的弱监督建筑物损毁遥感判识总体设计框架
                </span>
              </p>
            </article>
          </section>
          
          <!-- 第二部分：详细内容 -->
          <section class="docx" style="padding: 72pt 90pt; width: 595.3pt; min-height: 841.9pt;">
            <article>
              <p style="line-height: 1.5; text-align: center;">
                <span style="font-weight: bold; min-height: 14pt; font-size: 14pt;">
                  <div style="display: block; position: relative; text-indent: 0px; width: 100%; height: auto; margin: 0px auto;">
                    <img src="/images/technology/5-2.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
                  </div>
                </span>
              </p>
              <p style="margin-bottom: 15.6pt; line-height: 1.5; text-indent: 21pt; text-align: center;">
                <span style="font-family: '微软雅黑';">
                  图
                </span>
                <span style="font-family: '微软雅黑';">
                  2 
                </span>
                <span style="font-family: '微软雅黑';">
                  局部全局视觉
                </span>
                <span style="font-family: '微软雅黑';">
                  Transformer
                </span>
                <span style="font-family: '微软雅黑';">
                  网络结构
                </span>
              </p>
              <p style="margin-bottom: 15.6pt; line-height: 1.5; text-indent: 21pt; text-align: center;">
                <span style="font-family: '微软雅黑';">
                  <div style="display: block; position: relative; text-indent: 0px; width: 100%; height: auto; margin: 0px auto;">
                    <img src="/images/technology/5-3.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
                  </div>
                </span>
              </p>
              <p style="margin-bottom: 15.6pt; line-height: 1.5; text-indent: 21pt; text-align: center;">
                <span style="font-family: '微软雅黑';">
                  图
                </span>
                <span style="font-family: '微软雅黑';">
                  3
                </span>
                <span style="font-family: '微软雅黑';">
                 
                </span>
                <span style="font-family: '微软雅黑';">
                  跨孪生交互融合模块
                </span>
              </p>
              <p style="margin-bottom: 15.6pt; line-height: 1.5; text-align: center;">
                <span style="font-family: '微软雅黑';">
                  <div style="display: block; position: relative; text-indent: 0px; width: 100%; height: auto; margin: 0px auto;">
                    <img src="/images/technology/5-4.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
                  </div>
                </span>
              </p>
              <p style="margin-bottom: 15.6pt; line-height: 1.5; text-indent: 21pt; text-align: center;">
                <span style="font-family: '微软雅黑';">
                  图
                </span>
                <span style="font-family: '微软雅黑';">
                  4 
                </span>
                <span style="font-family: '微软雅黑';">
                  海地太子港地区建筑物损毁判识结果
                </span>
              </p>
              <p style="margin-bottom: 15.6pt; line-height: 1.5; text-align: center;">
                <span style="font-family: '微软雅黑';">
                  <div style="display: block; position: relative; text-indent: 0px; width: 100%; height: auto; margin: 0px auto;">
                    <img src="/images/technology/5-5.png" style="position: relative; left: 0pt; top: 0pt; width: 100%; height: auto;" />
                  </div>
                </span>
              </p>
              <p style="margin-bottom: 15.6pt; line-height: 1.5; text-indent: 21pt; text-align: center;">
                <span style="font-family: '微软雅黑';">
                  图
                </span>
                <span style="font-family: '微软雅黑';">
                  5 
                </span>
                <span style="font-family: '微软雅黑';">
                  四川长宁地区建筑物损毁判识结果
                </span>
              </p>
              <p class="docx_1" style="margin-top: 12.45pt; margin-bottom: 12.45pt; line-height: 1.5;">
                <span style="font-family: 'Times New Roma'; font-weight: normal; min-height: 14pt; font-size: 14pt;">
                  三
                </span>
                <span style="font-family: 'Times New Roma'; font-weight: normal; min-height: 14pt; font-size: 14pt;">
                  、
                </span>
                <span style="font-family: 'Times New Roma'; font-weight: normal; min-height: 14pt; font-size: 14pt;">
                  发展趋势展望
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 21pt;">
                <span style="font-family: '微软雅黑';">
                  随着遥感技术的快速发展，建筑物损毁的遥感判识技术逐渐成为灾后应急响应和重建的重要工具。然而，现有技术仍面临数据稀缺、模型泛化能力不足等挑战。为了应对这些问题，未来的建筑物损毁遥感判识技术将围绕以下几个方向实现突破性发展：
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 21.1pt;">
                <span style="font-family: 'Times New Roma'; font-weight: bold;">
                  (1) 
                </span>
                <span style="font-family: 'Times New Roma'; font-weight: bold;">
                  多模态数据与知识协同驱动
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 21pt;">
                <span style="font-family: '微软雅黑';">
                  通过融合光学影像、
                </span>
                <span style="font-family: '微软雅黑';">
                  SAR
                </span>
                <span style="font-family: '微软雅黑';">
                  雷达影像、
                </span>
                <span style="font-family: '微软雅黑';">
                  LiDAR
                </span>
                <span style="font-family: '微软雅黑';">
                  点云等多源数据，结合光谱、材质、三维结构等多维特征，提升对复杂损毁模式的识别能力。此外，结合建筑结构类型、抗震等级、历史灾害数据等领域知识图谱，有助于提高模型的物理可解释性和预测精度。
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 21.1pt;">
                <span style="font-family: 'Times New Roma'; font-weight: bold;">
                  (
                </span>
                <span style="font-family: 'Times New Roma'; font-weight: bold;">
                  2) 
                </span>
                <span style="font-family: 'Times New Roma'; font-weight: bold;">
                  生成式模型与多视角观测
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 21pt;">
                <span style="font-family: '微软雅黑';">
                  利用生成对抗网络和扩散模型（模拟建筑损毁的多样化形态，生成高保真合成数据，解决样本稀缺问题。同时，结合无人机倾斜摄影与正射影像的多视角分析，进一步提高损毁程度评估的精确度。
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 21pt;"></p>
              <p style="line-height: 1.5; text-indent: 21pt;"></p>
              <p style="line-height: 1.5; text-indent: 21.1pt;">
                <span style="font-family: 'Times New Roma'; font-weight: bold;">
                  (
                </span>
                <span style="font-family: 'Times New Roma'; font-weight: bold;">
                  3) 
                </span>
                <span style="font-family: 'Times New Roma'; font-weight: bold;">
                  大模型驱动的自适应学习
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 21pt;">
                <span style="font-family: '微软雅黑';">
                  基于遥感专用大模型，通过自监督预训练和少量标注数据微调，解决灾后数据稀缺区域的泛化问题。同时，采用无监督域自适应策略，减少对标注数据的依赖，实现跨灾种的快速适配，提升模型的适用性与鲁棒性。
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 21.1pt;">
                <span style="font-family: 'Times New Roma'; font-weight: bold;">
                  (4) 
                </span>
                <span style="font-family: 'Times New Roma'; font-weight: bold;">
                  边缘计算与实时响应优化
                </span>
              </p>
              <p style="line-height: 1.5; text-indent: 21pt;">
                <span style="font-family: '微软雅黑';">
                  通过神经网络架构搜索和模型量化技术，优化计算量，适配无人机和边缘计算设备，实现灾后损毁的实时监测。结合无人机集群与边缘服务器，建立"感知
                </span>
                <span style="font-family: '微软雅黑';">
                  -
                </span>
                <span style="font-family: '微软雅黑';">
                  推理
                </span>
                <span style="font-family: '微软雅黑';">
                  -
                </span>
                <span style="font-family: '微软雅黑';">
                  决策"闭环，提高灾后响应效率与决策精准度。
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