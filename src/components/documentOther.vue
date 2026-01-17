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

    <!-- 内容区域（不对称留白） -->
    <main class="document-content">
      <!-- 面包屑导航 -->
      <div class="breadcrumb-container">
        <div class="breadcrumb">
          <router-link to="/" class="breadcrumb-item">首页</router-link>
          <span class="breadcrumb-separator">/</span>
          <router-link
              v-if="breadcrumbLink"
              :to="breadcrumbLink"
              class="breadcrumb-item"
          >
            {{ breadcrumbName }}
          </router-link>
          <span v-else class="breadcrumb-item current">
            {{ breadcrumbName }}
          </span>
        </div>

        <!-- 返回按钮（位于内容区域右侧） -->
        <button class="back-button" @click="handleBack">
          <span class="back-icon">←</span>
          返回首页
        </button>
      </div>

      <!-- 文档内容区域 -->
      <div class="document-renderer">
        <!-- 标题区域 -->
        <div class="document-title" v-if="title">{{ title }}</div>

        <!-- 正文内容区域 - 单段内容带首行缩进 -->
        <div class="document-body" v-if="content">
          {{ content }}
        </div>
      </div>
    </main>

    <!-- 底部组件 -->
    <Foot />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Foot from "@/components/foot.vue";

// 定义 props
const props = defineProps({
  // 文档标题
  title: {
    type: String,
    default: ''
  },
  // 文档正文内容（单段）
  content: {
    type: String,
    default: ''
  },
  // 面包屑显示的当前页面名称
  breadcrumbName: {
    type: String,
    required: true
  },
  // 面包屑链接（用于"查看更多"页面，可以为空）
  breadcrumbLink: {
    type: [String, Object],
    default: null
  }
});

const router = useRouter();

// 返回按钮点击事件
const handleBack = () => {
  router.push('/');
};
</script>

<style scoped>
.document-container {
  width: 100%;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: #fff;
}

/* 头部图片样式 */
.document-header {
  width: 100%;
  background: #fff;
  text-align: center;
  padding: 0;
}

.header-image {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

/* 内容区域（右侧留白为左侧两倍） */
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

/* 面包屑容器 */
.breadcrumb-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e8e8e8;
}

/* 面包屑导航样式 */
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

/* 返回按钮样式 */
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

/* 文档内容区域样式 */
.document-renderer {
  width: 100%;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
}

/* 标题样式 - 与docx插件渲染的标题样式保持一致 */
.document-title {
  font-family: "方正小标宋_GBK", "SimSun", serif;
  font-weight: bold;
  font-size: 22pt;
  min-height: 22pt;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
}

/* 正文样式 - 与docx插件渲染的正文样式保持一致 */
.document-body {
  font-family: "方正仿宋_GBK", "FangSong", serif;
  font-size: 14pt;
  min-height: 14pt;
  line-height: 1.8;
  text-indent: 2em; /* 首行缩进2字符 */
  width: 100%;
  text-align: justify; /* 两端对齐 */
}

/* 响应式调整 */
@media (max-width: 768px) {
  .document-content {
    padding: 15px 20px; /* 在小屏幕上恢复对称留白 */
    max-width: 100%;
    margin-left: 0;
    width: 100%;
  }

  .breadcrumb-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .back-button {
    align-self: flex-end;
  }

  .document-renderer {
    padding: 15px;
  }

  .document-title {
    font-size: 18pt;
  }

  .document-body {
    font-size: 12pt;
  }
}
</style>