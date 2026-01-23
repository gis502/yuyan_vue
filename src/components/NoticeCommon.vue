<template>
  <div class="document-container">
    <!-- 顶部图片展示区 -->
    <header class="document-header">
      <img
          src="@/assets/images/head.png"
          alt="国家减灾中心"
          class="header-image"
      />
    </header>

    <!-- 通知内容展示区 -->
    <main class="document-content">
      <!-- 面包屑导航和返回按钮 -->
      <div class="breadcrumb-container">
        <div class="breadcrumb">
          <a href="./index.html" class="breadcrumb-item">首页</a>
          <span class="breadcrumb-separator">/</span>
          <a
              href="./index.html#/moreInfo/technology"
              class="breadcrumb-item"
          >
            {{ header }}
          </a>
        </div>
        <button class="back-button" @click="handleBack">
          <span class="back-icon">←</span> 返回首页
        </button>
      </div>

      <!-- 渲染后的通知内容 -->
      <div class="docx-renderer">
        <div v-html="content">

        </div>
      </div>
    </main>

    <Foot/>
  </div>
</template>

<script setup>
// 组件导入
import Foot from "@/components/foot.vue";

const props = defineProps({
  header: String,
  content: String
});

/**
 * 处理返回首页按钮点击事件
 * 使用 window.location.href 进行页面跳转
 */
function handleBack() {
  // 跳转到首页
  window.location.href = './index.html';
}


</script>

<style scoped>
.document-container {
  width: 100%;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: #fff;
}

.document-header {
  width: 100%;
  background: #fff;
  text-align: center;
  padding: 0;
}

.docx-renderer {
  width: 100%;
  background: #fff;
}

.breadcrumb-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e8e8e8;
}

.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
}

.breadcrumb-item {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-item:hover {
  color: #1890ff;
}

.breadcrumb-item.current {
  color: #333;
  font-weight: 500;
}

.breadcrumb-separator {
  margin: 0 8px;
  color: #999;
}

.back-button {
  display: flex;
  align-items: center;
  padding: 6px 12px;
  background-color: #f0f0f0;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: all 0.3s;
}

.back-button:hover {
  background-color: #e6e6e6;
  border-color: #b3b3b3;
}

.back-button:active {
  background-color: #d9d9d9;
}

.back-icon {
  margin-right: 4px;
  font-size: 12px;
}

/* 页面布局样式 */
.document-content {
  width: 800pt;
  padding: 20px;
  background: #fff;
  border: 1px solid #eeeeee;
  min-height: 80vh;
  position: relative;
  box-sizing: border-box;
  margin-left: 150pt;
}

/* 自定义带括号的有序列表 */
:deep(.ol-bracket) {
  list-style: none;
  counter-reset: list-num;
  padding-left: 25px;
  margin: 0;
}
:deep(.ol-bracket li) {
  counter-increment: list-num;
  position: relative;
  margin: 8px 0;
}
:deep(.ol-bracket li::before) {
  content: "(" counter(list-num) ")";
  position: absolute;
  left: -25px;
  color: #333;
}

/* 文章样式 */
:deep(.academic-article) {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 60px;
  background-color: #fff;
  font-family: "FZFangSong";
  color: #333;
  line-height: 1.8;
}

/* 文章头部（标题+作者+单位） */
:deep(.article-header) {
  text-align: center;
  margin-bottom: 40px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 20px;
  font-family: "FZHei";
}
:deep(.article-title) {
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
  letter-spacing: 0.03125rem;
}
:deep(.article-authors) {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-style: normal;
}
:deep(.article-affiliation) {
  font-size: 14px;
  color: #666;
  font-style: normal;
}

/* 文章章节 */
:deep(.article-section) {
  margin-bottom: 2.25rem;
}
:deep(.section-title) {
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #222;
  letter-spacing: 0.01875rem;
  font-family: "FZXiaoBiaoSong";
}

/* 正文段落 */
:deep(.article-paragraph) {
  font-size: 16px;
  margin-bottom: 16px;
  text-align: justify;
  text-indent: 2em;
  font-family: "FZFangSong";
}

/* 带括号的有序列表 */
:deep(.ol-bracket) {
  list-style: none;
  counter-reset: list-num;
  padding-left: 30px;
  margin-bottom: 16px;
}
:deep(.ol-bracket li) {
  counter-increment: list-num;
  position: relative;
  margin-bottom: 12px;
  font-size: 16px;
  text-align: justify;
}
:deep(.ol-bracket li::before) {
  content: "(" counter(list-num) ")";
  position: absolute;
  left: -25px;
  color: #333;
  font-weight: normal;
}

/* 图片样式 */
:deep(.article-img) {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto 8px;
  border: 1px solid #eee;
}

/* 图片说明 */
:deep(.img-caption) {
  width: 100%;
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.6;
  font-family: "FZKai";
  text-align: center;
}

/* 双列图片容器 */
:deep(.img-col-2) {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 16px 0;
}
:deep(.img-col-item) {
  width: 48%;
  margin-bottom: 12px;
}
/* 响应式适配：小屏幕下单列显示 */
@media (max-width: 768px) {
  :deep(.academic-article) {
    padding: 20px 20px;
  }
  :deep(.img-col-item) {
    width: 100%;
  }
  :deep(.article-title) {
    font-size: 22px;
  }
  :deep(.section-title) {
    font-size: 18px;
  }
}
</style>