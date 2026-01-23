<template>
  <div class="moreinfo-container">
    <!-- 顶部图片展示区 -->
    <header class="moreinfo-header">
      <img
          src="@/assets/images/head.png"
          alt="国家减灾中心"
          class="header-image"
      />
    </header>

    <!-- 内容区域（右侧留白为左侧两倍） -->
    <main class="moreinfo-content">
      <!-- 面包屑导航 -->
      <div class="breadcrumb-container">
        <div class="breadcrumb">
          <a href="./index.html" class="breadcrumb-item">首页</a>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-item current">{{ pageTitle }}</span>
        </div>

        <!-- 返回按钮 -->
        <button class="back-button" @click="handleBack">
          <span class="back-icon">←</span>
          返回首页
        </button>
      </div>

      <!-- 内容展示区 -->
      <div class="fw content-show">
        <div class="laws-title">
          <b></b>{{ pageTitle }}
        </div>

        <ul class="laws-list">
          <li
              v-for="(item, index) in newsList"
              :key="index"
              class="laws-item"
          >
          <a
              :href="keyword ? `${item.url}?keyword=${keyword}` : item.url"
              class="lt laws"
              target="_blank"
          >

              <span v-html="highlightTitle(item.title, item)"></span>
            </a>
            <span class="rt time">{{ item.time }}</span>
          </li>
        </ul>
        <!-- 分页组件 -->
        <div class="page-container" v-if="showPagination">
          <div class="page-my m-style">
            <!-- 页码 -->
            <span v-if="currentPage === 1" class="active">1</span>
            <a v-else href="javascript:void(0);" @click="changePage(1)">1</a>

            <template v-for="page in visiblePages" :key="page">
              <span v-if="page === currentPage" class="active">{{ page }}</span>
              <a
                  v-else-if="page > 1 && page <= totalPages"
                  href="javascript:void(0);"
                  @click="changePage(page)"
              >
                {{ page }}
              </a>
            </template>

            <!-- 省略号 -->
            <span v-if="showEllipsis">...</span>

            <!-- 最后一页 -->
            <a
                v-if="currentPage !== totalPages && totalPages > 1"
                href="javascript:void(0);"
                @click="changePage(totalPages)"
            >
              {{ totalPages }}
            </a>

            <!-- 下一页 -->
            <a
                v-if="currentPage < totalPages"
                class="next"
                href="javascript:void(0);"
                @click="changePage(currentPage + 1)"
            >
              下一页
            </a>

            <!-- 分页信息 -->
            <span class="totle-num"> 共 {{ totalPages }} 页 </span>

            <!-- 跳转输入框 -->
            <input
                v-model="jumpPage"
                class="jump-ipt"
                type="number"
                :min="1"
                :max="totalPages"
                @keyup.enter="jumpToPage"
            >
            <a href="javascript:void(0);" class="jump-btn" @click="jumpToPage">跳转</a>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部组件 -->
    <Foot />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import {useRoute, useRouter} from 'vue-router';
import Foot from "@/components/foot.vue";

// 定义 props
const props = defineProps({
  // 页面标题
  pageTitle: {
    type: String,
    required: true
  },
  // 新闻列表数据
  newsList: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(item =>
          item.title &&
          item.time &&
          item.url
      );
    }
  },
  // 是否显示分页
  showPagination: {
    type: Boolean,
    default: true
  },
  // 每页显示的数量
  pageSize: {
    type: Number,
    default: 10
  },
  highlightKeyword: {
    type: String,
    default: ''
  }
});

const route = useRoute();
const router = useRouter();
const keyword = computed(() => route.query.keyword || '');

const highlightTitle = (title, item) => {
  // 如果没有关键词，直接返回原标题
  if (!props.highlightKeyword || !props.highlightKeyword.trim()) {
    return title;
  }

  // 获取关键词（转换为小写用于不区分大小写匹配）
  const keyword = props.highlightKeyword.trim();

  // 使用正则表达式进行全局替换
  // flags: 'gi' = 全局 + 不区分大小写
  const regex = new RegExp(`(${escapeRegExp(keyword)})`, 'gi');

  // 替换匹配的部分为红色样式
  return title.replace(regex, '<span class="highlight">$1</span>');
};

// 转义正则表达式特殊字符
const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

// 分页相关数据
const currentPage = ref(1);
const jumpPage = ref(1);

// 计算总页数
const totalPages = computed(() => {
  return Math.ceil(props.newsList.length / props.pageSize);
});

// 计算当前页显示的数据
const paginatedNewsList = computed(() => {
  const startIndex = (currentPage.value - 1) * props.pageSize;
  const endIndex = startIndex + props.pageSize;
  return props.newsList.slice(startIndex, endIndex);
});

