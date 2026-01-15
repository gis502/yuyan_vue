<template>
  <div class="technology-list">
    <ul>
      <li v-for="(item, index) in list" :key="index" class="technology-item">
        <div class="technology-item-img">
          <img
              :src="item.img"
              alt="技术文章缩略图"
              class="technology-item-img-children"
              @click="turnPage(index)"
          />
        </div>
        <div class="technology-item-content">
          <div class="technology-item-title" @click="turnPage(index)">
            {{ item.title }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="js" setup>
import { router } from '@/router/index.js'
import { ref } from 'vue'

const list = ref([
  {
    img: '/images/technology/1.png',
    title: '20250103-技术前沿：远程无人机洪灾应急信息全自主感知',
  },
  {
    img: '/images/technology/2.png',
    title: '20250106-技术前沿：基于道路中心线的分阶段弱监督遥感图像道路提取',
  },
  {
    img: '/images/technology/3.png',
    title: '20250125-技术前沿：高分辨率遥感影像复杂目标检测技术及减灾应用-推文',
  },
  {
    img: '/images/technology/4.png',
    title: '20250224-技术前沿：基于多模遥感图像和相关知识的建筑结构类型识别技术',
  },
  {
    img: '/images/technology/5.png',
    title: '20250515-技术前沿：基于双时相场景变化检测的弱监督灾后建筑物损毁遥感判识技术',
  }
])

function turnPage(index) {
  router.push(`/technology/${index + 1}`)
}
</script>

<style scoped>
.technology-list ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.technology-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.technology-item:hover {
  background-color: #f8f9fa;
}

.technology-item-img {
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.technology-item-img-children {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.technology-item:hover .technology-item-img-children {
  transform: scale(1.05);
}

.technology-item-content {
  flex-grow: 1;
  display: flex;
  align-items: center;
  min-height: 100px;
}

.technology-item-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  line-height: 1.5;
  transition: all 0.2s ease;
  cursor: pointer;
  margin: 0;
}

.technology-item-title:hover {
  color: #1677ff;
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>