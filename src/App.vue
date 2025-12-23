<template>
  <div class="index">
    <div class="banner"></div>
    <div class="middle-container">
      <AnnouncementComponent />
      <div class="container-split">
        <IntroductionComponent />
        <TeamSearchComponent />
      </div>
      <DynamicsComponent />
      <DisasterComponent />
      <TechnicalComponent />
    </div>
    <foot />
  </div>
</template>

<script setup>
import IntroductionComponent from '@/components/introduction.vue';
import AnnouncementComponent from '@/components/announcement.vue';
import DynamicsComponent from '@/components/dynamics.vue';
import TeamSearchComponent from '@/components/teamSearch.vue';
import TechnicalComponent from '@/components/technical.vue';
import DisasterComponent from '@/components/disaster.vue';
import Foot from "@/components/foot.vue";
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
  background: url("./assets/images/banner.png") center top no-repeat;
  background-size: 100% 100%;
}

.middle-container {
  width: 100%;
}

.announcement-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 32px auto;
}

.dynamics-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 32px auto;
}

.disaster-container {
  width: 100%;
  margin: 0 auto 32px auto;
  padding: 40px 0;
}

.technical-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 32px auto;
}

.introduction-container {
  width: 100%;
  max-width: 378px;
}

.team-search-container {
  width: 100%;
  max-width: 378px;
}

/* 容器分割样式 */
.container-split {
  width: 100%;
  max-width: 1200px;
  margin: 56px auto 80px auto;
  display: flex;
  justify-content: space-between;
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .container-split {
    width: 90%;
    max-width: none;
    flex-direction: column;
    gap: 50px;
  }

  .introduction-container, .team-search-container {
    width: 100%;
    max-width: 100%;
  }
}
</style>