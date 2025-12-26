<template>
  <div class="page-container">
    <DocumentTemplate
        :title="docTitle"
        :content="htmlContent"
        :title-align="'center'"
        :showTitleDivider="true"
        :font-size="'16px'"
        :line-height="'1.8'"
    >
    </DocumentTemplate>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DocumentTemplate from "@/components/template.vue";

const docTitle = ref('机制介绍');
const htmlContent = ref(`
  <p>应急管理部国家减灾中心航空遥感业务体系依托“一网、一中心、两平台”建设，于2010年1月牵头组建“重大灾害无人机应急合作机制”（以下简称“机制”），以公共私营合作制（Public-Private-Partnership）模式不断吸纳优质无人机制造与飞行服务企业加入，通过政府购买服务的方式，利用社会力量无人机资源形成“全国无人机应急监测一张网”，充分解决航空技术装备和人员队伍不足的问题。</p>

  <p>目前，机制共有222家合作单位共计1200余名专业飞手、2000余架各型无人机，配备可见光、红外、Lidar等传感器以及喊话器、照明、物资抛投设备，基本形成全国中东部地区2-6小时、西部偏远地区12小时抵达现场迅速执飞的应急响应能力。</p>
`);
</script>

<style scoped>
.page-container {
  background-color: #f5f7fa;
  min-height: 100vh;
}
</style>
