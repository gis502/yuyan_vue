<template>
  <div class="team-search-container">
    <!-- 标题区域 -->
    <div class="title">
      <div class="title-content">
        <img src="@/assets/images/titleLeft.png" alt="title left" />
        <span class="title-span">机制队伍<span class="title-blue">查询</span></span>
        <img src="@/assets/images/titleRight.png" alt="title right" />
      </div>
    </div>

    <!-- 搜索框区域 -->
    <div class="search-box-container">
      <el-input
        v-model="searchKey"
        placeholder="请输入单位名称关键词搜索..."
        class="search-input"
        @input="handleSearch"
        clearable
      >
        <template #prefix>
          <el-icon><SearchIcon /></el-icon>
        </template>
      </el-input>
    </div>

    <!-- 队伍列表显示区域 -->
    <div class="team-list-container">
      <!-- 加载状态 -->
      <div v-if="loading" class="loading-state">
        <el-spin size="large" />
      </div>

      <!-- 搜索结果显示 -->
      <div v-else-if="searchKey && searchResult.length > 0" class="search-result">
        <div class="result-header">
          <span>搜索结果（共 {{ searchResult.length }} 条）</span>
        </div>
        <div class="result-content">
          <div
            class="team-item"
            v-for="(item, index) in searchResult"
            :key="item.id || index"
          >
            <div class="team-info">
              <div class="team-header">
                <span class="team-name">{{ item.name }}</span>
                <span class="team-region">{{ item.region }}</span>
              </div>
              <div v-if="item.description" class="team-description">{{ item.description }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 无搜索结果提示 -->
      <div v-else-if="searchKey && searchResult.length === 0" class="no-result">
        <el-empty description="暂无匹配的队伍信息" />
      </div>

      <!-- 动态滚动列表（搜索框为空时显示） -->
      <div v-else class="scroll-list">
        <div
          class="team-item"
          v-for="(item, index) in allTeams"
          :key="item.id || index"
        >
          <div class="team-info">
            <div class="team-header">
              <span class="team-name">{{ item.name }}</span>
              <span class="team-region">{{ item.region }}</span>
            </div>
            <div v-if="item.description" class="team-description">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { ElInput, ElEmpty, ElMessage } from 'element-plus';
import { Search as SearchIcon } from '@element-plus/icons-vue';
import { getAllTeams, searchTeams } from '@/api/teamApi';

// 响应式数据
const allTeams = ref([]);
const searchKey = ref(''); 
const searchResult = ref([]); 
const scrollInterval = ref(null); 
const loading = ref(true);

// 获取所有团队数据
const fetchTeams = async () => {
  try {
    loading.value = true;
    const data = await getAllTeams();
    allTeams.value = data;
  } catch (error) {
    console.error('获取团队数据失败:', error);
    ElMessage.error('获取团队数据失败，请稍后重试');
    // 如果API不可用，使用默认数据
    allTeams.value = [];
  } finally {
    loading.value = false;
  }
};

// 模糊搜索处理函数
const handleSearch = async () => {
  if (!searchKey.value.trim()) {
    searchResult.value = [];
    return;
  }
  
  try {
    searchResult.value = await searchTeams(searchKey.value);
  } catch (error) {
    console.error('搜索失败:', error);
    ElMessage.error('搜索失败，请稍后重试');
    // 搜索失败时使用前端过滤
    const key = searchKey.value.trim().toLowerCase();
    searchResult.value = allTeams.value.filter(
      item =>
        item.name.toLowerCase().includes(key) ||
        item.region.toLowerCase().includes(key) ||
        (item.description && item.description.toLowerCase().includes(key))
    );
  }
};

// 自动滚动功能实现
const startScroll = () => {
  // 清除已有定时器，避免重复
  if (scrollInterval.value) clearInterval(scrollInterval.value);

  const listEl = document.querySelector('.scroll-list');
  if (!listEl) return;

  let scrollTop = 0;
  const scrollSpeed = 1; // 滚动速度（像素/帧）
  const listHeight = listEl.scrollHeight; // 列表总高度
  const containerHeight = listEl.clientHeight; // 容器可视高度

  scrollInterval.value = setInterval(() => {
    scrollTop += scrollSpeed;
    // 滚动到顶部后重新开始（无缝滚动）
    if (scrollTop >= listHeight - containerHeight) {
      scrollTop = 0;
    }
    listEl.scrollTop = scrollTop;
  }, 30); // 滚动帧率（30ms/帧，约33帧/秒）
};

// 生命周期钩子：初始化滚动和销毁定时器
onMounted(async () => {
  // 初始化时加载数据
  await fetchTeams();
  
  // 初始时搜索框为空，启动滚动
  if (!searchKey.value) {
    startScroll();
  }
});

onUnmounted(() => {
  // 组件卸载时清除定时器，避免内存泄漏
  if (scrollInterval.value) {
    clearInterval(scrollInterval.value);
  }
});

// 监听搜索关键词变化，控制滚动状态
watch(searchKey, (newVal) => {
  if (newVal) {
    // 有搜索关键词：停止滚动
    if (scrollInterval.value) {
      clearInterval(scrollInterval.value);
    }
  } else {
    // 无搜索关键词：启动滚动
    startScroll();
  }
});
</script>

<style scoped>
/* 页面容器 */
.team-search-container {
  width: 100%;
  max-width: 1200px;
  margin: -19px auto;
  padding: 20px;
  box-sizing: border-box;
}

/* 标题样式（保留原有） */
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

.title-content .title-span {
  font-family: PingFangSC, PingFang SC;
  font-weight: 600;
  margin: 0 50px;
}

.title-blue {
  color: #3F93DA;
}

/* 搜索框样式 */
.search-box-container {
  width: 80%;
  margin: 0 auto 40px;
}

:deep(.search-input) {
  padding: 0 !important;
}

.search-input {
  height: 48px;
  font-size: 16px;
  border-radius: 24px;
  border: 1px solid #E5E7EB;
  padding: 0 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.search-input:focus {
  border-color: #3F93DA;
  box-shadow: 0 0 0 2px rgba(63, 147, 218, 0.1);
}

/* 队伍列表容器 */
.team-list-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 500px;
  overflow: hidden;
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

/* 滚动列表样式 */
.scroll-list {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
}

/* 搜索结果样式 */
.search-result {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
}

.result-header {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #F3F4F6;
}

/* 无结果提示样式 */
.no-result {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 加载状态样式 */
.loading-state {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 队伍项样式 */
.team-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 20px;
  margin-bottom: 8px;
  background: #F9FAFB;
  border-radius: 8px;
  transition: background 0.2s ease;
  min-height: 80px;
}

.team-item:hover {
  background: #F3F7FA;
}

.team-info {
  flex: 1;
}

.team-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.team-name {
  font-size: 16px;
  color: #333;
  font-weight: 500;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 10px;
}

.team-region {
  font-size: 14px;
  color: #3F93DA;
  font-weight: 500;
  background: #EBF5FF;
  padding: 4px 12px;
  border-radius: 16px;
  flex-shrink: 0;
  align-self: flex-start;
  margin-top: -2px;
}

.team-description {
  font-size: 13px;
  color: #6B7280;
  line-height: 1.4;
  display: block;
  word-break: break-word;
}

/* 滚动条样式优化 */
.scroll-list::-webkit-scrollbar,
.search-result::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.scroll-list::-webkit-scrollbar-track,
.search-result::-webkit-scrollbar-track {
  background: #F3F4F6;
  border-radius: 3px;
}

.scroll-list::-webkit-scrollbar-thumb,
.search-result::-webkit-scrollbar-thumb {
  background: #CBD5E1;
  border-radius: 3px;
}

.scroll-list::-webkit-scrollbar-thumb:hover,
.search-result::-webkit-scrollbar-thumb:hover {
  background: #94A3B8;
}
</style>