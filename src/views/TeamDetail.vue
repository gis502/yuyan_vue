<template>
  <DocumentOther
      :title="`${team?.name || ''}-${team?.region || ''}`"
      :content="team?.description || '暂无描述信息'"
      :breadcrumbName="team?.name || '团队详情'"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import { useRoute } from 'vue-router';
import DocumentOther from "@/components/documentOther.vue";

const route = useRoute();
const team = ref(null);
const loading = ref(true);

// 获取团队ID
const teamId = parseInt(route.params.id);

// 获取团队详情
const fetchTeamDetail = async () => {
  try {
    loading.value = true;
    // 从public/json/teams.json文件直接读取数据
    const response = await fetch('/json/teams.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const teamsData = await response.json();
    
    // 查找对应ID的团队
    const teamFound = teamsData.find(team => team.id === teamId);
    
    if (teamFound) {
      team.value = teamFound;
    } else {
      console.warn(`未找到ID为 ${teamId} 的团队`);
      ElMessage.warning('未找到指定的团队信息');
    }
  } catch (error) {
    console.error('获取团队详情失败:', error);
    ElMessage.error('获取团队详情失败，请稍后重试');
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchTeamDetail();
});
</script>

<style scoped>

</style>