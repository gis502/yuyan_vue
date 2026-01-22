<template>
  <div class="dynamics-container">
    <div class="title">
      <div class="title-content">
        <img src="@/assets/images/titleLeft.png" alt="title left" />
        <span class="title-span">机制<span class="title-blue">动态</span></span>
        <img src="@/assets/images/titleRight.png" alt="title right" />
      </div>
    </div>
    <div class="dynamics-list">
      <div class="dynamics-item">
        <img src="/images/point.png" alt>
        <a href="./index.html#/dynamic1" target="_blank">"重大灾害无人机应急合作机制"业务交流和技术研讨会在哈尔滨召开</a>
        <div class="dynamics-date">2025-01-09</div>
      </div>
      <div class="dynamics-item">
        <img src="/images/point.png" alt>
        <a href="./index.html#/dynamic2" target="_blank">"重大灾害无人机应急合作机制"2025年考核和增补工作圆满完成</a>
        <div class="dynamics-date">2025-03-07</div>
      </div>
      <div class="dynamics-item">
        <img src="/images/point.png" alt>
        <a href="./index.html#/dynamic3" target="_blank">聚青年英才之力 筑无人机应急防线</a>
        <div class="dynamics-date">2025-03-26</div>
      </div>
      <div class="dynamics-item">
        <img src="/images/point.png" alt>
        <a href="./index.html#/dynamic4" target="_blank">"雨燕应急"2025首期线上培训圆满完成，684名无人机应急尖兵云端集结</a>
        <div class="dynamics-date">2025-04-26</div>
      </div>
      <div class="dynamics-item">
        <img src="/images/point.png" alt>
        <a href="./index.html#/dynamic5" target="_blank">国家减灾中心派员参加2025第九届世界无人机大会暨UASE无人机展</a>
        <div class="dynamics-date">2025-05-30</div>
      </div>
      <div class="dynamics-item">
        <a href="./index.html#/moreInfo/dynamic" class="dynamics-date">查看更多</a>
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
