<template>
  <div class="disaster-container">
    <div class="title">
      <div class="title-content">
        <img src="@/assets/images/titleLeft.png" alt="title left" />
        <span class="title-span">灾害<span class="title-blue">应急</span></span>
        <img src="@/assets/images/titleRight.png" alt="title right" />
      </div>
    </div>
    <div class="disaster-map">
      <ul>
        <li class="map">
          <a href="./index.html#/disaster1" target="_blank">
            <img src="/images/disaster/disaster-1-cover.png" alt>
          </a>
          <p class="map-info">1·17 西藏定日6.8级地震应急监测评估</p>
          <p class="time">2025-01-18 10:22</p>
        </li>
        <li class="map">
          <a href="./index.html#/disaster2" target="_blank">
            <img src="/images/disaster/disaster-2-cover.png" alt>
          </a>
          <p class="map-info">2·10 四川筠连山体滑坡应急监测评估</p>
          <p class="time">2025-02-11 11:20</p>
        </li>
        <li class="map">
          <a href="./index.html#/disaster3" target="_blank">
            <img src="/images/disaster/disaster-3-cover.png" alt>
          </a>
          <p class="map-info">3·22 云南福贡县亚目水电站滑坡应急监测评估</p>
          <p class="time">2025-03-22 15:43</p>
        </li>
        <li class="map">
          <a href="./index.html#/disaster4" target="_blank">
            <img src="/images/disaster/disaster-4-cover.png" alt>
          </a>
          <p class="map-info">5·26 贵州大方县果瓦乡山体滑坡应急监测评估</p>
          <p class="time">2025-05-26 18:19</p>
        </li>
      </ul>
    </div>
    <div class="disaster-item">
      <a href="./index.html#/moreInfo/disaster" class="disaster-date">查看更多</a>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
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

.disaster-map{
  width: 100%;
}

.disaster-map ul{
  overflow: hidden;
  list-style: none; /* 添加这行，移除列表标记 */
  padding-left: 0;  /* 添加这行，移除默认左边距 */
  display: flex;
  gap: 10px;
}

.disaster-map .map{
  float: left;
  height: 280px;
  flex: 1;
  margin-bottom: 15px;
}

.disaster-map .map a{
  display: block;
  width: 100%;
  height: 200px;

}

.disaster-map .map a>img{
  width: 100%;
  height: 100%;
}

.disaster-map .map .map-info{
  font-size: 18px;
  color: #333;
  margin-bottom: 0;
  margin-top: 5px;
  font-weight: bold; /* 添加这行 */
}

.disaster-map .map .time{
  font-size: 12px;
  color: #999999;
  margin-bottom: 0;
}

.disaster-item {
  font-size: 16px;
  line-height: 22px;
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 24px;
}

.disaster-item a {
  display: inline-block;
  padding: 5px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s;
  margin-left: auto;
}

.disaster-item a:hover {
  background-color: #f5f5f5;
  color: #3F93DA;
}
</style>
