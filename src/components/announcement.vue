<template>
  <div class="announcement-container">
    <div class="title">
      <div class="title-content">
        <img src="@/assets/images/titleLeft.png" alt="title left" />
        <span class="title-span">通知<span class="title-blue">公告</span></span>
        <img src="@/assets/images/titleRight.png" alt="title right" />
      </div>
    </div>
    <div class="container">
      <div class="container-list">
        <div class="swiper-container" ref="swiperContainer">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in guideItems" :key="item.id">
              <div class="kpzn-list">
<!--                <img :src="item.image" :alt="item.title" />-->
                <div class="kpzn-title">
                  <a :href="item.link"
                     style="text-decoration: none; color: inherit;"
                     :style="item.id === 7 ? { cursor: 'pointer' } : {}"
                     @click="handleTitleClick(item, $event)">
                    {{ item.title }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- 分页器 -->
          <div class="swiper-pagination"></div>
          <!-- 导航按钮 -->
          <div class="swiper-button-xuanchuan-next"></div>
          <div class="swiper-button-xuanchuan-prev"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import img1 from '@/assets/images/27165356xse4.png';
import img2 from '@/assets/images/27170403yb3g.png'
import img3 from '@/assets/images/27170729rv7j.png'
import img4 from '@/assets/images/27171043riea.png'
import img5 from '@/assets/images/271700338t3d.png'
import img6 from '@/assets/images/雨燕应急公告封面.png'
import {router} from "@/router/index.js";

const guideItems = [
  {
    id: 1,
    title: '今年第1号台风“蝴蝶”（热带风暴级）的中心今天（12日）上午9点钟位于海南省三亚市东南方向',
    link: 'https://mp.weixin.qq.com/s/WKoDbqWcfB4LhQ6ifbykTw',
    image: img3
  },
  {
    id: 2,
    title: '据三亚市旅文局消息，根据《三亚市防灾减灾救灾和安全生产委员会关于启动防汛防风Ⅳ级应急响应的通知》',
    link: 'https://mp.weixin.qq.com/s/cbdMiyGuPGz7ZMxINIuzVg',
    image: img5
  },
  {
    id: 3,
    title: '中央气象台消息\n' +
        '\n' +
        '今年南海热带扰动\n' +
        '\n' +
        '或将于明天（6月11日）前后\n' +
        '\n' +
        '加强为\n' +
        '\n' +
        '今年第1号台风“蝴蝶',
    link: 'https://mp.weixin.qq.com/s/1lsx0EiNgOvDAwdm-grcsw',
    image: img1
  },
  {
    id: 4,
    title: '6月18日，湖南龙山县普降大暴雨。6月19日，位于城区的龙领国际小区，有4人前往地下车库挪车后失联',
    link: 'https://mp.weixin.qq.com/s/LESmHI6zI0V6suyfmNT1AA',
    image: img3
  },
  {
    id: 5,
    title: '受持续强降雨及上游来水叠加影响，我县防汛形势异常严峻',
    link: 'https://mp.weixin.qq.com/s/Tx6d51WpigOTKqXtY3DDOw',
    image: img4
  },
  {
    id: 6,
    title: '大风预报：6月13日14时至14日14时，南海大部、北部湾、琼州海峡、西沙群岛、南沙群岛、中沙群岛、',
    link: 'https://mp.weixin.qq.com/s/jCeTjgRrnmkUae9WKdeXcQ',
    image: img2
  },
  {
    id: 7,
    title: '雨燕应急-重大灾害无人机应急合作机制-成员招募公告',
    image: img6
  }
];

const swiperContainer = ref(null);
const handleTitleClick = (item, e) => {
  if (item.id === 7) {
    router.push('/notice');
  }
};

onMounted(() => {
  // 初始化Swiper
  new Swiper(swiperContainer.value, {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 28,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-button-xuanchuan-next',
      prevEl: '.swiper-button-xuanchuan-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
});
</script>

<style scoped>
.container {
  width: 100%;
  margin: 0 auto 32px auto;
}

.container-list {
  display: flex;
  justify-content: space-between;
}

.swiper-container {
  width: 100%;
  height: 200px;
  padding-bottom: 50px;
  position: relative;
  overflow: hidden;
}

.swiper-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: visible;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
}

.swiper-pagination {
  position: relative;
  bottom: 30px;
  text-align: center;
}

.swiper-button-xuanchuan-next,
.swiper-button-xuanchuan-prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  width: 30px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  border-radius: 5px;
}

.swiper-button-xuanchuan-next {
  right: 10px;
}

.swiper-button-xuanchuan-prev {
  left: 10px;
}

.kpzn-list {
  width: 332px;
  height: 136px;
  background: linear-gradient(180deg, #EDF5FF 0%, #FFFFFF 69%, #FFFFFF 100%);
  box-shadow: 0px 10px 20px 0px rgba(121, 152, 201, 0.15);
  border-radius: 8px;
  border: 2px solid #FFFFFF;
  padding: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* 确保文字不溢出 */
  overflow: hidden;
}

.kpzn-title {
  font-size: 18px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-word;
}

.kpzn-list img {
  width: 100%;
  height: 213px;
  object-fit: cover;
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .swiper-container {
    width: 100%;
    height: auto;
    padding-bottom: 60px;
  }

  .swiper-wrapper {
    width: 100%;
    max-width: 100%;
    padding: 0 20px;
  }

  .kpzn-list {
    width: 100%;
    max-width: 332px;
    height: 136px;
  }
}

@media (max-width: 768px) {
  .swiper-container {
    height: auto;
  }

  .swiper-slide {
    /* 小屏幕只显示1个slide */
    width: 100% !important;
  }

  .kpzn-list {
    font-size: 16px;
    height: 72px;
  }
}
</style>
