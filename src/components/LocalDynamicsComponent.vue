<template>
  <div class="local-dynamics-container">
    <div class="title">
      <div class="title-content">
        <img src="@/assets/images/titleLeft.png" alt="title left" />
        <span class="title-span">本地<span class="title-blue">动态</span></span>
        <img src="@/assets/images/titleRight.png" alt="title right" />
      </div>
    </div>
    <div class="dynamics-list">
      <div class="dynamics-item">
        <img src="/images/point.png" alt="">
        <a href="/dynamic1" target="_blank">本地应急响应演练圆满结束，提升区域协同能力</a>
        <div class="dynamics-date">2025-01-15</div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.title {
  width: 100%;
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

.title-content img {
  margin-bottom: 5px;
}

.title-content .title-span {
  font-family: PingFangSC, PingFang SC;
  font-weight: 600;
  margin: 0 50px;
}

.title-blue {
  color: #3F93DA;
}

.dynamics-list {
  width: 100%;
  margin-top: 32px;
}

.dynamics-item {
  font-size: 16px;
  line-height: 22px;
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 24px;
}

.dynamics-item img {
  width: 20px;
  height: 20px;
  margin-right: 16px;
  margin-top: 5px;
}

.dynamics-item:last-child {
  border-bottom: none;
}

.dynamics-item a {
  display: block;
  padding: 5px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s;
  flex: 1;
}

.dynamics-item a:hover {
  background-color: #f5f5f5;
  color: #3F93DA;
}

.dynamics-date{
  color: #999999;
  position: absolute;
  right: 0;
}
</style>