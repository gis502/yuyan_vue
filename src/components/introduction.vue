<template>
  <div class="introduction-container">
    <div class="text">
      <a href="/description" target="_blank">
        <div class="text-content">
          应急管理部国家减灾中心航空遥感业务体系依托“一网、一中心、两平台”建设，于2010年1月牵头组建“重大灾害无人机应急合作机制”（以下简称“机制”），以公共私营合作制（Public-Private-Partnership）模式不断吸纳优质无人机制造与飞行服务企业加入，通过政府购买服务的方式，利用社会力量无人机资源形成“全国无人机应急监测一张网”，充分解决航空技术装备和人员队伍不足的问题。
          目前，机制共有222家合作单位共计1200余名专业飞手、2000余架各型无人机，配备可见光、红外、Lidar等传感器以及喊话器、照明、物资抛投设备，基本形成全国中东部地区2-6小时、西部偏远地区12小时抵达现场迅速执飞的应急响应能力。
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.text a{
  text-decoration: none;
  color: inherit;
}
.introduction-container {
  cursor: pointer;
}
.title {
  width: 100%;
  max-width: 1200px;
  height: 50px;
  margin: 40px auto;
  font-size: 36px;
  color: #333;
  line-height: 50px;
  text-align: center;
  position: relative;
}

.title-content {
  width: 100%;
  margin: 0 auto;
}

.title-content .title-span {
  font-family: PingFangSC, PingFang SC;
  font-weight: 600;
  margin: 0 50px;
}

.title-blue {
  color: #3F93DA;
}
.text{
  width: 100%;
  height: 200px;
  background: linear-gradient(180deg, #EDF5FF 0%, #FFFFFF 69%, #FFFFFF 100%);
  box-shadow: 0px 10px 20px 0px rgba(121, 152, 201, 0.15);
  border-radius: 8px;
  border: 2px solid #FFFFFF;
  padding: 23px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;

}
.text-content{
  font-size: 18px;
  font-weight: bold;
  line-height: 2.5em;
}

</style>
