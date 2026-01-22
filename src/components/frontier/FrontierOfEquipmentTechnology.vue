<template>
  <div class="technology-list">
    <ul>
      <li class="technology-item">
        <div class="technology-item-img">
          <a href="./index.html#/technology1" target="_blank">
            <img
                src="/images/technology/1.png"
                alt="技术文章缩略图"
                class="technology-item-img-children"
            />
          </a>
        </div>
        <div class="technology-item-content">
          <a href="./index.html#/technology1" target="_blank" class="technology-item-title">
            20250103-技术前沿：远程无人机洪灾应急信息全自主感知
          </a>
        </div>
      </li>
      <li class="technology-item">
        <div class="technology-item-img">
          <a href="./index.html#/technology2" target="_blank">
            <img
                src="/images/technology/2.png"
                alt="技术文章缩略图"
                class="technology-item-img-children"
            />
          </a>
        </div>
        <div class="technology-item-content">
          <a href="./index.html#/technology2" target="_blank" class="technology-item-title">
            20250106-技术前沿：基于道路中心线的分阶段弱监督遥感图像道路提取
          </a>
        </div>
      </li>
      <li class="technology-item">
        <div class="technology-item-img">
          <a href="./index.html#/technology3" target="_blank">
            <img
                src="/images/technology/3.png"
                alt="技术文章缩略图"
                class="technology-item-img-children"
            />
          </a>
        </div>
        <div class="technology-item-content">
          <a href="./index.html#/technology3" target="_blank" class="technology-item-title">
            20250125-技术前沿：高分辨率遥感影像复杂目标检测技术及减灾应用-推文
          </a>
        </div>
      </li>
      <li class="technology-item">
        <div class="technology-item-img">
          <a href="./index.html#/technology4" target="_blank">
            <img
                src="/images/technology/4.png"
                alt="技术文章缩略图"
                class="technology-item-img-children"
            />
          </a>
        </div>
        <div class="technology-item-content">
          <a href="./index.html#/technology4" target="_blank" class="technology-item-title">
            20250224-技术前沿：基于多模遥感图像和相关知识的建筑结构类型识别技术
          </a>
        </div>
      </li>
      <li class="technology-item">
        <div class="technology-item-img">
          <a href="./index.html#/technology" target="_blank">
            <img
                src="/images/technology/5.png"
                alt="技术文章缩略图"
                class="technology-item-img-children"
            />
          </a>
        </div>
        <div class="technology-item-content">
          <a href="./index.html#/technology5" target="_blank" class="technology-item-title">
            20250515-技术前沿：基于双时相场景变化检测的弱监督灾后建筑物损毁遥感判识技术
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="js" setup>

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