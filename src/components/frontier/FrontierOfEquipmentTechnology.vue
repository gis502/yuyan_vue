<template>
  <div class="technology-list">
    <ul>
      <li v-for="(item, index) in list" :key="index" class="technology-item" @click="turnPage(index)">
        <div class="technology-item-img">
          <img
            :src="item.img"
            alt="技术文章缩略图"
            class="technology-item-img-children"
          />
        </div>
        <div class="technology-item-content">
          <div class="technology-item-title">{{ item.title }}</div>
          <div class="technology-item-info">
            <!-- 查看：仅展示，无交互 -->
            <div class="technology-item-watch">
              <img src="@/assets/images/technology/查看.png" />
              {{ item.watch }}
            </div>

            <!-- 点赞：点击切换选中状态 + 数量变化 -->
            <div 
              class="technology-item-like" 
              @click="handleLike(index)"
            >
              <img 
                src="@/assets/images/technology/点赞.png" 
                :class="{ active: item.likeActive }"
              />
              {{ item.like }}
            </div>

            <!-- 转发：点击提示 + 数量+1 -->
            <div 
              class="technology-item-forward" 
              @click="handleForward(index)"
            >
              <img src="@/assets/images/technology/转发.png" />
              {{ item.forward }}
            </div>

            <!-- 收藏：点击切换选中状态 + 数量变化 -->
            <div 
              class="technology-item-collection" 
              @click="handleCollection(index)"
            >
              <img 
                src="@/assets/images/technology/收藏.png" 
                :class="{ active: item.collectionActive }"
              />
              {{ item.collection }}
            </div>

            <!-- 评论：点击弹出输入框 + 数量更新 -->
            <div 
              class="technology-item-comment" 
              @click="showCommentInput = index"
            >
              <img src="@/assets/images/technology/评论.png" />
              {{ item.comment }}
            </div>

            <div class="technology-item-line">开启划线</div>
          </div>

          <!-- 评论输入框：点击评论后显示 -->
          <div v-if="showCommentInput === index" class="comment-input-wrap">
            <input 
              type="text" 
              v-model="commentText" 
              placeholder="请输入评论内容..."
              class="comment-input"
            />
            <button 
              @click="handleCommentSubmit(index)" 
              class="comment-submit"
            >
              提交
            </button>
            <button 
              @click="showCommentInput = -1" 
              class="comment-cancel"
            >
              取消
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="js" setup>
import {router} from '@/router/index.js'
import { ref } from 'vue'

// 新增 likeActive/collectionActive 标记选中状态
const list = ref([
    {
        img: '/src/assets/images/technology/1.png',
        title: '20250103-技术前沿：远程无人机洪灾应急信息全自主感知',
        watch: 1,
        like: 1,
        likeActive: false, // 点赞选中状态
        forward: 1,
        collection: 1,
        collectionActive: false, // 收藏选中状态
        comment: 0
    },
    {
        img: '/src/assets/images/technology/2.png',
        title: '20250106-技术前沿：基于道路中心线的分阶段弱监督遥感图像道路提取',
        watch: 145,
        like: 0,
        likeActive: false,
        forward: 9,
        collection: 0,
        collectionActive: false,
        comment: 0
    },
    {
        img: '/src/assets/images/technology/3.png',
        title: '20250125-技术前沿：高分辨率遥感影像复杂目标检测技术及减灾应用-推文',
        watch: 190,
        like: 1,
        likeActive: false,
        forward: 20,
        collection: 0,
        collectionActive: false,
        comment: 0
    },
    {
        img: '/src/assets/images/technology/4.png',
        title: '20250224-技术前沿：基于多模遥感图像和相关知识的建筑结构类型识别技术',
        watch: 1,
        like: 1,
        likeActive: false,
        forward: 1,
        collection: 1,
        collectionActive: false,
        comment: 0
    },
    {
        img: '/src/assets/images/technology/5.png',
        title: '20250515-技术前沿：基于双时相场景变化检测的弱监督灾后建筑物损毁遥感判识技术',
        watch: 500,
        like: 4,
        likeActive: false,
        forward: 11,
        collection: 2,
        collectionActive: false,
        comment: 0
    }
])

// 评论相关响应式数据
const showCommentInput = ref(-1) // 标记当前显示评论输入框的项索引（-1为隐藏）
const commentText = ref('') // 评论输入内容

const handleLike = (index) => {
  const item = list.value[index]
  if (item.likeActive) {
    // 取消点赞：状态置为false，数量-1
    item.likeActive = false
    item.like -= 1
  } else {
    // 点赞：状态置为true，数量+1
    item.likeActive = true
    item.like += 1
  }
}

const handleForward = (index) => {
  const item = list.value[index]
  item.forward += 1
  alert('转发成功！')
}

const handleCollection = (index) => {
  const item = list.value[index]
  if (item.collectionActive) {
    item.collectionActive = false
    item.collection -= 1
  } else {
    item.collectionActive = true
    item.collection += 1
  }
}

const handleCommentSubmit = (index) => {
  if (!commentText.value.trim()) {
    alert('请输入评论内容！')
    return
  }
  list.value[index].comment += 1
  commentText.value = ''
  showCommentInput.value = -1
  alert('评论提交成功！')
}

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
  align-items: flex-start;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
}

.technology-item-img {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
}

.technology-item-img-children {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.technology-item-content {
  flex-grow: 1;
}

.technology-item-title {
  font-size: 16px;
  font-weight: 550;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.4;
  transition: all 0.2s ease;
  cursor: pointer;
}

.technology-item-title:hover {
  color: #1677ff;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.technology-item-info {
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 12px;
  color: #999;
}

.technology-item-info > div {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer; /* 交互元素添加手型 */
  transition: color 0.2s ease;
}

/* 统一小图标尺寸 */
.technology-item-info img {
  width: 14px;
  height: 14px;
  object-fit: contain;
  transition: all 0.2s ease;
}

/* 选中状态样式（点赞/收藏变红） */
.technology-item-info img.active {
  filter: invert(30%) sepia(90%) saturate(2000%) hue-rotate(345deg) brightness(90%) contrast(90%);
}

/* 交互元素hover样式 */
.technology-item-like:hover,
.technology-item-forward:hover,
.technology-item-collection:hover,
.technology-item-comment:hover {
  color: #1677ff;
}

.technology-item-line {
  color: #1677ff;
  cursor: pointer;
}

/* 评论输入框样式 */
.comment-input-wrap {
  margin-top: 8px;
  display: flex;
  gap: 8px;
  align-items: center;
}

.comment-input {
  flex-grow: 1;
  padding: 6px 8px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 12px;
  outline: none;
}

.comment-input:focus {
  border-color: #1677ff;
}

.comment-submit, .comment-cancel {
  padding: 6px 12px;
  font-size: 12px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.comment-submit {
  background-color: #1677ff;
  color: white;
}

.comment-cancel {
  background-color: #f5f5f5;
  color: #666;
}
</style>