<template>
  <div class="notice-wrapper">
    <div class="notice-container">
      <div class="notice-header">
        “雨燕应急-<br>
        重大灾害无人机应急合作机制”<br>
        成员招募公告
        <el-icon class="close-icon" @click="handleClose"><CloseBold /></el-icon>
      </div>

      <div class="notice-content">
        <p class="notice-desc">
          “雨燕应急-重大灾害无人机应急合作机制”自2010年成立以来，以社会参与救灾理念为核心，组织社会力量无人机单位，在历次重大自然灾害防灾减灾救灾工作中发挥了重要的决策支撑作用。为进一步增强机制应急能力，现面向社会各单位招募机制成员。有关事项通知如下：
        </p>

        <div class="notice-item">
          <span class="item-bullet"></span>
          <div class="item-info">
            <div class="item-title">一、截止时间</div>
            <div class="item-text">2025年12月5日。</div>
          </div>
        </div>

        <div class="notice-item">
          <span class="item-bullet"></span>
          <div class="item-info">
            <div class="item-title">二、面向单位</div>
            <div class="item-text">各社会单位。</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElIcon } from 'element-plus'
import { CloseBold } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const handleClose = () => {
    router.push('/')
}
</script>

<style scoped>
.notice-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  box-sizing: border-box;
}

.notice-container {
  width: 100vw;
  height: 100vh;
  max-width:  none;
  background: #FFFFFF;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.notice-header {
  background-color: #e6f3ff;
  text-align: center;
  padding: 15px 0;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.8;
}

.notice-content {
  border-top: none;
  padding: 20px;
  font-size: 34px;
  line-height: 1.6;
}

.notice-desc {
  margin: 0 0 15px 0;
  text-indent: 2em;
}

.notice-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
}

.item-bullet {
  display: inline-block;
  width: 4px;
  height: 16px;
  background-color: #ff0000;
  margin-right: 8px;
  margin-top: 3px;
}

.item-title {
  font-weight: bold;
  margin-bottom: 4px;
}

.close-icon {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 18px;
  color: #666;
  cursor: pointer;
  transition: color 0.2s;
  z-index: 1;
}

.close-icon:hover {
  color: #ff4d4f;
}

/* 响应式适配（手机端优化） */
@media (max-width: 768px) {
  .notice-header {
    font-size: 16px;
    padding: 12px 0;
  }

  .notice-content {
    font-size: 13px;
    padding: 15px;
  }

  .close-icon {
    font-size: 16px;
    top: 12px;
    right: 12px;
  }
}
</style>
