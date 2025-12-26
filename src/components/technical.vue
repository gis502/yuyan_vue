<template>
  <div class="technical-container">
    <div class="title">
      <div class="title-content">
        <img src="@/assets/images/titleLeft.png" alt="title left" />
        <span class="title-span"
          >技术装备<span class="title-blue">前沿</span></span
        >
        <img src="@/assets/images/titleRight.png" alt="title right" />
      </div>
    </div>
    <div class="list">
        <FrontierOfEquipmentTechnology />
      </div>
  </div>
</template>

<script setup>
import FrontierOfEquipmentTechnology from "./frontier/FrontierOfEquipmentTechnology.vue";
</script>

<style scoped>
.technical-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 32px auto;
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

.title-content img {
  margin-bottom: 5px;
}

.title-content .title-span {
  font-family: PingFangSC, PingFang SC;
  font-weight: 600;
  margin: 0 50px;
}

.title-blue {
  color: #3f93da;
}
.list {
  margin-top: 20px;
}
</style>
