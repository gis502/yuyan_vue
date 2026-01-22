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
          <a href="./index.html" class="breadcrumb-item">首页</a>
          <span class="breadcrumb-separator">/</span>
          <a
              v-if="breadcrumbLink"
              :href="breadcrumbLink"
              class="breadcrumb-item"
          >
            {{ breadcrumbName }}
          </a>
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

      <!-- 文档内容 -->
      <vue-office-docx
          :src="docxUrl"
          @rendered="renderedHandler"
          @error="errorHandler"
          class="docx-renderer"
      />
    </main>

    <!-- 底部组件 -->
    <Foot />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import VueOfficeDocx from "@vue-office/docx";
import "@vue-office/docx/lib/index.css";
import Foot from "@/components/foot.vue";

// 定义 props
const props = defineProps({
  docxUrl: {
    type: String,
    required: true
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
  window.location.href = './index.html'
};

// 文档渲染完成后的处理
const renderedHandler = () => {
  console.log("文档渲染完成，开始修改图片样式");

  // 获取 docx 容器内的所有图片
  const imgList = document.querySelectorAll('.docx img');

  // 遍历每张图片，调整其父级 div 和自身样式
  imgList.forEach(img => {
    const imgParentDiv = img.closest('div');
    if (imgParentDiv) {
      imgParentDiv.style.width = '100%';
      imgParentDiv.style.height = 'auto';
      imgParentDiv.style.display = 'block';
      imgParentDiv.style.margin = '0 auto';
      imgParentDiv.style.textIndent = '0';
    }

    img.style.width = '100%';
    img.style.height = 'auto';
  });
};

// 错误处理
const errorHandler = (error) => {
  console.error("文档渲染失败:", error);
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

/* Docx 渲染样式 */
.docx-renderer {
  width: 100%;
  background: #fff;
}

/* 深度样式覆盖 */
:deep(.docx-wrapper) {
  background: #FFF !important;
  padding: 0 !important;
}

:deep(.docx) {
  width: 700pt !important;
  box-shadow: none !important;
  padding: 20px !important;
  height: auto !important;
  min-height: auto !important;
}

:deep(.docx-wrapper) {
  overflow: visible !important;
  height: auto !important;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .document-content {
    padding: 15px 20px; /* 在小屏幕上恢复对称留白 */
    max-width: 100%;
  }

  .breadcrumb-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .back-button {
    align-self: flex-end;
  }
}
</style>