// 计算显示的页码（最多显示7个页码）
const visiblePages = computed(() => {
  const pages = [];
  const maxVisible = 7;

  if (totalPages.value <= maxVisible) {
    // 总页数小于等于最大显示数，显示所有页码
    for (let i = 2; i <= totalPages.value; i++) {
      pages.push(i);
    }
  } else {
    // 总页数大于最大显示数，显示当前页前后的页码
    const half = Math.floor(maxVisible / 2);
    let start = Math.max(2, currentPage.value - half);
    let end = Math.min(totalPages.value - 1, currentPage.value + half);

    // 调整起始和结束位置，确保显示数量
    if (currentPage.value - half < 2) {
      end = Math.min(totalPages.value - 1, maxVisible - 1);
    }
    if (currentPage.value + half > totalPages.value - 1) {
      start = Math.max(2, totalPages.value - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
  }

  return pages;
});

// 是否显示省略号
const showEllipsis = computed(() => {
  return totalPages.value > 8 && currentPage.value < totalPages.value - 3;
});

// 返回按钮点击事件
const handleBack = () => {
  router.push('/');
};

// 切换页面
const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value && page !== currentPage.value) {
    currentPage.value = page;
    jumpPage.value = page;
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

// 跳转到指定页面
const jumpToPage = () => {
  const page = parseInt(jumpPage.value);
  if (!isNaN(page) && page >= 1 && page <= totalPages.value) {
    changePage(page);
  }
};

// 监听 newsList 变化，重置到第一页
onMounted(() => {
  // 初始化跳转输入框的值
  jumpPage.value = currentPage.value;
});
</script>

<style scoped>
.moreinfo-container {
  width: 100%;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: #fff;
}

/* 头部图片样式 */
.moreinfo-header {
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

/* 关键词高亮样式 */
:deep(.highlight) {
  color: #ff0000; /* 红色 */
  font-weight: bold;
  /* 可选：背景高亮 */
  /* background-color: #fff0f0; */
  /* padding: 0 2px; */
  /* border-radius: 2px; */
}

/* 内容区域（右侧留白为左侧两倍） */
.moreinfo-content {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 5% 20px 2.5%;
  background: #fff;
  border: 1px solid #eeeeee;
  min-height: 80vh;
  position: relative;
  box-sizing: border-box;
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

/* 内容展示区样式 */
.fw.content-show {
  width: 100%;
}

.laws-title {
  font-size: 22px;
  color: #008bdf;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ddd;
}

.laws-title b {
  position: relative;
  top:10px;
  display: inline-block;
  width: 4px;
  height: 40px;
  background: #ff7e00;
  margin-right: 20px;
}

/* 新闻列表样式 */
.laws-list {
  min-height: 300px;
  margin-top: 0;
}

.laws-item {
  position: relative;
  height: 80px;
  line-height: 80px;
  overflow: hidden;
  padding-left: 30px;
  border-bottom: 1px dashed #ccc;
}

.laws-item:before{
  content: "";
  position: absolute;
  left: 0;
  top: 35px;
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #ccc;
  border-radius: 8px;
}

.laws-item:last-child {
  border-bottom: none;
}

.laws-item .laws {
  color: #333;
  font-size: 20px;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
}

.laws-item .laws:hover {
  color: #1890ff;
}

/* 防止 v-html 内容换行 */
.laws-item .laws :deep(span) {
  white-space: nowrap;
  display: inline;
}

.rt{
  float: right;
}

.time {
  color: #999;
  font-size: 14px;
}

/* 分页样式 */
.page-container {
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #e8e8e8;
}

.page-my.m-style {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.page-my.m-style a,
.page-my.m-style span {
  display: inline-block;
  min-width: 32px;
  height: 32px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  color: #333;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s;
}

.page-my.m-style a:hover {
  background-color: #f5f5f5;
  border-color: #1890ff;
  color: #1890ff;
}

.page-my.m-style span.active {
  background-color: #1890ff;
  border-color: #1890ff;
  color: #fff;
}

.page-my.m-style .next {
  padding: 0 15px;
}

.page-my.m-style .totle-num {
  border: none;
  color: #666;
  margin: 0 10px;
}

.page-my.m-style .jump-ipt {
  width: 50px;
  height: 30px;
  padding: 0 5px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  text-align: center;
  margin: 0 5px;
}

.page-my.m-style .jump-btn {
  background-color: #f5f5f5;
  padding: 0 15px;
  margin-left: 10px;
}

.page-my.m-style .jump-btn:hover {
  background-color: #1890ff;
  color: #fff;
  border-color: #1890ff;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .moreinfo-content {
    padding: 15px 20px;
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

  .laws-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }

  .laws-item .time {
    align-self: flex-start;
  }

  .page-my.m-style {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
