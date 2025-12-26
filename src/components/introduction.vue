<template>
  <router-link to="/description" class="link-wrapper">
  <div class="introduction-container">
    <div class="title">
      <div class="title-content">
        <span class="title-span">机制<span class="title-blue">介绍</span></span>
      </div>
    </div>
    <div class="text">
      <div class="text-content">
        应急管理部国家减灾中心航空遥感业务体系依托“一网、一中心、两平台”建设，于2010年1月牵头组建“重大灾害无人机应急合作机制”...
      </div>
      <div class="text-data">2025-12-24</div>
    </div>
  </div>
  </router-link>
</template>

<script setup>

</script>

<style scoped>
.link-wrapper {
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
  width: 332px;
  height: 136px;
  background: linear-gradient(180deg, #EDF5FF 0%, #FFFFFF 69%, #FFFFFF 100%);
  box-shadow: 0px 10px 20px 0px rgba(121, 152, 201, 0.15);
  border-radius: 8px;
  border: 2px solid #FFFFFF;
  padding: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.text-content{
  font-size: 16px;
  font-weight: bold;
  line-height: 28px;
}
.text-data{
  font-size: 14px;
  color: #666666;
  line-height: 20px;
}
</style>
