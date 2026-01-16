<template>
  <div class="more-info-page">
    <!-- 加载状态 -->
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
      <p>加载中...</p>
    </div>

    <!-- 正常显示 -->
    <div v-else-if="currentList">
      <MoreInfo
          :page-title="pageTitle"
          :news-list="currentList"
          :page-size="pageSize"
          :highlight-keyword="keyword"
          :show-pagination= false
      />
    </div>

    <!-- 未找到对应数据 -->
    <div v-else class="not-found">
      <h2>未找到相关信息</h2>
      <p>请求的列表不存在或已被移除</p>
      <button @click="goBack" class="back-btn">返回上一页</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import MoreInfo from '@/components/moreInfo.vue';
import listData from '/public/json/list.json';

const route = useRoute();
const router = useRouter();

// 响应式数据
const loading = ref(true);
const allLists = ref({}); // 存储所有列表数据

// 从路由参数获取 id
const listId = computed(() => route.params.id);
const keyword = computed(() => route.query.keyword || '');
const isSearchPage = computed(() => listId.value === 'search');

// 当前显示的列表
const currentList = computed(() => {
  if (allLists.value) {
    // 3.1 搜索页面：根据keyword筛选所有数据中的匹配内容
    if (isSearchPage.value) {
      if (!keyword.value) return null; // 无关键词则返回空
      // 合并所有列表数据，然后筛选包含关键词的项（按需调整筛选规则）
      const allData = Object.values(allLists.value).flat(); // 把所有列表合并成一维数组
      return allData.filter(item => {
        return item.title?.toLowerCase().includes(keyword.value.toLowerCase());
      });
    }
    // 3.2 普通页面：按listId加载指定列表
    return allLists.value[listId.value] || null;
  }
  return null;
});

// 页面标题（根据 id 生成）
const pageTitle = computed(() => {
  if (isSearchPage.value) {
    return `搜索结果：${keyword.value || '无关键词'}`;
  }
  const titleMap = {
    'disaster': '灾害应急',
    'technology': '技术前沿',
    'dynamic': '机制动态',
  };

  // 如果有直接映射，使用映射的标题
  if (titleMap[listId.value]) {
    return titleMap[listId.value];
  }

  // 否则生成默认标题
  return `${listId.value.charAt(0).toUpperCase() + listId.value.slice(1)} 列表`;
});

// 每页显示数量
const pageSize = ref(10);

// 初始化数据
const initData = () => {
  try {
    loading.value = true;
    allLists.value = listData;

    // 检查请求的 id 是否存在
    if (!listData[listId.value]) {
      console.warn(`列表ID "${listId.value}" 不存在`);
    }

  } catch (err) {
    console.error('加载列表数据失败:', err);
  } finally {
    loading.value = false;
  }
};

// 返回上一页
const goBack = () => {
  router.go(-1);
};

// 监听路由参数变化
watch(
    () => route.params.id,
    (newId) => {
      if (newId) {
        initData();
      }
    }
);

// 组件挂载时加载数据
onMounted(() => {
  initData();
});
</script>
<style scoped>
.more-info-page {
  min-height: 100vh;
  background: #f5f7fa;
}

/* 加载状态样式 */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #1890ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 错误状态样式 */
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
  padding: 40px;
}

.error-message {
  color: #ff4d4f;
  font-size: 16px;
  margin-bottom: 20px;
}

.retry-btn {
  padding: 10px 24px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.retry-btn:hover {
  background-color: #40a9ff;
}

/* 未找到状态样式 */
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
  padding: 40px;
}

.not-found h2 {
  color: #333;
  margin-bottom: 16px;
  font-size: 24px;
}

.not-found p {
  color: #666;
  margin-bottom: 24px;
  font-size: 16px;
}

.back-btn {
  padding: 10px 24px;
  background-color: #f0f0f0;
  color: #333;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.back-btn:hover {
  background-color: #e6e6e6;
  border-color: #b3b3b3;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .loading-container,
  .error-container,
  .not-found {
    padding: 20px;
  }

  .loading-spinner {
    width: 40px;
    height: 40px;
  }
}
</style>
