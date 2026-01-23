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
const searchDocs = ref([]);// 存储docx下的所有文档
const docFolders = ['技术装备前沿', '机制动态', '灾害应急', '招募公告'];
// 建立中文文件夹名 ↔ list.json key 的映射表
const folderKeyMap = {
  '技术装备前沿': 'technology',
  '机制动态': 'dynamic',
  '灾害应急': 'disaster',
  '招募公告': 'notice'
};

// 从路由参数获取 id
const listId = computed(() => route.params.id);
const keyword = computed(() => route.query.keyword || '');
const isSearchPage = computed(() => listId.value === 'search');

// 当前显示的列表（核心修改：去重+字段合并）
const currentList = computed(() => {
  // 1. 普通页面：仍读取原有JSON数据（逻辑不变）
  if (!isSearchPage.value) {
    return allLists.value[listId.value] || null;
  }

  // 2. 搜索页面：合并list.json条目 + docx文档，去重并优先保留list字段
  if (isSearchPage.value) {
    if (!keyword.value) return [];
    const lowerKeyword = keyword.value.toLowerCase();

    // 步骤1：提取list.json里的notice/dynamic/disaster/technology所有条目
    // 转为以title为key的映射对象（用于快速匹配去重）
    const listItemMap = {};
    Object.values(folderKeyMap).forEach(key => {
      if (listData[key] && Array.isArray(listData[key])) {
        listData[key].forEach(item => {
          if (item.title) { // 过滤空标题
            // 以title为唯一key，存储list里的完整字段
            listItemMap[item.title] = {
              title: item.title,
              time: item.time || '',
              url: item.url || '',
              content: '', // 预留content字段，后续合并docx的内容
              folder: key // 记录所属分类
            };
          }
        });
      }
    });

    // 步骤2：遍历docx文档，合并content字段（去重核心）
    searchDocs.value.forEach(docItem => {
      const docTitle = docItem.title;
      if (listItemMap[docTitle]) {
        // 若title在list中：合并docx的content字段，保留list的time/url
        listItemMap[docTitle].content = docItem.content;
      } else {
        // 若title不在list中：新增条目，补充空的time/url
        listItemMap[docTitle] = {
          title: docTitle,
          time: '',
          url: '',
          content: docItem.content,
          folder: docItem.folder
        };
      }
    });

    // 步骤3：将映射对象转回数组，完成去重和字段合并
    const allSearchData = Object.values(listItemMap);
    console.log('去重合并后的搜索数据源：', allSearchData);

    // 筛选规则：匹配title 或 content（统一规则，覆盖所有条目）
    return allSearchData.filter(item => {
      const matchTitle = item.title?.toLowerCase().includes(lowerKeyword);
      const matchContent = item.content ? item.content.toLowerCase().includes(lowerKeyword) : false;
      return matchTitle || matchContent;
    });
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
    'notice': '招募公告'
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

// ========== 读取docx文档的函数（仅搜索页面用） ==========
// 获取指定文件夹下的文档名列表
const getDocNamesByFolder = async (folderName) => {
  try {
    const response = await fetch('/json/docList.json');
    const docList = await response.json();
    console.log(`【${folderName}】文件夹配置的文档名：`, docList[folderName]);
    return docList[folderName] || [];
  } catch (err) {
    console.error(`获取${folderName}文档列表失败:`, err);
    return [];
  }
};

// 读取单个文件夹下的所有文档内容
const loadFolderDocs = async (folderName) => {
  try {
    const docNames = await getDocNamesByFolder(folderName);
    if (docNames.length === 0) {
      console.warn(`【${folderName}】文件夹下无配置的文档`);
      return [];
    }
    const docs = await Promise.all(
        docNames.map(async (docName) => {
          const docPath = `/docx/${folderName}/${docName}.txt`;
          console.log(`正在读取：${docPath}`);
          const response = await fetch(docPath);
          if (!response.ok) throw new Error(`读取${docName}.txt失败，状态码：${response.status}`);
          const content = await response.text();
          return {
            title: docName,
            content: content,
            folder: folderName
          };
        })
    );
    return docs;
  } catch (err) {
    console.error(`加载${folderName}文件夹文档失败:`, err);
    return [];
  }
};

// 加载所有docx文件夹的文档（仅搜索页面执行）
const loadAllSearchDocs = async () => {
  let allDocs = [];
  for (const folder of docFolders) {
    const docs = await loadFolderDocs(folder);
    allDocs = [...allDocs, ...docs];
  }
  searchDocs.value = allDocs;
  console.log('docx加载的文档：', searchDocs.value);
};

// ========== 初始化数据（区分普通页面/搜索页面） ==========
const initData = async () => {
  try {
    loading.value = true;

    // 1. 普通页面：加载原有JSON数据（逻辑完全不变）
    if (!isSearchPage.value) {
      allLists.value = listData;
      if (!listData[listId.value]) {
        console.warn(`列表ID "${listId.value}" 不存在`);
      }
    }
    // 2. 搜索页面：加载docx下的文档
    else {
      await loadAllSearchDocs();
    }
  } catch (err) {
    console.error('加载数据失败:', err);
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
    () => [route.params.id, route.query.keyword],
    async () => {
      await initData();
    },
    { immediate: false }
);

// 组件挂载时加载数据
onMounted(async () => {
  await initData();
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
