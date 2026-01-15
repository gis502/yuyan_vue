<template>
  <div class="index">
    <div class="banner">
      <div class="banner-title">
        <div class="title-line1">雨燕应急</div>
        <div class="title-line2">重大灾害无人机应急合作机制</div>
      </div>
      <div class="banner-maker">应急管理部国家减灾中心制作</div>
    </div>
    <div class="middle-container">
      <IntroductionComponent />
      <AnnouncementComponent />
      <DynamicsComponent />
      <DisasterComponent />
      <LocalDynamicsComponent />
      <TechnicalComponent />
      <TeamSearchComponent />
    </div>
    <foot />
  </div>
</template>

<script setup>

import IntroductionComponent from "@/components/introduction.vue";
import Foot from "@/components/foot.vue";
import DisasterComponent from "@/components/disaster.vue";
import DynamicsComponent from "@/components/dynamics.vue";
import TechnicalComponent from "@/components/technical.vue";
import TeamSearchComponent from "@/components/teamSearch.vue";
import AnnouncementComponent from "@/components/announcement.vue";
import LocalDynamicsComponent from "@/components/LocalDynamicsComponent.vue";

</script>

<style scoped>
/* 样式基于fhkh.css中的模板 */
.index {
  background: #fff;
  font-family: STYuanti-SC, STYuanti-SC;
  position: relative;
  width: 100%;
  overflow-x: hidden; /* 防止出现横向滚动条 */
  min-height: 100vh;
}

.banner {
  width: 100%;
  height: 700px;
  margin-bottom: 80px;
  background: url("@/assets/images/banner1.jpg") center top no-repeat;
  background-size: 100% 100%;
  position: relative;
}

.banner-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
  font-family: "Microsoft Yahei", STHeiti, sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 0 20px;
  width: 100%;
}

.banner-maker {
  position: absolute;
  bottom: 24px;
  right: 40px;
  font-size: 18px;
  color: #9b683e;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.9);
  padding: 6px 12px;
  transform: skewX(-15deg);
  display: inline-block;
  font-family: "Microsoft Yahei", sans-serif;
}

.title-line1 {
  font-size: 72px;
  font-weight: 900;
  margin-bottom: 16px;
  line-height: 1.2;
  text-align: center;
}

.title-line2 {
  font-size: 72px;
  font-weight: 800;
  line-height: 1.2;
  text-align: center;
}

.middle-container {
  width: 100%;
}

.announcement-container, .dynamics-container, .disaster-container, .technical-container, .local-dynamics-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 32px auto;
}

.introduction-container {
  width: 100%;
  max-width: 580px;
}

.team-search-container {
  width: 100%;
}
</style>
