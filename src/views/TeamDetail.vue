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
import { getTeamById } from '@/api/teamApi';
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
    const data = await getTeamById(teamId);
    team.value = data;
    console.log(data)
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